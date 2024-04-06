import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../../../Root/Header/Navbar";
import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FaCartPlus } from "react-icons/fa";
import Swal from "sweetalert2";

const CategoryByShow = () => {
    const data = useLoaderData();
    const [sliderData, setSliderData] = useState([]);

    useEffect(() => {
        const findData = data.find(item => item?.slider);
        setSliderData(findData?.slider)
    }, [data])

    // console.log(sliderData);

    const handleSelect = (id) => {
        console.log(id);
        const findData = data?.filter(item => item?._id === id);
     
            const cartObj = {
                title: findData[0]?.title,
                description: findData[0]?.description,
                thumbnail: findData[0]?.thumbnail,
                category: findData[0]?.category,
                price: findData[0]?.price,
            }
            
            fetch('http://localhost:5000/my-cart', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartObj)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Added Successfully!',
                            icon: 'success',
                            confirmButtonText: 'Ok'
                        })
                    }
                })
    }
    
    return (
        <div>
            <div className="bg-gray-100">
                <div className="container mx-auto">
                    <Navbar></Navbar>
                </div>
            </div>
            {/* carosel here  */}
            <>
                <Swiper spaceBetween={30} centeredSlides={true} autoplay={{ delay: 2500, disableOnInteraction: false, }}
                    pagination={{ clickable: true, }} navigation={true} modules={[Autoplay, Pagination, Navigation]} className="mySwiper"  >
                    <SwiperSlide>
                        <div className="relative">
                            <div className="relative w-full lg:h-[70vh] md:h-[70vh]">
                                <img src={sliderData[0]?.img1} className="w-full h-full" alt="category-image" />
                                <div className="absolute w-full h-full top-0 left-0 right-0 bg-black opacity-25"></div>
                            </div>
                            <div className="absolute w-full h-full transform  left-5 right-5 top-1/3">
                                <div>
                                    <h3 className="lg:text-3xl text-xl font-bold text-gray-200 text-center">Your Fevourite Product is Here <span className="text-red-600">!</span> <br /> Show Now <span className="text-red-600">!!!</span></h3>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative">
                            <div className="relative w-full lg:h-[70vh] md:h-[70vh]">
                                <img src={sliderData[0]?.img2} className="w-full h-full" alt="category-image" />
                                <div className="absolute w-full h-full top-0 left-0 right-0 bg-black opacity-25"></div>
                            </div>
                            <div className="absolute w-full h-full transform  left-5 right-5 top-1/3">
                                <div>
                                    <h3 className="lg:text-3xl text-xl font-bold text-gray-200 text-center">Your Fevourite Product is Here <span className="text-red-600">!</span> <br /> Show Now <span className="text-red-600">!!!</span></h3>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative">
                            <div className="relative w-full lg:h-[70vh] md:h-[70vh]">
                                <img src={sliderData[0]?.img3} className="w-full h-full" alt="category-image" />
                                <div className="absolute w-full h-full top-0 left-0 right-0 bg-black opacity-25"></div>
                            </div>
                            <div className="absolute w-full h-full transform  left-5 right-5 top-1/3">
                                <div>
                                    <h3 className="lg:text-3xl text-xl font-bold text-gray-200 text-center">Your Fevourite Product is Here <span className="text-red-600">!</span> <br /> Show Now <span className="text-red-600">!!!</span></h3>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                </Swiper>
            </>

            <div className='my-12 container mx-auto'>
                <h1 className="text-4xl font-bold text-center">Technology of <span className="capitalize">{data.category}</span></h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 my-5">
                    {
                        data?.map(element =>
                            <div key={element.id} className=" bg-gray-50 my-5 cursor-pointer shadow-lg overflow-hidden ">
                                <div className="card bg-base-100 shadow-xl">
                                    <figure className="w-full h-[300px]">
                                        <img className='w-full h-[300px] hover:scale-110 transition ease-in rounded-md cursor-pointer' src={element.thumbnail} alt="image" />
                                    </figure>
                                    <div className="card-body px-3">
                                        <div className="rating">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                        </div>
                                        <div className=" space-y-2">
                                            <h2 className="card-title capitalize">{element.title}</h2>
                                            <p>{element.description}</p>
                                            <div className="flex justify-around mb-3">
                                                <h2 className="text-xl font-semibold">Category: {element.category}</h2>
                                                <h2 className="text-xl font-semibold">Price:$$ {element.price}</h2>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-5 items-center">
                                            <Link to={`/category/${element?._id}`}>
                                                <button className="btn w-full btn-success">Details</button>
                                            </Link>
                                            <button onClick={() => handleSelect(element?._id)} className="btn w-full btn-success border-success capitalize hover:scale-100 hover:btn-success tw-space-x-reverse-0">Add to Cart <FaCartPlus className="text-2xl hover:scale-100"></FaCartPlus></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default CategoryByShow;