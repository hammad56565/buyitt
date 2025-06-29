import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Cart from './pages/Cart.jsx'
import Collection from './pages/Collection.jsx'
import Order from './pages/Order.jsx'
import PlaceOrder from './pages/PlaceOrder.jsx'
import Product from './pages/Product.jsx'
import Login from './pages/Login.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import SearchBar from './components/SearchBar.jsx'
 import Contact from './pages/Contact.jsx'
  import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  return (
    <div  className='px-4 sm:px-[5vw] md:px-[10vw] lg:px-[9vw]  '>
      <ToastContainer/>
        <Navbar/>
     <SearchBar />
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/collection" element={<Collection/>} />
      <Route path="/order" element={<Order/>} />
      <Route path="/place-order" element={<PlaceOrder/>} />
      <Route path="/product/:productId" element={<Product/>} />
      <Route path="/login" element={<Login/>} />
     </Routes>
           <Footer />
     
    </div>
  )
}

export default App
