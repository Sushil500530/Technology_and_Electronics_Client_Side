import Swal from "sweetalert2";
import Footer from "../Footer/Footer";


const AddProduct = () => {
    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const description = form.description.value;
        const category = form.category.value;
        const thumbnail = form.image.value;
        const newProduct = { name, price, description, category, thumbnail }
        console.log(newProduct);

        fetch('http://localhost:5000/cart', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                Swal.fire({
                    title: 'Success!',
                    text: 'Product Updated Successfully!',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
            })
    }
    return (
        <div>
            <div className="container mx-auto my-12">
                <div className="w-full h-auto bg-[#f6f8fa] p-5 lg:px-12">
                    <div className="space-y-5 pb-5">
                        <h1 className="text-3xl font-bold text-center pt-5 lg:pt-12">
                            Add New Product </h1>
                        <p className="text-center font-medium">
                            It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                        </p>
                    </div>
                    <div>
                        <form onSubmit={handleAddProduct} className="card-body p-0 text-xl font-semibold">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div className=" w-full space-y-4 py-3">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Product Name</span>
                                        </label>
                                        <input type="text" name="name" placeholder="Product Name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input type="text" name="price" placeholder=" Price" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Product Type</span>
                                        </label>
                                        <input type="text" name="category" placeholder="Electronics category( phone, computer, headphone) " className="input input-bordered" required />
                                    </div>
                                </div>
                                <div className=" w-full space-y-4 py-3">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Short description</span>
                                        </label>
                                        <textarea className="textarea textarea-info" name="description" placeholder="Bio" required></textarea>
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Image</span>
                                        </label>
                                        <input type="text" name="image" placeholder="Image URL" className="input input-bordered" required />
                                    </div>
                                </div>
                            </div>
                            <div className="form-control my-6">
                                <button className="btn btn-success text-white capitalize text-xl font-semibold hover:text-black">Add Product</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AddProduct;