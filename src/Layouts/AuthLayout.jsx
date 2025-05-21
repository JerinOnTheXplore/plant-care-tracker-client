import React from 'react';
import NavBar from '../Components/NavBar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div>
        <header>
            <NavBar></NavBar>
        </header>
        <main>
           <Outlet></Outlet>
        </main>
        </div>
    );
};

export default AuthLayout;