import React from 'react';
import Vr from '../../assets/vr.jpg';
import { MdSupervisorAccount } from "react-icons/md";
import { Gi3DStairs } from "react-icons/gi";
import { FiArrowDown } from "react-icons/fi";
import { FiCircle } from "react-icons/fi";
import Vr2 from '../../assets/vr2.jpg';

const Hero = () => {
  return (
    <>
      <div className="h-[max] bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 p-5 gap-10">
          <div className="border-2 border-gray-400 h-[100%] w-[100%] mx-auto rounded-3xl">
            <h1 className="font-bold text-2xl text-left mt-10 md:ml-10 ml-10 shadow-lg border-l-2 pl-5 hover:underline w-[10%] duration-300 cursor-pointer">VISUAL</h1>
            <p className="md:ml-10 mt-10 lg:text-8xl md:text-5xl text-5xl p-5 md:p-0 max-w-[90%] w-[90%] whitespace-normal h-[140px] md:h-[90px] lg:h-[250px]">Transforming Imagination <br />Into Reality</p>
            <div className="flex flex-row md:p-8 gap-5 w-[100%] p-2">
              <button className="w-[60%] border-2 border-gray-500 mt-20 bg-black rounded-3xl font-bold flex items-center justify-center hover:scale-105 duration-300 hover:bg-gray-500 max-w-[30%]">
                <FiArrowDown className="text-white text-3xl mr-2" />
                Discover
              </button>
              <button className="w-[60%] border-2 border-gray-500 mt-20 bg-black rounded-3xl font-bold flex items-center justify-center hover:scale-105 duration-300 hover:bg-gray-500 max-w-[30%]">
              <FiCircle className="text-white text-3xl mr-2 p-1" />
                Whoami
              </button>
              <button className="w-[60%] border-2 border-gray-500 mt-20 bg-black rounded-3xl font-bold flex items-center justify-center hover:scale-105 duration-300 hover:bg-gray-500 max-w-[30%]">
                <Gi3DStairs  className="text-white text-3xl mr-2" />
                Lessons
              </button>
            </div>
            <div className="flex lg:flex-row md:p-8 gap-5 w-[100%] p-2 flex-col">
              <img 
                src={Vr2}
                alt="" 
                className="md:w-[400px] lg:w-[800px] border-2 md:h-[330px] w-[350px] mx-auto h-[200px] border-gray-500 rounded-3xl shadow-lg object-cover md:max-w-[50%] lg:max-w-[60%]"  
              />
              <div className="flex flex-col gap-2 md:mt-20">
                <h1 className="mx-auto font-sm text-2xl border-[1px] h-[50px] rounded-full border-gray-500 py-2 px-2">Visualize</h1>
                <p className="font-bold md:text-5xl text-3xl mx-auto items-center text-center">ACHIEVE IT.</p>
              </div>
            </div>
          </div>
          <div className="h-[95%] w-[100%] mx-auto rounded-3xl">
            <MdSupervisorAccount className="absolute text-white hover:scale-105 duration-300 cursor-pointer  border-2 border-white text-8xl ml-5 bg-black rounded-full p-2 mt-5 shadow-lg "/>
            <img 
              src={Vr} 
              alt="Vr Image"
              className="h-screen w-[100%] mx-auto rounded-3xl shadow-lg object-cover "  
            />  
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero;
