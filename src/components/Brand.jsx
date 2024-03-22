import React from 'react'
import bag from '../assets/mainBAG.jpeg'

const Brand = () => {
  return (
    <div className='w-11/12 m-auto pt-5'>
      <div className='bg-[#F5F5F5] w-full h-full flex justify-between p-20' >
         <div className="">
          <h1 className='font-light text-4xl'>Loved brands</h1>
          <h2 className='pt-4 pb-7 w-11/12'>At vero et accusamus et iusto odio dignissimos ducimus qui blanditiis deleniti atqu.</h2>
          <button className='w-[120px] border-b-2 border-black hover:border-white'>See all brands</button>
         </div>
         <div className="flex flex-col">
          <div className="flex">
          <img src={bag} alt="" className='w-44 h-20'/>
          <img src={bag} alt="" className='w-44 h-20'/>
          <img src={bag} alt="" className='w-44 h-20'/>
          </div>
          <div className="flex">
          <img src={bag} alt="" className='w-44 h-20'/>
          <img src={bag} alt="" className='w-44 h-20'/>
          <img src={bag} alt="" className='w-44 h-20'/>
          </div>
         </div>
      </div>
    </div>
  )
}

export default Brand
