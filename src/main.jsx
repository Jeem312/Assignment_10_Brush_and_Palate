import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import Error from './Error/Error.jsx';
import Home from './Compnents/Home/Home.jsx';
import LogIn from './Compnents/LogIn/LogIn.jsx';
import Register from './Compnents/Register/Register.jsx';
import AddCraft from './Compnents/AddCraft/AddCraft.jsx';
import MyArtCraft from './Compnents/MyArtCraft/MyArtCraft.jsx';
import AllArtCraft from './Compnents/AllArtCraft/AllArtCraft.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
       path:'/' ,
       element:<Home></Home>
      },
      {
       path:'/addCraft ' ,
       element:<AddCraft></AddCraft>
      },
      {
       path:'/myArtCraft' ,
       element:<MyArtCraft></MyArtCraft>
      },
      {
       path:'/allArtCraft' ,
       element:<AllArtCraft></AllArtCraft>
      },
      {
       path:'/register' ,
       element:<Register></Register>
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
