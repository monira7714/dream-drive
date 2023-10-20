import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import NavBar from "../Components/NavBar";

const UpdateProduct = () => {

    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleUpdateCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const UpdatedCoffee = { name, quantity, supplier, taste, category, details, photo }
        console.log(UpdatedCoffee);

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "PUT",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(UpdatedCoffee),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee updated successfully!',
                        icon: 'success',
                        confirmButtonText: 'Done',

                    })
                }
            })
    }

    return (
        <div>
            <NavBar></NavBar>
            <div className="mx-20 p-16 bg-[#f4f3f0] space-y-4">
                <h1 className="text-3xl font-extrabold text-center">Update Coffee:{name}</h1>
                <form onSubmit={handleUpdateCoffee} className="space-y-4">
                    {/* form row */}
                    <div className="md:flex  justify-around ">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Coffee Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={name} name="name" placeholder="Coffee Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={quantity} name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form row */}
                    <div className="md:flex  justify-around ">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Supplier</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={supplier} name="supplier" placeholder="Supplier Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={taste} name="taste" placeholder="Taste" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form row */}
                    <div className="md:flex  justify-around ">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={category} name="category" placeholder="Category" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <label className="input-group">
                                <input defaultValue={details} placeholder="Details" type="text" name="details" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <label className="input-group">
                            <input defaultValue={photo} placeholder="Photo URL" type="text" name="photo" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <input type="submit" value="Update Coffee" name="" className="btn btn-block bg-[#D2B48C]" />
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;