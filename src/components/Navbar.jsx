
import {assets2} from '../assets/frontend_assets/assets2.js'
import {assets} from '../assets/admin_assets/assets.js'
import {NavLink,Link} from 'react-router-dom'
import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext.jsx'
// import frontend from '../assets/frontend_assets'

const Navbar = () => {
    // console.log(assets.profile_icon)
    // console.log(assets.logo)
    const [visible, setVisible] = useState(false);
    const {setShowSearch ,getCartCount} = useContext(ShopContext);

  return (
    <div className='flex items-center justify-between py-5 font-medium'>
       <img src={assets2.logo}  className='w-36' /> 
       <ul className='hidden sm:flex gap-5 text-sm text-gray-600 '>
           <NavLink className='flex flex-col items-center gap-1' to="/">
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[1.5px] hidden  bg-gray-700' />
           </NavLink>
           <NavLink className='flex flex-col items-center gap-1' to="/collection">
            <p>COLLECTION</p>
            <hr className='w-2/4 border-none h-[1.5px] hidden  bg-gray-700' />
           </NavLink>
           <NavLink className='flex flex-col items-center gap-1' to="/about">
            <p>ABOUT</p>
            <hr className='w-2/4 border-none h-[1.5px] hidden  bg-gray-700' />
           </NavLink>
           <NavLink className='flex flex-col items-center gap-1' to="/contact">
            <p>CONTACT US</p>
            <hr className='w-2/4 border-none h-[1.5px] hidden  bg-gray-700' />
           </NavLink>
     
       </ul>
             
             <div className='flex gap-6 items-center'>
                
            <img src={assets2.search_icon} onClick={()=>setShowSearch(true)} className='cursor-pointer w-5' alt="" />
           <div className="group relative">
          <Link to="/login">   <img src={assets2.profile_icon} className='cursor-pointer w-5' alt="" /> </Link>
        <div className="group-hover:block hidden absolute dropdown-menu  right-0  pt-4 ">
            <div className="flex flex-col gap-2 w-36 text-gray-500 rounded bg-slate-100 px-5 py-3">
                  <p className="cursor-pointer hover:text-black">My Profile</p>
                 <Link to="/order">  <p className="cursor-pointer hover:text-black">Orders</p> </Link>
                  <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
        </div>
        </div>
         
         <Link to='/cart' className='relative'>
            <img src={assets2.cart_icon} className='cursor-pointer w-5 min-w-5' alt="" />
            <span className='text-center leading-4 aspect-square text-[8px] absolute right-[-5px] bottom-[-5px] w-4 bg-red-500  text-white  rounded-full px-1'>{getCartCount()}</span>
          </Link>
          <img onClick={()=>setVisible(true)} src={assets2.menu_icon} className='w-4 sm:hidden' alt="" />
       </div>

{/* SideBAR Menu for small screens */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`} >
       <div className="flex flex-col text-gray-600">
        <div onClick={()=>setVisible(false)} className="flex items-center  gap-5 p-3">
            <img src={assets2.dropdown_icon}  className='h-4 rotate-180' alt="" />
            <p>Back</p>
        </div>
            <NavLink onClick={()=>setVisible(false)} to='/' className= {({ isActive }) =>
     ` py-2 pl-6 border ${isActive ? 'bg-black text-white': 'text-gray-600' }`}>Home</NavLink>
            <NavLink onClick={()=>setVisible(false)} to='/collection' className= {({ isActive }) =>
     ` py-2 pl-6 border ${isActive ? 'bg-black text-white': 'text-gray-600' }`}>Collection</NavLink>
         
            <NavLink onClick={()=>setVisible(false)} to='/about' className= {({ isActive }) =>
     ` py-2 pl-6 border ${isActive ? 'bg-black text-white': 'text-gray-600' }`}>About</NavLink>
            <NavLink onClick={()=>setVisible(false)} to='/contact' className= {({ isActive }) =>
     ` py-2 pl-6 border ${isActive ? 'bg-black text-white': 'text-gray-600' }`}>Contact Us</NavLink>
       </div>
      </div>

      
    </div>
  )
}

export default Navbar
