import React from 'react'
import { assets } from '../assets/admin_assets/assets'
import { assets2 } from '../assets/frontend_assets/assets2'

const Footer = () => {
  return (
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-10 mt-40 my-10 '>
     <div className="">
        <img src={assets2.logo} className='mb-5 w-32' alt="" />
        <p className="w-full md:w-2/3 text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
     </div>
     <div className="nav-footer">
        <p className="font-medium text-xl text-gray-700 mb-5">COMPANY</p>
        <ul className='text-gray-600 gap-1'>
            <li >Home</li>
            <li >About Us</li>
            <li >Privacy Policy</li>
            <li >Delivery</li>
        </ul>
     </div>
     <div className="nav-footer">
        <p className="font-medium text-xl text-gray-700 mb-5">GET IN TOUCH</p>
        <ul className='text-gray-600 gap-1'>
            <li >+1-000-000-0000</li>
            <li >greatstackdev@gmail.com</li>
            <li >Instagram</li>
        </ul>
     </div>
    </div>
  )
}

export default Footer
