import React, { useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function SignUp() {

  const [role, setRole] = useState("");

  const handleRoleChange=(e)=>{
    setRole(e.target.value)
    console.log(role);
  }

  function signupHandle(e) {
    e.preventDefault();

    axios.post('https://ecommerce-sagartmg2.vercel.app/api/users/signup', {
      name: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
      role: role
    })
    .then((response) => {
        toast("Sign Up successful");
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
        <div className='bg-[#F8F8FB] max-w-[500px] flex flex-col items-center gap-[8px] px-[80px] p-[50px] my-[80px] '>
          <p className='text-[2rem] font-[700]'>Sign Up</p>
          <p className='text-[0.8rem]'>Create Your account.</p>
          <form onSubmit={signupHandle} className='flex flex-col gap-[8px] w-[100%] text-[0.8rem] '>
            <input type="text" name='username' placeholder='Username' className='border-2 p-[5px] rounded-lg' />
            <input type="email" name='email' placeholder='Email Address' className='border-2 p-[5px] rounded-lg' />
            <input type="password" name="password" placeholder='Password' className='border-2 p-[5px] rounded-lg' />
            <input type="password" name="c-password" placeholder='Confirm Password' className='border-2 p-[5px] rounded-lg' />
            <select value={role} onChange={handleRoleChange} className='border-2 p-[5px] rounded-lg'>
              <option value="volvo">--</option>
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
            </select>
            <button className='bg-[#FB2E86] text-[white] p-[6px]'>Sign Up</button>
            <ToastContainer />
          </form>
          <p className='text-[0.8rem]'>Already have an Account?  <Link to={'/login'} className='text-secondary'>Login</Link></p>

        </div>
      </div>
      <div className='mb-[50px] w-[100%] justify-center flex'>
        <img src="image 1174.png" alt="" className='w-[70%]' />
      </div>
      <Footer />
    </>
  )
}
