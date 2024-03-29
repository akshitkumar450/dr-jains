import React from 'react'
import PricingOptions from './PricingOptions'
import { useForm } from "react-hook-form";
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

function PricingForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onFormSubmit = (formData) => {
        // console.log(formData);
     
    }

    return (
        <>
            <div
                className="bg-transparent pt-10 mb-20"
            >
                <div className=" px-4 lg:px-0 max-w-6xl mx-auto">
                    <div className="grid items-center lg:grid-cols-2 gap-x-20">
                        <div className="col-span-1 order-last lg:order-first">
                            <div className="">
                                <form onSubmit={handleSubmit(onFormSubmit)} id="requestForm" data-toggle="validator" data-focus="false" className='space-y-3'>

                                    <div>
                                        <TextField
                                            type="text"
                                            label='Name'
                                            variant='outlined'
                                            className='w-full'
                                            {...register('name', { required: true })}
                                        />
                                        {errors.name && <p className='text-gray-600 text-xs'>name is required</p>}
                                    </div>

                                    <div >
                                        <TextField
                                            label="Email"
                                            type="email"
                                            variant="outlined"
                                            className='w-full'
                                            {...register('email', { required: true })}
                                        />
                                        {errors.email && <p className='text-gray-600 text-xs'>email is required</p>}
                                    </div>

                                    <div>
                                        <TextField
                                            label="Contact Number"
                                            type="text"
                                            variant="outlined"
                                            className='w-full'
                                            {...register('phone', { required: true })}
                                        />
                                        {errors.phone && <p className='text-gray-600 text-xs'>Contact Number is required</p>}
                                    </div>

                                    
                                    <div>
                                        <TextField
                                            label="Describe your Complaint"
                                            type="text"
                                            variant="outlined"
                                            className='w-full'
                                            {...register('needs', { required: true })}
                                        />
                                        {errors.phone && <p className='text-gray-600 text-xs'>Needs is required</p>}
                                    </div>

                                    

                                    <div>
                                        <Button
                                            variant='contained'
                                            type='submit'
                                            className='w-full h-[3.125rem] transition-all duration-200 cursor-pointer !text-white !bg-[#0075cc] !rounded-full ring-2 !ring-[#0075cc]'
                                        // className={styles.pricingFormBtn}
                                        >
                                            Submit
                                        </Button>

                                    </div>
                                    <div className="form-message">
                                        <div id="rmsgSubmit" className="h3 text-center hidden"></div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="col-span-1">
                            <PricingOptions />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PricingForm
