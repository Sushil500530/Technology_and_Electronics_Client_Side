import aiImage from "../../assets/image/ai-image.jpg";
import connectivity from "../../assets/image/connect-image1.webp";
import powerManagement from "../../assets/image/power-management.jpg";
import { FcCheckmark } from "react-icons/fc";


const AdvantageQuiz = () => {
    return (
        <div className="container mx-auto  p-5">
            <div className=" flex items-center justify-between gap-14 flex-col lg:flex-row my-32">
                <div className="w-full lg:w-[40%]">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 flex gap-3 items-center">Efficient Power Management <FcCheckmark className="w-12 h-12 rounded-full p-1.5 text-4xl bg-blue-100" /> </h1>
                    <p>
                    Prioritizes energy efficiency and sustainability through intelligent power management features. By optimizing power usage and implementing energy-efficient components, the device maximizes battery life or minimizes electricity consumption, reducing environmental impact. Additionally, fast charging capabilities ensure quick power replenishment, keeping users connected and productive throughout the day.
                    </p>
                </div>
                <div className="w-full lg:w-1/2">
                    <img src={powerManagement} className="w-full h-auto" alt="technologies-image" />
                </div>
            </div>
            <div className=" flex items-center justify-between gap-14 flex-col lg:flex-row-reverse my-32">
                <div className="w-full lg:w-[40%]">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 flex gap-3 items-center">Advanced AI Integration <FcCheckmark className="w-12 h-12 rounded-full p-1.5 text-4xl bg-blue-100" /> </h1>
                    <p>
                      Seamlessly integrates artificial intelligence algorithms into the device's core functionalities, transforming the user experience. From predictive maintenance to personalized recommendations and intuitive user interfaces, AI empowers the device to adapt and evolve according to the user's needs.
                    </p>
                </div>
                <div className="w-full lg:w-1/2">
                    <img src={aiImage} className="w-full h-auto" alt="technologies-image" />
                </div>
            </div>
            <div className=" flex items-center justify-between gap-14 flex-col lg:flex-row my-12">
                <div className="w-full lg:w-[40%]">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 flex gap-3 items-center">Smart Connectivity <FcCheckmark className="w-12 h-12 rounded-full p-1.5 text-4xl bg-blue-100" /> </h1>
                    <p>
                    Embraces the Internet of Things (IoT) revolution, offering seamless connectivity with a myriad of smart devices. Whether it's home appliances, wearable gadgets, or automotive systems, this technology enables effortless integration and control through smartphone apps or voice assistants. Users can remotely monitor and manage their devices from anywhere, enhancing convenience and efficiency.
                    </p>
                </div>
                <div className="w-full lg:w-1/2">
                    <img src={connectivity} className="w-full h-auto" alt="technologies-image" />
                </div>
            </div>
        </div>
    );
};

export default AdvantageQuiz;