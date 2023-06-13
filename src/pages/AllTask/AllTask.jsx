import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TaskCard from '../../components/TaskCard/TaskCard';

const AllTask = () => {
    const tasks = useLoaderData()
    return (
        <div className='my-14 px-4 lg:px-24'>
            <div className='text-center text-3xl font-bold'>
                <h2>All Tasks</h2>
                <div className="divider w-1/3 mx-auto"></div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                {
                    tasks?.map(task => <TaskCard key={task._id} task={task}></TaskCard>)
                }
            </div>
        </div>
    );
};

export default AllTask;