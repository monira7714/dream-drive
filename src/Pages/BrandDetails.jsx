import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
// import { useState, useLoaderData } from 'react-router-dom';

const BrandDetails = () => {
    // const loadedBrand = useLoaderData()
    // const [brand, setBrand] = useState(loadedBrand)
    // console.log(brand);

    // const {_id, image, brand, name}= loadedBrand
    

    // const brand = brands.find(brand => brand.id == id)

    // fetch(`https://tenth-assignment-server-6jj66qm9v-moniras-projects.vercel.app/products/${_id}`, {
    //     method: "POST",
    //     headers: { 'content-type': 'application/json' },
    //     body: JSON.stringify(brand),
    // })
    //     .then(res => res.json())
    //     .then(data => {console.log(data)})

    return (
        <div>
            <NavBar></NavBar>
            <Footer></Footer>
        </div>
    );
};

export default BrandDetails;