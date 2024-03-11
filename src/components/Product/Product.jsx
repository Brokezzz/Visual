import React from 'react'
import Product2 from '../../assets/product.png';

const Product = () => {
  return (
    <>
        <div className="h-screen bg-black pt-10">
            <div>
                <h1 className="text-center font-bold text-3xl pt-10">PRODUCT</h1>
                <p className="text-gray-400 text-sm text-center mt-2">Discover the product</p>
            </div>
            <div className="grid items-center grid-cols-1 md:grid-cols-3 lg:p-40 md:p-20 mt-20 md:mt-0 ">
                <p className="text-black text-sm bg-white shadow-md shadow-white rounded-lg p-5 md:m-0 m-5">Creating an innovation in the field, we are so happy to present</p>
                <img 
                    src={Product2}
                    alt="" 
                    className="w-[500px] md:h-[500px] h-[400px] mx-auto shadow-lg object-contain mt-20 p-10 md:p-0"    
                />
               <p className="text-black text-sm bg-white shadow-md shadow-white rounded-lg p-5 md:m-0 m-5">Lorem ipsum dolor sit amet consectetur adipisicin</p>
            </div> 
        </div> 
    </>
  )
}

export default Product