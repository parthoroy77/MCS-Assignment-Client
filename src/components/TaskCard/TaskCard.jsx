import React from 'react';

const TaskCard = ({ task }) => {
    const {taskTitle, description, status} = task
    return (
        <div>
            <div className="card border-[3px] border-sky-500 bg-base-100 h-full shadow-xl">
                <div className="card-body space-y-4 flex-wrap flex flex-col">
                    <h2 className="card-title font-bold">{taskTitle}</h2>
                    <hr className='border-2'/>
                    <p>
                        <span className='font-semibold'>Description: </span>
                        {description}
                    </p>
                    <div className="card-actions flex justify-center">
                        <button className='btn uppercase btn-accent w-2/3'>{status}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;