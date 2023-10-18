import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/logo">Logo</NavLink></li>
        <li><NavLink to="/addProduct">Add Product</NavLink></li>
        <li><NavLink to="/myCart">My Cart</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
    </>
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
                    <Link to="/login"><button className="btn btn-success text-[18px] capitalize font-semibold text-white px-8 py-2 hover:text-black"><Link to="/login">Login</Link></button></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;