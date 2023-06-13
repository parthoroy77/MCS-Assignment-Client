import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';

const AddNewTasks = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const newTask = {
            taskTitle: data.taskTitle,
            description: data.description,
            status: 'pending'
        }
        fetch('http://localhost:5000/addTask', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newTask)
        })
            .then(res => res.json()).then(data => {
                if (data.insertedId) {
                    toast.success('Task Added Successfully')
                    reset()
                }
            })
    };
    return (
        <div className='flex lg:w-[60%] px-2 items-center mx-auto min-h-screen justify-center'>
            <form onSubmit={handleSubmit(onSubmit)} className='border-[2px] w-full shadow-md hover:shadow-xl border-sky-400 px-4 lg:px-12 rounded-md py-8'>
                <h2 className='text-center text-2xl  text-amber-700 mb-4'>Add New Task</h2>
                <div className='divider w-1/3 mx-auto'></div>
                <div className='mb-3 space-y-3 font-bold'>
                    <div className="form-control">
                        <input type="text"
                            {...register('taskTitle', { required: true })}
                            placeholder="Task Title" className="h-12 w-full mx-auto input rounded-sm bg-base-300 border-collapse" />
                        {errors.taskTitle && <small className='mt-2 text-red-500'>Task Title is required</small>}
                    </div>
                    <div className="form-control">
                        <textarea
                            {...register('description', { required: true })}
                            className="textarea bg-base-300 rounded-sm textarea-bordered h-48" placeholder="Task Description"></textarea>
                        {errors.description && <small className='mt-2 text-red-500'>Description is required</small>}
                    </div>
                </div>
                <div className='text-center my-3'>
                    <input type="submit" value='Add Task' className='btn text-white border-0 w-full mx-auto bg-blue-400' />
                </div>
            </form>
        </div>
    );
};

export default AddNewTasks;