import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { IoCartOutline } from 'react-icons/io5'


export default function Products() {

    const [products, setProducts] = useState([])

    const fetchProducts = () => {
        axios.get('https://ecommerce-sagartmg2.vercel.app/api/products')
            .then((response) => {
                setProducts(response.data.products)

            })
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <>
            <div className='container'>
                <div className='my-[60px] grid-cols-custom max-w-[100%] !grid !gap-4'>
                    {products.map((el) => {
                        return <div key={el._id} className='bg-[#ededed] p-2 overflow-hidden w-[200px] h-[260px]' >
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
