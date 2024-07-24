import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setuser } from '../../redux/slices/userSlice';

export default function Login({setUser}) {

  const[buttonDisable,setButtonDisable]=useState(false)
  const[fielderr,setFieleErr]=useState({})
 
  const dispatch =useDispatch()

  const navigateTo = useNavigate();

  function loginHandle(e) {
    e.preventDefault();
    setButtonDisable(true)
    
   
  

    axios.post('https://ecommerce-sagartmg2.vercel.app/api/users/login', {
      email: e.target.email.value,
      password: e.target.password.value
    })
      .then((response) => {
        toast.success("Sign In successful");
        dispatch(setuser(response.data.user))
        localStorage.setItem('token',(response.data.access_token))
        navigateTo('/')
                 
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status === 400) {
            toast.error("Sign In Failed");
            let newError ={email:"",password:""}
            error.response.data.errors.map((el)=>{
              if (el.param==="email") {
                newError.email ="email is required"
              }
              if (el.param==="password") {
                newError.password ="password is required"
              }
              
            })
            setButtonDisable(false)
            setFieleErr(newError)
          } 
          }
        
      });

  }
  return (
    <>
      <div className='bg-[#F6F5FF] py-[70px] '>
        <div className='container'>
          <h1 className='text-primary-dark text-[2rem] font-[700]'>My Account</h1>
          <div className='flex gap-1'>
            <p>Home .</p>
            <p>Pages .</p>
            <p className='text-secondary'>My Account</p>
          </div>
        </div>
      </div>
      <div className='container flex justify-center'>
        <div className='bg-[#F8F8FB] max-w-[500px] flex flex-col items-center gap-[8px] p-[40px] my-[80px] '>
          <p className='text-[2rem] font-[700]'>Sign In</p>
          <p className='text-[0.8rem]'>Please login using account detail bellow.</p>
          <form onSubmit={loginHandle} className='flex flex-col gap-[8px] w-[100%] text-[0.8rem] '>
            <input type="email" name='email' placeholder='Email Address' className='border-2 p-[5px] rounded-lg' />
            <span className='text-[red] text-[0.7]rem'>{fielderr.email}</span>
            <input type="password" name="password" placeholder='Password' className='border-2 p-[5px] rounded-lg' />
            <span className='text-[red] text-[0.7]rem'>{fielderr.password}</span>
            <p className='text-[0.8rem]'>Forgot your password?</p>
            <button disabled={buttonDisable} className='disabled:cursor-no-drop bg-[#FB2E86] text-[white] p-[6px]'>Sign In</button>
            
          </form>
          <p className='text-[0.8rem]'>Don’t have an Account? <Link to={'/signup'} className='text-secondary'>  Create account </Link></p>

        </div>
      </div>
      <div className='mb-[50px] w-[100%] justify-center flex'>
        <img src="image 1174.png" alt="" className='w-[70%]' />
      </div>
    </>
  )
}
