import { createBrowserRouter } from "react-router-dom";
import Root from './../layout/Root';
import Home from './../Pages/Home';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        // errorElement: <ErrorPage></ErrorPage>,
        children:[

            {
                path: '/',
                element: <Home></Home>,
                // loader: ()=> fetch('/services.json')
            },
            // {
            //   path:'/login',
            //   element: <Login></Login>
            // },
            // {
            //     path: '/register',
            //     element:<Register></Register>
            // },
            // {
            //   path:'/services/:id',
            //   element:<PrivateRoute><ShowDetails></ShowDetails></PrivateRoute>,
            //   loader: ()=> fetch('/services.json')
            // },
            // {
            //   path: '/profile',
            //   element:<PrivateRoute><YourProfile></YourProfile></PrivateRoute>
            // },
            // {
            //   path: '/blog',
            //   element:<PrivateRoute><Blog></Blog></PrivateRoute>
            // }
        ]
        
        
    },
]);



export default router