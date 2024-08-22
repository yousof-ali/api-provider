import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import './navbar.css'
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const links = (
    <>
    <li><NavLink to={"/"}>Home</NavLink></li>
    <li><NavLink to={"/country"}>Country</NavLink></li>
    <li><NavLink to={"/about"}>About</NavLink></li>
    <li><NavLink to={"/Product"}>Product</NavLink></li>
    </>
  )
  const [toggle,settoggle]=useState(true)

  const handlemenu = ()=>{
    settoggle(!toggle)
  }

    return (
        <div className='flex justify-between relative p-2 items-center max-w-[1800px] mx-auto bg-slate-300'>
          <div>
            <h2 className='text-2xl font-bold'>logo</h2>
          </div>
          <div>
            <ul className='md:flex gap-6 hidden '>
               {links}
            </ul>
            <div onClick={handlemenu} className='text-2xl md:hidden'>
              {
                 toggle ? <IoMenu />:<RxCross2 />
              }
            
            </div>
          </div>
          <div className={`absolute md:hidden top-12 ${toggle?"-right-24":"right-0"} bg-slate-300 p-4`}>
            <ul className='space-y-2'>
              {links}
            </ul>

          </div>
        </div>
    );
};

export default Navbar;