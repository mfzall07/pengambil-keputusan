import React from 'react'
import { RiArrowDownSLine } from "react-icons/ri";

const Dropdown = ({label, labelColor, width, onChange, item}) => {
    return (
        <div className='flex flex-col gap-2'>
            <label className={`${!labelColor ? 'text-gray-700' : labelColor} font-medium`}>{!label ? 'Unknown Label' : label}</label>
            <div className='relative'>
                <select onChange={onChange} className={`rounded-[8px] border-2 px-[18px] py-[8px] ${!width ? 'max-w-[200px] min-w-[200px]' : width} outline-none appearance-none`}>
                    <option selected disabled value={''}>Pilih Kriteria</option>
                    {item.map((data, index) => {
                        return (
                            <option value={data.id} key={index}>{data.kriteria}</option>
                        )
                    })}
                </select>
                <div className='absolute right-5 bottom-2 text-2xl'>
                    <RiArrowDownSLine />
                </div>
            </div>
        </div>
    )
}

export default Dropdown