import React from 'react'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import { MdArrowDropUp } from "react-icons/md";

const data = [
    {
        name: 'SEP',
        profit: 30,
        revenue: 50,
        amt: 24
    },
    {
        name: 'OCT',
        profit: 40,
        revenue: 64,
        amt: 22
    },
    {
        name: 'NOV',
        profit: 24,
        revenue: 48,
        amt: 22
    },
    {
        name: 'DEC',
        profit: 46,
        revenue: 66,
        amt: 20
    },
    {
        name: 'JAN',
        profit: 20,
        revenue: 49,
        amt: 21
    },
    {
        name: 'FEB',
        profit: 46,
        revenue: 68,
        amt: 25
    }
];

const TransactionChart = () => {
    return (
        <div className='w-[30rem] h-[30rem] bg-white p-4 rounded-3xl border border-gray-200 flex flex-row flex-auto '>
            <div className='flex flex-col'>
            <button className='px-2 py-2 bg-slate-100 text-gray-300 items-center hover:bg-slate-200 cursor-pointer rounded-lg font-semibold'> 
                This Month 
            </button>
            <strong className='text-2xl font-sans font-bold mt-3'>
                $37.5K
            </strong>
            <div className='mt-5 text-sm text-slate-300 font-semibold'>
                Total Spent
            </div>
            <div className='mt-1 text-sm text-green-400 font-bold flex flex-1'>
                <MdArrowDropUp/>
                +2.45%
            </div>
            </div>
            <div className='w-full mt-3 flex-1 text-xs'>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        {/* <CartesianGrid strokeDasharray="3 3 0 0" /> */}
                        <XAxis dataKey="name" axisLine={false} />
                        {/* <YAxis /> */}
                        <Tooltip />
                        {/* <Legend /> */}
                        <Line type="monotone" dataKey="profit" stroke="#80d9ff" strokeWidth={4} dot={false} />
                        <Line type="monotone" dataKey="revenue" stroke="#4318ff" strokeWidth={4} dot={false}/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default TransactionChart