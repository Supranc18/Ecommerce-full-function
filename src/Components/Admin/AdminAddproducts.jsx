import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'


export default function Addproducts() {

  const prams = useParams()

  const [productValue, setProductValue] = useState({
    name: "",
    price: "",
    in_stock: "",
    description: "",
    image: ""
  })
  const [buttonDisable, setButtonDisable] = useState(false)


  useEffect(() => {
    if (prams.slug) {
      axios.get(`https://ecommerce-sagartmg2.vercel.app/api/products/${prams.slug}`)
        .then((res) => {
          setProductValue(res.data.data)
        })

    }


  }, [])

  function changehandle(e) {
    const { name, value} = e.target;
    setProductValue(productValue => ({
      ...productValue,
      [name]: value,
    }));
  }

  let productImage = ""
  if(productValue.image){
    if(typeof(productValue.image) == "string"){
        productImage = productValue.image
      }else{
        productImage = URL.createObjectURL(productValue.image)
      }
  }


  function submithandel(e) {
    e.preventDefault()
    setButtonDisable(true)
    let token = localStorage.getItem('token')
    const formData = new FormData();
    formData.append('name', e.target.product.value);
    formData.append('price', e.target.price.value);
    formData.append('in_stock', e.target.stock.value);
    formData.append('description', e.target.description.value);
    formData.append('image', e.target.img.files[0]);

    let method = "post"
    let url = "https://ecommerce-sagartmg2.vercel.app/api/products/"

    if(prams.slug){
      method ="put"
      url=`https://ecommerce-sagartmg2.vercel.app/api/products/${prams.slug}`
      
    }

    axios({
      method,
      url,
      data:formData,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((response) => {
        if (prams.slug) {
          toast.success("Product updated sucessfully");
        }
        else{
        toast.success("Product added sucessfully");
        }
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
          <input 
          onChange={changehandle} type="text" name="product" value={prams.slug? productValue.name:""} />
          <label htmlFor="">Price</label>
          <input  onChange={changehandle} type="number" name='price' value={prams.slug? productValue.price:""} />
          <label htmlFor="">Instock</label>
          <input  onChange={changehandle} type="number" name='stock' value={prams.slug?productValue.in_stock:""} />
          <label htmlFor="">Description</label>
          <textarea name="description" ></textarea>
          <label>Image</label>
          <input type="file" name="img" accept="image/*" />
          <img className="h-20 " src={prams.slug?productImage:""} />
          <button disabled={buttonDisable} className='disabled:cursor-no-drop border border-black py-2'>{prams.slug ? 'Update' : 'Submit'}</button>
        </form>
      </div>
    </>
  )
}
