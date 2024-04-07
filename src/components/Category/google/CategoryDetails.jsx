import { FaCartPlus } from "react-icons/fa";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Navbar from "../../../Root/Header/Navbar";
import Swal from "sweetalert2";
import { IoStarSharp } from "react-icons/io5";
import { FaCommentAlt } from "react-icons/fa";
import {toast } from "react-toastify";


const CategoryDetails = () => {
    const findItem = useLoaderData();
    const navigate = useNavigate();
    // console.log(findItem);
    const handleSelect = (find) => {
        const findCart = {
            thumbnail: find?.thumbnail,
            title: find?.title,
            description: find?.description,
            category: find?.category,
            price: find?.price,
        }

        fetch('http://localhost:5000/my-cart', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(findCart)
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
        return navigate(`/technology/${findCart?.category}`)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const message = form.message.value;
        if (!message) {
            return toast.error('something went wrong!')
        }
        form.reset();
        toast.error('something went wrong!')
    }

    const handleBack = () => {
        navigate(-1);
    }

    return (
        <div>
            <div className="bg-gray-100">
                <div className="container mx-auto">
                    <Navbar></Navbar>
                </div>
            </div>
            <div className="my-7 container mx-auto p-5">
                <div className="breadcrumbs mb-7 text-lg">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to={`/technology/${findItem[0]?.category}`}>{findItem[0]?.category}</Link></li>
                        <li>{findItem[0]?.title}</li>
                    </ul>
                </div>
                <div className="flex flex-col md:flex-col lg:flex-row justify-start gap-14">
                    <div className="w-full lg:h-[480px] lg:w-[50%]">
                        <img className="h-[480px] w-full" src={findItem[0]?.thumbnail} alt="meal-photo" />
                    </div>
                    <div className="lg:h-[450px] flex flex-col p-5 justify-center items-center lg:items-start lg:justify-start lg:flex-col lg:w-[40%]">
                        <h2 className="text-2xl font-semibold  capitalize">{findItem[0]?.title}</h2>
                        <hr className="bg-success w-[35%] h-[3px] my-3" />
                        <p>{findItem[0]?.description}</p>
                        <p className="mt-5 text-xl font-semibold capitalize">Category : {findItem[0]?.category}</p>
                        <p className="text-xl font-semibold my-3">Price:{findItem[0]?.price}</p>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        </div>
                        <div className="mt-5 w-full md:w-auto lg:w-auto flex flex-col md:flex-row lg:flex-row items-center justify-center gap-5">
                            <button onClick={handleBack} className="btn w-full md:w-auto lg:w-auto bg-transparent border border-success capitalize font-semibold text-xl hover:text-white hover:btn-success">Go Back</button>
                            <button onClick={() => handleSelect(findItem[0])} className="btn w-full md:w-auto lg:w-auto bg-transparent border border-success capitalize font-semibold text-xl hover:text-white hover:btn-success"> Add To Collect <FaCartPlus className="text-2xl"></FaCartPlus></button>
                        </div>
                    </div>
                </div>
                <div className="mt-10 w-full flex items-start justify-start gap-12 lg:gap-20 flex-col md:flex-row lg:flex-row">
                    <div className="w-full md:w-1/2 lg:w-1/2">
                        <div className="w-full lg:w-[70%]">
                            <h1 className="text-xl font-bold flex mb-3">Reviews(<IoStarSharp className="text-amber-600" />)</h1>
                            <p className="text-gray-600 text-justify">{"Discover the pinnacle of innovation with our expertly curated collection featuring top brands like Samsung, Apple, Sony, Google, and Intel. From sleek smartphones to immersive entertainment systems and powerful computing solutions, each product embodies excellence in design and performance. Stay ahead of the curve and elevate your tech experience with our carefully selected lineup of industry leaders."}</p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3">
                        <h1 className="text-xl font-bold flex mb-3">Comment(<FaCommentAlt className="mx-1 text-green-800" />)</h1>
                        <div className="chat chat-start">
                            <div className="chat-image avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="chat-bubble">It was said that you would, destroy the Sith, not join them.</div>
                        </div>
                        <div className="chat chat-start">
                            <div className="chat-image avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="chat-bubble">It was you who would bring balance to the Force</div>
                        </div>
                        <div className="chat chat-start">
                            <div className="chat-image avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="chat-bubble">Not leave it in Darkness</div>
                        </div>
                        <form onSubmit={handleSubmit} className="mt-5">
                            <textarea name="message" id="" cols="30" rows="5" placeholder="Comment Here....." className="w-full border p-3 rounded-md bg-gray-100"></textarea>
                            <div className="card-actions justify-end">
                                <button className="btn btn-success capitalize text-lg mt-5">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>


                <div className="mt-20">
                    <h1 className="text-5xl font-bold text-ellipsis">About Our Industry and Products</h1>
                    <hr className=" h-[3px] bg-success mt-2 mb-5" />
                    <p className="text-gray-600 text-justify">{`Welcome to our comprehensive Technology and Electronics category, where innovation meets excellence with leading brands including Samsung, Apple, Sony, Google, and Intel. Dive into the forefront of technological advancement with Samsung's groundbreaking lineup spanning smartphones, tablets, home appliances, and wearables, all designed with sleek aesthetics and powerful performance. Explore Apple's iconic range of devices, from iPhones and iPads to MacBooks and Apple Watches, renowned for their seamless integration, industry-leading performance, and intuitive user experience.Immerse yourself in Sony's world of audiovisual excellence, featuring Bravia TVs, PlayStation consoles, Xperia smartphones, and Alpha cameras, setting the standard for superior picture and sound quality, immersive gaming experiences, and advanced camera technology. Simplify and enrich your digital life with Google's innovative products and services, including Pixel smartphones, Nest smart home devices, Chromebooks, and Google Home speakers, offering intelligent AI-powered features, seamless integration with services, and privacy-focused design. Powering the future of computing, Intel leads with advanced processors and semiconductor technology. Explore Core processors, Xeon processors, SSDs, and IoT solutions known for high-performance computing capabilities, energy efficiency, and reliability. Whether you're seeking the latest smartphone, cutting-edge entertainment system, or powerful computing solutions, our curated selection ensures you'll find the perfect blend of innovation and quality to suit your needs. Stay ahead of the curve and explore the forefront of technology with our collection of leading brands in the world of electronics."`}</p>
                </div>
            </div>
        </div>
    );
};

export default CategoryDetails;