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
import Products from './Components/body/AddProducts';
import RootLayout from './Components/RootLayout';
import Home from './Components/body/Home';
import { useDispatch, useSelector } from 'react-redux';
import { setuser } from './redux/slices/userSlice';
import Cart from './Components/Cart/Cart';
import {  setLocalCart } from './redux/slices/cartSlice';
import AdminLayout from './Components/AdminLayout';
import axios from 'axios';
import Addproducts from './Components/Admin/AdminAddproducts';
import AdminProducts from './Components/Admin/AdminProducts';
import PageNotFound from './PageNotFound';
import Adminhome from './Components/Admin/Adminhome';
import Pages from './Components/body/Pages';






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
    dispatch(setLocalCart(JSON.parse(cart))) 
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
          path: "page",
          element: <>
            <Pages/>
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
        {
          path: "*",
          element: <>
            <PageNotFound/>
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
            path: "/",
            element: 
              <Adminhome/>
            ,  
          },
          {
            path: "products",
              children:[
                {
                path:"",
                element: (
                  <AdminProducts/>
                ), 
              },
              {
                path: "add",
                element: (
                  <Addproducts/>
                ),
                
              },
              {
                path: "edit/:slug",
                element: (
                  <Addproducts/>
                ),
                
              },

              ]
          },
        
      
        {
          path: "*",
          element: <>
            <PageNotFound/>
          </>,
        },
          
        ]
      }
        
        ]);
  }


  if (isLoading) {
    return <>
    <div className='h-[100vh] flex justify-center items-center flex-col'>
    <p className='text-primary text-[2.5rem]'>Hekto</p>
    <p className='text-primary text-[1.5rem]'> loading.....</p>
    </div>
    </>
  }
  
  return <> <RouterProvider router={router} />
  <ToastContainer />
  </>

}
