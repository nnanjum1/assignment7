import { useParams } from "react-router";
import { useFriends } from "../context/FriendContex";
import { RiDeleteBin6Line, RiNotificationSnoozeLine } from "react-icons/ri";
import { FiArchive } from "react-icons/fi";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineTextsms } from "react-icons/md";
import { CiVideoOn } from "react-icons/ci";
import { toast } from "react-toastify";


const FriendDetails = () => {
    const { id } = useParams();
    const { friends } = useFriends();
    const { entryTimeline } = useFriends();

    const handleAction = (type, Icon) => {
        const currentTime = new Date().toLocaleTimeString();
        const currentDate = new Date().toLocaleDateString();

        entryTimeline(friend, type);
        toast.success(
            <div className="flex items-center gap-2">
                <Icon className="text-xl text-green-600" />
                <div>
                    <div>
                        <b>{type}</b>  with {friend.name}
                    </div>
                    <div className="text-xs text-gray-500">
                        {currentDate}
                    </div>
                    <div className="text-xs text-gray-500">
                        {currentTime}
                    </div>
                </div>
            </div>
        );
    };

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

    const friend = friends.find(f => f.id === parseInt(id));

    if (!friend) {
        return (
            <div className="text-center mt-20 text-xl">
                Friend not found
            </div>
        );
    }

    return (
        <div className="bg-[#f8fafc]  flex flex-col">

            <div className="w-[90%] lg:w-[70%] mx-auto my-10 lg:my-20 flex flex-col lg:flex-row gap-6">


                <div className="w-full lg:max-w-[350px]">


                    <div className="mx-auto bg-white shadow-lg p-6 rounded-xl text-center flex flex-col items-center">

                        <img
                            src={friend.picture}
                            className="w-20 h-20 rounded-full object-cover"
                        />

                        <h2 className="text-[20px] font-semibold mt-4">{friend.name}</h2>

                        <div className={`mt-3 text-[12px] font-medium px-3 py-1 rounded-full  ${statusColor(friend.status)}`}>
                            {friend.status}
                        </div>

                        <div className="flex justify-center text-[12px] font-medium flex-wrap gap-2 mt-2">
                            {friend.tags.map((tag, i) => (
                                <span
                                    key={i}
                                    className="text-xs bg-green-100 px-2 py-1 rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <p className="mt-4 font-medium  text-[#64748B] italic">
                            "{friend.bio}"
                        </p>

                        <p className="mt-2 font-semibold text-[#64748B] ">
                            Preferred: {friend.email}
                        </p>

                    </div>


                    <div className="space-y-2 mt-4">
                        <button className="btn w-full bg-white text-[#1f2937]">
                            <RiNotificationSnoozeLine /> Snooze 2 weeks
                        </button>

                        <button className="btn w-full bg-white text-[#1f2937]">
                            <FiArchive /> Archive
                        </button>

                        <button className="btn w-full bg-white text-red-600">
                            <RiDeleteBin6Line /> Delete
                        </button>
                    </div>

                </div>


                <div className="flex-1">


                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        <div className="card bg-white shadow-sm">
                            <div className="card-body text-center">
                                <h2 className=" items-center text-[#244d3f] font-semibold text-[30px] text-center">{friend.days_since_contact}</h2>
                                <p className="text-[#64748b] text-[18px]">Days Since Contact</p>
                            </div>
                        </div>

                        <div className="card bg-white shadow-sm">
                            <div className="card-body text-center">
                                <h2 className="items-center text-[#244d3f] font-semibold text-[30px] text-center">{friend.goal}</h2>
                                <p className="text-[#64748b] text-[18px]">Goal (Days)</p>
                            </div>
                        </div>

                        <div className="card bg-white shadow-sm">
                            <div className="card-body text-center">
                                <h2 className=" items-center text-[#244d3f] font-semibold text-[30px] text-center">{friend.next_due_date}</h2>
                                <p className="text-[#64748b] text-[18px]">Next Due</p>
                            </div>
                        </div>

                    </div>


                    <div className="card bg-white shadow-sm my-6">
                        <div className="card-body">

                            <div className="flex items-center justify-between w-full">
                                <h2 className="card-title text-5 font-medium text-[#244d3f]">
                                    Relationship Goal
                                </h2>
                                <button className="text-[14px] border border-[#e9e9e9] py-2 px-4 rounded bg-[#F8FAFC] text-[#1F2937]">Edit</button>
                            </div>

                            <p className="text-[#64748b]  text-[18px]">
                                Connect every <span className="font-bold text-[#1F2937]">{friend.goal} days</span>
                            </p>

                        </div>
                    </div>


                    <div className="card bg-white shadow-sm my-6">
                        <div className="card-body">

                            <h2 className="card-title text-[#1F2937]">
                                Quick Check-In
                            </h2>

                            <div className="grid grid-cols-3 gap-4 mt-4">

                                <div className="card bg-[#F8FAFC] border border-[#e9e9e9] cursor-pointer"
                                    onClick={() => handleAction("Call", LuPhoneCall)}>
                                    <div className="card-body items-center text-center">
                                        <LuPhoneCall className="text-2xl" />
                                        <p>Call</p>
                                    </div>
                                </div>

                                <div className="card bg-[#F8FAFC] border border-[#e9e9e9] cursor-pointer"
                                    onClick={() => handleAction("Text", MdOutlineTextsms)}>
                                    <div className="card-body items-center text-center">
                                        <MdOutlineTextsms className="text-2xl" />
                                        <p>Text</p>
                                    </div>
                                </div>

                                <div className="card bg-[#F8FAFC] border border-[#e9e9e9] cursor-pointer"
                                    onClick={() => handleAction("Video", CiVideoOn)}>
                                    <div className="card-body items-center text-center">
                                        <CiVideoOn className="text-2xl" />
                                        <p>Video</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>

            </div>

        </div>


    );
};

export default FriendDetails;