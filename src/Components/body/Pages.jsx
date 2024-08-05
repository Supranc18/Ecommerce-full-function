import React, { useEffect } from 'react'
import { IoCartOutline } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { setcart } from '../../redux/slices/cartSlice'


export default function Pages() {

    const reduxcart = useSelector((store) => store.cart.value)
    const dispatch = useDispatch()
    let searchProducts = useSelector((store) => {
        return store.product.value
    })

    const addToCart = (el) => {     
        dispatch(setcart(el))
       }
       useEffect(() => {
           localStorage.setItem('cart', JSON.stringify(reduxcart));
       }, [reduxcart]);
      
  

    return (
        <>
            <div className='container'>
                <div className='my-[60px] grid-cols-custom max-w-[100%] !grid !gap-4'>
                    {searchProducts?.map((el) => {
                        return <div key={el._id} className='bg-[#ededed] p-2 overflow-hidden w-[100%] h-[280px]' >
                            <img className=' w-[100%] h-[200px] rounded-md' src={el.image} alt="" />
                            <div className='flex justify-between p-3'>
                                <p className='text-[#151875]'>{el.name}</p>
                                <div className='flex gap-2'>
                                    <p className='text-[#151875]'>Rs.{el.price}</p>
                                    <IoCartOutline onClick={() => { addToCart(el) }} className=' border bg-[green] rounded-[50%] text-white w-6 h-6 p-1 cursor-pointer ' />
                                </div>
                            </div>

                        </div>
                    })}
                </div>
            </div>
        </>
    )
}
