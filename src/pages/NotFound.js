import React, { useEffect } from 'react'
import { useHistory } from 'react-router'

function NotFound() {
    const history = useHistory()
    useEffect(() => {
        const interval = setTimeout(() => {
            history.push('/')
        }, 5000);

        return () => {
            clearInterval(interval)
        }
    }, [history])
    return (
        <div className='grid place-items-center h-[100vh]'>
            <div>
                <h1 className='text-5xl font-extrabold my-5'>Error <span className='text-7xl text-red-700'>404</span></h1>
                <h1 className='text-3xl font-extrabold'>Page Not Found</h1>
            </div>
        </div>
    )
}

export default NotFound