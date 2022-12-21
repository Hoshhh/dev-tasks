import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {createTask} from '../features/tasks/taskSlice'

function GoalForm() {
    const [title, setTitle] = useState('')

    const dispatch = useDispatch()

    const onSubmit = e => {
        e.preventDefault()

        dispatch(createTask({ title }))
        setTitle('')
    }

  return (
    <div className='flex justify-center items-center'>
        <form onSubmit={onSubmit}>
            <div className='bg-slate-50 w-96 p-6 rounded shadow-sm text-gray-700 text-lg font-medium mt-12'>
                <div className="flex flex-col">
                    <label htmlFor="text">Task</label>
                    <input 
                    className="w_full py-2 bg-gray-100 px-1 outline-none mb-6" 
                    type="title" 
                    name="title"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <button 
                    type="submit" 
                    className="bg-slate-700 w-full text-slate-50 py-2 rounded hover:bg-slate-500 transition-colors mt-4 mb-2"
                >
                    Add Task
                </button>
          </div>
        </form>
    </div>
  )
}

export default GoalForm