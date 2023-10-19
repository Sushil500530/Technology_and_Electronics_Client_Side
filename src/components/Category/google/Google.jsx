



import { Link, useLoaderData, useParams } from "react-router-dom";
import { useState } from 'react';
import { GrAdd } from 'react-icons/gr';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';


const Google = () => {
    const loaderGoogle = useLoaderData();
    const { id } = useParams();
    const convertId = parseInt(id);
    const findGoogle = loaderGoogle.find(details => details.id === convertId);
    console.log(findGoogle.collection);
    // const Exam = findGoogle.thumbnail;

    // const [index, setIndex] = useState(0);

    // const handleSelect = (selectedIndex) => {
    //     setIndex(selectedIndex);
    // }
    return (
        <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-center">Technology fo Google</h1>


            {/* <div>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <div className="w-full h-[80vh]">
                            <img src={Exam} />
                        </div>
                        <Carousel.Caption>
                            <div>
                                <h2 className='text-4xl font-bold text-center'>Hellow World</h2>
                            </div>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div>
                            <img src='https://i.ibb.co/27Dnp63/3d-view-map.jpg' className='w-full h-[80vh] bg-black bg-opacity-70' alt='image' />
                        </div>
                        <Carousel.Caption className='text-black'>
                            <div>
                                <h2 className='text-4xl font-bold text-center'>Hellow World</h2>
                            </div>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="w-full h-[80vh]">
                            <img src={Exam} />
                        </div>
                        <Carousel.Caption>
                            <div>
                                <h2 className='text-4xl font-bold text-center'>Hellow World</h2>
                            </div>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div> */}
            <div className='my-12'>
                <h1 className="text-4xl font-bold text-center">Technology of {findGoogle.category}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 my-5">
                    {
                        findGoogle?.collection?.map(element =>
                            <div key={element.id} className=" bg-gray-50 my-5 cursor-pointer shadow-lg overflow-hidden ">
                                <div className="card bg-base-100 shadow-xl h-[550px]">
                                    <figure className="w-full h-[300px]">
                                        <img className='w-full h-[300px] hover:scale-110 transition ease-in rounded-md cursor-pointer' src={element.image} alt="image" />
                                    </figure>
                                    <div className="card-body px-3">
                                        <div className=" space-y-2">
                                            <h2 className="card-title capitalize">{element.title}</h2>
                                            <p>{element.description}</p>
                                            <h2 className="card-title">Category: {element.category}</h2>
                                            <h2 className="card-title">Price:$$ {element.price}</h2>
                                        </div>
                                        <div className=" flex w-full gap-5 items-center">
                                            <div className="flex w-[50%]">
                                                <button className="btn w-full btn-success"> Details</button>
                                            </div>
                                            <div className="flex w-[50%]">
                                                <button className="btn w-full btn-success">Update</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Google;