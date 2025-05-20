import React from 'react';
import { Link, NavLink } from 'react-router';
import logoImage from '../assets/logoImage.jpg'
const NavBar = () => {
    return (
    <div>
    <div className="navbar bg-gradient-to-r from-[#808000] via-[#556B2F] to-[#6B8E23] shadow-md font-serif sticky top-0 z-50 md:px-4">
    <div className="navbar-start">
     <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
        <path strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h10m-10 6h16" />
        </svg>
      </div>
        <ul tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-52">
        <li>
        <NavLink to="/" className={({ isActive }) => isActive ? "text-green-700 font-semibold" : "hover:text-green-700"}>Home
        </NavLink>
        </li>
        <li>
        <NavLink to="/all-plants" className={({ isActive }) =>isActive ? "text-green-700 font-semibold" : "hover:text-green-700"}>All Plants</NavLink>
        </li>
        <li>
        <NavLink to="/add-plant" className={({ isActive }) => isActive ? "text-green-700 font-semibold" : "hover:text-green-700"}>Add Plant</NavLink>
        </li>
        <li>
        <NavLink to="/my-plants" className={({ isActive }) =>
        isActive ? "text-green-700 font-semibold" : "hover:text-green-700"}>My Plants</NavLink>
        </li>
        </ul>
        </div>
        <div className='flex  items-center'>
            <div><img className='w-14 md:w-16 rounded-full ' src={logoImage} alt="" /></div>
            <div className="btn btn-ghost text-xl md:text-4xl lg:text-4xl text-stone-100 font-semibold">𝘉𝘰𝘯𝘴𝘢𝘪 𝘉𝘭𝘪𝘴𝘴</div>
        </div>
       </div>

      <div className="navbar-center hidden lg:flex">
        <div className="flex space-x-5 text-[17px]">
        <NavLink to="/" className={({ isActive }) => 
        isActive ? "text-white font-bold text-2xl underline underline-offset-4" : "hover:text-slate-600 text-2xl text-white font-semibold"}>𝗛𝗼𝗺𝗲</NavLink>
        <NavLink to="/plants" className={({ isActive }) =>isActive ? "text-white font-bold text-2xl underline underline-offset-4" : "hover:text-slate-600 text-2xl  text-white font-semibold"}>𝗔𝗹𝗹 𝗣𝗹𝗮𝗻𝘁𝘀</NavLink>
        <NavLink to="/add-plant" className={({ isActive }) => isActive ? "text-white font-bold text-2xl underline underline-offset-4" : "hover:text-slate-600 text-2xl  text-white font-semibold"}>𝗔𝗱𝗱 𝗣𝗹𝗮𝗻𝘁</NavLink>
        <NavLink to="/my-plants" className={({ isActive }) =>
        isActive ? "text-white font-bold text-2xl underline underline-offset-4" : "hover:text-slate-600 text-2xl  text-white font-semibold"}>𝗠𝘆 𝗣𝗹𝗮𝗻𝘁𝘀</NavLink>
        </div>
      </div>

    <div className="navbar-end" />
    <div className='flex gap-3'>
        <NavLink to="/login" className={({ isActive }) =>
  `btn btn-sm ${isActive ? "text-black font-bold text-xl " : "btn-outline hover:text-slate-600 bg-slate-300 text-lg md:text-xl lg:text-2xl font-semibold"}`}>𝗟𝗼𝗴𝗶𝗻</NavLink>
    <NavLink to="/login" className={({ isActive }) =>
    `btn btn-sm ${isActive ? " text-white font-semibold" : "btn-outline bg-slate-300 hover:text-slate-600 text-lg md:text-xl lg:text-2xl font-semibold"}`}>𝗥𝗲𝗴𝗶𝘀𝘁𝗲𝗿</NavLink>
    </div>
    </div>
    </div>
    );
};

export default NavBar;