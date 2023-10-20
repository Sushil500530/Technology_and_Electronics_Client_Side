
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
import PrivetRouter from './PrivetRouter';




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
                loader: () => fetch('https://projects-server-side.vercel.app/cart'),
                element: <PrivetRouter><MyCart></MyCart></PrivetRouter>
            },
            {
                path:'/communication/:id',
                element: <PrivetRouter><CommunicationDetails></CommunicationDetails></PrivetRouter>,
                loader: () => fetch('https://projects-server-side.vercel.app/communication')
            },
            {
                path:'/gps/:id',
                element: <PrivetRouter><GpsDetails></GpsDetails></PrivetRouter>,
                loader: () => fetch('https://projects-server-side.vercel.app/gps')
            },
            {
                path:'/updateProduct/:id',
                loader: ({params}) => fetch(`https://projects-server-side.vercel.app/cart/${params.id}`),
                element:<UpdateProducts></UpdateProducts>
            },
            {
                path:'/details/:id',
                loader: () => fetch('https://projects-server-side.vercel.app/technology'),
                element:<Google></Google>
            },
            {
                path:'/details/categoryDetails/:id',
                loader: () => fetch('https://projects-server-side.vercel.app/technology'),
                element: <PrivetRouter><GoogleDetails></GoogleDetails></PrivetRouter>
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