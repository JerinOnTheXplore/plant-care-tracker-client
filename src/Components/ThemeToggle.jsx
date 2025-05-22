import React, { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa6';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };
    return (
        <div>
             <button onClick={toggleTheme} className="btn btn-circle text-xl">
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </button>
   
        </div>
    );
};

export default ThemeToggle;