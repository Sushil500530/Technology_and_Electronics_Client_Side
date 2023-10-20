

import { FaCartPlus } from "react-icons/fa";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Navbar from "../../../Root/Header/Navbar";
import Swal from "sweetalert2";



const GoogleDetails = () => {
    const loaderGoogle = useLoaderData(); // console.log(loaderGoogle);
    const { id } = useParams();
    const navigate = useNavigate()
    const convertId = parseInt(id);
    // console.log(convertId);
    const findDetails = loaderGoogle?.find(details => details.id === convertId);
    const number = findDetails.id;
    console.log(number);
    // console.log(findDetails?.collection?.find(fin => console.log(fin)))
    const collacted = findDetails?.collection?.find(found => found.id === number);
    // const {title,category,description,id,image,price} = collacted || {};
    console.log(findDetails);
    const handleSelect = (find) => {
        console.log(find);
        fetch('https://projects-server-side.vercel.app/cart', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(find)
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
            <div className="my-7 container mx-auto">
                <div className="flex flex-col md:flex-col lg:flex-row justify-between">
                    <div className="w-full lg:h-[480px] lg:w-[50%]">
                        <img className="h-[480px] w-full" src={collacted.thumbnail} alt="meal-photo" />
                    </div>
                    <div className="lg:h-[450px] flex flex-col p-5 justify-center items-center lg:items-start lg:justify-start lg:flex-col lg:w-[40%]">
                        <h2 className="text-2xl font-semibold  capitalize">{collacted.title}</h2>
                        <hr className="border-black w-[35%] my-3" />
                        <p>{collacted.description}</p>
                        <p className="mt-5 text-xl font-semibold capitalize">Category : {collacted.category}</p>
                        <p className="text-xl font-semibold my-3">Price:{collacted.price}</p>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        </div>
                        <div className="mt-5 w-full md:w-auto lg:w-auto space-x-5 flex flex-col md:flex-row lg:flex-row items-center justify-center gap-5">
                        <Link to={navigate('/')}>
                            <button className="btn w-full md:w-auto lg:w-auto bg-transparent border border-success capitalize font-semibold text-xl hover:text-white hover:btn-success">Go Home </button>
                            </Link>
                            <Link onClick={() => handleSelect(collacted)}>
                                <button className="btn w-full md:w-auto lg:w-auto bg-transparent border border-success capitalize font-semibold text-xl hover:text-white hover:btn-success tw-space-x-reverse-0"> Add To Cart <FaCartPlus className="text-2xl"></FaCartPlus></button>
                            </Link>
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

export default GoogleDetails;