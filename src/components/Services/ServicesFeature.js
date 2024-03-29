import React from 'react'
import { Link } from 'react-router-dom'

function ServicesFeature({ text, heading, benefits, url }) {
    return (
        <Link to={url}>
            <div
                className={` text-center lg:col-span-1 py-14 px-1 h-full`}
                style={{ boxShadow: '0px 3px 10px #00000040' }}
            >
                <h1 className={`text-[#4e5474] font-bold my-3 text-xl ${benefits && 'text-xl uppercase'} `}>{heading}</h1>
                <p className={`${benefits && 'text-md'} text-[#7F7F7F]`} >{text}</p>
            </div>
        </Link>
    )
}

export default ServicesFeature