import { Link } from "react-router-dom";
import Banner from "../Components/Banner";
import Brands from "../Components/Brands";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import { useEffect, useState } from "react";



const Home = () => {

    const [brands, setBrands] = useState([])

    useEffect(() => {
        fetch('/public/brands.json')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])

    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <div className="mx-12 mt-16">
                <h2 className="text-5xl font-bold text-[#e73f93] ml-2">Our Brand Partners </h2>
                <div className="my-12 grid md:grid-cols-3 grid-cols-2 gap-8 p-4">
                    {
                        brands.map(brand => <Link to='/' key={brand.name}><Brands brand={brand}></Brands></Link>)
                    }
                </div>
            </div>
            
            
            <Footer></Footer>
        </div>
    );
};

export default Home;

// import { FaPaperPlane } from "react-icons/fa";

// const NewsLetter = () => {
//     return (
//         <div className="w-full h-full mx-auto my-16">
//             <div className="w-full flex gap-12 items-center md:flex-row flex-col bg-secondary-focus px-40 py-24">
//                 <div className="text-white mr-20 w-1/3">
//                     <h2 className="text-3xl font-medium mb-2">Newsletter</h2>
//                     <p className="">Subscribe for weekly newsletter</p>
//                 </div>
//                 <div className="flex w-2/3">
//                     <input className="p-4 w-2/3" type="email" placeholder="Enter Your Email Address" />
//                     <button className="flex px-6 py-4 bg-black text-white">Sign Up <FaPaperPlane></FaPaperPlane> </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default NewsLetter;

import { FaCar, FaStar, FaTrophy, FaUsers } from 'react-icons/fa';

// const Counter = () => {
//     return (
//         <div className="bg-cover bg-no-repeat my-12 py-16 px-40" style={{ backgroundImage: 'url(https://i.ibb.co/sW7gBWX/counter-bg.jpg)' }}>
//             <div className="py flex items-center gap-32 text-center text-[#f9c200]">
//                 <div className='text-7xl flex flex-col items-center gap-4 p-4'>
//                     <FaUsers></FaUsers>
//                     <p className='text-6xl text-white'>519</p>
//                     <h4 className='text-lg text-[#999] uppercase'>Happy Client</h4>
//                 </div>
//                 <div className='text-7xl flex flex-col items-center gap-4 p-4'>
//                     <FaCar></FaCar>
//                     <p className='text-6xl text-white'>663</p>
//                     <h4 className='text-lg text-[#999] uppercase'>Car Sale</h4>
//                 </div>
//                 <div className='text-7xl flex flex-col items-center gap-4 p-4'>
//                     <FaStar></FaStar>
//                     <p className='text-6xl text-white'>4.6</p>
//                     <h4 className='text-lg text-[#999] uppercase'>Rating</h4>
//                 </div>
//                 <div className='text-7xl flex flex-col items-center gap-4 p-4'>
//                     <FaTrophy></FaTrophy>
//                     <p className='text-6xl text-white'>1023</p>
//                     <h4 className='text-lg text-[#999] uppercase'>Happy Client</h4>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Counter;