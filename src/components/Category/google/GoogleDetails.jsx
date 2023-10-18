
import {useLoaderData, useParams } from "react-router-dom";



const GoogleDetails = () => {
    const loaderGoogle = useLoaderData();
    const { id } = useParams();
    const convertId = parseInt(id);
    const findDetails = loaderGoogle.find(details => details.id === convertId);
    // const select = findDetails.element.map(details => details.image);
    console.log(findDetails.element);
    return (
        <div>
            <h4 className="text-2xl text-center">There is google category id : {findDetails.id}</h4>
            <div className="w-[350px]">
                <img className="w-full" src={findDetails.thumbnail} alt="image" />
            </div>
        </div>
    );
};

export default GoogleDetails;