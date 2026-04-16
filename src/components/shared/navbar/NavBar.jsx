import React from 'react'
import { IoTimeOutline } from 'react-icons/io5'
import { RiHomeLine } from 'react-icons/ri'
import { TfiStatsUp } from 'react-icons/tfi'
import { NavLink } from 'react-router'
import logo from "../../../assets/logo.png";
const NavBar = () => {

    const links = <>

        <li> <NavLink to={'/'} className={({ isActive }) => `text-[16px] font-medium text-center  ${isActive ? "text-white bg-[#244D3F]" : "text-gray-500"} `} > <RiHomeLine />Home </NavLink> </li>
        <li> <NavLink to={'/timeline'} className={({ isActive }) => `text-[16px] font-medium text-center  ${isActive ? "text-white bg-[#244D3F]" : "text-gray-500"} `} ><IoTimeOutline />Timeline  </NavLink> </li>
        <li> <NavLink to={'/stats'} className={({ isActive }) => `text-[16px] font-medium text-center  ${isActive ? "text-white bg-[#244D3F]" : "text-gray-500"} `} ><TfiStatsUp />Stats </NavLink> </li>

    </>

    return (
        <div className="navbar px-[10%] mx-auto bg-white shadow-sm">
            <div className="flex-1">
                <img src={logo} alt="" />
            </div>
            <div className="lg:hidden">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-white rounded-box shadow w-52 mt-3 z-10"
                    >
                        {links}
                    </ul>
                </div>
            </div>

            <div className="hidden lg:flex">
                <ul className="menu menu-horizontal gap-4 px-1">
                    {links}
                </ul>
            </div>

        </div>
    )
}

export default NavBar