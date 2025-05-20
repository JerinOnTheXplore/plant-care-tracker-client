import React from 'react';
import HomeLayout from './HomeLayout';
import NavBar from '../Components/NavBar';
import Hero from '../Components/Hero';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
    <div>
    <header>
    <NavBar></NavBar>
    </header>
    <main>
    <section>
    <Hero></Hero>
    </section>
    <section>
    <Outlet></Outlet>
    </section>
    </main>
      
           
    </div>
    );
};

export default MainLayout;