import React from 'react'

function Row({ src, mainheading, maintext, first, headPri, headSec, headTer, headQuat, textPri, textSec, textTer, textQuat, feature1, feature2, feature3, feature4 }) {

    return (
        <div className={` lg:justify-around lg:items-center lg:grid lg:grid-cols-2  ${first ? ' p-1 bg-[#F1F6FF]' : 'bg-[#F5F8FB]'}`}>
            <div
                className={`py-3 flex lg:justify-center lg:items-center lg:col-span-1 ${first && 'order-last'}`}
            >
                <img src={src} className='w-[30rem] block mx-auto h-auto object-contain ' alt="features-header" />
            </div>

            <div
                className={`py-5 mx-auto w-11/12 lg:w-3/4  lg:col-span-1  lg:text-left ${first && 'ml-auto'}`}>
                <h1 className='text-4xl font-bold mt-5 text-[#3d86ce]'>{mainheading}</h1>
                <p className='text-2xl mt-3 font-bold text-[#2A3158]' >{maintext}</p>
                <div className='mt-6 lg:space-y-4'>
                    {
                        (headPri && feature1) &&
                        (<div className='flex'>
                            <div className='ml-3 space-y-1'>
                                <h2 className='text-2xl  text-[#2A3158]' >{headPri}</h2>
                                <p className='text-[#424348]'> {textPri}</p>
                            </div>
                        </div>)
                    }

                    {
                        (headSec && feature2) &&
                        (<div className='flex'>
                            <div className='ml-3 space-y-1'>
                                <h2 className='text-2xl text-[#2A3158]' >{headSec}</h2>
                                <p className='text-[#424348]'> {textSec}</p>
                            </div>
                        </div>)
                    }

                    {
                        (headTer && feature3) &&
                        (<div className='flex'>
                            <div className='ml-3 space-y-1'>
                                <h2 className='text-2xl text-[#2A3158]' >{headTer}</h2>
                                <p className='text-[#424348]'> {textTer}</p>
                            </div>
                        </div>)
                    }

                    {
                        (headQuat && feature4) &&
                        (<div className='flex'>
                            <div className='ml-3 space-y-1'>
                                <h2 className='text-2xl text-[#2A3158]' >{headQuat}</h2>
                                <p className='text-[#424348]'> {textQuat}</p>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Row
