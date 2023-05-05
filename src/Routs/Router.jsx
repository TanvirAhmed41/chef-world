import { createBrowserRouter } from "react-router-dom";
import Home from "../Component/Home/Home";
import Blog from "../Component/Blog/Blog";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";
import ChefsRecipe from "../Component/ChefsRecipe/ChefsRecipe";
const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Register></Register>
            },
            {
                path: '/chef/:id',
                element: <ChefsRecipe></ChefsRecipe>,
                loader: ({params})=>fetch(`http://localhost:5000/chef/${params.id}`)
            }
        ]
    },
   
])
export default router