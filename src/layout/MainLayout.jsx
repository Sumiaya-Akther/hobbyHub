import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/header/Navbar';
import Footer from '../components/footer/Footer';

const MainLayout = () => {
    return (
       <div className=''>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto mt-20 mb-10 min-h-[calc(100vh-435px)] '>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;