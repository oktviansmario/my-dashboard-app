import React from 'react'
import { Link } from 'react-router-dom'
import DashboardStatsGrid from './DashboardStatsGrid'
import TransactionChart from './TransactionChart'
import WeeklyChart from './WeeklyChart'
import DailyTraffic from './DailyTraffic'
import YourPieChart from './YourPieChart'
import CheckTable from './CheckTable'

function Dashboard() {
  return (
    <div className='flex flex-col gap-4 overflow-visible'>
      <DashboardStatsGrid />
      <div className='flex flex-row gap-4 w-full'>
          <TransactionChart />
          <WeeklyChart />
        </div>
        <div className='flex flex-row gap-4 w-full'>
          <CheckTable/>
          <DailyTraffic/>
          <YourPieChart/>
        </div>
    </div>
  )
}

export default Dashboard