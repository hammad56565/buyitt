import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import  CartTotal from '../components/CartTotal'
import { assets2 } from '../assets/frontend_assets/assets2'
import { toast } from "react-toastify"

import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {
  const {navigate} = useContext(ShopContext)
  const [method,setMethod] = useState('cod')
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
       <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={'DELIVERY'} text2={'INFORMATION'}  />
        </div>
        <div className="flex gap-3">
          <input type="text" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" placeholder='First Name' id="" />
          <input type="text" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" placeholder='Last Name' id="" />
        </div>
          <input type="email" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" placeholder='Email' id="" />
          <input type="text" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" placeholder='Street' id="" />
      <div className="flex gap-3">
          <input type="text" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" placeholder='City' id="" />
          <input type="text" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" placeholder='State' id="" />
        </div>
      <div className="flex gap-3">
          <input type="text" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" placeholder='ZipCode' id="" />
          <input type="text" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" placeholder='Country' id="" />
        </div>
          <input type="phone" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" placeholder='Phone' id="" />
       </div>
       <div className="mt-8 ">
       <CartTotal />
       <div className="mt-12">
        <div className="inline-flex gap-2 items-center mb-3">
                  <Title  text1={'PAYMENT'} text2={'METHOD'} />
       </div>
       <div className="flex gap-3 flex-col lg:flex-row">
        <div onClick={()=>toast.warn('Stripe is disabled in demo, use COD')} className="flex items-center gap-3 border border-gray-200 p-2 px-3 cursor-pointer">
          <p onClick={()=>setMethod('stripe')} className={`min-w-3.5 h-3.5 border border-gray-200 rounded-full ${method === 'stripe'? 'bg-green-500' :  ''}   `}></p>
          <img src={assets2.stripe_logo} className='h-5 mx-4' alt="" />
        </div>
        {/* <div onClick={()=>toast.warn('RazorPay is disabled in demo, use COD')} className="flex items-center gap-3 border border-gray-200 p-2 px-3 cursor-pointer"> */}
        <div onClick={()=>toast.warn('RazorPay is disabled in demo, use COD')} className="flex items-center gap-3 border border-gray-200 p-2 px-3 cursor-pointer">
          <p onClick={()=>setMethod('razorPay')} className={`min-w-3.5 h-3.5 border border-gray-200 rounded-full ${method === 'razorPay'? 'bg-green-500' :  ''}   `}></p>
          <img src={assets2.razorpay_logo} className='h-5 mx-4' alt="" />
        </div>
        <div onClick={()=>setMethod('cod')} className="flex items-center gap-3 border border-gray-200 p-2 px-3 cursor-pointer">
          <p  className={`min-w-3.5 h-3.5 border border-gray-200 rounded-full ${method === 'cod'? 'bg-green-500' :  ''}   `}></p> 
          <p  className="text-gray-500 text-sm font-medium mx-4 ">CASH ON DELIVERY</p> 
        </div>
       </div>
       </div>
 
        <div className=" w-full text-end">
            <button onClick={()=> navigate('/orders')} className='bg-black text-white text-sm my-8 px-8 py-3 justify-end'>PROCEED TO CHECKOUT</button>
        </div> 


       </div>

    </div>
  )
}

export default PlaceOrder
