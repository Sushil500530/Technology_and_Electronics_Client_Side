import { useEffect, useState } from "react";
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { Link } from "react-router-dom";


const Google = () => {
    const [google, setGoogle] = useState([]);
    console.log(google);
    useEffect(() => {
        fetch('http://localhost:5000/technology')
            .then(res => res.json())
            .then(data => setGoogle(data))
    }, [])
    return (
        <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-center">Technology and Electronics</h1>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
           {
                google.map(google =>
                    <div key={google.id} className=" bg-gray-50 cursor-pointer shodow overflow-hidden ">
                        <div className="relative rounded-md group">
                        <Link to={`/details/${google.id}`}>
                        <img src={google.thumbnail} className="w-full rounded-md"></img>
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 rounded-md transition">
                                <h2 className="text-white text-lg w-9 h-8 rounded-full flex items-center justify-center hover:bg-gray-800 transition ">
                                    <BsFillArrowRightCircleFill className="w-full text-5xl font-bold"></BsFillArrowRightCircleFill>
                                </h2>
                            </div>
                        </Link>
                        </div>
                        <h3 className="text-2xl font-bold text-center">Google</h3>
                        </div>
                )
            }
           </div>


        </div>
    );
};

export default Google;