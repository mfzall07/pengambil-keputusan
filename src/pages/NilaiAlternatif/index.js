import React, { useState } from 'react'
import { Button, Dropdown, Field, ModalDelete } from '../../components'
import { FaTrash } from 'react-icons/fa'

const NilaiAlternatif = () => {

    const [deleteModal, setDeleteModal] = useState(false)
    const [valueKriteria, setValueKriteria] = useState('')
    const dataDropdown = [
        {id:'1', kriteria:'Akreditasi 1'},
        {id:'2', kriteria:'Akreditasi 2'},
        {id:'3', kriteria:'Akreditasi 3'},
        {id:'4', kriteria:'Akreditasi 4'},
    ]

    return (
        <div>
            <ModalDelete
                activeModal={deleteModal}
                buttonClose={() => setDeleteModal(!deleteModal)}
                submitButton={''}
            />
            <div className='py-[29px] border-b-2 border-b-blue-950'>
                <h1 className='font-bold text-[24px]'>Nilai Alternatif</h1>
                <p className='text-[18px]'>List data Nilai Alternatif</p>
            </div>
            <div className='py-[20px]'>
                <div className='flex items-end gap-3'>
                    <div className='w-[250px]'>
                        <Dropdown
                            label={'Kriteria'}
                            labelColor={'text-black'}
                            item={dataDropdown}
                            width={'w-[250px]'}
                            onChange={(e) => setValueKriteria(e.target.value)}
                        />
                    </div>
                    {valueKriteria &&
                    <div className='flex items-end gap-3'>
                        <div className='w-[250px]'>
                            <Dropdown
                                label={'Alternatif 1'}
                                labelColor={'text-black'}
                                item={dataDropdown}
                                width={'w-[250px]'}
                            />
                        </div>
                        <div className='w-[250px]'>
                            <Dropdown
                                label={'Alternatif 2'}
                                labelColor={'text-black'}
                                item={dataDropdown}
                                width={'w-[250px]'}
                            />
                        </div>
                        <div className='w-[250px]'>
                            <Field
                                label={'Bobot'}
                                placeholder={'Input Bobot'}
                                labelColor={'text-black'}
                                width={'w-[250px]'}
                            />
                        </div>
                        <div className='w-[250px]'>
                            <Button
                                backgroundColor={'bg-white border shadow-sm'}
                                hoverBG={'hover:bg-slate-200'}
                                textColor={'text-blue-600'}
                                hoverText={'hover:text-blue-800'}
                                buttonName={'Tambah'}
                                paddingHorizontal={'px-[10px]'}
                                width={'w-[250px]'}
                                onClick={() => setValueKriteria('')}
                            />
                        </div>
                    </div>
                    }
                </div>
                <div className='space-y-3 py-[20px]'>
                    <div className='grid grid-cols-12 gap-5 bg-blue-950 rounded-[6px] px-[20px] py-[10px] items-center'>
                        <h1 className='col-span-2 text-white font-semibold'>Nomor</h1>
                        <h1 className='col-span-2 text-white font-semibold'>Kriteria</h1>
                        <h1 className='col-span-2 text-white font-semibold'>Alternatif 1</h1>
                        <h1 className='col-span-2 text-white font-semibold'>Alternatif 2</h1>
                        <h1 className='col-span-2 text-white font-semibold'>Bobot</h1>
                        <h1 className='col-span-2 text-white font-semibold'>Action</h1>
                    </div>
                    <div className='grid grid-cols-12 gap-5 border-b-2 px-[20px] py-[10px] items-center'>
                        <h1 className='col-span-2 text-blue-950 font-semibold'>Nomor</h1>
                        <h1 className='col-span-2 text-blue-950 font-semibold'>Kriteria</h1>
                        <h1 className='col-span-2 text-blue-950 font-semibold'>Alternatif 1</h1>
                        <h1 className='col-span-2 text-blue-950 font-semibold'>Alternatif 2</h1>
                        <h1 className='col-span-2 text-blue-950 font-semibold'>Bobot</h1>
                        <div className='col-span-2 flex items-center gap-4'>
                            <Button
                                backgroundColor={'bg-white border shadow-sm'}
                                hoverBG={'hover:bg-slate-200'}
                                textColor={'text-red-600'}
                                hoverText={'hover:text-red-800'}
                                buttonName={<FaTrash/>}
                                textLeft={true}
                                paddingHorizontal={'px-[10px]'}
                                width={'w-fit'}
                                onClick={() => setDeleteModal(!deleteModal)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NilaiAlternatif