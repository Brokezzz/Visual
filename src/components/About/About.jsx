import React from 'react'
import Vr from '../../assets/vrdesign.jpg';
import { FaRegLightbulb } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa6";
import { Gi3DGlasses } from "react-icons/gi";

const About = () => {
  return (
    <>
        <div className="h-screen bg-black flex justify-center items-center">
          <div className="p-5 mx-auto w-[90%] rounded-3xl h-[95%] justify-center items-center text-center border-2 border-gray-500 max-h-[100%] ">
            <div className="flex flex-col pt-20">
                <h1 className="text-center font-bold text-3xl">WHOAMI</h1>
                <p className="text-gray-400 text-sm text-center mt-2">Discover who is <br />behind the project.</p>
            </div>
            <div>
              <FaRegLightbulb className="mx-auto animate-spin text-7xl bg-white text-black py-2 px-2 rounded-full mt-20"/>
              <div className="grid grid-cols-3 md:grid-cols-3 mx-auto md:w-[38%] w-[90%] items-center">
                <Gi3DGlasses className="mx-auto animate-pulse text-7xl bg-white text-black py-2 px-2 rounded-full mt-10"/>
                <div className="text-center mt-10 flex flex-col mx-auto">
                  <img
                    src={Vr} 
                    alt="" 
                    className="w-[220px] h-[220px] mx-auto rounded-full shadow-lg object-cover hover:scale-105 duration-300"  
                  />
                </div>
                <FaHandshake className="animate-pulse mx-auto text-7xl bg-white text-black py-2 px-2 rounded-full mt-10"/>
              </div>
              <p className="text-sm text-gray-400 mt-20 mx-auto text-center md:w-[40%] w-[60%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam laboriosam architecto fugit recusandae doloribus corrupti culpa enim? Magni porro, corporis nulla fugit in pariatur facilis eveniet! Asperiores alias natus saepe!</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default About
