import { useEffect, useState } from "react";
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { GrAdd } from 'react-icons/gr';
import { Link } from "react-router-dom";

const Category = () => {
    const [category, setCategory] = useState([]);
    console.log(category);
    useEffect(() => {
        fetch('http://localhost:5000/technology')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
    return (
        <div className="container mx-auto my-12">
            <h1 className="text-4xl font-bold text-center">Technology and Electronics</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 my-5">
                {
                    category.map(category =>
                        <div key={category.id} className=" bg-gray-50 my-5 cursor-pointer shodow overflow-hidden ">
                            <div className="relative rounded-md group h-[350px]">
                                <Link to={`/details/${category.id}`}>
                                    <img src={category.thumbnail} className="w-full h-full rounded-md"></img>
                                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 rounded-md transition">
                                        <h2 className="text-white text-lg w-9 h-8 rounded-full flex items-center justify-center hover:bg-gray-800 transition ">
                                            <BsFillArrowRightCircleFill className="w-full text-5xl font-bold"></BsFillArrowRightCircleFill>
                                        </h2>
                                    </div>
                                </Link>
                            </div>
                            <h3 className="text-2xl font-bold text-center mt-3 capitalize">{category.category}</h3>
                        </div>
                    )
                }
                <div className=" bg-gray-50 my-5 cursor-pointer shodow overflow-hidden ">
                    <div className="relative rounded-md group h-[350px]">
                        <Link to='/'>
                            <div className="w-full h-full flex justify-center items-center text-3xl font-bold hover:text-white rounded-md bg-slate-300">
                            <div>
                            <GrAdd className="w-full text-5xl font-bold"></GrAdd>
                            <h2>Add Your Products</h2>
                            </div>
                            </div>
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 rounded-md transition">
                                <h2 className="text-white text-lg w-9 h-8 rounded-full flex items-center transition  ">
                                <BsFillArrowRightCircleFill className="w-full text-5xl font-bold"></BsFillArrowRightCircleFill>
                                </h2>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Category;