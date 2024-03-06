import React from 'react'
import logo from '../../assets/logo.png'
import down from '../../assets/down.png'
import search from '../../assets/search.webp'
import person from '../../assets/person.png'
import  cartMain1 from '../../assets/cartMain1.png'

const Header = () => {

const navbarTitle = ['Home', 'Shop', 'Product', 'Pages']

const navbarIcons = [search,person,cartMain1]

  return (
    <header className='h-20 bg-pink-50 w-full '>
      <nav className='flex justify-between items-center relative px-[5%] h-full w-full'>
        
        <div className="text-center">
<img src={logo} alt="" />
        </div>
        <div className="flex gap-6">

{navbarTitle.map((nav) => {
    return  <div className='flex justify-center items-center gap-2'><h3 className='hover:text-red-100'>{nav} </h3> <img className='w-2 h-2' src={down} alt="" /></div>
})}
</div>
<div className="flex gap-5">
{navbarIcons.map((icon) => {
    return <img className='w-5 h-4 hover:bg-slate-50' src={icon} alt="" />
})}
</div>
      </nav>
    </header>
  )
}

export default Header
