import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContex } from "../../provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContex)
    const navLinks = <>
        <NavLink to='/' className={({ isActive }) =>
            isActive ?
                "btn btn-sm btn-success"
                : ""}> Home
        </NavLink>
        <NavLink to="/logo" className={({ isActive }) =>
            isActive ?
                "btn btn-sm btn-success"
                : ""}> Logo
        </NavLink>
        <NavLink to="/addProduct" className={({ isActive }) =>
            isActive ?
                "btn btn-sm btn-success"
                : ""}> Add Product
        </NavLink>
        <NavLink  to="/myCart" className={({ isActive }) =>
            isActive ?
                "btn btn-sm btn-success"
                : ""}> My Cart
        </NavLink>
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
                    <div className="dropdown w-">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 font-semibold text-[18px] z-[1] p-2 shadow text-black bg-base-100 rounded-box w-52 flex flex-col items-center gap-3 ml-3 py-8">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to="/">
                        <div className="w-40 h-20 cursor-pointer hidden md:block lg:block">
                            <img className="w-full h-full" src="https://i.ibb.co/D5NkcBS/png-clipart-technology-technology-electronics-logo.png" alt="logo" />
                        </div>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal font-semibold text-[18px] px-1 flex items-center gap-3">
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