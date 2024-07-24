import React, { useEffect, useState} from 'react'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import './index.css'
import Login from './Components/Login/Login';

import Contact from './Components/Contact/Contact';
import SignUp from './Components/Login/SignUp';
import Products from './Components/body/Products';
import RootLayout from './Components/RootLayout';
import Home from './Components/body/Home';
import { useDispatch, useSelector } from 'react-redux';
import { setuser } from './redux/slices/userSlice';
import Cart from './Components/Cart/Cart';
import { setcart } from './redux/slices/cartSlice';
import AdminLayout from './Components/AdminLayout';
import axios from 'axios';
import Addproducts from './Components/Admin/Addproducts';
import AdminSideNav from './Components/Admin/AdminSideNav';





export default function App() {
  
  const dispatch =useDispatch()
  const [isLoading, setisLoading] = useState(
    localStorage.getItem("token") ? true : false
)


useEffect(()=>{
  
let token =localStorage.getItem('token')
if (token) {
  axios.get("https://ecommerce-sagartmg2.vercel.app/api/users/get-user",{
    headers:{
      Authorization:`Bearer ${token}`
    }
  }).then( (res)=>{
    dispatch(setuser(res.data))
    setisLoading(false)
  })
  .catch((err)=>{
    localStorage.removeItem("token")
    setisLoading(false)
  })
}
else {
  setisLoading(false)
}
},[])


useEffect(()=>{
  
  let cart =localStorage.getItem('cart')
 
  if (cart) {
    dispatch(setcart(JSON.parse(cart))) 
  }
  },[])



  let reduxUser = useSelector((store) => {
    return store.user.value
  })
 
  let router;

   router = createBrowserRouter([

    {path:"",
      element: <RootLayout/>,
      children:[
        {
          path: "/",
          element: (
            <Home />
          ),
        },
        {
          path: "logins",
          element: <>
            <Login/>
          </>,
        },
       
        {
          path: "products",
          element: <>
            <Products />
          </>,
        },
        {
          path: "cart",
          element: <>
            <Cart/>
          </>,
        },
        {
    
          path: "login",
          element: <>
            <Login/>
          </>,
        },
        {
          path: "signup",
          element: <>
            <SignUp/>
          </>,
        },
        {
          path: "contact",
          element: <>
            <Contact/>
          </>,
        },

      ]
    }
    
  ]);

  if (reduxUser?.role=="seller") {
    router = createBrowserRouter([
      {path:"",
        element: <AdminLayout/>,
        children:[
          {
          path: "addproduct",
          element: (
            <Addproducts/>
          ),
          
        }
          
        ]
      }
        
        ]);
  }


  if (isLoading) {
    return <>loading.....</>
  }
  
  return <> <RouterProvider router={router} />
  <ToastContainer />
  </>

}
