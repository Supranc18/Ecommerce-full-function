import React, { useEffect} from 'react'

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
import { useDispatch } from 'react-redux';
import { setuser } from './redux/slices/userSlice';
import Cart from './Components/Cart/Cart';
import { setcart } from './redux/slices/cartSlice';





export default function App() {
  
  const dispatch =useDispatch()
useEffect(()=>{
  
let user =localStorage.getItem('user')
if (user) {
  dispatch(setuser(JSON.parse(user)))
}
},[])

// useEffect(()=>{
  
//   let cart =localStorage.getItem('cart')
//   if (cart) {
//     dispatch(setcart(JSON.parse(cart)))
//   }
//   },[])



  const router = createBrowserRouter([

    {path:"",
      element: <RootLayout/>,
      children:[
        {
          path: "/",
          element: (
            <Login/>
          ),
        },
        {
          path: "home",
          element: <>
            <Home />
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

  return <> <RouterProvider router={router} />
  <ToastContainer />
  </>

}
