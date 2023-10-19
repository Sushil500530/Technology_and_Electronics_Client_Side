import { useContext } from "react";
import { AuthContex } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
/* eslint-disable react/prop-types */

const PrivetRouter = ({children}) => {
    const {user,loading} = useContext(AuthContex);
    const location = useLocation();
    if(loading){
        return <p className="flex items-center justify-center w-full h-[50vh]"><RotatingLines
        strokeColor="purple"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
    /></p>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivetRouter;