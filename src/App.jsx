import React from 'react'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";


import './index.css'
import Login from './Components/Login/Login';
import Home from './Components/Home';
import Contact from './Components/Contact/Contact';
import SignUp from './Components/Login/SignUp';



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
      path: "login",
      element: <>
        <Login />
      </>,
    },
    {
      path: "signun",
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

  return <RouterProvider router={router} />

}
