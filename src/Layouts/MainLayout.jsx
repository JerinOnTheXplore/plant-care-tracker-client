import React, { useEffect } from 'react';
import HomeLayout from './HomeLayout';
import NavBar from '../Components/NavBar';
import Hero from '../Components/Hero';
import { Outlet } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SignsYourPlantNeedHelp from '../Components/SignsYourPlantNeedHelp';
import FunPlantFacts from '../Components/FunPlantFacts';
import Footer from '../Components/Footer';

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
    <section>
     <FunPlantFacts></FunPlantFacts>
    </section>
    </main>
    <Footer></Footer> 
           
    </div>
    );
};

export default MainLayout;