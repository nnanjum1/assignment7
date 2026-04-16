import React from 'react'
import { FaPlus } from 'react-icons/fa'

export const HomePage = () => {
    return (
        <div>
            <div className="hero bg-[#f8fafc] pt-20">
                <div className="hero-content text-center flex flex-col">

                    <h1 className="text-5xl font-bold text-[#1F2937]">Friends to keep close in your life</h1>
                    <p className="py-6 font-medium max-w-[563px] text-[#64748b] ">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the
                        relationships that matter most.
                    </p>
                    <button className="btn btn-primary bg-[#244d3f] text-semibold"><FaPlus /> Add A Friend</button>

                </div>
            </div>

            <div className='w-[70%] mx-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 py-10'>

                <div className="card bg-white shadow-sm">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-[#1F2937]">12</h2>
                        <p className='text-[#64748b]'>Total Friends</p>
                    </div>
                </div>

                <div className="card bg-white shadow-sm">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-[#1F2937]">6</h2>
                        <p className='text-[#64748b]'>On Track</p>
                    </div>
                </div>

                <div className="card bg-white shadow-sm">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-[#1F2937]">3</h2>
                        <p className='text-[#64748b]'>Need Attention</p>
                    </div>
                </div>

                <div className="card bg-white shadow-sm">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-[#1F2937]">10</h2>
                        <p className='text-[#64748b]'>Interactions This Month</p>
                    </div>
                </div>

            </div>




        </div>
    )
}
