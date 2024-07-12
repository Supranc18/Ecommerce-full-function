import React from 'react'

export default function () {
  return (
   <>
   <div className='bg-[#EEEFFB] relative bottom-0 h-[400px]'>
    <div className='container'>
        <div>
        <p>Hekto</p>
        <div>
        <input type="email" name='email' placeholder='Email Address'  className='border-2 p-[5px] '/>
        <button className='bg-[#FB2E86] text-[white] p-[6px]'>Sign In</button>
        </div>
        <p>Contact Info</p>
        <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
        </div>

        <div>
            <p>Catagories</p>
            <p>Laptops & Computers</p>
            <p>Cameras & Photography</p>
            <p>Smart Phones & Tablets</p>
            <p>Video Games & Consoles</p>
            <p>Waterproof Headphones</p>
        </div>



    </div>
   </div>
   </>
  )
}
