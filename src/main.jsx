import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Routes from './Components/Routes/Routes.jsx';
import Header from './Components/Header/Header.jsx';
import Services from './Components/Services/Services.jsx';
import Profile from './Components/Profile/Profile.jsx';
import Clothes from './Components/Clothes/Clothes.jsx';
import Cads from './Components/Cads/Cads.jsx';
import Login from './Components/Login/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Routes></Routes>,
    children: [
      {
        path: "/",
        element: <Header></Header>
      },
      {
        path: "/services",
        element: <Services></Services>
      },
      {
        path: "/clothes",
        element: <Clothes></Clothes>
      },
      {
        path: "/cads",
        element: <Cads></Cads>
      },
      {
        path: "/profile",
        element: <Profile></Profile>
      },
      {
        path:"/login",
        element: <Login></Login>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
