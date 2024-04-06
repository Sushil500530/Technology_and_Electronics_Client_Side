import { FaFacebook, FaGoogle, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className=" p-5 container mx-auto text-base-content w-full lg:h-[50vh] h-[650px] flex flex-col items-start justify-center py-8 mt-12">
            <footer className="grid grid-cols-1 w-full  md:grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-between">
                <div className="lg:w-[300px] lg:m-0 mx-auto flex space-y-5 flex-col items-center justify-center pt-10">
                    <img className="w-5/6 h-[100px] rounded-md" src="https://i.ibb.co/D5NkcBS/png-clipart-technology-technology-electronics-logo.png" alt="image" />
                    <div className="flex gap-4 items-center justify-center text-white">
                        <a href="#" className="w-9 h-9 hover:text-blue-500 transition ease-in cursor-pointer  rounded-full flex items-center justify-center"><FaFacebook className="text-5xl"></FaFacebook></a>
                        <a href="#" className="w-9 h-9 hover:text-red-500 transition ease-in cursor-pointer  rounded-full flex items-center justify-center"><FaYoutube className="text-5xl"></FaYoutube></a>
                        <a href="#" className="w-9 h-9 hover:text-blue-500 transition ease-in cursor-pointer  rounded-full flex items-center justify-center"><FaGoogle className="text-5xl"></FaGoogle></a>
                        <a href="#" className="w-9 h-9 hover:text-blue-500 transition ease-in cursor-pointer  rounded-full flex items-center justify-center"><FaTwitter className="text-5xl"></FaTwitter></a>
                        <a href="#" className="w-9 h-9 hover:text-blue-500 transition ease-in cursor-pointer rounded-full flex items-center justify-center"><FaLinkedin className="text-5xl"></FaLinkedin></a>

                    </div>
                </div>
                <nav className=" lg:ml-8 flex flex-col text-[16px] items-center justify-center lg:items-start lg:justify-normal font-semibold">
                    <header className="footer-title text-xl text-white">Services</header>
                    <a href="#" className="hover:text-gray-400 text-white transition ease-in cursor-pointer link link-hover">Apple</a>
                    <a href="#" className="hover:text-gray-400 text-white transition ease-in cursor-pointer link link-hover">Samsung</a>
                    <a href="#" className="hover:text-gray-400 text-white transition ease-in cursor-pointer link link-hover">Sony</a>
                    <a href="#" className="hover:text-gray-400 text-white transition ease-in cursor-pointer link link-hover">Intel</a>
                </nav>
                <nav className=" flex flex-col text-[16px] items-center justify-center lg:items-start lg:justify-normal font-semibold">
                    <header className="footer-title text-xl text-white">Company</header>
                    <a href="#" className="hover:text-gray-400 text-white transition ease-in cursor-pointer link link-hover">About us</a>
                    <a href="#" className="hover:text-gray-400 text-white transition ease-in cursor-pointer link link-hover">Contact</a>
                    <a href="#" className="hover:text-gray-400 text-white transition ease-in cursor-pointer link link-hover">Jobs</a>
                    <a href="#" className="hover:text-gray-400 text-white transition ease-in cursor-pointer link link-hover">Press kit</a>
                </nav>
                <nav className=" flex flex-col text-[16px] items-center justify-center lg:items-start lg:justify-normal font-semibold">
                    <header className="footer-title text-xl text-white">Legal</header>
                    <a href="#" className="hover:text-gray-400 text-white transition ease-in cursor-pointer link link-hover">Terms of use</a>
                    <a href="#" className="hover:text-gray-400 text-white transition ease-in cursor-pointer link link-hover">Privacy policy</a>
                    <a href="#" className="hover:text-gray-400 text-white transition ease-in cursor-pointer link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;