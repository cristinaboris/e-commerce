import React from 'react'
import back from '../assets/back.png'
import Header from './common/Header'

const Banner = () => {
  return (
    <div className='relative w-full h-[780px]' >
        <img className='absolute w-full h-full' src={back} alt="" />
<Header/>
<div className="absolute px-[8%] py-[11%]">
<div className=" ">
    <h2 className='font-semibold'>New Arrivals</h2>
 <div className='h-[95px] leading-10 font-medium text-4xl w-[320px]'>
    <h5 className=''>Create your dream shop instantly.</h5></div>
<div className='w-[360px] leading-7'>
    <p>Keep your everyday style chic and on-trend with our selection 20+ styles to choose from.</p></div>
</div>
<div className="">
    <button className='w-[172px] h-[45px] bg-black text-white text-center mt-4 hover:bg-gray-100 hover:text-black' >See Collection</button>
</div>
</div>
    </div>
  )
}

export default Banner
