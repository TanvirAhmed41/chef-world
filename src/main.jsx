import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from "react-router-dom";
import router from './Routs/Router.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './Component/AuthProvider/AuthProvider.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router}></RouterProvider>
    <ToastContainer></ToastContainer>
    </AuthProvider>
  </React.StrictMode>,
)
