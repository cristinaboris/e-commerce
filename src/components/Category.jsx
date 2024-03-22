import React from 'react'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'

const Category = () => {
  return (
    <div className='md:flex justify-center w-full h-full mt-7  gap-3 '>
        <div className="max-w-[652px] h-[790px] relative">
           <div className="absolute top-8 left-8">
           <h2 className='text-lg leading-5 font-bold'>Coats</h2>
           <h2 className='w-[50px] border-b-2 border-black hover:border-white'>Explore</h2>
           </div>
        <img className='w-full h-full' src={img1} alt="" />
        </div>
      <div className="">
    <div className="relative">
    <div className="absolute bottom-8 left-8">
           <h2 className='text-lg leading-5 font-bold'>Purses</h2>
           <h2 className='w-[50px] border-b-2 border-black hover:border-white'>Explore</h2>
           </div>
        <img className='h-[380px] w-[652px] mb-7' src={img2} alt="" />
    </div> 
    <div className="relative">
    <div className="absolute bottom-8 left-8">
           <h2 className='text-lg leading-5 font-bold'>Accessories</h2>
           <h2 className='w-[50px] border-b-2 border-black hover:border-white'>Explore</h2>
           </div>
        <img className='h-[380px] w-[652px]' src={img3} alt="" /></div>
      </div>
    </div>
  )
}

export default Category
