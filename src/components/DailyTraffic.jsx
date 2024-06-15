import React from 'react'
import { ResponsiveContainer, Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const data = [
    {
        name: '00',
        dailytraffic: 20,
        amt: 24
    },
    {
        name: '04',
        dailytraffic: 30,
        amt: 22
    },
    {
        name: '08',
        dailytraffic: 40,
        amt: 22
    },
    {
        name: '12',
        dailytraffic: 20,
        amt: 20
    },
    {
        name: '14',
        dailytraffic: 45,
        amt: 21
    },
    {
        name: '16',
        dailytraffic: 50,
        amt: 25
    },
    {
        name: '18',
        dailytraffic: 30,
        amt: 24
    },
    
];

const DailyTraffic = () => {
    return (
        <div className='bg-white px-4 py-3 rounded-3xl border border-gray-200 w-[20rem] flex flex-col '>
            <strong className='text-indigo-500 font-sans font-medium'> 
                Daily Traffic
            </strong>
            <strong className='font-bold text-lg'>
                2.579 Visitors
            </strong>
            <div className='w-full mt-3 text-xs overflow-auto h-[15rem]'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={500}
                        data={data}
                        margin={{
                            top: 40,
                            right: 30,
                            left: 10,
                            bottom: 5,
                        }}
                    >
                        {/* <CartesianGrid strokeDasharray="3 3" /> */}
                        <XAxis dataKey="name" axisLine={false} />
                        {/* <YAxis /> */}
                        <Tooltip />
                        {/* <Legend /> */}
                        <Bar dataKey="dailytraffic" fill="#7859fe" barSize={10} />
                    </BarChart>
                </ResponsiveContainer>
                </div>
        </div>
    )
}

export default DailyTraffic