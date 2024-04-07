import image1 from "../../assets/image/ai-image.jpg";
import image2 from "../../assets/image/connect-image1.webp";
import image3 from "../../assets/image/power-management.jpg";
import { FcCheckmark } from "react-icons/fc";


const AdvantageQuiz = () => {
    return (
        <div className="container mx-auto my-12">
            <div className=" flex items-center justify-between gap-14">
                <div className="w-full lg:w-[40%]">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 flex gap-3 items-center">Efficient Power Management<FcCheckmark className="w-12 h-12 rounded-full p-1.5 text-4xl bg-blue-50 text-white" /> </h1>
                    <h1 className="">  </h1>
                    <p>
                      Seamlessly integrates artificial intelligence algorithms into the device's core functionalities, transforming the user experience. From predictive maintenance to personalized recommendations and intuitive user interfaces, AI empowers the device to adapt and evolve according to the user's needs.
                    </p>
                </div>
                <div className="w-full lg:w-1/2">
                    <img src={image3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AdvantageQuiz;