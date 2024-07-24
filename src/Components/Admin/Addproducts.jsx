import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'


export default function Addproducts() {

  const[buttonDisable,setButtonDisable]=useState(false)


  function submithandel(e) {
    e.preventDefault()
    setButtonDisable(true)
    let token = localStorage.getItem('token')
    const formData = new FormData();
    formData.append('name', e.target.product.value);
    formData.append('price', e.target.price.value);
    formData.append('in_stock', e.target.stock.value);
    formData.append('description', e.target.description.value);

    if (e.target.img.files[0]) {
      formData.append('image', e.target.img.files[0]);
    }
    axios.post("https://ecommerce-sagartmg2.vercel.app/api/products",
       formData,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      .then((response) => {
        toast.success("Product added sucessfully");
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status === 400) {
            toast.error("Product addition failed");
            setButtonDisable(false)
          }
        }
      })

  }

  return (
    <>
      <div className='flex  items-center h-[100vh] justify-center'>
        <form onSubmit={submithandel} className='flex flex-col gap-3  bg-slate-400 p-10 rounded-2xl'>
          <label htmlFor="">Product name</label>
          <input type="text" name="product" />
          <label htmlFor="">Price</label>
          <input type="text" name='price' />
          <label htmlFor="">Instock</label>
          <input type="number" name='stock' />
          <label htmlFor="">Description</label>
          <textarea name="description" ></textarea>
          <label>Image</label>
          <input type="file"  name="img" accept="image/*"/>
          <button disabled={buttonDisable} className='disabled:cursor-no-drop border border-black py-2'>Submit</button>
        </form>
      </div>
    </>
  )
}
