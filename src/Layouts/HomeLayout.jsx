import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../Components/NavBar';

const HomeLayout = () => {
    return (
    <div>
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <section>
        <Outlet></Outlet>
        </section>
      </main>
      <footer></footer> 
    </div>
    );
};

export default HomeLayout;