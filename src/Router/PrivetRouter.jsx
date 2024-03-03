import { useContext } from "react";
import { AuthContex } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader";
/* eslint-disable react/prop-types */

const PrivetRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContex);
    const location = useLocation();
    if (loading) {
        return <Loader />
    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivetRouter;