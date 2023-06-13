import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaCheck, FaRegEdit, FaTrashAlt } from 'react-icons/fa'
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import Swal from 'sweetalert2';
const ManageTask = () => {
    const { data: tasks = [],refetch } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allTask`)
            return res.json()
        }
    })

    const handleApprove = (id, status) => {
        fetch(`http://localhost:5000/statusUpdate?id=${id}&status=${status}`, {
            method: 'PATCH'
        }).then(res => res.json()).then(data => {
            if (data.modifiedCount > 0) {
                toast.success('Task Approve');
                refetch()
            }
        })
    }


    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/deleteTask?id=${id}`,{method: 'DELETE'})
                    .then(res => res.json()).then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            refetch()
                        }
                    })
                
            }
        })
        
    }
    return (
        <div className='my-14'>
            <div>
                <div className='text-center text-3xl font-bold'>
                    <h2>All Tasks</h2>
                    <div className="divider w-1/3 mx-auto"></div>
                </div>
            </div>
            <div>
                <div className="overflow-x-auto w-[70%] px-7 py-4 mx-auto rounded-lg border-sky-400 border-2">
                    <table className="table ">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Task Name</th>
                                <th>Task Status</th>
                                <th>Update / Approve</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody className='font-semibold'>
                            {
                                tasks?.map((task, index) =>
                                    <tr key={task._id}>
                                        <td>{index + 1}</td>
                                        <td>{task.taskTitle}</td>
                                        <td className='text-left uppercase'>
                                            {task.status}
                                        </td>
                                        <td className='text-left flex flex-col lg:flex-row gap-2'>
                                            <Link to={`/updateTask/${task._id}`}>
                                                <button className='btn text-2xl bg-sky-500 w-full border-0 hover:bg-sky-400 text-white'>
                                                    <FaRegEdit></FaRegEdit>
                                                </button></Link>
                                            <button
                                                disabled={task.status !== 'pending'}
                                                onClick={() => handleApprove(task._id, 'approve')} className='btn text-2xl bg-green-800 border-0 hover:bg-green-700 text-white'>
                                                <FaCheck></FaCheck>
                                            </button>
                                            
                                        </td>
                                        <td className='text-left'>
                                            <button onClick={()=>handleDelete(task._id)} className='btn text-2xl bg-red-500 border-0 hover:bg-red-400 text-white'>
                                                <FaTrashAlt></FaTrashAlt>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageTask;