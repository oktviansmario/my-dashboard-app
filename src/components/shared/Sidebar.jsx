import React from 'react'
import { GiWorld } from "react-icons/gi";
import { MdSpaceDashboard } from "react-icons/md";
import { LiaCreditCardSolid } from "react-icons/lia";
import { CiMoneyCheck1 } from "react-icons/ci";
import { MdAccountCircle } from "react-icons/md";
import { MdOutlineCreditScore } from "react-icons/md";
import { CiBank } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { dashboard_sidebar_links } from '../../lib/consts/navigation';
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'

const linkClasses='flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-500 hover:no-underline active:bg-neutral-300 rounded-sm text-base'

function Sidebar() {
  return (
    <div className='h-screen bg-white dark:bg-slate-950/90 px-3 py-3'>
            <div className='flex flex-col gap-5 w-full text-black h-full justify-between'>
                <div className='flex flex-col gap-10 px-4 mt-4'>
                    <div className='flex items-center justify-center gap-2'>
                        <div className='text-black dark:text-white text- md:text-4xl font-bold'>
                            HORIZON
                        </div>
                        <div className='hidden md:flex font-bold dark:text-white'>
                            FREE
                        </div>
                    </div>
                   <div className='flex-1 py-8 flex flex-col gap-0.5'>
                        {dashboard_sidebar_links.map((item) => (
                            <SidebarLink key={item.key} item={item} />
                        ))}
                   </div>
                </div>
            </div>
        </div>
  )
}

export default Sidebar

function SidebarLink({item}){
    const { pathname } = useLocation()


    return (
        <Link to={item.path} className={classNames (pathname === item.path ? 'text-black' : 'text-slate-500',linkClasses)}>
            <span className='text-xl'>{item.icon}</span>
            {item.label}
        </Link>
    )
}