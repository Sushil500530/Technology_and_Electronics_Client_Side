import { useContext, useState } from "react";
import Navbar from "../../Root/Header/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContex } from "../../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";


const Login = () => {
    const { loginUser, googleSignIn } = useContext(AuthContex);
    const navigate = useNavigate();
    const [terms, setTerms] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const termsConditions = form.checkbox.checked;
        setTerms('');
        setPasswordError('');
        console.log(email, password, termsConditions);
        if (!termsConditions) {
            return setTerms("Please select terms and conditions")
        }

        loginUser(email, password)
            .then(result => {
                if (result.user) {
                    toast.success('log in successfully...!', {
                        position: toast.POSITION.TOP_CENTER
                    })
                    return setTimeout(() => {
                        navigate(location?.state ? location.state : "/")
                    }, 1000)
                }
            })
            .catch(() => {
                setPasswordError("Password doesn't match")
            })
    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                if (result.user) {
                    toast.success('log in successfully...!', {
                        position: toast.POSITION.TOP_CENTER
                    })
                    return setTimeout(() => {
                        navigate(location?.state ? location.state : "/")
                    }, 1000)
                }
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className="bg-[#f6f8fa] text-black pb-12">
            <div className='container mx-auto'>
                <Navbar></Navbar>
                <div className=" w-full lg:w-[580px] mx-auto mt-12 bg-white pb-5">
                    <form onSubmit={handleLogin} className="space-y-8 p-5 border">
                        <h3 className="text-2xl font-semibold mb-10 mt-5 text-center">Please Login</h3>
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
                        <p className='text-red-500 font-medium m-0'>{passwordError}</p>
                        <div className="flex items-center justify-between">
                            <span className="flex gap-3">
                                <input type="checkbox" name='checkbox' className=" w-5 h-5 cursor-pointer" />
                                <label className='font-medium'>Please accept our <a href='#' className='text-blue-600'>terms and conditions</a></label>
                            </span>
                            <p className="text-blue-600 underline"><Link to="#">Forget Password</Link></p>
                        </div>
                        <p className='font-medium text-red-500'>{terms}</p>
                        <button className="btn bg-blue-600 text-white hover:text-black text-[18px] w-full capitalize font-semibold">Login</button>
                        <h2 className="font-bold text-center">Don't have an account? <Link to='/resister' className="text-blue-600 hover:underline ">Create an account</Link></h2>
                    </form>
                    <div className="inline-flex items-center justify-center w-full">
                        <hr className="w-64 h-px my-8 bg-gray-400 border-0 dark:bg-black" />
                        <span className="absolute px-3 font-medium text-black -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-black">Or</span>
                    </div>
                    <div onClick={handleGoogleSignIn} className='w-full md:w-[466px] lg:w-full mx-auto p-5'>
                        <div className="border-2 mx-auto w-full lg:w-[400px] lg:h-[60px] hover:bg-gray-200 cursor-pointer hover:text-blue-500 transition ease-in rounded-full my-5 flex items-center justify-center gap-3">
                            <p className="text-[38px] p-2"><FcGoogle></FcGoogle></p>
                            <h2 className="text-[18px] font-semibold">Continue With Google</h2>
                        </div>
                    </div>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Login;