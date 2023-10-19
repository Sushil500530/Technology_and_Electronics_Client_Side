import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../../Root/Header/Navbar";
import { FaEye } from "react-icons/fa";
import { FiEdit2 } from 'react-icons/fi';
import { AiFillDelete } from 'react-icons/ai';

const MyCart = () => {
    const myCarts = useLoaderData();
    console.log(myCarts);

    const handleDelete = (_id) => {
        console.log('delete id', _id);
    }
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        myCarts.map(cart => <div key={cart._id}>
                            <div className="card bg-base-100 shadow-xl h-[550px]">
                                <figure className="w-full h-[300px]">
                                    <img className='w-full h-full hover:scale-110 transition ease-in rounded-md cursor-pointer' src={cart.thumbnail} alt="image" />
                                </figure>
                                <div className="card-body px-3">
                                    <div className=" space-y-2">
                                        <h2 className="card-title capitalize">{cart.name}</h2>
                                        <p>{cart.description}</p>
                                        <h2 className="card-title">Category: {cart.category}</h2>
                                        <h2 className="card-title">Price:$$ {cart.price}</h2>
                                    </div>
                                    <div className=" flex w-full gap-5 items-center">
                                        <div className="flex w-[50%]">
                                            <button className="btn w-full bg-[#433c41] hover:bg-[#732358]"> <Link to={`/updatecoffee/${cart._id}`}><FiEdit2 className='text-white text-xl'></FiEdit2></Link></button>
                                        </div>
                                        <div className="flex w-[50%]">
                                            <button onClick={() => handleDelete(cart._id)} className="btn w-full bg-[#EA4744] hover:bg-[#930a07]"><AiFillDelete className='text-white text-xl'></AiFillDelete></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className='lg:w-[300px] w-full '>
                                <figure>
                                    <img className='w-full h-[200px]' src={cart.thumbnail} alt="image" />
                                </figure>
                            </div>
                            <div className="">
                                <h2 className="card-title">Name: {cart.name}</h2>
                                <h2 className="card-title">Category: {cart.category}</h2>
                                <h2 className="card-title">Price:$$ {cart.price}</h2>
                            </div>
                            <div className="card-actions justify-end items-center">
                                <div className=" flex lg:flex-col md:flex-col flex-row  gap-2">
                                    <button className="btn bg-[#d2a973] hover:bg-[#825316]"><FaEye className='text-white text-xl'></FaEye></button>
                                    <Link to={`/updatecoffee/${cart._id}`}><button className="btn bg-[#3C393B] hover:bg-[#732358]"><FiEdit2 className='text-white text-xl'></FiEdit2></button></Link>
                                    <button onClick={() => handleDelete(cart._id)} className="btn bg-[#EA4744] hover:bg-[#930a07]"><AiFillDelete className='text-white text-xl'></AiFillDelete></button>
                                </div>
                            </div> */}
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyCart;