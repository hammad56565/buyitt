import React, { useContext, useEffect } from 'react'
 import { ShopContext } from '../context/ShopContext.jsx'
import { assets2 } from '../assets/frontend_assets/assets2.js'
import { useLocation } from 'react-router-dom'
const SearchBar = () => {

    const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext)
    const location = useLocation()
    useEffect(() => {
        if (location.pathname === '/search') {
            setShowSearch(true)
            // console.log('Search bar is shown', (location.pathname === '/search'))
        } else {
            setShowSearch(false)
        }
    }, [location])
    // console.log('location showsearch', showSearch)
    // console.log('locaation', (location.pathname === '/search'))
return showSearch ? (
  <div className='border-t border-b border-gray-200 bg-gray-50 text-center'>
     <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
      <input type="text" className='flex-1 outline-none bg-inherit text-sm' onChange={(e)=>setSearch(e.target.value)} value={search}  placeholder='Search'/>
      <img src={assets2.search_icon} className='w-4' />
      {/* <input type="text" placeholder='hamma' onChange={(e)=>(e.target.value)} value={search} id="" /> */}
     </div>
     <img src={assets2.cross_icon} onClick={()=>setShowSearch(false)} className='inline w-3 cursor-pointer' />
     {console.log('Current pathname:', location.pathname)}
  </div>
) : null }


export default SearchBar
