import React from 'react'
import { Link } from 'react-router-dom'


export default function PageNotFound() {
  return  <div className='flex justify-center items-center flex-col '><img className='w-[100%] h-[100vh] ' src="https://www.vizion.com/wp-content/smush-webp/2018/09/shutterstock_479042983.jpg.webp"/>
  <button className='bg-primary p-2 absolute bottom-1 text-white'><Link to={'/'}>Go to home page</Link></button>
    </div>

}
