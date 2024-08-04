import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosHome } from 'react-icons/io'
import { FaUsersRectangle } from 'react-icons/fa6'
import { AiOutlineProduct } from 'react-icons/ai'



export default function Adminhead() {

  
    return (
        <>
           
            <div className='grid grid-cols-5 '>
    <div className='bg-[#eaeaea]  w-52 rounded-b-[10px] px-6 py-8 h-[100vh] col-span-1 '>
      <div>
      <Link to={'/'}><p className='text-[2rem] font-[700] pb-6 '>Hekto</p></Link>
      <Link to={'/'}> <p className='flex items-center gap-1 cursor-pointer hover:bg-white p-1'> <IoIosHome/>Home</p></Link>
      <Link to={'/products'}><p className='flex items-center gap-1 cursor-pointer hover:bg-white p-1'><FaUsersRectangle/> Products</p></Link>
      <Link to={"products/add"}> <p className='flex items-center gap-1 cursor-pointer hover:bg-white p-1'><AiOutlineProduct />Add products</p></Link>
     
      </div>
     
      
      </div>
     
     
      </div>
        </>
    )
}
