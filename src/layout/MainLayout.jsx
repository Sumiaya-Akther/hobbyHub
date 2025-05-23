import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/header/Navbar';
import Footer from '../components/footer/Footer';

const MainLayout = () => {
    return (
       <div className='bg-[#f2f2f2]'>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto my-10  min-h-[calc(100vh-435px)] '>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;