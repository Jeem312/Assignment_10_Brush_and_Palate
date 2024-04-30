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
import Details from './Compnents/Details/Details.jsx';
import UpdateIteam from './Compnents/UpdateIteam/UpdateIteam.jsx';
import PrivateRoute from './Compnents/PrivateRoute/PrivateRoute.jsx';
import ProtectedRoute from './Compnents/ProtectedRoute/ProtectedRoute.jsx';
import CategoryCards from './Compnents/Home/CategoryCards/CategoryCards.jsx';
import SubCategoryCards from './Compnents/Home/SubCategoryCards/SubCategoryCards.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
       path:'/' ,
       element:<Home></Home>,
       loader:()=>fetch('http://localhost:5000/CraftIteam')
      
      
      },
      {
       path:'/addCraft' ,
       element:<ProtectedRoute>
        <AddCraft></AddCraft>
       </ProtectedRoute>
      },
      {
       path:'/myArtCraft' ,
       element:<ProtectedRoute>
        <MyArtCraft></MyArtCraft>
       </ProtectedRoute>
      },
      {
       path:'/details/:id' ,
      element: <PrivateRoute>
        <Details></Details>
      </PrivateRoute>
      },
     
      {
       path:'/updateIteam/:id' ,
       element:<UpdateIteam></UpdateIteam>,
       loader:({params})=>fetch(`http://localhost:5000/CraftIteam/${params.id}`)
      },
      {
       path:'/allArtCraft' ,
       element:<AllArtCraft></AllArtCraft>,
       loader:()=>fetch('http://localhost:5000/CraftIteam')
      
      },
  
       {
        path:'/categoryCards',
        element:<CategoryCards></CategoryCards>,
       
       },
  
       {
        path:'/categoryCards/:id',
        element:<SubCategoryCards></SubCategoryCards>,
       
       
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
