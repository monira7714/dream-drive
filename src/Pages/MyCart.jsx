import { NavLink } from "react-router-dom";

const MyCart = () => {

    const navLinks = <>
        <li className="text-lg"><NavLink to='/'>Home</NavLink></li>
        <li className="text-lg"><NavLink to='/addProduct'>Add Product</NavLink></li>
        <li className="text-lg text-secondary"><NavLink to='/myCart'>My Cart</NavLink></li>

    </>

    return (
        <div>
            <div className="navbar flex justify-center gap-20 ">
                <div className="navbar-start">
                    <div className="flex gap-2 items-center">
                        <img className="w-[80px] h-[50px] " src="https://i.ibb.co/6yhNJj3/logo1-removebg-preview.png" />
                        <span className="text-secondary text-xl font-bold">Dream Drive</span>
                    </div>
                </div>
                <div className="navbar-center flex gap-12">
                    <ul className="flex gap-6 px-1">
                        {navLinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MyCart;