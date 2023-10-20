import { useLoaderData, useNavigate } from "react-router-dom";
import Navbar from "../../Root/Header/Navbar";
import Swal from "sweetalert2";


const UpdateProducts = () => {
    const updateProduct = useLoaderData();
    const { _id, thumbnail, name, description, category, price } = updateProduct || {};
    console.log(updateProduct);
    const navigate = useNavigate();

    const handleUpdateProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const description = form.description.value;
        const category = form.category.value;
        const thumbnail = form.image.value;
        const updatad = { name, price, description, category, thumbnail }
        console.log(updatad);
        fetch(`https://projects-server-side.vercel.app/cart/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatad)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data); if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Updated Successfully!',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    return navigate(-1);
                }
            })
    }
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <div className="w-full lg:h-screen h-[1200px] bg-[#f6f8fa] p-5 lg:px-12">
                <div className="space-y-5 pb-5">
                    <h1 className="text-3xl font-bold text-center pt-5 lg:pt-12">
                        Update Your Product </h1>
                    <p className="text-center font-medium">
                        It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                    </p>
                </div>
                <div>
                    <form onSubmit={handleUpdateProduct} className="card-body p-0 text-xl font-semibold">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className=" w-full space-y-4 py-3">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Product Name</span>
                                    </label>
                                    <input type="text" name="name" defaultValue={name} placeholder="Product Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" name="price" defaultValue={price} placeholder=" Price" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Product Type</span>
                                    </label>
                                    <input type="text" name="category" defaultValue={category} placeholder="Electronics category( phone, computer, headphone) " className="input input-bordered" required />
                                </div>
                            </div>
                            <div className=" w-full space-y-4 py-3">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Short description</span>
                                    </label>
                                    <textarea className="textarea textarea-bordered" name="description" defaultValue={description} placeholder="description" required ></textarea>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image</span>
                                    </label>
                                    <input type="text" name="image" defaultValue={thumbnail} placeholder="Image URL" className="input input-bordered" required />
                                </div>

                            </div>
                        </div>
                        <div className="form-control my-6">
                            <button className="btn btn-success text-white capitalize text-xl font-semibold hover:text-black">Updated</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProducts;