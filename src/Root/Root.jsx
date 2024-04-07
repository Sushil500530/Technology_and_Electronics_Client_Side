import Category from "../components/Category/SingleCategory/Category";
import Communication from "../components/otherCategory/communication/Communication";
import Gps from "../components/otherCategory/GPS/Gps";
import AdvantageQuiz from "../components/pages/AdvantageQuiz";
import Footer from './../components/Footer/Footer';
import Banner from "./Header/Banner";



const Root = () => {
    return (
        <div className="w-full absolute top-0 -z-20">
            <Banner />
            <Category />
            <Communication />
            <Gps />
            {/* other options  */}
            <AdvantageQuiz />
            <Footer />
        </div>
    );
};

export default Root;