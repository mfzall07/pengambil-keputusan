import React from 'react'
import Button from '../Button'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
    const navigate = useNavigate()

    return (
        <div className='px-[15px] py-[40px] bg-blue-950 sticky top-0 flex flex-col gap-10 min-w-fit h-screen'>
            <h1 className='text-white font-bold text-[45px] border-b-2 border-white pb-5'>STUDYSELECT</h1>
            <Button
                backgroundColor={'bg-transparent'}
                hoverBG={'hover:bg-white'}
                textColor={'text-white'}
                hoverText={'hover:text-blue-950'}
                buttonName={'Dashboard'}
                textLeft={true}
                paddingHorizontal={'px-[10px]'}
                width={'w-[300px]'}
                onClick={() => navigate('/dashboard')}
            />
            <Button
                backgroundColor={'bg-transparent'}
                hoverBG={'hover:bg-white'}
                textColor={'text-white'}
                hoverText={'hover:text-blue-950'}
                buttonName={'Kriteria'}
                textLeft={true}
                paddingHorizontal={'px-[10px]'}
                width={'w-[300px]'}
                onClick={() => navigate('/kriteria')}
            />
            <Button
                backgroundColor={'bg-transparent'}
                hoverBG={'hover:bg-white'}
                textColor={'text-white'}
                hoverText={'hover:text-blue-950'}
                buttonName={'Alternatif'}
                textLeft={true}
                paddingHorizontal={'px-[10px]'}
                width={'w-[300px]'}
                onClick={() => navigate('/alternatif')}
            />
            <Button
                backgroundColor={'bg-transparent'}
                hoverBG={'hover:bg-white'}
                textColor={'text-white'}
                hoverText={'hover:text-blue-950'}
                buttonName={'Bobot Kriteria'}
                textLeft={true}
                paddingHorizontal={'px-[10px]'}
                width={'w-[300px]'}
                onClick={() => navigate('/bobot-kriteria')}
            />
            <Button
                backgroundColor={'bg-transparent'}
                hoverBG={'hover:bg-white'}
                textColor={'text-white'}
                hoverText={'hover:text-blue-950'}
                buttonName={'Nilai Alternatif'}
                textLeft={true}
                paddingHorizontal={'px-[10px]'}
                width={'w-[300px]'}
                onClick={() => navigate('/nilai-alternatif')}
            />
            <Button
                backgroundColor={'bg-transparent'}
                hoverBG={'hover:bg-white'}
                textColor={'text-white'}
                hoverText={'hover:text-blue-950'}
                buttonName={'Perangkingan'}
                textLeft={true}
                paddingHorizontal={'px-[10px]'}
                width={'w-[300px]'}
                onClick={() => navigate('/perangkingan')}
            />
            <Button
                backgroundColor={'bg-transparent'}
                hoverBG={'hover:bg-white'}
                textColor={'text-red-600'}
                hoverText={'hover:text-red-800'}
                buttonName={'Logout'}
                textLeft={true}
                paddingHorizontal={'px-[10px]'}
                width={'w-[300px]'}
                onClick={() => navigate('/')}
            />
        </div>
    )
}

export default Sidebar