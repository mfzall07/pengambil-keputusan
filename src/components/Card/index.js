import React from 'react'

const Card = ({nameCard, valueCard}) => {
    return (
        <div className='border-2 rounded-[12px] px-5 py-5 bg-blue-950 shadow-sm w-full'>
            <h1 className='text-[24px] font-bold text-white'>{nameCard}</h1>
            <h1 className='text-[18px] font-semibold text-white'>{valueCard}</h1>
        </div>
    )
}

export default Card