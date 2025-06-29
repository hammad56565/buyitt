import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets2 } from '../assets/frontend_assets/assets2'
import Title from '../components/Title'
// import ProductItem from '../components/ProductItem'
import ProductItem from '../components/Productitem'; 


const Collection = () => {

  const {products,search,showSearch} = useContext(ShopContext) 
  const [showFilter, setShowFilter] = useState(false)
  const [FilteredProducts, setFilteredProducts] = useState([])
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [sortType, setSortType] = useState('relevant')
  const toggleCategory = (e) => {
    const value = e.target.value
    if (category.includes(value)) {
      setCategory(  prev => prev.filter(item => item !== value))
    } else {
      setCategory(prev =>  [...prev, value])
    }
  }
  const toggleSubCategory = (e) => {
    const value = e.target.value
    if (subCategory.includes(value)) {
      setSubCategory(prev => prev.filter(item => item !== value))
    }
    else {
      setSubCategory(prev => [...prev, value])
    }
  }

  const applyFilter = () => {
           let productCopy = products.slice(0)
           if (search && showSearch) {
             productCopy = productCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
            
           }
           if (category.length > 0) {
             productCopy = productCopy.filter(item => category.includes(item.category))
           }
           if (subCategory.length > 0) {
             productCopy = productCopy.filter(item => subCategory.includes(item.subCategory))
            }
            setFilteredProducts(productCopy)
  }

  const sortProduct = ()=>{
    let fpCopy = FilteredProducts.slice()
    console.log('fpCopy',fpCopy)
    switch (sortType) {
      case 'low-to-high':
        setFilteredProducts(fpCopy.sort((a, b) => a.price - b.price))
        break;
      case 'high-to-low':
        setFilteredProducts(fpCopy.sort((a, b) => b.price - a.price))
        break;
      default:
    applyFilter()
      }
  }

  useEffect(() => {
      setFilteredProducts(products)
  },[])
  useEffect(() => {
     applyFilter()
  },[category,subCategory,search,showSearch])
  // useEffect(() => {
  //     console.log(subCategory)
  // },[subCategory])
  useEffect(() => {
       sortProduct()
  },[sortType])
  return (
    <div  className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t  border-gray-200'>
       {/* Left Side Filter  */}
       {/* {console.log('filter',FilteredProducts)} */}
          <div className="min-w-60">
            <h2 className={`my-2 text-xl flex items-center cursor-pointer gap-2` }>Filter
              <img onClick={()=> setShowFilter(!showFilter)} src={assets2.dropdown_icon} className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} alt="" />
            </h2>
            {/* Collection Filter */}
            <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'max-sm:hidden'}` }>
              <p className="mb-3 text-sm font-medium">CATEGORIES</p>
              <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                <p className="flex gap-2"><input type="checkbox" className='w-3' value={'Men'} onChange={toggleCategory} />Men</p>
                <p className="flex gap-2"><input type="checkbox" className='w-3' value={'Women'}  onChange={toggleCategory} />Women</p>
                <p className="flex gap-2"><input type="checkbox" className='w-3' value={'Kids'} onChange={toggleCategory} />kids</p>
              </div>
            </div>
            {/*  Type Filter */}
            <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? ' ' : 'max-sm:hidden'}` }>
              <p className="mb-3 text-sm font-medium">TYPE</p>
              <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                <p className="flex gap-2"><input type="checkbox" className='w-3' value={'Topwear'}  onChange={toggleSubCategory} />Topwear</p>
                <p className="flex gap-2"><input type="checkbox" className='w-3' value={'Bottomwear'} onChange={toggleSubCategory}  />Bottomwear</p>
                <p className="flex gap-2"><input type="checkbox" className='w-3' value={'Winterwear'}  onChange={toggleSubCategory} />Winterwear</p>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE  */}
        <div className="flex-1">
          <div className="flex justify-between text-base sm:text-2xl mb-4">
            <Title text1={'ALL'} text2={'COLLECTION'} />
            {/* PRODUCT SORT  */}
            <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
              <option value="default">Default</option>
              <option value="low-to-high">Sort by: Relevant</option>
              <option value="low-to-high">Sort by: Low to Hign</option>
              <option value="high-to-low">Sort by: High to Low</option>
            </select>
            {/* {console.log('sort',sortType)} */}
          </div>
          {/* Product mapping  */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
            {FilteredProducts.map((item,index) => (
               <ProductItem key={index} name={item.name} id={item._id} image={item.image} price={item.price} />
             ))}
          </div>
        </div>

    </div>
  )
}

export default Collection
