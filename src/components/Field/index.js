import React from 'react'

const Field = ({label, labelColor, onChange, placeholder, width, type, value}) => {
    return (
        <div className='flex flex-col gap-2'>
            <label className={`${!labelColor ? 'text-gray-700' : labelColor} font-medium`}>{!label ? 'Unknown Label' : label}</label>
            <input value={value} type={!type ? 'text' : type} onChange={onChange} placeholder={!placeholder ? 'Unknown Placeholder' : placeholder} className={`rounded-[8px] border-2 px-[18px] py-[8px] ${!width ? 'max-w-[200px] min-w-[200px]' : width} outline-none`}/>
        </div>
    )
}

export default Field