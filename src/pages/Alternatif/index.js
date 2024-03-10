import React, { useState } from 'react'
import { Button, Field, Modal, ModalDelete } from '../../components';
import { FaPlusSquare, FaTrash } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import Api from '../../Api';

const Alternatif = () => {

    const [createModal, setCreateModal] = useState(false)
    const [editModal, setEditModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)


    const [kodeAllternatif, setKodeAlternatif] = useState('')

    const postData = async() => {
        try {
            const data = {
                kodeAllternatif: kodeAllternatif
            }
            // const res = await Api.Login(data)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <Modal
                activeModal={createModal}
                buttonClose={() => setCreateModal(!createModal)}
                title={'Tambah Alternatif'}
                width={'550px'}
                content={
                    <div className='space-y-5'>
                        <Field
                            label={'Kode Alternatif'}
                            placeholder={'Input Kode Alternatif'}
                            labelColor={'text-black'}
                            width={'w-full'}
                            onChange={(e) => setKodeAlternatif(e.target.value)}
                        />
                        <Field
                            label={'Nama Alternatif'}
                            placeholder={'Input Nama Alternatif'}
                            labelColor={'text-black'}
                            width={'w-full'}
                        />
                        <Field
                            label={'Keteranagan'}
                            placeholder={'Input Keteranagan'}
                            labelColor={'text-black'}
                            width={'w-full'}
                        />
                        <Field
                            label={'Total'}
                            placeholder={'Input Total'}
                            labelColor={'text-black'}
                            width={'w-full'}
                        />
                        <div className='flex items-center gap-3'>
                            <Button
                                backgroundColor={'bg-white border shadow-sm'}
                                hoverBG={'hover:bg-slate-200'}
                                textColor={'text-red-600'}
                                hoverText={'hover:text-red-800'}
                                buttonName={'Batal'}
                                paddingHorizontal={'px-[10px]'}
                                width={'w-full'}
                                onClick={() => setCreateModal(!createModal)}
                            />
                            <Button
                                backgroundColor={'bg-white border shadow-sm'}
                                hoverBG={'hover:bg-slate-200'}
                                textColor={'text-blue-600'}
                                hoverText={'hover:text-blue-800'}
                                buttonName={'Tambah'}
                                paddingHorizontal={'px-[10px]'}
                                width={'w-full'}
                                onClick={postData}
                            />
                        </div>
                    </div>
                }
            />
            <Modal
                activeModal={editModal}
                buttonClose={() => setEditModal(!editModal)}
                title={'Edit Alternatif'}
                width={'550px'}
                content={
                    <div className='space-y-5'>
                        <Field
                            label={'Kode Alternatif'}
                            placeholder={'Input Kode Alternatif'}
                            labelColor={'text-black'}
                            width={'w-full'}
                        />
                        <Field
                            label={'Nama Alternatif'}
                            placeholder={'Input Nama Alternatif'}
                            labelColor={'text-black'}
                            width={'w-full'}
                        />
                        <Field
                            label={'Keteranagan'}
                            placeholder={'Input Keteranagan'}
                            labelColor={'text-black'}
                            width={'w-full'}
                        />
                        <Field
                            label={'Total'}
                            placeholder={'Input Total'}
                            labelColor={'text-black'}
                            width={'w-full'}
                        />
                        <div className='flex items-center gap-3'>
                            <Button
                                backgroundColor={'bg-white border shadow-sm'}
                                hoverBG={'hover:bg-slate-200'}
                                textColor={'text-red-600'}
                                hoverText={'hover:text-red-800'}
                                buttonName={'Batal'}
                                paddingHorizontal={'px-[10px]'}
                                width={'w-full'}
                                onClick={() => setEditModal(!editModal)}
                            />
                            <Button
                                backgroundColor={'bg-white border shadow-sm'}
                                hoverBG={'hover:bg-slate-200'}
                                textColor={'text-blue-600'}
                                hoverText={'hover:text-blue-800'}
                                buttonName={'Simpan'}
                                paddingHorizontal={'px-[10px]'}
                                width={'w-full'}
                                onClick={() => setEditModal(!editModal)}
                            />
                        </div>
                    </div>
                }
            />
            <ModalDelete
                activeModal={deleteModal}
                buttonClose={() => setDeleteModal(!deleteModal)}
                submitButton={''}
            />
            <div className='py-[29px] border-b-2 border-b-blue-950'>
                <h1 className='font-bold text-[24px]'>Alternatif</h1>
                <p className='text-[18px]'>List data Alternatif</p>
            </div>
            <div className='space-y-3 py-[20px]'>
                <Button
                    backgroundColor={'bg-blue-950 border shadow-sm'}
                    hoverBG={'hover:bg-white'}
                    textColor={'text-white'}
                    hoverText={'hover:text-blue-950'}
                    buttonName={<div className='flex items-center gap-3'><FaPlusSquare /> Tambah Alternatif</div>}
                    textLeft={true}
                    paddingHorizontal={'px-[10px]'}
                    width={'w-fit'}
                    onClick={() => setCreateModal(!createModal)}
                />
                <div className='grid grid-cols-12 gap-5 bg-blue-950 rounded-[6px] px-[20px] py-[10px] items-center'>
                    <h1 className='col-span-1 text-white font-semibold'>Nomor</h1>
                    <h1 className='col-span-2 text-white font-semibold'>Kode Alternatif</h1>
                    <h1 className='col-span-3 text-white font-semibold'>Nama Alternatif</h1>
                    <h1 className='col-span-2 text-white font-semibold'>Keterangan</h1>
                    <h1 className='col-span-2 text-white font-semibold'>Total</h1>
                    <h1 className='col-span-2 text-white font-semibold'>Action</h1>
                </div>
                <div className='grid grid-cols-12 gap-5 border-b-2 px-[20px] py-[10px] items-center'>
                    <h1 className='col-span-1 text-blue-950 font-semibold'>Nomor</h1>
                    <h1 className='col-span-2 text-blue-950 font-semibold'>Kode Alternatif</h1>
                    <h1 className='col-span-3 text-blue-950 font-semibold'>Nama Alternatif</h1>
                    <h1 className='col-span-2 text-blue-950 font-semibold'>Keterangan</h1>
                    <h1 className='col-span-2 text-blue-950 font-semibold'>Total</h1>
                    <div className='col-span-2 flex items-center gap-4'>
                        <Button
                            backgroundColor={'bg-white border shadow-sm'}
                            hoverBG={'hover:bg-slate-200'}
                            textColor={'text-blue-600'}
                            hoverText={'hover:text-blue-800'}
                            buttonName={<FiEdit/>}
                            textLeft={true}
                            paddingHorizontal={'px-[10px]'}
                            width={'w-fit'}
                            onClick={() => setEditModal(!editModal)}
                        />
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
    )
}

export default Alternatif