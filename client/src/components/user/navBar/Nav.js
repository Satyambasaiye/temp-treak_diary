/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

export default function Nav () {
    let [open,setOpen]=useState(false);

    const MenuBarItems = ['Home','Upcoming Trek','City','Our story','Contact Us'];

    return (

    <div className='shadow-md z-10 fixed bg-white w-full top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-0 md:px-10 px-7'>
            <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800 '>
                <img src="/images/logo.png" alt="Logo" className=' h-20 w-20' />
            </div>
      
            <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
             <ion-icon name={open ? 'close':'menu'}></ion-icon>
            </div>

            <ul className={`md:flex md:items-center md:py-0 py-5 absolute md:static bg-white md:z-auto z-10 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? ' top-19 rounded-b-xl opacity-100':'top-[-490px]'} md:opacity-100 opacity-0`}> 

            {MenuBarItems.map((item) => (
                <li className='md:ml-8 text-xl md:my-0 my-7'>
                <a  className='text-gray-800 hover:text-gray-400 duration-500 cursor-pointer'>{item}</a>
                </li>)
                )
            }
            </ul>
      </div>
    </div>
  )
}
