import React from 'react'
import {useDispatch} from 'react-redux'
import {deleteTask} from '../features/tasks/taskSlice'

function TaskItem({task}) {
    const dispatch = useDispatch()
  return (
    <div className='flex bg-slate-600 w-1/3 mt-10 justify-center flex-col items-center border-2 border-green-400 p-4'>
        <div className='text-lg'>
            {new Date(task.createdAt).toLocaleDateString('en-US')}
        </div>
        <h2 className='text-4xl'>
            {task.title}
        </h2>
        <button 
            type='button'
            onClick={() => dispatch(deleteTask(task._id))} 
            className='bg-red-500 text-slate-100 rounded-md border border-slate-900 px-5 py-2 uppercase hover:text-slate-50 hover:border-slate-50 mt-6'
            >
                Delete
            </button>
    </div>
  )
}

export default TaskItem