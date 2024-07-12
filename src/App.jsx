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



export default function App() {
  const router = createBrowserRouter([
    {
      path: "home",
      element: (
        <Home/>
      ),
    },
    {
      path: "login",
      element: <>
        <Login />
      </>,
    },
  ]);

  return <RouterProvider router={router} />

}
