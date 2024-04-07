import Category from "../components/Category/SingleCategory/Category";
import Communication from "../components/otherCategory/communication/Communication";
import Gps from "../components/otherCategory/GPS/Gps";



const Root = () => {
    return (
        <div className="w-full absolute top-0 -z-20">
            <div className="w-full lg:h-auto md:pb-36 bg-[url('https://i.ibb.co/kcF52Q7/images-4.jpg')] bg-cover bg-center bg-no-repeat object-contain ">
                <div className=" relative lg:w-[800px] w-full h-auto lg:mt-0 lg:h-[60vh] mx-auto text-white flex flex-col lg:justify-center items-center pt-28 md:pt-[20%] lg:pt-[25%] xl:pt-[17%] 2xl:pt-[10%] pb-20">
                    <h4 className="lg:text-6xl text-4xl font-semibold text-center"> Technology and Electronics</h4>
                    <hr className="border-2 w-[70%] my-5 mx-auto border-amber-500" />
                    <p className="text-center p-5">Electronic and information technology includes computer hardware and software, operating systems, web-based information and applications, telephones and other telecommunications products, video equipment and multimedia products, hardware and software, operating systems, web-based information and applications, information kiosks, and office products such as photocopiers and fax machines.</p>
                    <div className="flex flex-col md:flex-row lg:flex-row items-start gap-4 justify-start">
                        <button className="btn hover:bg-transparent bg-red-600 border-red-600 hover:text-white text-[18px] capitalize font-semibold text-white px-8 py-2">Dounload Now</button>
                        <button className="btn bg-transparent border hover:btn-success text-[18px] capitalize font-semibold text-white px-8 py-2 hover:text-black">Read More</button>
                    </div>
                </div>
            </div>
            {/* category  section */}
            <div className="w-full">
                <Category></Category>
            </div>
            <Communication></Communication>
            <Gps></Gps>
        </div>
    );
};

export default Root;