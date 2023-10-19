

import {  useLoaderData, useParams } from "react-router-dom";


const Google = () => {
    const loaderGoogle = useLoaderData();
    const { id } = useParams();
    const convertId = parseInt(id);
    const findGoogle = loaderGoogle.find(details => details.id === convertId);
    console.log(findGoogle);
    return (                                                      
        <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-center">Technology fo Google</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
               
            </div>


        </div>
    );
};

export default Google;