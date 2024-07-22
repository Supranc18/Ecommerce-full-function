import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'


export default function Cart() {

    const [quantity, setQuantity] = useState(1)

    let reduxCart = useSelector((store) => {
        return store.cart.value
    })
    console.log(reduxCart);

    function changehandel(e) {
        setQuantity(e.target.value)
    }
    function clearcart() {
        localStorage.removeItem('cart')
    }

    return (
        <>
            <div className='bg-[#F6F5FF] py-[70px] '>
                <div className='container'>
                    <h1 className='text-primary-dark text-[2rem] font-[700]'>Shopping Cart</h1>
                    <div className='flex gap-1'>
                        <p>Home .</p>
                        <p>Pages .</p>
                        <p className='text-secondary'>Shopping Cart</p>
                    </div>
                </div>
            </div>

            <div className=' container  flex justify-center items-center'>
                <div className=' hidden container my-10 md:flex justify-between'>
                    <p>Products</p>
                    <p className=' ml-32'>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                </div>
            </div>
            {reduxCart==[] ? (<p>Your cart is empty</p>):
            (<div className=' container flex flex-col items-start justify-start '>{reduxCart.map((el, index) => {
                return <div key={index} className='flex md:flex-row flex-col gap-5  mt-5 md:justify-between items-center w-[100%]'>
                    <div className='flex overflow-hidden gap-2  items-center'>
                        <img src={el.image} alt="" className='w-28 h-28' />
                        <p>{el.name}</p>
                    </div>
                    <div className='flex md:flex-row flex-col w-[58%] justify-between'>
                    <p>{el.price}</p>
                    <input onChange={changehandel} type="number" value={quantity} className='border w-12' />
                    <p>{el.price * quantity}</p>
                    </div>

                </div>

            })}
                <hr  className='border text-black'/>
                <div className='flex justify-between w-[100%] my-5'>
                    <button className=' bg-[#FB2E86] text-[white] px-[16px]'>Update cart</button>
                    <button  onClick={clearcart} className=' bg-[#FB2E86] text-[white] px-[16px] py-1'>Clear Cart</button>
                </div>
            </div>) }
            


            <div className='w-[300px]  flex justify-center'>
                <p>Cart Totals</p>
                <div>

                </div>
                </div>  
        </>
    )
}
