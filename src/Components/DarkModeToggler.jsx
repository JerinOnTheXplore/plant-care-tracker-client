import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa6';
import { useDarkMode } from '../context/ThemeContext';

const DarkModeToggler = () => {
    const {darkMode,setDarkMode}=useDarkMode();
    return (
        <button onClick={() => setDarkMode(!darkMode)} className='dark:bg-gray-800 dark:text-white transition-all ml-10 rounded-full'>
            {darkMode ? '☀️' : '🌙'}
        </button>
    );
};

export default DarkModeToggler;