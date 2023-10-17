
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../error/ErrorPage';
import Login from '../components/Login/Login';
import MainLayout from '../Root/mainLayout/MainLayout';
import Root from '../Root/Root';
import Resister from '../components/Resister/Resister';
import AddProduct from '../components/pages/AddProduct';



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
            }
        ]
    }
])

export default Router;