import React from 'react'
import { MdBarChart,MdFileCopy,MdDashboard,MdHome } from "react-icons/md";


const DashboardStatsGrid = () => {
    return (
        <div className='flex gap-4 w-full'>
            <BoxWrapper>
                <div className='rounded-full h-12 w-12 flex items-center justify-center bg-gray-200' >
                    <MdBarChart className='text-2xl text-indigo-700' />
                </div>
                <div className='pl-4'>
                    <span className='text-sm text-gray-500 font-light font-sans'>Earnings</span>
                    <div className='flex items-center'>
                        <strong className='text-xl text-black font-semibold'>$340.5</strong>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className='rounded-full h-12 w-12 flex items-center justify-center bg-gray-200' >
                    <MdFileCopy className='text-2xl text-indigo-700' />
                </div>
                <div className='pl-4'>
                    <span className='text-sm text-gray-500 font-light font-sans'>Spend this month</span>
                    <div className='flex items-center'>
                        <strong className='text-xl text-black font-semibold'>$642.39</strong>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className='rounded-full h-12 w-12 flex items-center justify-center bg-gray-200' >
                    <MdBarChart className='text-2xl text-indigo-700' />
                </div>
                <div className='pl-4'>
                    <span className='text-sm text-gray-500 font-light font-sans'>Sales</span>
                    <div className='flex items-center'>
                        <strong className='text-xl text-black font-semibold'>$574.34</strong>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className='rounded-full h-12 w-12 flex items-center justify-center bg-gray-200' >
                    <MdDashboard className='text-2xl text-indigo-700' />
                </div>
                <div className='pl-4'>
                    <span className='text-sm text-gray-500 font-light font-sans'>Your Balance</span>
                    <div className='flex items-center'>
                        <strong className='text-xl text-black font-semibold'>$1000</strong>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className='rounded-full h-12 w-12 flex items-center justify-center bg-gray-200' >
                    <MdBarChart className='text-2xl text-indigo-700' />
                </div>
                <div className='pl-4'>
                    <span className='text-sm text-gray-500 font-light font-sans'>New Tasks</span>
                    <div className='flex items-center'>
                        <strong className='text-xl text-black font-semibold'>145</strong>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className='rounded-full h-12 w-12 flex items-center justify-center bg-gray-200' >
                    <MdHome className='text-2xl text-indigo-700' />
                </div>
                <div className='pl-4'>
                    <span className='text-sm text-gray-500 font-light font-sans'>Total Projects</span>
                    <div className='flex items-center'>
                        <strong className='text-xl text-black font-semibold'>$2433</strong>
                    </div>
                </div>
            </BoxWrapper>
        </div>
    )
}

export default DashboardStatsGrid

function BoxWrapper({ children }) {
    return <div className='bg-white p-4 flex-1 border border-gray-200 flex items-center rounded-2xl'>{children}</div>
}