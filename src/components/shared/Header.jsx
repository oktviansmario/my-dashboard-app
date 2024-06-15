import React from 'react'
import { MdOutlineSearch, MdFileUpload, MdWavingHand } from "react-icons/md";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { RiErrorWarningLine } from "react-icons/ri";
import { RxAvatar } from "react-icons/rx";
import { Popover, PopoverButton, Transition, PopoverPanel, Menu } from "@headlessui/react";

const Header = () => {
    return (
        <div className='sticky top-0 h-16 bg-gray-200 px-4 flex justify-between border-b border-gray-200 rounded-2xl'>
            <div>
                <h3 className='text-sm font-sans font-light'>Pages / Main Dashboard</h3>
                <span className='text-3xl font-sans font-bold tracking-wide'>
                    Main Dashboard
                </span>
            </div>
            <div className='relative flex items-center justify-between gap-2 mr-2'>
                <div>
                    <MdOutlineSearch fontSize={18} className='text-gray-400 absolute top-1/2 -translate-y-1/2 left-4' />
                    <input
                        type="text"
                        placeholder='Search...'
                        className='px-4 text-sm focus:outline-none active:outline-none h-10 w-[14rem] border border-gray-300 rounded-full pl-11 pr-4' />
                </div>
                <div className='flex items-center gap-2 mr-2'>
                    <Popover className="relative">
                        <PopoverButton className="p-1 text-sm/6 font-semibold text-black/50 focus:outline-none data-[active]:text-slate-500 data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-transparent items-center hover:text-opacity-100">
                            <MdOutlineNotificationsNone fontSize={20} />
                        </PopoverButton>
                        <Transition
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <PopoverPanel className="absolute right-0 z-10 mt-2.5 w-80">
                                <div className='bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5'>
                                    <div className='flex justify-between'>
                                        <strong className='text-gray-700 font-medium'>Notification</strong>
                                        <strong className='text-gray-700 font-medium'>Mark all read</strong>
                                    </div>
                                    <div className='px-3 py-2 mt-2 flex justify-start gap-2 items-center'>
                                        <MdFileUpload />
                                        <div className='px-2'>
                                            <div className='text-lg font-semibold font-sans'>New Update </div>
                                            <div className='text-sm'>A new update</div>
                                        </div>
                                    </div>
                                    <div className='px-3 py-2 mt-2 flex justify-start gap-2 items-center'>
                                        <MdFileUpload />
                                        <div className='px-2'>
                                            <div className='text-lg font-semibold font-sans'>New Update </div>
                                            <div className='text-sm'>A new update</div>
                                        </div>

                                    </div>
                                </div>

                            </PopoverPanel>
                        </Transition>

                    </Popover>
                    <Popover className="relative">
                        <PopoverButton className="p-1 text-sm/6 font-semibold text-black/50 focus:outline-none data-[active]:text-slate-500 data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-transparent items-center hover:text-opacity-100">
                            <RiErrorWarningLine fontSize={20} />
                        </PopoverButton>
                        <Transition
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <PopoverPanel className="absolute right-0 z-10 mt-2.5 w-80">
                                <div className='bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5 '>
                                    <div className='place-content-center flex flex-col gap-2'>
                                        <button className='px-2 py-2 border outline-2 items-center hover:bg-slate-200 cursor-pointer rounded-lg font-semibold'> See Documentation </button>
                                        <button className='px-2 py-2 border outline-2 items-center hover:bg-slate-200 cursor-pointer rounded-lg font-semibold'> Try Horizon </button>
                                    </div>
                                </div>
                            </PopoverPanel>
                        </Transition>

                    </Popover>
                    <Popover className="relative">
                        <PopoverButton className="p-1 text-sm/6 font-semibold text-black/50 focus:outline-none data-[active]:text-slate-500 data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-transparent items-center hover:text-opacity-100">
                            <RxAvatar fontSize={28} />
                        </PopoverButton>
                        <Transition
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <PopoverPanel className="absolute right-0 z-10 mt-2.5 w-80">
                                <div className='bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5 '>
                                    <div className='place-content-center flex flex-col gap-2'>
                                        <div className='px-2 py-2 flex justify-start gap-2 font-semibold'>
                                        <MdWavingHand />
                                            Hey, Rio
                                        </div>
                                        <div className='px-2 py-2 flex justify-start hover:bg-slate-200 cursor-pointer gap-2 font-light text-sm'>
                                            Profile Setting
                                        </div>
                                    </div>
                                </div>
                            </PopoverPanel>
                        </Transition>
                    </Popover>
                </div>
            </div>
        </div>
    )
}

export default Header