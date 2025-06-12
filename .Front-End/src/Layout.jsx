import { Outlet } from "react-router-dom";
import React from 'react';
import Header from './Pages/Header'
import Footer from "./Pages/Footer";

function Layout(props) {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />          
        </div>
    );
}

export default Layout;