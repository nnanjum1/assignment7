import React from 'react'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { TbBrandInstagramFilled } from 'react-icons/tb'

const Footer = () => {
    return (
        <footer className="bg-[#244D3F] text-white mt-auto">

            <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col items-center text-center gap-6">


                <h1 className="text-4xl md:text-6xl font-extrabold">
                    KeenKeeper
                </h1>


                <p className="text-sm md:text-white max-w-2xl">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>


                <div className="flex flex-col items-center gap-3">
                    <p className="text-[20px] font-medium">Social Links</p>

                    <div className="flex gap-4">
                        <div className="p-3 bg-white text-[#244D3F] rounded-full cursor-pointer hover:scale-110 transition">
                            <TbBrandInstagramFilled />
                        </div>

                        <div className="p-3 bg-white text-[#244D3F] rounded-full cursor-pointer hover:scale-110 transition">
                            <FaFacebookSquare />
                        </div>

                        <div className="p-3 bg-white text-[#244D3F] rounded-full cursor-pointer hover:scale-110 transition">
                            <FaXTwitter
                            />
                        </div>
                    </div>
                </div>


                <div className="w-full flex justify-center">
                    <div className="w-full md:w-[90%] lg:mx-0   border-t border-[#1A8862] pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm">

                        <p className="text-gray-300">
                            © {new Date().getFullYear()} KeenKeeper. All rights reserved.
                        </p>

                        <div className="flex gap-4">
                            <a className="hover:underline cursor-pointer text-gray-300">Privacy Policy</a>
                            <a className="hover:underline cursor-pointer text-gray-300">Terms</a>
                            <a className="hover:underline cursor-pointer text-gray-300">Cookies</a>
                        </div>

                    </div>
                </div>

            </div>

        </footer>
    )
}

export default Footer