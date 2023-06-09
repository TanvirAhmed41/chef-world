import { createBrowserRouter } from "react-router-dom";
import Home from "../Component/Home/Home";
import Blog from "../Component/Blog/Blog";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";
import ChefsRecipe from "../Component/ChefsRecipe/ChefsRecipe";
import ErrorPage from "../Component/Error/ErrorPage";
import PrivateRoute from "../Component/PrivateRoute/PrivateRoute";
const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
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
                element: <PrivateRoute><ChefsRecipe></ChefsRecipe></PrivateRoute>,
                loader: ({params})=>fetch(`https://chef-recipe-biit.onrender.com/chef/${params.id}`)
            }
        ]
    },
   
])
export default router