import { BsPersonCircle } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Login() {
  const [formData, setFormData] = useState({
        email: '',
        password: '',

    })

    const { email, password } = formData;

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <div className="flex justify-center items-center h-screen text-slate-50 bg-gray-700">
      <form action="" onSubmit={onSubmit}>
        <div className="bg-slate-50 w-96 p-6 rounded shadow-sm text-gray-700 text-lg font-medium">
          <div className="flex items-center justify-center mb-4 text-6xl">
            <BsPersonCircle />
          </div>

          <div className="flex flex-col">
            <label htmlFor="">Email</label>
            <input 
              className="w_full py-2 bg-gray-100 px-1 outline-none mb-6" 
              type="email" 
              id="email"
              name="email"
              value={email}
              onChange={onChange}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="">Password</label>
            <input 
              className="w_full py-2 bg-gray-100 px-1 outline-none mb-6" 
              type="password" 
              id="password"
              name="password"
              value={password}
              onChange={onChange}
            />
          </div>

          <button type="submit" className="bg-slate-700 w-full text-slate-50 py-2 rounded hover:bg-slate-500 transition-colors mt-4 mb-2">Login</button>
          <div className="text-sm">
            Don't have an account?
            <Link className="text-green-500 hover:text-green-300" href="/register"> Sign up here!</Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login