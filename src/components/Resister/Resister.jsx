import { FaEye, FaEyeSlash } from "react-icons/fa";
import Navbar from "../../Root/Header/Navbar";
import { useState } from "react";
import { Link } from "react-router-dom";


const Resister = () => {
    const [passwordError, setPasswordError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const handleResister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        setPasswordError('');
        console.log(name, email, password,);



        if (password.length < 6) {
            return setPasswordError("password should be at least 6 character or longer")
        }
        else if (!/[A-Z]/.test(password)) {
            return setPasswordError('your password should have at least one uppercase characters.')
        }

        // eslint-disable-next-line no-useless-escape
        else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\|\-]/.test(password)) {
            return setPasswordError("you should be at least one special character")
        }


    }
    return (
        <div>
            <div className='bg-[#f6f8fa] text-black pb-12'>
                <Navbar></Navbar>
                <div className=" w-full lg:w-[580px] mx-auto mt-12 bg-white pb-5">
                    <form onSubmit={handleResister} className="space-y-8 p-5">
                        <h3 className="text-2xl font-semibold mb-10 mt-5 text-center">Please Resister Now</h3>
                        <label className="text-xl font-bold my-5">Name
                            <input type="text" name="name" className="px-3 input-bordered py-2 input block w-full text-[18px]  my-3 text-base font-normal" placeholder="Enter your name" />
                        </label>
                        <label className="text-xl font-bold my-5">Email
                            <input type="email" name="email" required className="px-3 input-bordered py-2 input block w-full text-[18px]  my-3 text-base font-normal" placeholder="Enter your email" />
                        </label>
                        <label className="text-xl font-bold ">Password</label>
                        <div className="flex relative w-full my-3 ">
                            <input type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                name="password" required
                                className="input input-bordered text-[18px] block w-full" />
                            <span onClick={() => setShowPassword(!showPassword)} className="absolute top-0 right-0 p-3 text-xl font-medium cursor-pointer">
                                {
                                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </span>
                        </div>
                        <p className='text-red-500 font-medium'>{passwordError}</p>
                        <button className="btn bg-blue-600 text-white hover:text-black text-[18px] w-full capitalize font-semibold">Resister</button>
                        <h2 className="font-bold text-center">Already Have an Account? <Link to='/login' className="text-blue-600 hover:underline ">Please Login</Link></h2>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Resister;