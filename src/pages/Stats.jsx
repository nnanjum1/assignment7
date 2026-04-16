import React, { useState } from 'react'
import { useFriends } from '../context/FriendContex';
import { PieChart, Pie, Cell, Sector, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Stats = () => {
    const { timeline = [] } = useFriends();

    const [activeIndex, setActiveIndex] = useState(0);

    const callCount = timeline.filter(t => t.type === "Call").length;
    const textCount = timeline.filter(t => t.type === "Text").length;
    const videoCount = timeline.filter(t => t.type === "Video").length;

    const data = [
        { name: "Text", value: textCount, fill: "#7F37F5" },
        { name: "Call", value: callCount, fill: "#244d3f" },
        { name: "Video", value: videoCount, fill: "#37A163" },
    ];


    const renderActiveShape = (props) => {
        const RADIAN = Math.PI / 180;
        const {
            cx, cy, midAngle, innerRadius, outerRadius,
            startAngle, endAngle, fill, payload, percent, value
        } = props;

        const sin = Math.sin(-RADIAN * midAngle);
        const cos = Math.cos(-RADIAN * midAngle);

        const sx = cx + (outerRadius + 10) * cos;
        const sy = cy + (outerRadius + 10) * sin;
        const mx = cx + (outerRadius + 30) * cos;
        const my = cy + (outerRadius + 30) * sin;

        return (
            <g>
                <text x={cx} y={cy} dy={8} textAnchor="middle" fill="#333">
                    {payload.name}
                </text>

                <Sector
                    cx={cx}
                    cy={cy}
                    innerRadius={innerRadius}
                    outerRadius={outerRadius + 10}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    fill={fill}
                />
            </g>
        );
    };

    return (
        <div className='bg-[#f8fafc] w-full  flex flex-col'>


            <h1 className='text-2xl w-[95%] sm:w-[85%] lg:w-[70%]  mx-auto sm:text-4xl font-bold my-5 text-[#1F2937]'>
                Friendship Analytics
            </h1>

            <div
                className="
        bg-white 
        w-[95%] sm:w-[85%] lg:w-[70%] 
        mx-auto mt-5 mb-10
        shadow-md rounded-xl 
        p-4 sm:p-6
    "
            >
                <h2 className="text-xl font-semibold text-[#1F2937] mb-4">
                    By Interaction Type
                </h2>

                <div className="w-full h-[350px] flex justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                activeIndex={activeIndex}
                                activeShape={renderActiveShape}
                                data={data}
                                cx="50%"
                                cy="50%"
                                innerRadius="45%"
                                outerRadius="70%"
                                dataKey="value"
                                onMouseEnter={(_, index) => setActiveIndex(index)}
                            >
                                {data.map((entry, index) => (
                                    <Cell key={index} fill={entry.fill} />
                                ))}
                            </Pie>

                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>


        </div >
    )
}

export default Stats; 