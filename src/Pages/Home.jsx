import { Link } from "react-router-dom";
import Banner from "../Components/Banner";
import Brands from "../Components/Brands";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import { useEffect, useState } from "react";
import Counter from "../Components/NewsLetter";
import NewsLetter from "../Components/Counter";



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
                        brands.map(brand => <Link to={`/brandDetails/:${brand.id}`} key={brand.id}><Brands brand={brand}></Brands></Link>)
                    }
                </div>
            </div>
            <Counter></Counter>
            <NewsLetter></NewsLetter>
            <Footer></Footer>
        </div>
    );
};

export default Home;



