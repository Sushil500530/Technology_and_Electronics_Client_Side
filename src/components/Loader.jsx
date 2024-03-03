import { RotatingLines } from "react-loader-spinner";

const Loader = () => {
    return (
        <div className="flex items-center justify-center w-full h-[50vh]">
               <RotatingLines
                strokeColor="purple"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
            />
        </div>
    );
};

export default Loader;