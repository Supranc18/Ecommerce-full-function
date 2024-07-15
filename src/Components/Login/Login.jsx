import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {

  function loginHandle(e) {
    e.preventDefault();

    axios.post('https://ecommerce-sagartmg2.vercel.app/api/users/login', {
      email: e.target.email.value,
      password: e.target.password.value
    })
      .then((response) => {
        toast("Sign In successful");
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status === 400) {
            toast("Please fill all the information");
          } else {
            toast("An error occurred while signing up");
          }
        } else if (error.request) {
          toast("No response received from server");
        } else {
          toast("Error occurred while processing the request");
        }
      });

  }
  return (
    <>
      <Header />
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
          <p className='text-[2rem] font-[700]'>Login</p>
          <p className='text-[0.8rem]'>Please login using account detail bellow.</p>
          <form onSubmit={loginHandle} className='flex flex-col gap-[8px] w-[100%] text-[0.8rem] '>
            <input type="email" name='email' placeholder='Email Address' className='border-2 p-[5px] rounded-lg' />
            <input type="password" name="password" placeholder='Password' className='border-2 p-[5px] rounded-lg' />
            <p className='text-[0.8rem]'>Forgot your password?</p>
            <button className='bg-[#FB2E86] text-[white] p-[6px]'>Sign In</button>
            <ToastContainer />
          </form>
          <p className='text-[0.8rem]'>Don’t have an Account? <Link to={'/signun'} className='text-secondary'>  Create account </Link></p>

        </div>
      </div>
      <div className='mb-[50px] w-[100%] justify-center flex'>
        <img src="image 1174.png" alt="" className='w-[70%]' />
      </div>
      <Footer />
    </>
  )
}
