/* eslint-disable react/prop-types */

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation, FreeMode } from 'swiper/modules';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const CardTechnology = ({ technology }) => {
    return (
        <div>
            <>
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
                    <div key={technology.id} className=" bg-gray-50 my-5 cursor-pointer shodow overflow-hidden ">
                        <SwiperSlide>
                            <div className="relative rounded-md group h-[350px]">
                                <Link to={`/communication/${technology._id}`}>
                                    <img src={technology.thumbnail} className="w-full h-full rounded-md"></img>
                                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 rounded-md transition">
                                        <h2 className="text-white text-lg w-9 h-8 rounded-full flex items-center justify-center hover:bg-gray-800 transition ">
                                            <BsFillArrowRightCircleFill className="w-full text-5xl font-bold"></BsFillArrowRightCircleFill>
                                        </h2>
                                    </div>
                                </Link>
                            </div>
                            <h3 className="text-2xl font-bold text-center mt-3 capitalize">{technology.name}</h3>
                        </SwiperSlide>
                    </div>
                </Swiper>
            </>
            {/* <>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                   
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
            </> */}
        </div>
    );
};

export default CardTechnology;