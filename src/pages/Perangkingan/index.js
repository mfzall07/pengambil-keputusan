import React from 'react'

const Perangkingan = () => {

    const dataAlternatif = [
        {id: 1, alternatif: 'TKJ'},
        {id: 2, alternatif: 'RPL'},
        {id: 3, alternatif: 'PAR'},
        {id: 4, alternatif: 'PPP'},
        {id: 5, alternatif: 'LLL'},
    ]

    return (
        <div>
            <div className='py-[29px] border-b-2 border-b-blue-950'>
                <h1 className='font-bold text-[24px]'>Perangkingan</h1>
                <p className='text-[18px]'>List data Perangkingan</p>
            </div>
            {dataAlternatif.length === 0 ?
            <div className='flex items-center justify-center py-[50px]'>
                <h1 className='text-red-600 font-bold text-[20px] text-center'>TIDAK TERDAPAT DATA, SILAHKAN ISI DATA-DATA SEBELUMNYA UNTUK MELIHAT HASIL PERANGLINGAN</h1>
            </div>
            :
            <div className='space-y-3 py-[20px]'>
                <div className='grid grid-cols-12 gap-5 bg-blue-950 rounded-[6px] px-[20px] py-[10px] items-center'>
                    <h1 className='col-span-2 text-white font-semibold'>Overall Composite Height</h1>
                    <h1 className='col-span-2 text-white font-semibold'>Priority Vector (Rata-Rata)</h1>
                    {dataAlternatif.map((data, index) => {
                        return (
                            <h1 key={index} className='col-span-1 text-white font-semibold'>{data.alternatif}</h1>
                        )
                    })}
                </div>
                <div className='grid grid-cols-12 gap-5 border-b-2 px-[20px] py-[10px] items-center'>
                    <h1 className='col-span-2 text-blue-950 font-semibold'>Nomor</h1>
                    <h1 className='col-span-2 text-blue-950 font-semibold'>Kriteria</h1>
                    <h1 className='col-span-1 text-blue-950 font-semibold'>Alternatif 1</h1>
                </div>
            </div>
            }
        </div>
    )
}

export default Perangkingan