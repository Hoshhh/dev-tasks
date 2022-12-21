import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import GoalForm from '../components/GoalForm'

function Dashboard() {
  const navigate = useNavigate()
  const {user} = useSelector((state) => state.auth)

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user, navigate])

  return (
    <div className='text-slate-50'>
      <section className='container flex justify-center items-center mt-12 text-4xl'>
        <h1>
          <span className='text-green-400'>Welcome, </span> 
          {user && user.name}
        </h1>
      </section>
      <GoalForm />
    </div>
  )
}

export default Dashboard