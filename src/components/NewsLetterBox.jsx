import React from 'react'

const NewsLetterBox = () => {
  return (
    <div className='text-center'>
      <p className="text-2xl text-gray-800 font-medium">Subscribe now & get 20% off</p>
      <p className=" text-gray-400 mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <form className="flex w-full sm:w-1/2 mx-auto pl-3 gap-3 border border-gray-200 my-6 ">
        <input type="email" placeholder='Enter your email' className='w-full sm:flex-1   focus:outline-none ' />
        <button className='bg-black text-white text-xs px-10 py-4'>Subscribe</button>
      </form>
    </div>
  )
}

export default NewsLetterBox
