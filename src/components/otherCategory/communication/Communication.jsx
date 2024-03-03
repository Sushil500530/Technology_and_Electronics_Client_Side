import { useEffect, useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Loader from "../../Loader";

const Communication = () => {
    const [communication, setCommunication] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/communications')
            .then(res => res.json())
            .then(data => {setCommunication(data)})
    }, [])
    return (

        <div className="container mx-auto my-12">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold text-center">Communication Service</h1>
                <p className="font-semibold text-center">Communication is usually understood as the transmission of information. Its precise definition is disputed and there are disagreements about whether unintentional.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 p-5">
                {
                    communication.map(communi =>
                        <div key={communi.id} className=" bg-gray-50 my-5 cursor-pointer shodow overflow-hidden ">
                            <div className="relative rounded-md group h-[350px]">
                                <Link to={`/communication/${communi._id}`}>
                                    <img src={communi.thumbnail} className="w-full h-full rounded-md"></img>
                                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 rounded-md transition">
                                        <h2 className="text-white text-lg w-9 h-8 rounded-full flex items-center justify-center hover:bg-gray-800 transition ">
                                            <BsFillArrowRightCircleFill className="w-full text-5xl font-bold"></BsFillArrowRightCircleFill>
                                        </h2>
                                    </div>
                                </Link>
                            </div>
                            <h3 className="text-2xl font-bold text-center mt-3 capitalize">{communi.name}</h3>
                        </div>
                    )
                }

            </div>
            {communication?.length <= 0 && <Loader />}
        </div>
    );
};

export default Communication;