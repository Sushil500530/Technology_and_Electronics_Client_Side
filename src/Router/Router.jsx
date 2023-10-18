
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../error/ErrorPage';
import Login from '../components/Login/Login';
import MainLayout from '../Root/mainLayout/MainLayout';
import Root from '../Root/Root';
import Resister from '../components/Resister/Resister';
import AddProduct from '../components/pages/AddProduct';
import Google from '../components/Category/google/Google';
// import GoogleDetails from '../components/Category/google/GoogleDetails';
// import SingleDetails from '../components/Category/google/SingleDetails';




const Router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children : [
            {
                path:'/',
                element: <Root></Root>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/resister',
                element:<Resister></Resister>
            },
            {
                path:'/addProduct',
                element:<AddProduct></AddProduct>
            },
           
            // {
            //     path:'/details/:id',
            //     loader: () => fetch('http://localhost:5000/technology'),
            //     element:<Google></Google>
            // },
            // {
            //     path:'/details/:id',
            //     loader: () => fetch('http://localhost:5000/technology'),
            //     element:<Google></Google>
            // },
            // {
            //     path:'/singleDetails/:_id',
            //     loader: () => fetch('http://localhost:5000/technology'),
            //     element:<SingleDetails></SingleDetails>
            // }
        ]
    }
])

export default Router;