import React from 'react'
import { Sidebar } from '../../components'
import { Outlet, useLocation } from 'react-router-dom'

const Template = () => {

    const location = useLocation()

    return (
        <div className='relative'>
            <div className='absolute top-0 left-0 right-0 bottom-0'>
                <div className={`flex lg:pr-[30px] gap-[30px] ${location.pathname === '/dashboard' ? '' : 'bg-[#F8F9FB]'}`}>
                    <Sidebar/>
                    <div className='w-full space-y-[24px] overflow-hidden mt-2'>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Template