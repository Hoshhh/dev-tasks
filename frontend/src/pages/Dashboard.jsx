import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import GoalForm from '../components/GoalForm'
import Spinner from '../components/Spinner'
import { getTasks } from '../features/tasks/taskSlice'
import {reset} from '../features/auth/authSlice'
import TaskItem from '../components/TaskItem'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user} = useSelector((state) => state.auth)
  const { tasks, isLoading, isError, message} = useSelector(
    (state) => state.tasks
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getTasks())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  /*
  if (isLoading) {
    return <Spinner /> 
  }*/

  return (
    <>
      <div className='text-slate-50'>
        <section className='container flex justify-center items-center mt-12 text-4xl'>
          <h1>
            <span className='text-green-400'>Welcome, </span> 
            {user && user.name}
          </h1>
        </section>
        <GoalForm />
      </div>
    </>
  )
}

export default Dashboard