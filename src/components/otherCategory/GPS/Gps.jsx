import { useEffect, useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Loader from "../../Loader";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation, FreeMode } from 'swiper/modules';


const Gps = () => {
    const [gpsElement, setGpsElement] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // console.log(gpsElement);
    useEffect(() => {
        setIsLoading(true)
        fetch('https://projects-server-side.vercel.app/gps')
            .then(res => res.json())
            .then(data => {
                setGpsElement(data)
                setIsLoading(false);
            })
    }, []);
console.log(gpsElement);

    return (
        <div className="container mx-auto my-12 p-5">
            <div className="w-[80%] space-y-4 mx-auto mb-8">
                <h1 className="text-4xl font-bold text-center">GPS Service</h1>
                <p className="font-semibold text-center">The Global Positioning System , originally Navstar GPS, is a satellite-based radio navigation system owned by the United States government and operated by the United States Space Force.</p>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[FreeMode, Pagination, Autoplay, Navigation]}
                className="mySwiper"
            >

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 p-5">
                    {
                        gpsElement.map(gps =>
                            <div key={gps._id} className=" bg-gray-50 my-5 cursor-pointer shodow overflow-hidden ">
                                <SwiperSlide>
                                    <div className="relative rounded-md group h-[350px]">
                                        <Link to={`/gps-data/${gps._id}`}>
                                            <img src={gps.thumbnail} className="w-full h-full rounded-md"></img>
                                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 rounded-md transition">
                                                <h2 className="text-white text-lg w-9 h-8 rounded-full flex items-center justify-center hover:bg-gray-800 transition ">
                                                    <BsFillArrowRightCircleFill className="w-full text-5xl font-bold"></BsFillArrowRightCircleFill>
                                                </h2>
                                            </div>
                                        </Link>
                                    </div>
                                    <h3 className="text-2xl font-bold text-center mt-3 capitalize">{gps.title}</h3>
                                </SwiperSlide>
                            </div>
                        )
                    }
                </div>
            </Swiper>
            {isLoading && <Loader />}
        </div>
    );
};

export default Gps;