import Header from 'pages/home/components/Header'
import Footer from 'pages/home/components/Footer'
import { Outlet } from 'react-router-dom';
import React from 'react'

const HomeLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default HomeLayout
