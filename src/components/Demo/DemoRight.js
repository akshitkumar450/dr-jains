import React from 'react'
import { Link } from 'react-router-dom'

function DemoRight() {
    return (
        <form className='text-[#424348] col-span-1 mx-auto px-4 bg-white  lg:w-4/5 space-y-4 lg:space-y-7 py-8 lg:px-5 lg:mb-10 ring-2 ring-gray-200 shadow-lg rounded-lg mt-10 lg:mt-0'>
            <div>
                <label htmlFor='name'>Name <sup>*</sup></label>
                <input type="text" id='name' className='mt-2 w-11/12 lg:w-full block rounded-sm px-2 py-1 ring-2 ring-gray-400' />
            </div>
            <div>
                <label htmlFor='email' >Email <sup>*</sup></label>
                <input type="email" id='email' className='mt-2  w-11/12 lg:w-full  block rounded-sm px-2 py-1 ring-2 ring-gray-400' />
            </div>
            <div>
                <label htmlFor='company' >Present complaint <sup>*</sup></label>
                <input type="text" id='company' className='mt-2  w-11/12 lg:w-full  block rounded-sm px-2 py-1 ring-2 ring-gray-400' />
            </div>

            
            <div className='px-2 w-full'>
                <Link to='/calendar'>
                    <button type='submit' className='text-white w-full rounded-full px-4 py-2  bg-[#df7324] '>
                        Schedule a session
                    </button>
                </Link>
            </div>
        </form>
    )
}

export default DemoRight
