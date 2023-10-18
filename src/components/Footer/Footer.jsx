import { FaFacebook, FaGoogle, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className=" p-5 container mx-auto text-base-content w-full lg:h-[50vh] h-[650px] flex flex-col items-start justify-center mt-12">
            <footer className="grid grid-cols-1 w-full  md:grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-between">
                <div className="w-[300px] mx-auto flex space-y-5 flex-col items-center justify-center pt-10">
                    <img className="w-full h-[100px] rounded-md" src="https://i.ibb.co/qrzzM30/png-transparent-logo-technology-letter-font-technology-blue-electronics-text-thumbnail.png" alt="image" />
                    <div className="flex gap-4 items-center justify-center">
                        <a href="#" className="w-9 h-9 hover:text-blue-500 transition ease-in cursor-pointer  rounded-full flex items-center justify-center"><FaFacebook className="text-5xl"></FaFacebook></a>
                        <a href="#" className="w-9 h-9 hover:text-red-500 transition ease-in cursor-pointer  rounded-full flex items-center justify-center"><FaYoutube className="text-5xl"></FaYoutube></a>
                        <a href="#" className="w-9 h-9 hover:text-blue-500 transition ease-in cursor-pointer  rounded-full flex items-center justify-center"><FaGoogle className="text-5xl"></FaGoogle></a>
                        <a href="#" className="w-9 h-9 hover:text-blue-500 transition ease-in cursor-pointer  rounded-full flex items-center justify-center"><FaTwitter className="text-5xl"></FaTwitter></a>
                        <a href="#" className="w-9 h-9 hover:text-blue-500 transition ease-in cursor-pointer rounded-full flex items-center justify-center"><FaLinkedin className="text-5xl"></FaLinkedin></a>

                    </div>
                </div>
                <nav className=" lg:ml-8 flex flex-col text-[16px] items-center justify-center lg:items-start lg:justify-normal font-semibold">
                    <header className="footer-title text-xl text-white">Services</header>
                    <a href="#" className="hover:text-gray-400 text-white transition ease-in cursor-pointer">Apple</a>
                    <a href="#" className="hover:text-gray-400 text-white transition ease-in cursor-pointer">Samsung</a>
                    <a href="#" className="hover:text-gray-400 text-white transition ease-in cursor-pointer">Sony</a>
                    <a href="#" className="hover:text-gray-400 text-white transition ease-in cursor-pointer">Intel</a>
                </nav>
                <nav className=" flex flex-col text-[16px] items-center justify-center lg:items-start lg:justify-normal font-semibold">
                    <header className="footer-title text-xl text-white">Company</header>
                    <a href="#" className="hover:text-gray-400 text-white transition ease-in cursor-pointer">About us</a>
                    <a href="#" className="hover:text-gray-400 text-white transition ease-in cursor-pointer">Contact</a>
                    <a href="#" className="hover:text-gray-400 text-white transition ease-in cursor-pointer">Jobs</a>
                    <a href="#" className="hover:text-gray-400 text-white transition ease-in cursor-pointer">Press kit</a>
                </nav>
                <nav className=" flex flex-col text-[16px] items-center justify-center lg:items-start lg:justify-normal font-semibold">
                    <header className="footer-title text-xl text-white">Legal</header>
                    <a href="#" className="hover:text-gray-400 text-white transition ease-in cursor-pointer">Terms of use</a>
                    <a href="#" className="hover:text-gray-400 text-white transition ease-in cursor-pointer">Privacy policy</a>
                    <a href="#" className="hover:text-gray-400 text-white transition ease-in cursor-pointer">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;