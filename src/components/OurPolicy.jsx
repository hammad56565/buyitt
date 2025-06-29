import React from 'react'
import { assets2 } from '../assets/frontend_assets/assets2'

const OurPolicy = () => {
  return (
    <div className='flex flex-col justify-around items-center sm:flex-row text-gray-700 text-xs sm:text-sm  md:text-base gap-12 sm:gap-2 text-center py-20 '>
      
      <div className="">
        <img src={assets2.exchange_icon} className='w-12 m-auto mb-5'  alt="" />
        <p className="font-semibold">Our Policy</p>
        <p className="text-gray-400">We offer hassle free exchange policy</p>
      </div>
      <div className="">
        <img src={assets2.quality_icon} className='w-12 m-auto mb-5'  alt="" />
        <p className="font-semibold">7 Days Return Policy</p>
        <p className="text-gray-400">We provide 7 days free return policy</p>
      </div>
      <div className="">
        <img src={assets2.support_img} className='w-12 m-auto mb-5'  alt="" />
        <p className="font-semibold">Best customer support</p>
        <p className="text-gray-400">we provide 24/7 customer support</p>
      </div>
    </div>
  )
}

export default OurPolicy
