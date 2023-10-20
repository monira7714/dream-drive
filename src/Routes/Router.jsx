import { createBrowserRouter } from "react-router-dom";
import Root from './../layout/Root';
import Home from './../Pages/Home';
import ErrorPage from "../Components/ErrorPage";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import PrivateRouter from "./PrivateRouter";
import AddProduct from "../Pages/AddProduct";
import MyCart from "../Pages/MyCart";
import BrandDetails from "../Pages/BrandDetails";
import UpdateProduct from "../Pages/UpdateProduct";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [

            {
                path: '/',
                element: <Home></Home>,
                // loader: ()=> fetch('/services.json')
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/brandDetails/:id',
                element: <BrandDetails></BrandDetails>
            },
            {
                path: '/addProduct',
                element:<PrivateRouter><AddProduct></AddProduct></PrivateRouter>
            },
            {
                path: '/updateProduct/:id',
                element: <PrivateRouter><UpdateProduct></UpdateProduct></PrivateRouter>
            },
            {
              path: '/myCart',
              element:<PrivateRouter><MyCart></MyCart></PrivateRouter>
            }
            // {
            //   path:'/services/:id',
            //   element:<PrivateRoute><ShowDetails></ShowDetails></PrivateRoute>,
            //   loader: ()=> fetch('/services.json')
            // },
        ]


    },
]);



export default router