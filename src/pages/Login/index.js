import React from 'react'
import { Button, Field } from '../../components'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    return (
        <div className='flex items-center justify-center h-screen bg-blue-950'>
            <div className='flex flex-col gap-8'>
                <div className='flex flex-col gap-3'>
                    <Field
                        label={'Email'}
                        labelColor={'text-white'}
                        placeholder={'Input Email'}
                        width={'min-w-[450px]'}
                        />
                    <Field
                        label={'Password'}
                        labelColor={'text-white'}
                        placeholder={'Input Password'}
                        width={'min-w-[450px]'}
                    />
                </div>
                <Button onClick={() => navigate('dashboard')}/>
            </div>
        </div>
    )
}

export default Login