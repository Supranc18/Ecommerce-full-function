import React from 'react'

export default function () {
    return (
        <>

            <div className='container text-[#8A8FB9] text-[0.8rem] flex flex-col py-[40px]'>
                <div className='lg:flex lg:justify-between'>
                    <div className='flex flex-col gap-[5px] py-[10px] w-[300px]'>
                        <h1 className='text-[#151875] text-[1.8rem] font-[700]'>Information About us</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
                        <div className='flex gap-3'>
                            <div className='rounded-[50%] bg-[#5625DF] w-[20px] h-[20px]'></div>
                            <div className='rounded-[50%] bg-[#FF27B7] w-[20px] h-[20px]'></div>
                            <div className='rounded-[50%] bg-[#37DAF3] w-[20px] h-[20px]'></div>
                        </div>
                    </div>

                    <div className='lg:grid grid-cols-2'>
                        <h1 className='text-[#151875] text-[1.8rem] font-[700]'>Contact Way</h1>
                        <div className='flex gap-4 items-center'>
                            <div className='rounded-[50%] bg-[#5625DF] w-[30px] h-[30px]'>
                            </div>
                            <div><p>Tel: 877-67-88-99</p>
                                <p>E-Mail: shop@store.com</p></div>
                        </div>

                        <div className='flex gap-4 items-center'>
                            <div className='rounded-[50%] bg-[#FB2E86] w-[30px] h-[30px]'>
                            </div>
                            <div><p>Support Forum</p>
                                <p>For over 24hr</p></div>
                        </div>

                        <div className='flex gap-4 items-center'>
                            <div className='rounded-[50%] bg-[#FFB265] w-[30px] h-[30px]'>
                            </div>
                            <div><p>20 Margaret st, London</p>
                                <p>Great britain, 3NM98-LK</p></div>
                        </div>

                        <div className='flex gap-4 items-center'>
                            <div className='rounded-[50%] bg-[#1BE982] w-[30px] h-[30px]'>
                            </div>
                            <div><p>Free standard shipping</p>
                                <p>on all orders.</p></div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='flex flex-col gap-[5px]'>
                        <h1 className='text-[#151875] text-[1.8rem] font-[700] py-[5px]'>Get In Touch</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices  tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p>
                        <div className='flex gap-4'>
                            <input type="text" placeholder='Your Name*' className='border-2 p-2' />
                            <input type="text" placeholder='Your E-mail' className='border-2 p-2' />
                        </div>
                        <input type="text" placeholder='Subject*' className='border-2 p-2' />
                        <textarea placeholder='Type Your Messege**' className='border-2 p-2' />
                        <button className='bg-[#FB2E86] p-2 text-[white] w-[150px] rounded-[5px] mb-4'>Send Mail</button>
                    </div>

                    <div className='max-w-[550px]'>
                        <img src="/Group 124.png" alt="" />
                    </div>
                </div>

            </div>

        </>
    )
}
