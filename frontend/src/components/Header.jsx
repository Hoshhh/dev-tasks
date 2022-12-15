import { FaBars, FaDev } from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header className='bg-slate-600'>
        <nav className='container flex items-center py-6 px-14'>
            <div className='flex py-1 text-2xl font-bold text-slate-50 items-center'>
                DEV<span className='text-green-300'>TASKS</span>
            </div>
            <div className='hidden sm:flex flex-1 justify-end item-center gap-12 uppercase text-sm font-semibold'>
                <Link to='/login'>
                    <button type='button' className='text-slate-50 rounded-md border border-slate-50 px-5 py-2 uppercase hover:text-white hover:border-white'>Login</button>
                </Link>
                <Link to='/register'>
                    <button type='button' className='text-green-300 rounded-md border border-green-300 px-5 py-2 uppercase hover:text-green-200 hover:border-green-200'>Sign Up</button>
                </Link>
            </div>
            <div className='flex sm:hidden flex-1 justify-end'>
                <FaBars className='text-2xl text-slate-50'/>
            </div>
        </nav>
    </header>
  )
}

export default Header