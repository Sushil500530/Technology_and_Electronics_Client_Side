import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContex } from "../../provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContex)
    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/logo">Logo</NavLink></li>
        <li><NavLink to="/addProduct">Add Product</NavLink></li>
        <li><NavLink to="/myCart">My Cart</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
    </>
    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div>
            <div className="navbar bg-transparent">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 font-semibold text-[18px] z-[1] p-2 shadow text-black bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to="/">
                        <div className="w-40 h-20 cursor-pointer hidden md:block lg:block">
                            <img className="w-full h-full" src="https://i.ibb.co/qrzzM30/png-transparent-logo-technology-letter-font-technology-blue-electronics-text-thumbnail.png" alt="logo" />
                        </div>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal font-semibold text-[18px] px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    {
                        user && <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    {
                                        user ? <img src={user?.photoURL} alt="image" /> : <img src="https://i.ibb.co/Jt0tPSh/user.png" alt="image" />
                                    }
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between text-black">
                                        {
                                            user && <p>{user?.displayName}</p>
                                        }
                                        <span className="badge">Profile</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    }
                    {
                        user ? <Link onClick={handleLogout} to="/login">
                            <button className="btn bg-red-500 border-0 text-white px-8 py-2 hover:text-black"><Link to="/login">LogOut</Link>
                            </button></Link> :
                            <Link to="/login"><button className="btn btn-success text-[18px] capitalize font-semibold text-white px-8 py-2 hover:text-black"><Link to="/login">Login</Link></button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;