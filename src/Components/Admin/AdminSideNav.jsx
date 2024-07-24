import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { setuser } from '../../redux/slices/userSlice'
import { IoIosHome, IoMdExit } from 'react-icons/io'
import { AiOutlineProduct } from "react-icons/ai";
import { FaUsersRectangle } from 'react-icons/fa6'


export default function AdminHeader() {
const navigat =useNavigate()
  const dispatch =useDispatch()
  const reduxUser=useSelector((store)=>store.user.value)
  
  return (
    <>
    <div className='flex '>
    <div className='bg-[#eaeaea] inline-block w-52 rounded-r-[10px] px-6 py-8 h-[100vh] left-0 absolute'>
      <div>
      <Link to={'/'}><p className='text-[2rem] font-[700] pb-6 '>Hekto</p></Link>
      <Link to={'/'}> <p className='flex items-center gap-1 cursor-pointer hover:bg-white p-1'> <IoIosHome/>Home</p></Link>
      <Link to={"/addproduct"}> <p className='flex items-center gap-1 cursor-pointer hover:bg-white p-1'><AiOutlineProduct />products</p></Link>
      <p className='flex items-center gap-1 cursor-pointer hover:bg-white p-1'><FaUsersRectangle/> Customers</p>
      </div>
     
      <div className=' pt-[100%] bottom-0'>
      <hr className='border border-black'/>
        <p onClick={()=>{
          localStorage.removeItem("token")
          dispatch(setuser(null))
          navigat('/')
        }} className='flex items-center gap-1  cursor-pointer' ><IoMdExit/> Logout</p>
      </div>
      </div>
      {/* <div className='p-3'>
        <p>{reduxUser.name.toUpperCase()}</p>
      </div> */}
      </div>
      </>
  )
}
