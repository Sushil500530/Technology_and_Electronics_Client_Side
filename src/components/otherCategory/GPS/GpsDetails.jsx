import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Navbar from "../../../Root/Header/Navbar";
import { FaCartPlus } from "react-icons/fa";
import Swal from "sweetalert2";


const GpsDetails = () => {
    const findDetails = useLoaderData();
    const navigate = useNavigate();

    const handleSelect = (obj) => {
        console.log(obj);
        fetch('http://localhost:5000/carts', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Added Successfully!',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    return navigate('/')
                }
            })
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
            <div className="my-7 container mx-auto">
                <div className="flex flex-col md:flex-col lg:flex-row justify-between">
                    <div className="w-full lg:h-[480px] lg:w-[50%]">
                        <img className="h-[480px] w-full" src={findDetails?.thumbnail} alt="meal-photo" />
                    </div>
                    <div className="lg:h-[450px] flex flex-col p-5 justify-center items-center lg:items-start lg:justify-start lg:flex-col lg:w-[40%]">
                        <h2 className="text-2xl font-semibold  capitalize">{findDetails?.title}</h2>
                        <hr className="border-black w-[35%] my-3" />
                        <p>{findDetails?.description}</p>
                        <p className="mt-5 text-xl font-semibold capitalize">Category : {findDetails?.category}</p>
                        <p className="text-xl font-semibold my-3">Price:{findDetails?.price}</p>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        </div>
                        <div className="mt-5 space-x-5 flex flex-col md:flex-row lg:flex-row items-center justify-center gap-5">
                            <button onClick={handleBack} className="btn w-full md:w-auto lg:w-auto bg-transparent border border-success capitalize font-semibold text-xl hover:text-white hover:btn-success">Go Back</button>
                            <button onClick={() => handleSelect(findDetails)} className="btn bg-transparent border border-success capitalize font-semibold text-xl hover:text-white hover:btn-success">Add to Cart <FaCartPlus className="text-2xl"></FaCartPlus></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-500 lg:p-0 pb-10">
                <Footer />
            </div>
        </div>
    );
};

export default GpsDetails;