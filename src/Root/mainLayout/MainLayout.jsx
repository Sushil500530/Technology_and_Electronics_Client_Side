import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar";


const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;