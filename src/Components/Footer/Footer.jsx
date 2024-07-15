import React from 'react'
import { FaFacebook, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa'

export default function () {
    return (
        <>
            <div className='bg-[#EEEFFB]  bottom-0 w-[100vw] z-[]'>
                <div className='bg-[#EEEFFB]'>
                    <div className='container flex flex-col items-center gap-4 py-[75px] text-[#8A8FB9] text-[0.7rem] lg:flex-row lg:justify-between lg:items-start'>
                        <div className='flex flex-col items-center justify-center'>
                            <p className='text-[1.8rem] font-[700] text-[black]'>Hekto</p>
                            <div>
                                <input type="email" name='email' placeholder='Email Address' className='border-2 p-[5px] ' />
                                <button className='bg-[#FB2E86] text-[white] p-[6px]'>Sign In</button>
                            </div>
                            <p>Contact Info</p>
                            <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
                        </div>

                        <div className=' flex gap-[5px] flex-col items-center'>
                            <h1 className='text-[1.1rem] font-[700] text-[black] '>Catagories</h1>
                            <p>Laptops & Computers</p>
                            <p>Cameras & Photography</p>
                            <p>Smart Phones & Tablets</p>
                            <p>Video Games & Consoles</p>
                            <p>Waterproof Headphones</p>
                        </div>

                        <div className=' flex gap-[5px] flex-col items-center'>
                            <p className='text-[1.1rem] font-[700] text-[black] '>Customer Care</p>
                            <p>My Account</p>
                            <p>Discount</p>
                            <p>Returns</p>
                            <p>Orders History</p>
                            <p>Orders History</p>
                        </div>

                        <div className=' flex gap-[5px] flex-col items-center'>
                            <p className='text-[1.1rem] font-[700] text-[black] '>Pages</p>
                            <p>Blog</p>
                            <p>Browse the Shop</p>
                            <p>Category</p>
                            <p>Pre-Built Pages</p>
                            <p>Visual Composer Elements</p>
                        </div>


                    </div>
                </div>

                <div className='bg-[#E7E4F8]'>
                    <div className='container flex items-center flex-col py-[10px] gap-3 text-[#8A8FB9] text-[0.7rem] lg:flex-row justify-between'>
                        <div>
                            <p>©Webecy - All Rights Reserved</p>
                        </div>

                        <div className='flex gap-4 text-[#151875] text-[1rem]'>
                            <FaFacebook/>
                            <FaInstagramSquare/>
                            <FaTwitterSquare/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
