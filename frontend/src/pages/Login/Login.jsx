import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div  className='flex flex-col gap-4 my-auto'>
        <h1 className='font-bold text-2xl'>Login - Chat App</h1>
        
        <div className='my-3'>
            <label htmlFor="">Username: </label>
            <input type="text" />
        </div>
        
        <div>
        <label htmlFor="">Password: </label>
        <input type="text" />
        </div>

        <div>
        <button className="btn  bg-green-600 rounded-lg p-3 w-32">Login</button>
        </div>
        
        <Link to={'/signup'}>New Here - Login</Link>
    </div>
  )
}

export default Login