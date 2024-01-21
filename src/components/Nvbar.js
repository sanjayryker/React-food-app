import React, { useState } from 'react'
import {AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs"
import { TbTruckDelivery } from "react-icons/tb"
import { MdFavorite, MdHelp } from "react-icons/md"
import { FaUser, FaWallet } from "react-icons/fa"

const Nvbar = () => {

    const[nav, setNav] = useState(false)

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4 gap-1'>

        {/*Side Item */}

        <div className='flex items-center gap-5'>
            <div className='cursor-pointer'>
                <AiOutlineMenu size={30} onClick={()=> setNav(!nav)}/>
            </div>
            <h1 className='text-2xl px-2 sm:text-3xl lg:text-4xl'>Ryker <span className='font-bold'>Foods</span></h1>
            <div className='hidden sm:flex bg-gray-200 rounded-full p-1 text-[14px]'>
                <p className='bg-black text-white rounded-full p-2'>Delivery</p>
                <p className='p-2'>Pickup</p>
            </div>
        </div>

        {/* Search Box*/}

        <div className='hidden sm:flex bg-gray-200 rounded-full w-[200px] lg:w-[500px] sm:w-[500px] px-2 items-center'>
            <AiOutlineSearch size={25} className='mr-2'/>
            <input type='text' placeholder='Search Items' className='bg-transparent focus:outline-none w-full py-2 items-center'/>
        </div>

        {/* Cart */}
        
        <button className='bg-black text-white sm:flex py-2 rounded-full'><BsFillCartFill size={20} className='mr-2'/><span className='hidden sm:flex'>Cart</span></button>
        
        {/* Overlay */}

        {nav ?<div className='bg-black/80 fixed z-10 h-screen w-full top-0 left-0'></div> :''}
        

        {/* SideBar */}

        <div className= {nav ? 'fixed bg-white w-[320px] h-screen z-10 top-0 left-0 duration-500 cursor-pointer' : 'fixed bg-white w-[320px] h-screen z-10 top-0 left-[-100%] duration-300 cursor-pointer' }>

            <AiOutlineClose size={30} className='absolute right-4 top-4 ' onClick={() => setNav(!nav)}/>
            <h2 className='text-2xl p-4'> Ryker <span className='font-bold'>Eats</span></h2>
            <ul className='flex flex-col p-4 '>
                <li className='flex text-xl py-4'><TbTruckDelivery size={30} className='mr-4'/> Orders </li>
                <li className='flex text-xl py-4'><MdFavorite size={30} className='mr-4'/> Favourites </li>
                <li className='flex text-xl py-4'><FaWallet size={30} className='mr-4'/> Wallet </li>
                <li className='flex text-xl py-4'><MdHelp size={30} className='mr-4'/> Help </li>
                <li className='flex text-xl py-4'><AiFillTag size={30} className='mr-4'/> Promotions </li>
                <li className='flex text-xl py-4'><BsFillSaveFill size={30} className='mr-4'/> Best-One </li>
                <li className='flex text-xl py-4'><FaUser size={30} className='mr-4'/> Invite Friends </li>
            </ul>
        </div>
    </div>
  )
}

export default Nvbar