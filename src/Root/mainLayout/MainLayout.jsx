import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";


const MainLayout = () => {
    return (
        <div>
            <Outlet></Outlet>
            <div className="bg-gray-800 lg:p-0 pb-10">
                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;