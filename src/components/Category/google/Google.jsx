

import { Link, useLoaderData, useParams } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Navbar from "../../../Root/Header/Navbar";

const Google = () => {
    const loaderGoogle = useLoaderData();
    const { id } = useParams();
    const convertId = parseInt(id);
    const findGoogle = loaderGoogle.find(details => details.id === convertId);
    console.log(findGoogle.slider[0].img1);

    return (
        <div>
            <div className="bg-gray-100">
                <div className="container mx-auto">
                    <Navbar></Navbar>
                </div>
            </div>
            {/* carosel  */}
            <div className="p-5 container mx-auto">
                {
                    findGoogle?.slider?.map((slid, idx) =>
                        <div key={idx} className="carousel w-full">
                            <div id="slide1" className="carousel-item relative w-full lg:h-[70vh] md:h-[70vh]">
                                <img src={slid.img1} className="w-full" />

                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide3" className="btn btn-circle">❮</a>
                                    <div>
                                        <h3 className="lg:text-3xl text-xl font-bold text-gray-200 text-center">Your Fevourite Product is Here <span className="text-red-600">!</span> <br /> Show Now <span className="text-red-600">!!!</span></h3>
                                    </div>
                                    <a href="#slide2" className="btn btn-circle">❯</a>
                                </div>

                            </div>
                            <div id="slide2" className="carousel-item relative w-full lg:h-[70vh] md:h-[70vh]">
                                <img src={slid.img2} className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide1" className="btn btn-circle">❮</a>
                                    <div>
                                        <h3 className="lg:text-3xl text-xl font-bold text-gray-200 text-center">Your Fevourite Product is Here <span className="text-red-600">!</span> <br /> Show Now <span className="text-red-600">!!!</span></h3>
                                    </div>
                                    <a href="#slide3" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide3" className="carousel-item relative w-full lg:h-[70vh] md:h-[70vh]">
                                <img src={slid.img3} className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide2" className="btn btn-circle">❮</a>
                                    <div>
                                        <h3 className="lg:text-3xl text-xl font-bold text-gray-200 text-center">Your Fevourite Product is Here <span className="text-red-600">!</span> <br /> Show Now <span className="text-red-600">!!!</span></h3>
                                    </div>
                                    <a href="#slide1" className="btn btn-circle">❯</a>
                                </div>
                            </div>

                        </div>
                    )
                }
            </div>

            <div className='my-12 container mx-auto'>
                <h1 className="text-4xl font-bold text-center">Technology of <span className="capitalize">{findGoogle.category}</span></h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 my-5">
                    {
                        findGoogle?.collection?.map(element =>
                            <div key={element.id} className=" bg-gray-50 my-5 cursor-pointer shadow-lg overflow-hidden ">
                                <div className="card bg-base-100 shadow-xl">
                                    <figure className="w-full h-[300px]">
                                        <img className='w-full h-[300px] hover:scale-110 transition ease-in rounded-md cursor-pointer' src={element.image} alt="image" />
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
                                            <Link to={`/categoryDetails/${element.id}`}>
                                                <div >
                                                    <button className="btn w-full btn-success">Details</button>
                                                </div>
                                            </Link>
                                            <Link to={`/categoryDetails/${element.id}`}>
                                                <div >
                                                    <button className="btn w-full btn-success">Update</button>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="bg-gray-500 lg:p-0 pb-10">
                <Footer />
            </div>
        </div>
    );
};

export default Google;