import React, { useContext } from 'react'
import Title from './Title'
import { ShopContext } from '../context/ShopContext'

const CartTotal = () => {
    const {products,currency,getCartAmount,delivery_fee,navigate} = useContext(ShopContext)
  return (
    <>
            <div className="w-full">
          <div className="text-2xl">
      <Title text1={'CART'} text2={'TOTAL'} />
          </div>
          <div className="flex flex-col gap-2 mt-2 text-sm">
            <div className="flex w-full justify-between ">
            <p >Subtotal</p>
            <p>{getCartAmount()} {currency} </p>
          </div>
          
          <hr className='border-gray-300'/>
            <div className="flex w-full justify-between ">
            <p >delivery fee</p>
            <p> {delivery_fee}{currency} </p>
          </div>
          <hr className='border-gray-300' />
            <div className="flex w-full justify-between ">
            <p className='font-semibold'>Total</p>
            <p className='font-semibold'>{getCartAmount() + delivery_fee}  {currency} </p>
          </div>
          </div>
            </div>
          
        </>
       
  )
}

export default CartTotal
