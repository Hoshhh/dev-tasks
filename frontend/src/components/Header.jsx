import { FaBars} from 'react-icons/fa'
import {Link, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch } from 'react-redux'
import {logout, reset} from '../features/auth/authSlice'

function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector((state) => state.auth)

    const onLogout = () => {
        dispatch(logout());
        dispatch(reset());
        navigate('/');
    }

  return (
    <header className='bg-slate-600'>
        <nav className='container flex items-center py-6 px-14'>
            <div className='flex py-1 text-2xl font-bold text-slate-50 items-center'>
                DEV<span className='text-green-300'>TASKS</span>
            </div>
            <div className='hidden sm:flex flex-1 justify-end item-center gap-12 uppercase text-sm font-semibold'>
                {user ? (
                    <button type='button' className='text-slate-50 rounded-md border border-slate-50 px-5 py-2 uppercase hover:text-white hover:border-white' 
                    onClick={onLogout}
                    >
                        Logout
                    </button>
                ) : (
                <>
                    <Link to='/login'>
                        <button type='button' className='text-slate-50 rounded-md border border-slate-50 px-5 py-2 uppercase hover:text-white hover:border-white'>Login</button>
                    </Link>
                    <Link to='/register'>
                        <button type='button' className='text-green-300 rounded-md border border-green-300 px-5 py-2 uppercase hover:text-green-200 hover:border-green-200'>Sign Up</button>
                    </Link>
                </>
                )}
            </div>
            <div className='flex sm:hidden flex-1 justify-end'>
                <FaBars className='text-2xl text-slate-50'/>
            </div>
        </nav>
    </header>
  )
}

export default Header