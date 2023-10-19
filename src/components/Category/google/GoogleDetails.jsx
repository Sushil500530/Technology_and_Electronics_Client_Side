
import { useState } from "react";
import {useLoaderData, useParams } from "react-router-dom";



const GoogleDetails = () => {
    const loaderGoogle = useLoaderData();
    const [countId,setCountId] = useState(0)
    // console.log(loaderGoogle);
    const { id } = useParams();
    const convertId = parseInt(id);
    // console.log(convertId);
    const findDetails = loaderGoogle?.find(details => details?.id === convertId);
    // console.log(findDetails);
    // const selectId = findDetails?.collection.find(findId =>findId.id === convertId)
    // console.log(countId,selectId);
    console.log(loaderGoogle?.collection)
    // const collect = findDetails?.collection?.find(findId => findId.id === convertId);
    // console.log(collect);
    // const {title,category,description,image,price} = collect || {};
   
    return (
        <div>
            <h4 className="text-2xl text-center">There is google category id <span className="text-3xl font-bold"></span></h4>
            <div className="w-[350px]">
                
            </div>
        </div>
    );
};

export default GoogleDetails;