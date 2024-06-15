import React from 'react'
import { ResponsiveContainer, Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const data = [
    {
        name: '17',
        PRODUCTA: 400,
        PRODUCTB: 400,
        PRODUCTC: 400,
        amt: 2400
    },
    {
        name: '18',
        PRODUCTA: 370,
        PRODUCTB: 370,
        PRODUCTC: 370,
        amt: 22100
    },
    {
        name: '19',
        PRODUCTA: 330,
        PRODUCTB: 330,
        PRODUCTC: 330,
        amt: 2290
    },
    {
        name: '20',
        PRODUCTA: 390,
        PRODUCTB: 390,
        PRODUCTC: 390,
        amt: 2000
    },
    {
        name: '21',
        PRODUCTA: 320,
        PRODUCTB: 320,
        PRODUCTC: 320,
        amt: 2181
    },
    {
        name: '22',
        PRODUCTA: 350,
        PRODUCTB: 350,
        PRODUCTC: 350,
        amt: 2500
    },
    {
        name: '23',
        PRODUCTA: 360,
        PRODUCTB: 360,
        PRODUCTC: 360,
        amt: 2400
    },
    {
        name: '24',
        PRODUCTA: 320,
        PRODUCTB: 320,
        PRODUCTC: 320,
        amt: 2400
    },
    {
        name: '25',
        PRODUCTA: 380,
        PRODUCTB: 380,
        PRODUCTC: 380,
        amt: 2400
    }
];

const WeeklyRevenue = () => {
    return (
        <div className='w-[30rem] h-[30rem] bg-white p-4 rounded-3xl border border-gray-200 flex flex-col flex-auto'>
            <strong className='text-indigo-500 font-sans font-medium'> 
                Weekly Revenue 
                </strong>
            <div className='w-full mt-3 flex-1 text-xs'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
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
                        <Bar dataKey="PRODUCTA" stackId="a" fill="#80d9fb" barSize={15} />
                        <Bar dataKey="PRODUCTB" stackId="a" fill="#5f3aff" barSize={15}/>
                        <Bar dataKey="PRODUCTC" stackId="a" fill="#f1f6fc" barSize={15}/>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default WeeklyRevenue