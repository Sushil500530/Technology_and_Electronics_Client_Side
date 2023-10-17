import { Outlet } from "react-router-dom";
import Navbar from "./Header/Navbar";



const Root = () => {
    return (
        <div className="min-h-screen w-full">
            <div className=" w-full h-[85vh] relative bg-[url('https://i.ibb.co/t4KPQ7f/digital-connecting-banner-technology-polygon-background.jpg')] bg-cover bg-no-repeat">
                <div className="container mx-auto text-white">
                    <Navbar></Navbar>
                    
                </div>
                <div className="lg:w-[800px] w-full h-full lg:mt-0 mt-11 lg:h-[400px] mx-auto text-white flex flex-col lg:justify-center items-center">
                    <h4 className="lg:text-6xl text-4xl font-semibold text-center"> Technology and Electronics</h4>
                    <hr className="border-2 w-[70%] my-5 mx-auto border-amber-500" />
                    <p className="text-center p-5">Electronic and information technology includes computer hardware and software, operating systems, web-based information and applications, telephones and other telecommunications products, video equipment and multimedia products, hardware and software, operating systems, web-based information and applications, information kiosks, and office products such as photocopiers and fax machines.</p>
                    <div className="flex flex-col md:flex-row lg:flex-row items-start gap-4 justify-start">
                        <button className="btn hover:bg-transparent bg-red-600 border-red-600 hover:text-white text-[18px] capitalize font-semibold text-white px-8 py-2">Dounload Now</button>
                        <button className="btn bg-transparent border hover:btn-success text-[18px] capitalize font-semibold text-white px-8 py-2 hover:text-black">Read More</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Root;