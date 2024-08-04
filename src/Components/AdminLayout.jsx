import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Adminhead from './Admin/Adminhead'
import { useDispatch, useSelector } from 'react-redux'
import { IoMdExit } from 'react-icons/io'
import { setuser } from '../redux/slices/userSlice'


export default function AdminLayout() {

  const navigat = useNavigate()
  const dispatch = useDispatch()
  const reduxUser = useSelector((store) => store.user.value)
  return <>
   <div className='flex items-center justify-between p-5 bg-[#eaeaea] px-15'>
                <div className='p-3'>
                    <p>{reduxUser.name.toUpperCase()}</p>
                </div>
                <div className='  '>
                
                    <p onClick={() => {
                        localStorage.removeItem("token")
                        dispatch(setuser(null))
                        navigat('/')
                    }} className='flex items-center gap-1  cursor-pointer' ><IoMdExit /> Logout</p>
                </div>
            </div>
  <div className='grid grid-cols-5'>
    <div className='col-span-1'>
  <Adminhead/>
  </div>
  <div className='col-span-4'>
<Outlet/>
</div>
</div>
  </>
    
  
}
