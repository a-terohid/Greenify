import Footer from '@/module/Footer';
import Navbar from '@/module/Navbar';
import React from 'react';

const Layout = ({ children }) => {
    return (
        <div>
           <Navbar />
           <div className=" min-h-[700px]  pt-[60px]" >{ children }</div>
           <Footer />
        </div>
    );
};

export default Layout;