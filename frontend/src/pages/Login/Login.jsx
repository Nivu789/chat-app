import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin'


const Login = () => {

  const [inputs,setInputs] = useState({
    username:"",
    password:""
  })

  const {login,loading} = useLogin()

  async function handleUserLogin(){
    await login(inputs)
  }

  return (
    <div  className='flex flex-col gap-4 my-auto'>
        <h1 className='font-bold text-2xl'>Login - Chat App</h1>
        
        <div className='my-3'>
            <label htmlFor="">Username: </label>
            <input type="text" value={inputs.username} onChange={(e)=>setInputs({...inputs,username:e.target.value})}/>
        </div>
        
        <div>
        <label htmlFor="">Password: </label>
        <input type="text" value={inputs.password} onChange={(e)=>setInputs({...inputs,password:e.target.value})}/>
        </div>

      <div>
        {loading?<div className='loading loading-spinner'></div>
        :
        <div>
        <button className="btn  bg-green-600 rounded-lg p-3 w-32"  onClick={handleUserLogin}>Login</button>
        </div>}
      </div>
        
        
        
        <Link to={'/signup'}>New Here - Signup</Link>
    </div>
  )
}

export default Login