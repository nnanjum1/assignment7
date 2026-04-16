import React, { useState } from 'react'
import { useFriends } from '../context/FriendContex';
import callIcon from "../assets/call.png";
import textIcon from "../assets/text.png";
import videoIcon from "../assets/video.png";

const Timeline = () => {
    const { timeline } = useFriends();

    const [filter, setFilter] = useState("All");

    const filteredTimeline =
        filter === "All"
            ? timeline
            : timeline.filter((log) => log.type === filter);



    const Icon = (type) => {
        switch (type) {
            case "Call":
                return <img src={callIcon} className="w-5 h-5" alt="Call" />;
            case "Text":
                return <img src={textIcon} className="w-5 h-5" alt="Text" />;
            case "Video":
                return <img src={videoIcon} className="w-5 h-5" alt="Video" />;
            default:
                return null;
        }
    };

    return (
        <div className='bg-[#f8fafc] flex flex-col min-h-screen '>

            <div className="w-[70%] mx-auto  my-6 p-4 space-y-6">

                <h1 className='font-bold text-[48px]'>Timeline</h1>

                <div className="flex  mb-6">
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="border border-gray-300 rounded px-3 py-2 bg-white text-[#64748b] focus:outline-none"
                    >
                        <option value="All">Filter timeline</option>
                        <option value="Call">Call</option>
                        <option value="Text">Text</option>
                        <option value="Video">Video</option>
                    </select>
                </div>




                {filteredTimeline.length === 0 ? (
                    <div className="flex justify-center">
                        <div className="bg-white shadow-sm rounded-xl p-10 text-center w-full mt-10 md:w-[60%] lg:w-[60%]">
                            <p className="text-gray-500 text-[48px] font-medium">
                                No activity yet
                            </p>
                        </div>
                    </div>) : (
                    filteredTimeline.map((log) => (
                        <div
                            key={log.id}
                            className="bg-white shadow-sm rounded-xl p-4 flex justify-between items-center"
                        >
                            <div className="flex items-center gap-4">
                                <div>{Icon(log.type)}</div>

                                <div>
                                    <p className="font-semibold text-[#1f2937]">
                                        <b>{log.type}</b> with {log.friendName}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        {log.time}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

        </div>
    )
}

export default Timeline