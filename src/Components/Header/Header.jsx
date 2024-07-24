import React, { useEffect, useState } from 'react'
import { CiMail, CiSearch, CiUser } from 'react-icons/ci'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'
import { IoCartOutline } from 'react-icons/io5'
import { LuPhoneCall } from 'react-icons/lu'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setuser } from '../../redux/slices/userSlice'



export default function () {

  const [hamBurgerMenu, setHamBurgerMenu] = useState("hidden")
  const [search, setSearch] = useState()

  const dispatch = useDispatch()
  let reduxUser = useSelector((store) => {
    return store.user.value
  })
  let reduxCart = useSelector((store) => {
    return store.cart.value
  })
  const username = localStorage.getItem('user')

  function hamburgerhandle() {
    setHamBurgerMenu("!flex")


  }

  function hamburgerClose() {
    setHamBurgerMenu("hidden")

  }

  function submithandle(e) {
    e.preventDefault()
    setSearch(e.target.search.value)
  }


  const logoutHandle = () => {
    dispatch(setuser(null))
    localStorage.removeItem('token')
  }


  return (
    <>
      <header>
        <div className='bg-[#7E33E0]'>
          <div className='flex container text-[white] py-[14px] justify-between'>
            <div className='gap-[2px] flex flex-col md:flex-row  md:gap-[45px]'>
              <div className='flex items-center gap-[10px]'>
                <CiMail />
                <p>mhsupranc@gmail.com</p>
              </div>
              <div className='flex items-center gap-[10px]'>
                <LuPhoneCall />
                <p>+987656744787</p>
              </div>
            </div>
            <div className='flex items-center gap-[16px]'>
              <div className='flex items-center'>{reduxUser ? (
                <>
                  <div className='flex gap-2'>
                    <p className='flex items-center'>{reduxUser.name.toUpperCase()}
                      <CiUser />
                    </p>
                    <Link onClick={logoutHandle} to={'/login'} >Logout</Link>

                  </div>
                </>
              ) : <>
                <Link to={'/login'}>Login</Link>
                <CiUser />
              </>
              }

              </div>

              <Link to={'/cart'} className='flex items-center'><IoCartOutline className='text-[25px]' /><sup className={`bg-red-500 border w-4 h-4 rounded-[50%] text-[10px] flex justify-center items-center p-2  ${reduxCart.length == 0 ? "hidden" : "block"}`}>{reduxCart.length}</sup></Link>

            </div>
          </div>
        </div>


        <div className='container' >
          <div className={`flex flex-col py-[10px] lg:flex-row lg:justify-between lg:items-start `} >
            <div className='flex items-center justify-between'>
              <p className=' text-[1.1rem] md:text-[1.5rem] lg:text-[2.1rem] font-[600]'>Hekto</p>
              <button onClick={hamburgerhandle} className={`${hamBurgerMenu === 'hidden' ? 'block' : 'hidden'} lg:hidden `}>
                <GiHamburgerMenu />
              </button>
            </div>
            <div className=''>
              <div className={` ${hamBurgerMenu} bg-[#f3f3f3]  p-[10px] mx-[auto] rounded-[8px] justify-between items-start animate-increase overflow-hidden lg:flex lg:bg-[white] lg:animate-none`}>
                <ul className={`lg:flex lg:gap-[40px] `}>
                  <li className={`cursor-pointer hover:text-secondary `}> <Link to={'/'}>Home</Link> </li>
                  <li className={`cursor-pointer hover:text-secondary`}><Link to={'/pages'}>Pages</Link></li>
                  <li className={`cursor-pointer hover:text-secondary `}> <Link to={'/products'}>Products</Link></li>
                  <li className={`cursor-pointer hover:text-[#FB2E86]`}> <Link to={'/blog'}>Blog</Link></li>
                  <li className={`cursor-pointer hover:text-[#FB2E86]`}> <Link to={'/shop'}>Shop</Link></li>
                  <li className={`cursor-pointer hover:text-[#FB2E86]`}> <Link to={'/contact'}>Contact</Link></li>
                </ul>
                <div>
                  <form onSubmit={submithandle} className={`flex lg:pl-[40px]`}>
                    <input className='border border-black' type="text" name='search' />
                    <button className='bg-[#FB2E86] text-[white] p-[8px] h-full'><CiSearch /></button>
                  </form>
                </div>
                <button onClick={hamburgerClose} className={`text-[20px] lg:hidden`}><IoMdClose /></button>
              </div>
            </div>
          </div>
        </div>




      </header>
    </>
  )
}
