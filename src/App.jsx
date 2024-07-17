import React from 'react'

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
import Home from './Components/Home';
import Contact from './Components/Contact/Contact';
import SignUp from './Components/Login/SignUp';
import Products from './Components/body/Products';



export default function App() {
  const router = createBrowserRouter([
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

      path: "login",
      element: <>
        <Login />
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
  ]);

  return <> <RouterProvider router={router} />
  <ToastContainer />
  </>

}
