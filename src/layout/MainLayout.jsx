import React from 'react'
import NavBar from '../components/shared/navbar/NavBar'
import { Outlet } from 'react-router'
import Footer from '../components/shared/footer/Footer'

const MainLayout = () => {
    return (

        <div className="flex flex-col min-h-screen">
            <NavBar />
            <div className="flex-1 bg-[#f8fafc]">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default MainLayout