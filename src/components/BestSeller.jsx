import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext.jsx'
import ProductItem from './ProductItem.jsx'
import Title from './Title.jsx'
const BestSeller = () => {

    const {products} = useContext(ShopContext)
    const [bestSellers,setBestSellers] = useState([])
    useEffect(() => {
       setBestSellers(products.slice(10,15))
    },[])
  return (
    <div className='py-10 '>
    <div className='pt-8 text-center text-3xl'>
        <Title text1={'BEST'} text2={'SELLERS'}/>
    <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Lorem ipsum dolor sit Nostrum magnam adipiscipora eos dolore, nihil repudiandae non dicta!</p>
    <div className='flex flex-col sm:flex-row items-center gap-4 gap-y-6 py-10'>
    {bestSellers.map((item, index) => (
              <ProductItem key={index}  id={item._id} image={item.image} name={item.name}  price={item.price}/>

    ))}
      {console.log(products.slice(0, 4))}
    </div>
    {/* hlo  */}
    </div>
    </div>
  )
}

export default BestSeller
