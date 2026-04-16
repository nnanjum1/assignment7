import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useNavigate } from 'react-router'
import { useFriends } from '../context/FriendContex'
import { toast } from 'react-toastify'


export const HomePage = () => {

    const { friends, loading } = useFriends()
    const navigate = useNavigate()

    const statusColor = (status) => {
        switch (status) {
            case "On-Track":
                return "bg-green-800 text-center text-white"
            case "Almost Due":
                return "bg-yellow-500 text-center text-white"
            case "Overdue":
                return "bg-red-500 text-center text-white"

        }
    }

    const {
        totalFriends,
        onTrack,
        almostDue,
        overdue,
        interactionsThisMonth
    } = useFriends()

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-spinner loading-lg text-green-600"></span>
            </div>
        )
    }

    return (
        <div>
            <div className="hero bg-[#f8fafc] pt-20">
                <div className="hero-content text-center flex flex-col">

                    <h1 className="text-5xl font-bold text-[#1F2937]">Friends to keep close in your life</h1>
                    <p className="py-6 font-medium max-w-[563px] text-[#64748b] ">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the
                        relationships that matter most.
                    </p>
                    <button onClick={() => toast.error("This feature is not implemented")} className="btn btn-primary bg-[#244d3f] text-semibold hover:bg-teal-600 transition"><FaPlus /> Add A Friend</button>

                </div>
            </div>

            <div className='w-[70%]  mx-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 py-10'>

                <div className="card bg-white shadow-sm">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-[#1F2937]">{totalFriends}</h2>
                        <p className='text-[#64748b]'>Total Friends</p>
                    </div>
                </div>

                <div className="card bg-white shadow-sm">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-[#1F2937]">{onTrack}</h2>
                        <p className='text-[#64748b]'>On Track</p>
                    </div>
                </div>

                <div className="card bg-white shadow-sm">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-[#1F2937]">{overdue}</h2>
                        <p className='text-[#64748b]'>Need Attention</p>
                    </div>
                </div>

                <div className="card bg-white shadow-sm">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-[#1F2937]">{interactionsThisMonth}</h2>
                        <p className='text-[#64748b]'>Interactions This Month</p>
                    </div>
                </div>

            </div>






            <div className="w-[70%] mx-auto border-t border-gray-300 pt-10 pb-20">
                <h3 className='text-[24px] mb-1 font-semibold'>Your Friends</h3>
                <div className="grid lg:grid-cols-4 text-center items-center md:grid-cols-3 sm:grid-cols-2 gap-6">

                    {friends.map(friend => (
                        <div
                            key={friend.id}
                            onClick={() => navigate(`/friend/${friend.id}`)}

                            className="cursor-pointer bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition"
                        >


                            <img
                                src={friend.picture}
                                className="w-20 h-20  rounded-full mx-auto object-cover" />


                            <h2 className="text-lg font-bold mt-3">
                                {friend.name}
                            </h2>

                            <p className="text-sm text-gray-500">
                                {friend.days_since_contact}d ago
                            </p>

                            <div className="flex  justify-center flex-wrap gap-2 mt-2">
                                {friend.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="text-xs bg-green-100 px-2 py-1 rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div
                                className={`mt-3 text-xs px-3 py-1 inline-block rounded-full font-semibold ${statusColor(friend.status)}`}
                            >
                                {friend.status}
                            </div>

                        </div>

                    ))}



                </div>
            </div>


        </div>)
}
