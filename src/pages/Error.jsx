import React from 'react';
import { FaLeaf } from 'react-icons/fa';
import { Link } from 'react-router';

const Error = () => {
    return (
    <div>
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-[#556B2F] via-[#6B8E23] to-[#808000] text-white px-6">
      
      <FaLeaf className="text-6xl mb-6 animate-pulse" />
      
      <h1 className="text-6xl md:text-8xl font-extrabold mb-4 text-center drop-shadow-lg">Oops! Page Not Found</h1>
      
      <p className="text-lg md:text-2xl text-center mb-8 max-w-xl">
        The green path you’re looking for has withered away. But don’t worry — let’s take you back to a thriving page</p>
      
      <Link to="/" className="bg-white text-green-800 font-semibold px-6 py-3 rounded-full hover:bg-green-100 transition duration-300 shadow-lg">Go Home</Link>
    </div>  
        </div>
    );
};

export default Error;