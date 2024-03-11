import React from 'react';
import Benefit1 from '../../assets/benefit1.png';
import Benefit2 from '../../assets/benefit2.png';

const Benefits = () => {
    return (
        <>
            <div className="h-screen bg-black flex justify-center items-center">
                <div className="p-5 w-[95%] rounded-3xl justify-center items-center text-max-h-[95%]">
                    <div className="flex flex-col pt-10">
                        <h1 className="text-center font-bold text-3xl">BENEFITS</h1>
                        <p className="text-gray-400 text-sm text-center mt-2">Discover the benefits of <br />the project.</p>
                    </div>
                    <div className="overflow-x-auto flex mt-10 mx-auto md:w-[50%] w-[100%] gap-10 pb-5 snap-mandatory snap-x pl-10">
                        <div className="flex-shrink-0 w-[90%] mx-auto text-center border-2 border-gray-400 md:h-[650px] rounded-lg p-5 opacity-60 hover:opacity-100 duration-300 snap-center h-[max]">
                            <img
                                src={Benefit1}
                                alt=""
                                className="w-[200px] h-[200px] mx-auto mt-5 rounded-full shadow-lg object-cover hover:scale-105 duration-300"
                            />
                            <h1 className="mt-20 font-bold text-3xl ">Discovering</h1>
                            <p className="mt-2 md:w-[50%] w-[70%] mx-auto mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugit maiores alias exercitationem, voluptate, ducimus explicabo optio animi cum fugiat veritatis sequi adipisci amet nulla id debitis ut reiciendis non.</p>
                        </div>
                        <div className="flex-shrink-0 w-[90%] mx-auto text-center border-2 border-gray-400 md:h-[650px] rounded-lg p-5 opacity-60 hover:opacity-100 duration-300 snap-center h-[max]">
                            <img
                                src={Benefit2}
                                alt=""
                                className="w-[200px] h-[200px] mx-auto mt-5 rounded-full shadow-lg object-cover hover:scale-105 duration-300"
                            />
                            <h1 className="mt-20 font-bold text-3xl ">Fixing</h1>
                            <p className="mt-2 md:w-[50%] w-[70%] mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugit maiores alias exercitationem, voluptate, ducimus explicabo optio animi cum fugiat veritatis sequi adipisci amet nulla id debitis ut reiciendis non.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Benefits;
