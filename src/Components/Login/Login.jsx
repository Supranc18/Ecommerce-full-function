import React from 'react'
import Header from '../Header/Header'

export default function Login() {
  return (
   <>
   <Header/>
   
   <div className='container flex justify-center'>
    <div className='bg-[#F8F8FB] max-w-[500px] flex flex-col items-center gap-[8px] p-[40px] mt-[30px] '>
        <p className='text-[2rem] font-[700]'>Login</p>
        <p className='text-[0.8rem]'>Please login using account detail bellow.</p>
        <form  className='flex flex-col gap-[8px] w-[100%] '>
            <input type="email" name='email' placeholder='Email Address'  className='border-2 p-[5px]'/>
            <input type="password" name="password" placeholder='Password' className='border-2 p-[5px]' />
            <p className='text-[0.8rem]'>Forgot your password?</p>
            <button className='bg-[#FB2E86] text-[white] p-[6px]'>Sign In</button>
        </form>
        <p className='text-[0.8rem]'>Don’t have an Account?Create account</p>
        
    </div>

   </div>
   </>
  )
}
