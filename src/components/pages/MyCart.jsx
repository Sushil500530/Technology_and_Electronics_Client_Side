import { Link } from "react-router-dom";
import Navbar from "../../Root/Header/Navbar";
import { FiEdit2 } from 'react-icons/fi';
import { AiFillDelete } from 'react-icons/ai';
import Footer from "../Footer/Footer";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";


const MyCart = () => {
    const [myCarts, setMyCarts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/carts')
        .then(res=> res.json())
        .then(data => setMyCarts(data))
    },[])
    const handleDelete = (_id) => {
        console.log('delete id is', _id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/cart/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            console.log(data);
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = myCarts.filter(carts => carts._id !== _id);
                            setMyCarts(remaining)
                        }
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
            <div className="container mx-auto my-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        myCarts.map(cart => <div key={cart._id}>
                            <div className="card bg-base-100 shadow-xl w-full h-[600px] ">
                                <figure className="w-full h-[300px]">
                                    <img className='w-full hover:scale-105 transition ease-in rounded-md cursor-pointer' src={cart.thumbnail} alt="image" />
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
                                        <h2 className="card-title capitalize">{cart.name}</h2>
                                        <p>{cart.description}</p>
                                        <h2 className="card-title">Category: {cart.category}</h2>
                                        <h2 className="card-title">Price:$$ {cart.price}</h2>
                                    </div>
                                    <div className="grid grid-cols-2 gap-5 items-center">
                                        <Link to={`/update-mycart/${cart._id}`}>
                                            <div >
                                                <button className="btn w-full bg-[#433c41] hover:bg-[#732358]"><FiEdit2 className='text-white text-xl'></FiEdit2></button>
                                            </div>
                                        </Link>
                                        <div>
                                            <button onClick={() => handleDelete(cart._id)} className="btn w-full bg-[#EA4744] hover:bg-[#930a07]"><AiFillDelete className='text-white text-xl'></AiFillDelete></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    } 
                </div>
            </div>
            <div>
                <div className="bg-gray-500 lg:p-0 pb-10">
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default MyCart;