import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { AuthContext } from "../provider/AuthProvider";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const auth = getAuth();
    // console.log(auth);

    const handleLogOut = () => {
        logOut()
            .then(result => console.log(result))
            .catch(error => console.error(error))
    }

    const navLinks = <>
        <li className="text-lg"><NavLink style={({ isActive }) => {
            return {
                textDecoration: isActive ? "underline" : "",
                color: isActive ? "#9e326cfa" : "black",
            };
        }} to='/'>Home</NavLink></li>
        <li className="text-lg"><NavLink style={({ isActive }) => {
            return {
                textDecoration: isActive ? "underline" : "",
                color: isActive ? "#9e326cfa" : "black",
            };
        }} to='/profile'>Profile</NavLink></li>
        <li className="text-lg"><NavLink style={({ isActive }) => {
            return {
                textDecoration: isActive ? "underline" : "",
                color: isActive ? "#9e326cfa" : "black",
            };
        }} to='/blog'>Blog</NavLink></li>

    </>

    return (
        <div className="bg-secondary-content">
            <div className="navbar  px-20">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                            {
                                user ?
                                    <div className="">
                                        <img className="btn btn-ghost btn-circle avatar mr-2" src={auth.currentUser.photoURL} />
                                        <h1 className="mr-2">{auth.currentUser.displayName}</h1>
                                        <button onClick={handleLogOut} className="btn bg-[#ae4e81cf] text-white">Sign Out</button></div>
                                    : <Link to='/login'>
                                        <button className="btn">Login</button>
                                    </Link>
                            }
                        </ul>
                    </div>
                    <img className="border-2 w-[80px] h-[50px] rounded-lg" src="https://i.ibb.co/6yhNJj3/logo1-removebg-preview.png" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-6 px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end hidden md:flex">
                    {
                        user ?
                            <div className="flex items-center">
                                <img className="btn btn-ghost btn-circle avatar mr-2" src={auth.currentUser.photoURL} />
                                <h1 className="mr-2">{auth.currentUser.displayName}</h1>
                                <button onClick={handleLogOut} className="btn bg-[#ae4e81cf] text-white">Sign Out</button></div>
                            : <Link to='/login'>
                                <button className="btn">Login</button>
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;