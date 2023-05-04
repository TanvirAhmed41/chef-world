import { createBrowserRouter } from "react-router-dom";
import Home from "../Component/Home/Home";
import Blog from "../Component/Blog/Blog";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";
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
            // {
            //     path: '/chefs/:id',
            //     element: <PrivetRout><ChefsRecipe></ChefsRecipe></PrivetRout>,
               
            // }
        ]
    },
   
])
export default router