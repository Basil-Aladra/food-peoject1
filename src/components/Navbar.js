import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineSearch,AiOutlineClose, AiFillTag} from 'react-icons/ai'
import {BsFillCartFill,BsFillSaveFill} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends,FaWallet} from 'react-icons/fa'
import {MdFavorite,MdHelp} from 'react-icons/md'
import { FaUserLarge } from "react-icons/fa6";
import "preline/preline";
import Login from './Login'
import { FaShoppingBasket } from "react-icons/fa";

const Navbar = () => {
    const [nav,setNav] = useState(false)

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4 '>
        {/**Left side */}
        <div className='flex items-center'>
            <div onClick={()=>setNav(!nav)} className='ccursor-pointer'>
                <AiOutlineMenu size={30}/>
            </div>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>Best <span className='font-bold'>Eats</span></h1>
            <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px'>
                <p className='bg-black text-white rounded-full p-2'>Delivery</p>
                <p className='p-2'>Pickup</p>
            </div>
        </div>
        
        {/* Search Input */}

        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px] drop-shadow-sm'> 
            <AiOutlineSearch size={20}/>
            <input className='bg-transparent p-2 focus:outline-none' type='text' placeholder='Search foods' />
        </div>

        {/* Cart button */}
       <div className='grid grid-cols-3 gap-2'>
        
        <button type="button" class="m-1 ms-0 relative py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium border-0  text-gray-800   disabled:opacity-50 dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
        <FaShoppingBasket size={25} className='mr-2'/>
            <span class="flex absolute top-0 end-9  ">
                <span class="animate-ping absolute inline-flex size-full rounded-full bg-red-400 opacity-75 dark:bg-red-600"></span>
                <span class="relative inline-flex text-xs bg-red-500 text-white rounded-full py-0.5 px-1.5">
                9+
                </span>
            </span>
            </button>


         <Login/>
       </div>

        {/*Modile Menu */}
        {/*Overlay*/}
        {nav ? <din className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></din>
        : ''}
        

        {/*Side drawer menu */}
        <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' 
        : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
            <AiOutlineClose onClick={()=>setNav(!nav)}
             size={30} className='absolute right-4 top-4 cursor-pointer'/>
            <h2 className='text-2xl p-4'>Best<span className='font-bold'>Eats</span></h2>
            <nav>
                <ul className='flex flex-col p-4 text-gray-800'>
                    <li className='text-xl py-4 flex '>
                       <TbTruckDelivery size={25} className='mr-4'/>Orders
                    </li>

                    <li className='text-xl py-4 flex '>
                        <MdFavorite size={25} className='mr-4'/>Favorites
                    </li>

                    <li className='text-xl py-4 flex '>
                        <FaWallet size={25} className='mr-4'/>Wallet
                    </li>

                    <li className='text-xl py-4 flex '>
                        <MdHelp size={25} className='mr-4'/>Hellp
                    </li>

                    <li className='text-xl py-4 flex '>
                        <AiFillTag size={25} className='mr-4'/>Parmotion
                    </li>

                    <li className='text-xl py-4 flex '>
                        <BsFillSaveFill size={25} className='mr-4'/>Best One
                    </li>

                    <li className='text-xl py-4 flex '>
                        <FaUserFriends size={25} className='mr-4'/>Invite Friends
                    </li>
                </ul>
            </nav>
        </div>

    </div>
  )
}

export default Navbar