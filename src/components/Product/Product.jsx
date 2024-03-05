import React from 'react'
import Product2 from '../../assets/product.png';

const Product = () => {
  return (
    <>
        <div className="h-screen bg-black">
            <div>
                <h1 className="text-center font-bold text-3xl pt-10">PRODUCT</h1>
                <p className="text-gray-400 text-sm text-center mt-2">Discover the product</p>
            </div>
            <div>
                <img 
                    src={Product2}
                    alt="" 
                    className="w-[100px] h-[100px] mx-auto shadow-lg object-cover"    
                />
            </div> 
        </div> 
    </>
  )
}

export default Product