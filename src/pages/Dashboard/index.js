import React from 'react'
import { Card } from '../../components'

const Dashboard = () => {
    return (
        <div>
            <div className='py-[29px] border-b-2 border-b-blue-950'>
                <h1 className='font-bold text-[24px]'>Dashboard</h1>
                <p className='text-[18px]'>List data dashboard</p>
            </div>
            <div className='flex items-center gap-5 py-[20px]'>
                <Card
                    nameCard={'Total Kriteria'}
                    valueCard={'100'}
                />
                <Card
                    nameCard={'Total Alternatif'}
                    valueCard={'100'}
                />
            </div>
        </div>
    )
}

export default Dashboard