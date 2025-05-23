import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import logoImage from '../assets/logoImage.jpg'
import { AuthContext } from '../provider/AuthProvider';
import Loading from '../pages/Loading';
import Swal from 'sweetalert2';
import DarkModeToggler from './DarkModeToggler';
import { ThemeProvider } from '../context/ThemeContext';
const NavBar = () => {
  const {user,logout,loading} = use(AuthContext);
  if(loading){
    return <Loading></Loading>;
  }

  const handleLogout=()=>{
      logout().then(()=>{
        Swal.fire({
          icon: 'success',
          title: 'Logout Successful!',
          showConfirmButton: false,
          timer: 1500
           });
      }).catch((error)=>{
         console.log(error);
      })
    }
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
        <NavLink to="/allPlants" className={({ isActive }) =>isActive ? "text-green-700 font-semibold" : "hover:text-green-700"}>All Plants</NavLink>
        </li>
        <li>
        <NavLink to="/addPlant" className={({ isActive }) => isActive ? "text-green-700 font-semibold" : "hover:text-green-700"}>Add Plant</NavLink>
        </li>
        <li>
        <NavLink to="/myplants" className={({ isActive }) =>
        isActive ? "text-green-700 font-semibold" : "hover:text-green-700"}>My Plants</NavLink>
        </li>
        </ul>
        </div>
        <div className='flex  items-center'>
            <div><img className='w-14 md:w-16 rounded-full ' src={logoImage} alt="" /></div>
            <div className="btn btn-ghost text-sm md:text-4xl lg:text-4xl text-stone-100 font-semibold">𝘉𝘰𝘯𝘴𝘢𝘪 𝘉𝘭𝘪𝘴𝘴</div>
        </div>
       </div>

      <div className="navbar-center hidden lg:flex">
        <div className="flex space-x-5 text-[17px]">
        <NavLink to="/" className={({ isActive }) => 
        isActive ? "text-white font-bold text-2xl underline underline-offset-4" : "hover:text-slate-200 text-2xl text-white font-semibold"}>𝗛𝗼𝗺𝗲</NavLink>
        <NavLink to="/allPlants" className={({ isActive }) =>isActive ? "text-white font-bold text-2xl underline underline-offset-4" : "hover:text-slate-200 text-2xl  text-white font-semibold"}>𝗔𝗹𝗹 𝗣𝗹𝗮𝗻𝘁𝘀</NavLink>
        <NavLink to="/addPlant" className={({ isActive }) => isActive ? "text-white font-bold text-2xl underline underline-offset-4" : "hover:text-slate-200 text-2xl  text-white font-semibold"}>𝗔𝗱𝗱 𝗣𝗹𝗮𝗻𝘁</NavLink>
        <NavLink to="/myplants" className={({ isActive }) =>
        isActive ? "text-white font-bold text-2xl underline underline-offset-4" : "hover:text-slate-200 text-2xl  text-white font-semibold"}>𝗠𝘆 𝗣𝗹𝗮𝗻𝘁𝘀</NavLink>
        </div>
        
      </div>
    <div className="navbar-end" />
    <div className='flex gap-3 items-center'>
      <div>
        <ThemeProvider>
          <DarkModeToggler/>
        </ThemeProvider>
      </div>
      {user ? (
  <div className="flex items-center gap-2">
    <div className="tooltip tooltip-bottom" data-tip={user.displayName || 'User'}>
      <img
        src={user.photoURL}
        alt="User"
        className="w-24 md:w-44 lg:w-48  rounded-full border-2 border-green-500"/>
    </div>
    <button
      onClick={handleLogout}
      className="btn btn-neutral text-white btn-outline border-2 border-gray-600 text-sm md:text-xl p-1 md:p-2 lg:p-3"
    >
      Logout
    </button>
  </div>
) : (
  <div className="flex gap-2">
    <Link to="/auth/login" className="btn btn-neutral text-white btn-outline border-2 border-gray-600 text-sm md:text-xl p-1 md:p-2 lg:p-3">
      Login
    </Link>
    <Link to="/auth/register" className="btn btn-neutral text-white btn-outline border-2 border-gray-600 text-sm md:text-xl p-1 md:p-2 lg:p-3">
      Register
    </Link>
  </div>
)}  
    </div>
    </div>
    </div>
    );
};

export default NavBar;