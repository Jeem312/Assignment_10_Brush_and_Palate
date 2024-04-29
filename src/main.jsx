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

import Register from './Compnents/Register/Register.jsx';
import AddCraft from './Compnents/AddCraft/AddCraft.jsx';
import MyArtCraft from './Compnents/MyArtCraft/MyArtCraft.jsx';
import AllArtCraft from './Compnents/AllArtCraft/AllArtCraft.jsx';
import SignIn from './SignIn/SignIn.jsx';
import Provider from './Provider/Provider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
       path:'/' ,
       element:<Home></Home>,
       loader:()=>fetch('http://localhost:5000/addCraft')
      },
      {
       path:'/addCraft' ,
       element:<AddCraft></AddCraft>
      },
      {
       path:'/myArtCraft' ,
       element:<MyArtCraft></MyArtCraft>
      },
      {
       path:'/allArtCraft' ,
       element:<AllArtCraft></AllArtCraft>,
       loader:()=>fetch('http://localhost:5000/addCraft')
      },
      {
       path:'/register' ,
       element:<Register></Register>
      },
      {
       path:'/signin' ,
       element:<SignIn></SignIn>
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider>
     <RouterProvider router={router} />
     </Provider>
  </React.StrictMode>,
)
