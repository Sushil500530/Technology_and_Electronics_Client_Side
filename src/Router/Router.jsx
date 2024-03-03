import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../error/ErrorPage';
import Login from '../components/Login/Login';
import MainLayout from '../Root/mainLayout/MainLayout';
import Root from '../Root/Root';
import Resister from '../components/Resister/Resister';
import AddProduct from '../components/pages/AddProduct';
import CommunicationDetails from '../components/otherCategory/communication/CommunicationDetails';
import GpsDetails from '../components/otherCategory/GPS/GpsDetails';
import MyCart from '../components/pages/MyCart';
import UpdateProducts from '../components/pages/UpdateProducts';
import GoogleDetails from '../components/Category/google/GoogleDetails';
import CreateAddProduct from '../components/pages/CreateAddProduct';
import Logo from '../components/Category/google/Logo';
import PrivetRouter from './PrivetRouter';
import CategoryByShow from '../components/Category/google/CategoryByShow';
import UpdateMyCart from '../components/pages/UpdateMyCart';




const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Root></Root>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/resister',
                element: <Resister></Resister>
            },
            {
                path: '/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/technology/:category',
                loader: ({params}) => fetch(`http://localhost:5000/technology/${params.category}`),
                element: <CategoryByShow></CategoryByShow>
            },
            {
                path: '/myCart',
                element: <PrivetRouter><MyCart></MyCart></PrivetRouter>
            },
            {
                path: '/communication/:id',
                element: <PrivetRouter><CommunicationDetails></CommunicationDetails></PrivetRouter>,
                loader: () => fetch('http://localhost:5173/communication')
            },
            {
                path: '/gps/:id',
                element: <PrivetRouter><GpsDetails></GpsDetails></PrivetRouter>,
                loader: () => fetch('http://localhost:5173/gps')
            },
            {
                path: '/updateProduct/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),
                element: <UpdateProducts></UpdateProducts>
            },
           
            {
                path: '/category/:id',
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`),
                element: <PrivetRouter><GoogleDetails></GoogleDetails></PrivetRouter>
            },
             {
                path: '/update-mycart/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/cart/${params.id}`),
                element: <UpdateMyCart />
            },

            {
                path: '/createAdd',
                element: <CreateAddProduct></CreateAddProduct>
            },
            {
                path: '/logo',
                element: <Logo></Logo>
            }
        ]
    }
])

export default Router;