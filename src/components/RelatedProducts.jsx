import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import Productitem from './Productitem'; 
const RelatedProducts = ({category,subCategory}) => {
    const { products } = useContext(ShopContext);
    const [relatedProducts, setRelatedProducts] =useState([]);
    useEffect(() => {
       if(products.length > 0){
        let productsCopy = products.slice();
         productsCopy = productsCopy.filter((item) => category ===  item.category );
         productsCopy = productsCopy.filter((item) => item. subCategory ===  item.subCategory );
        //  console.log('related products', productsCopy);
            setRelatedProducts(productsCopy.slice(0, 5)); // Limit to 10 related products
        //  console.log('cat', category);
       }
    }, [products]);
  return (
    <div className='my-24'>
      <div className=" text-center text-3xl py-2">
        <Title text1={'RELATED'} text2={'PRODUCTS'} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {relatedProducts.map((item,index) => (
            <Productitem key={index}  id={item._id} name={item.name} image={item.image} description={item.description} price={item.price} />
        ))}
        {/* {console.log(id)} */}

      </div>
    </div>
  )
}

export default RelatedProducts
