import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../component/navbar/Navbar';
import Footer from '../component/footer/Footer';

const Main = () => {
    return (
        <div className='relative bg-[#305b62] w-full '>
            <div className='md:pb-22'>
                <div className=' shadow-b-2xl shadow-black'>
                    <Navbar></Navbar>
                </div>
                <Outlet></Outlet>
            </div>
            <div className='md:fixed z-100 bottom-0 w-full'>
                <div>
                    <Footer ></Footer>
                </div>
            </div>

        </div>
    );
};

export default Main;