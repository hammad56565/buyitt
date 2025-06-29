import React from 'react'
import Title from '../components/Title'
import NewsLetterBox from '../components/NewsLetterBox'
import { assets2 } from '../assets/frontend_assets/assets2'

const Contact = () => {
  return (
        <div>
       <div className="text-2xl text-center pt-8 border-t border-gray-200">
        <Title text1={'ABOUT'} text2={'US'} />
       </div>
       <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img src={assets2.about_img} className='w-full md:max-w-[480px]' alt="" />
        <div className="flex flex-col justify-center items-start gap-6 text-gray-500">
        <p className='font-semibold text-xl text-gray-600'>Our Store</p>
        <p className="text-gr">54709 Willms Station <br />
Suite 350, Washington, USA</p>
      <p>Tel: (415) 555-0132 <br />
Email: admin@forever.com</p>
       <b className="font-semibold text-xl text-gray-600">Careers at Forever</b>
        <p>Learn more about our teams and job openings.</p>
        <button className='border border-black px-8 py-4 text-sm text-black hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
         </div>
       </div>
      
       <NewsLetterBox />

    </div>
  )
}

export default Contact
