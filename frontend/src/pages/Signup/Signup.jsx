import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div  className='flex flex-col gap-4 my-auto'>
        <h1 className='font-bold text-2xl'>Signup - Chat App</h1>

        <div>
            <label htmlFor="">Fullname: </label>
            <input type="text" />
        </div>
        
        <div>
            <label htmlFor="">Username: </label>
            <input type="text" />
        </div>
        
        <div>
            <label htmlFor="">Email: </label>
            <input type="text" />
        </div>

        <div>
        <label htmlFor="">Password: </label>
        <input type="text" />
        </div>

        <div>
        <label htmlFor="">Confirm Password: </label>
        <input type="text" />
        </div>

        <div>
        <label htmlFor="">Gender: </label>
        <select name="" id="">
          <option value="">Male</option>
          <option value="">Female</option>
        </select>
        </div>

        <div>
        <button className="btn  bg-green-600 rounded-lg p-3 w-32">Signup</button>
        </div>
        
        <Link to={'/'}>Got an Account - Login</Link>
    </div>
  )
}

export default Signup