
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../error/ErrorPage';
import Login from '../components/Login/Login';
import MainLayout from '../Root/mainLayout/MainLayout';
import Root from '../Root/Root';
import Resister from '../components/Resister/Resister';
import AddProduct from '../components/pages/AddProduct';
import Google from '../components/Category/google/Google';
import CommunicationDetails from '../components/otherCategory/communication/CommunicationDetails';
import GpsDetails from '../components/otherCategory/GPS/GpsDetails';
import MyCart from '../components/pages/MyCart';
import UpdateProducts from '../components/pages/UpdateProducts';
import GoogleDetails from '../components/Category/google/GoogleDetails';
import CreateAddProduct from '../components/pages/CreateAddProduct';
import Logo from '../components/Category/google/Logo';




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
            {
                path:'/myCart',
                loader: () => fetch('http://localhost:5000/cart'),
                element:<MyCart></MyCart>
            },
            {
                path:'/communication/:id',
                element:<CommunicationDetails></CommunicationDetails>,
                loader: () => fetch('http://localhost:5000/communication')
            },
            {
                path:'/gps/:id',
                element:<GpsDetails></GpsDetails>,
                loader: () => fetch('http://localhost:5000/gps')
            },
            {
                path:'/updateProduct/:id',
                loader: ({params}) => fetch(`http://localhost:5000/cart/${params.id}`),
                element:<UpdateProducts></UpdateProducts>
            },
            {
                path:'/details/:id',
                loader: () => fetch('http://localhost:5000/technology'),
                element:<Google></Google>
            },
            {
                path:'/categoryDetails/:id',
                loader: () => fetch('http://localhost:5000/technology'),
                element: <GoogleDetails></GoogleDetails>
            },
            {
                path:'/createAdd',
                element:<CreateAddProduct></CreateAddProduct>
            },
            {
                path:'/logo',
                element:<Logo></Logo>
            }
        ]
    }
])

export default Router;