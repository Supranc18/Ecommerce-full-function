import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';



export default function SignUp() {



  const navigateTo = useNavigate();


  const [fieldErr, setFieleErr] = useState({})

  const [buttonDisable, setButtonDisable] = useState(false)
  const [password, setPassword] = useState("")
  const [cpassword, setCPassword] = useState("")

  function signupHandle(e) {
    e.preventDefault();
    setButtonDisable(true)
    
      if (password === cpassword) {
        axios.post('https://ecommerce-sagartmg2.vercel.app/api/users/signup', {
          name: e.target.name.value,
          email: e.target.email.value,
          password: e.target.password.value,
          role: e.target.role.value
        })

          .then((response) => {
            navigateTo('/login')
            toast.success("Sign Up successful");
          })
          .catch((error) => {




            if (error?.response?.status === 400) {
              toast.error("Sign Up Failed");

              let newFieldErr = { name: "", email: "", password: "" };

              error.response.data.errors.map((el) => {
                if (el.param === "name") {
                  newFieldErr.name = "Name is required";
                }
                if (el.param === "email") {
                  newFieldErr.email = "Email is required";
                }
                if (el.param === "password") {
                  newFieldErr.password = "Password must be 8 character long";
                }
                if (e.target.role.value === "--") {
                  newFieldErr.role = "role must be selected";
                }

              });
              setButtonDisable(false);
              setFieleErr(newFieldErr);
            } else {
              toast("An error occurred while signing up");
            }
          });
      }

      else {
        toast.error("Sign Up Failed");
        setFieleErr({
          password: "password do not match",
          cpassword: "password do not match"
        })
        setButtonDisable(false)
      }
    }
  const cpasswordmatch = (e) => {
      setCPassword(e.target.value)
    }

    const passwordmatch = (e) => {
      setPassword(e.target.value)

    }
    useEffect(() => {
      if (password === cpassword) {
        setFieleErr({
          password: "",
          cpassword: ""
        })
      }
      else {
        setFieleErr({
          password: "password do not match",
          cpassword: "password do not match"
        })
      }

    }, [password, cpassword])





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
          <div className='bg-[#F8F8FB] max-w-[500px] flex flex-col items-center gap-[8px] p-[50px] my-[80px] '>
            <p className='text-[2rem] font-[700]'>Sign Up</p>
            <p className='text-[0.8rem]'>Create Your account.</p>
            <form onSubmit={signupHandle} className='flex flex-col gap-[8px] w-[100%] text-[0.8rem] '>
              <input type="text" name='name' placeholder='Username' className='border-2 p-[5px] rounded-lg' />
              <span className='text-[red] text-[0.7]rem'>{fieldErr.name}</span>
              <input type="email" name='email' placeholder='Email Address' className='border-2 p-[5px] rounded-lg' />
              <span className='text-[red] text-[0.7]rem'>{fieldErr.email}</span>
              <input onChange={passwordmatch} value={password} type="password" name="password" placeholder='Password' className='border-2 p-[5px] rounded-lg' />
              <span className='text-[red] text-[0.7]rem'>{fieldErr.password}</span>
              <input onChange={cpasswordmatch} value={cpassword} type="password" name="cpassword" placeholder='Confirm Password' className='border-2 p-[5px] rounded-lg' />
              <span className='text-[red] text-[0.7]rem'>{fieldErr.cpassword}</span>
              <select name="role" className='border-2 p-[5px] rounded-lg'>
                <option value="--">--</option>
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
              </select>
              <span className='text-[red] text-[0.7]rem'>{fieldErr.role}</span>
              <button disabled={buttonDisable} className='bg-[#FB2E86] text-[white] p-[6px] disabled:cursor-no-drop'>Sign Up</button>

            </form>
            <p className='text-[0.8rem]'>Already have an Account?  <Link to={'/login'} className='text-secondary'>Login</Link></p>

          </div>
        </div>
        <div className='mb-[50px] w-[100%] justify-center flex'>
          <img src="image 1174.png" alt="" className='w-[70%]' />
        </div>
      </>
    )
  }
