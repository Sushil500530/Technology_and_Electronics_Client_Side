import { useEffect, useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Loader from "../../Loader";
import Footer from "../../Footer/Footer";



const Logo = () => {

    const [image, setImage] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        fetch('https://projects-server-side.vercel.app/gps')
            .then(res => res.json())
            .then(data => {
                setImage(data)
                setIsLoading(false)
            })
    }, [])
    if (isLoading) {
        return <Loader />
    }

    return (
      <div>
          <div className="grid grid-cols-1 md:grid-cols-2 p-5 lg:grid-cols-4 gap-5 container mx-auto">
            {
                image.map(thumb =>
                    <div key={thumb.id} className=" bg-gray-50 my-5 cursor-pointer shodow overflow-hidden ">
                        <div className="relative rounded-md group h-[350px]">
                            <img src={thumb.thumbnail} className="w-full h-full rounded-md"></img>
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 rounded-md transition">
                                <h2 className="text-white text-lg w-9 h-8 rounded-full flex items-center justify-center hover:bg-gray-800 transition ">
                                    <BsFillArrowRightCircleFill className="w-full text-5xl font-bold"></BsFillArrowRightCircleFill>
                                </h2>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
        <Footer />
      </div>
    );
};

export default Logo;