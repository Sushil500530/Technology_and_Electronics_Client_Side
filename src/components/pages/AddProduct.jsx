import Navbar from "../../Root/Header/Navbar";


const AddProduct = () => {
    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const supplier = form.supplier.value;
        const chef = form.chef.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newProduct = { name, supplier, chef, taste, details, photo, category };
        console.log(newProduct);
    }
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <div className="w-full lg:h-screen h-[1200px] bg-[#f6f8fa] p-5 lg:px-12">
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
                                    <input type="text" name="name" placeholder="Product Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" name="supplier" placeholder=" Price" className="input input-bordered" required />
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
                                    <input type="text" name="chef" placeholder="write description" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <input type="text" name="taste" placeholder="Enter Cofee Taste" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">2+2 = ?</span>
                                    </label>
                                    <input type="text" name="details" placeholder="Ans: write" className="input input-bordered" required />
                                </div>
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="text" name="photo" placeholder="Image URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control my-6">
                            <button className="btn btn-success text-white capitalize text-xl font-semibold hover:text-black">Add Product</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;