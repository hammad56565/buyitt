import React, { useContext } from 'react'
import Title from '../components/Title'
import { ShopContext } from '../context/ShopContext'

const Order = () => {
  const {products,currency} = useContext(ShopContext)
   return (
    <div className='border-t pt-16'>
      <div className="text-2xl">
       <Title text1={'MY'} text2={'ORDERS'} />
    </div>
    {products.slice(1,4).map((item,index)=>(

    <div key={index} className="py-4 border-t border-b border-gray-300 text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div className="flex items-start gap-6 text-sm">
        {console.log(item.image[0])}
        <img src={item.image[0]} className='w-16 sm:w-20' alt="" />
        <div>
          <p className="sm:text-base font-medium">{item.name}</p>
           <div className="flex items-center gap-3 mt-1 text-base text-gray-700">
               <p>{item.price}{currency} </p>
               <p>Quantity:1</p>
               <p>Size:L</p>
           </div>
           <p className="mt-1">Date <span className="text-gray-400">24 Jul 25</span></p>
           <p className="mt-1">Payment Method <span className="text-gray-400">Cod</span></p>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-between">
      <div className="flex items-center gap-2">
        <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
        <p className="text-sm md:text-base">Order Placed</p>
      </div>
      <button className="border px-4 py-2 text-sm border-gray-200 text-gray-700 font-medium font-semibold rounded-sm">Track Order</button>
      </div>
    </div>
    ))
    }
    </div>
  )
}

export default Order
