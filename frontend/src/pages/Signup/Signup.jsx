import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'
import { useAuthContext } from '../../contexts/AuthContext';
import toast from 'react-hot-toast';

const Signup = () => {

  const {loading,signup} = useSignup();

  const [inputs,setInputs] = useState({
    fullname:'',
    username:'',
    password:'',
    cpassword:'',
    email:'',
    gender:'male'
  })


  const {authUser} = useAuthContext();

  async function submitForm(){
    let success = await signup(inputs)
    if(success){
      toast.success("Accounted Created")
      setTimeout(() => {
        window.location.href = '/login'
      }, 2000);
      
    }
  }

  return (
    <div  className='flex flex-col gap-4 my-auto'>
        <h1 className='font-bold text-2xl'>Signup - Chat App</h1>

        <div>
            <label htmlFor="">Fullname: </label>
            <input type="text" value={inputs.fullname} onChange={(e)=>{setInputs({...inputs,fullname:e.target.value})}}/>
        </div>
        
        <div>
            <label htmlFor="">Username: </label>
            <input type="text"  value={inputs.username} onChange={(e)=>{setInputs({...inputs,username:e.target.value})}}/>
        </div>
        
        <div>
            <label htmlFor="">Email: </label>
            <input type="text"  value={inputs.email} onChange={(e)=>{setInputs({...inputs,email:e.target.value})}}/>
        </div>

        <div>
        <label htmlFor="">Password: </label>
        <input type="text" value={inputs.password} onChange={(e)=>{setInputs({...inputs,password:e.target.value})}}/>
        </div>

        <div>
        <label htmlFor="">Confirm Password: </label>
        <input type="text"  value={inputs.cpassword} onChange={(e)=>{setInputs({...inputs,cpassword:e.target.value})}}/>
        </div>

        <div>
        <label htmlFor="">Gender: </label>
        <select name="" id=""  value={inputs.gender} onChange={(e)=>{setInputs({...inputs,gender:e.target.value})}}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        </div>

        <div>
        <button className="btn  bg-green-600 rounded-lg p-3 w-32" onClick={submitForm}>Signup</button>
        </div>
        
        <Link to={authUser?'/':'/login'}>Got an Account - Login</Link>
    </div>
  )
}

export default Signup