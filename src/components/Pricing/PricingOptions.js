import React from 'react'

function PricingOptions() {
    const pricingOptions = [
        'Fill the treatment form',
        'Select treatment duration',
        'Make the payment',
        'Our team will get in touch with you'
    ]

    return (
        <>
            <div className="text-4xl">
                <h2 className='text-[#2A3158] font-semibold'>
                    Fill the form to get customised {" "}
                    <p
                        className='uppercase text-[#186FC5] '
                    >Treatment Plan</p>
                </h2>
                <p className='text-gray-500 text-lg pt-2' >
                    
                </p>
                <ul className="space-y-2 pl-7 mb-3  lg:-ml-8 mt-3 " >
                    {
                        pricingOptions.map((option, idx) => {
                            return (
                                <li key={idx} className='list-none text-lg text-gray-500'>
                                    <i className="fas fa-check mr-2 text-blue-600"></i>
                                    {option}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default PricingOptions
