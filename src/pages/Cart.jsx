import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import { assets2, products } from '../assets/frontend_assets/assets2'
import CartTotal from '../components/CartTotal'



const Cart = () => {
  const {cartItems,cartData,currency,updateQuantity,navigate} = useContext(ShopContext)
  const [itemsId,setItemsId] = useState([])
  // console.log('cart', cartItems)
  // console.log('cart', cartItems[itemId])
  
  useEffect(() => {
    const tempData = []
    for (const itemId in cartItems) {
      // console.log(itemId)
      const sizes = cartItems[itemId]
      for (const size in sizes) {
        const quantity = sizes[size]
        if(quantity>0){(

         tempData.push({ itemId, size, quantity })
        )}
      }
    }
    // console.log(tempData)
    setItemsId(tempData)
    // console.log(itemsId)
  }, [cartItems])
  // for(const itemId in cartItems){
  //   // console.log(cartItems[item])
  //    const sizes = cartItems[itemId];
  //   for(const size in sizes){
  //       const quantity = sizes[size]; 
  //    console.log(`Item ID: ${itemId}, Size: ${size}, Quantity: ${quantity}`);
  //   }
  //   // setItemsId(itemId)
  // }
  return (
    <div className='border-t pt-14'>
      <div className=" text-2xl mb-3">
        <Title text1={'YOUR'}  text2={'CART'}/>
      </div>
      <div>
        {/* {console.log('prod' ,cartItems.itemId)} */}
        {itemsId.map((itemsId2,index)=>{
          const productData = products.find((product)  => product._id === itemsId2.itemId)
          // console.log('prod' ,productData)
          return(
            <div key={index} className="py-4 border-t border-b border-gray-200 text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4">
               <div className=" flex items-start gap-6">
                <img src={productData.image[0]} alt="" className="w-16 sm:w-20" />
                <div>
                  <p className="text-xs sm:text-lg font-medium">
                    {productData.name}
                  </p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>{productData.price}{currency} </p>
                    <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">{itemsId2.size} </p>
                  </div>
                </div>
               </div>
               <input  onChange={(e)=> e.target.value === '' || e.target.value === '0' ? null :updateQuantity(itemsId2.itemId,itemsId2.size,Number(e.target.value))} type='number' className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' min={1} defaultValue={itemsId2.quantity} />
               <img  onClick={()=>updateQuantity(itemsId2.itemId,itemsId2.size,0)} src={assets2.bin_icon} className="w-4 mr-4 sm:w-5 cursor-pointer" />
      </div>
          )
     })}
      </div>
       <div className='flex justify-end my-20'>
        <div className="w-full sm:w-[450px]">

      <CartTotal />
        <div className=" w-full text-end">
            <button onClick={()=> navigate('/order')} className='bg-black text-white text-sm my-8 px-8 py-3 justify-end'>PROCEED TO CHECKOUT</button>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Cart
