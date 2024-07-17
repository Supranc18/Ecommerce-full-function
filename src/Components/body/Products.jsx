import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'


export default function Products() {

    const [products, setProducts]=useState([])

    const fetchProducts=()=>{
        axios.get('https://ecommerce-sagartmg2.vercel.app/api/products')
        .then((response)=>{
            setProducts(response.data.products)
            console.log(response.data.products);
        })
    }

    useEffect(()=>{
        fetchProducts()
    },[])
    
  return (
    <>
    <Header/>
    {products.map((el)=>{
        return<> <li key={el._id}>{el.name}</li>
        <img className='w-96' src={el.image} alt="" />
</>
    })}

    <Footer/>
    </>
  )
}
