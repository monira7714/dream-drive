import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const AddProduct = () => {

    const navLinks = <>
        <li className="text-lg"><NavLink to='/'>Home</NavLink></li>
        <li className="text-lg text-secondary"><NavLink to='/addProduct'>Add Product</NavLink></li>
        <li className="text-lg"><NavLink to='/myCart'>My Cart</NavLink></li>

    </>

    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const brandName = form.brandName.value;
        const category = form.category.value;
        const name = form.name.value;
        const des = form.des.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = { brandName, category, name, des, supplier, taste, details, photo }
        console.log(newCoffee);

        // fetch('http://localhost:5000/coffee', {
        //     method: "POST",
        //     headers: { 'content-type': 'application/json' },
        //     body: JSON.stringify(newCoffee),
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         if (data.insertedId) {
        //             Swal.fire({
        //                 title: 'Success!',
        //                 text: 'Coffee added successfully!',
        //                 icon: 'success',
        //                 confirmButtonText: 'Done',

        //             })
        //         }
        //     })
    }
    // bg-[#ae4e81cf]

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
            <div className="mx-20 mt-12 p-16 bg-secondary-focus/10 space-y-4">
                <h1 className="text-4xl font-bold text-center text-secondary-focus">Add Your Dream Vehicle</h1>

                <form onSubmit={handleAddProduct} className="flex flex-col justify-center items-center space-y-4">
                    {/* Brand Name */}
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="bandName" placeholder="Brand Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* Category */}
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* Name */}
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* Short des */}
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="des" placeholder="Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* Price */}
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* Ratings */}
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Ratings</span>
                        </label>
                        <label className="input-group">
                            <input placeholder="Ratings" type="text" name="ratings" className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* Image */}
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <label className="input-group">
                            <input placeholder="Photo URL" type="text" name="photo" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <input type="submit" value="Add Product" name="" className="btn btn-block bg-secondary " />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;