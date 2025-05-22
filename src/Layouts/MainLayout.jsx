import React, { useEffect } from 'react';
import HomeLayout from './HomeLayout';
import NavBar from '../Components/NavBar';
import Hero from '../Components/Hero';
import { Outlet } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SignsYourPlantNeedHelp from '../Components/SignsYourPlantNeedHelp';

const MainLayout = () => {
    useEffect(() =>{
      AOS.init({
        duration:800,
        once:false,
      })
    },[]);
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
    <section>
     <SignsYourPlantNeedHelp></SignsYourPlantNeedHelp>
    </section>
    </main>
      
           
    </div>
    );
};

export default MainLayout;