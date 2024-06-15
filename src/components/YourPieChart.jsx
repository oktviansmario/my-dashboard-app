import React from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend } from 'recharts';

const data = [
    { name: 'Your Files', value: 63 },
    { name: 'Empty', value: 12 },
    { name: 'System', value: 25 },
];

const RADIAN = Math.PI / 180
const COLORS = ['#4318ff', '#eff4fb', '#6ad2ff']

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
	const radius = innerRadius + (outerRadius - innerRadius) * 0.5
	const x = cx + radius * Math.cos(-midAngle * RADIAN)
	const y = cy + radius * Math.sin(-midAngle * RADIAN)

	return (
		<text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
			{`${(percent * 100).toFixed(0)}%`}
		</text>
	)
}

const YourPieChart = () => {
    return (
        <div className='bg-white px-4 py-3 rounded-3xl border border-gray-200 w-[23rem] flex flex-col'>
            <strong className='text-indigo-500 font-sans font-medium'>
                Your Pie Chart
            </strong>
            <div className='w-full mt-3 flex-1 text-xs'>
                <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={300}>
						<Pie
							data={data}
							cx="50%"
							cy="45%"
							labelLine={false}
							label={renderCustomizedLabel}
							outerRadius={105}
							fill="#8884d8"
							dataKey="value"
						>
							{data.map((_, index) => (
								<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
							))}
						</Pie>
						<Legend />
					</PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default YourPieChart