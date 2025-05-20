import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../Components/NavBar';
import Hero from '../Components/Hero';

const HomeLayout = () => {
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
      <footer></footer> 
    </div>
    );
};

export default HomeLayout;