import React from 'react'

function DemoLeft() {
    return (
        <div className='col-span-1'>
            <h1 className='text-blue-600 font-bold text-4xl'> Need help with your treatment?
            </h1>

            <p className='text-[#424348] mt-3' > Fill this form and our experts will get in touch with you.
            </p>
            
            <h1 className=' text-[#424348] text-2xl my-5'>The process:-
            </h1>

            <ol className='list-decimal list-inside text-[#424348]' >
                <li>Fill the treatment form, select treatment duration and make the payment
                </li>
                <li>Fill the detailed pre-treatment analysis form by email
                </li>
                <li>Online consultation with our specialist. Then they will customize your treatment and ship the
medications to you within 24 hours*
</li>

                <li>You will receive the medication and start the treatment according to the guidelines mentioned
therein.

                </li>
                <li>Continuously be in touch with us by replying to our emails / WhatsApp, for us to know your progress.</li>
            </ol>
            
        </div>
    )
}

export default DemoLeft
