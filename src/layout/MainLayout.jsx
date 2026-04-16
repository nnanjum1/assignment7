import React from 'react'
import NavBar from '../components/shared/navbar/NavBar'
import { Outlet } from 'react-router'
import Footer from '../components/shared/footer/Footer'

const MainLayout = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainLayout