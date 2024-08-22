import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = (
    <>
    <li><NavLink to={"/"}>Home</NavLink></li>
    <li><NavLink to={"/country"}>Country</NavLink></li>
    <li><NavLink to={"/about"}>About</NavLink></li>
    <li><NavLink to={"/Product"}>Product</NavLink></li>
    </>
  )
    return (
        <div>
          <div>
            <h2 className='text-2xl font-bold'>logo</h2>
          </div>
          <div>
            <ul>
               {links}
            </ul>
          </div>
        </div>
    );
};

export default Navbar;