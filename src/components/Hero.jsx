import React from 'react'
import { assets2 } from '../assets/frontend_assets/assets2'

const Hero = () => {
  return (
    <div>
    <div className='flex flex-col sm:flex-row border border-gray-400'>
        {/* LEFT SIDE OF COMP  */}
       <div className="flex w-full sm:w-1/2 flex-col justify-center items-center gap-4 py-10 sm:py-0">
       <div className=" text-[#414141]">
        <div className="flex items-center gap-2">
            <p className="w-8 h-[2px] md:w-11 bg-[#414141]"></p>
            <p className=" font-medium text-sm md:text-base">OUR BESTSELLERS</p>
        </div>
        <h1 className="prata-regular Inter text-3xl sm:py-3 lg:text-5xl !leading-relaxed">Latest Arrivals</h1>
        <div className="flex items-center gap-2">
            <p className=" font-medium text-sm md:text-base">SHOP NOW</p>
            <p className="w-8 h-[2px] md:w-11 bg-[#414141]"></p>
        </div>
        </div>
       </div>
       {/* right side  */}
       {/* <img src="/assets2/hero_img-DOCOb6wn.png" alt="" /> */}
       <img src={assets2.hero_img} className='w-full sm:w-1/2' alt="" />
       </div>
    </div>
  )
}

export default Hero
