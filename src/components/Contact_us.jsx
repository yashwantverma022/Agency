import React from 'react'
import user from "../assets/person_icon.svg"
import email from "../assets/email_icon.svg"
import arrow from "../assets/arrow_icon.svg"

const Contact_us = () => {
    return (
        <div className='w-11/12 mx-auto mt-12 items-center flex flex-col '>
            <div className=' flex flex-col items-center gap-3'>
                <h1 className='text-4xl font-bold'>Reach out to us</h1>
                <p className=' font-light'>Ready to grow your brand? Let’s connect and build something exceptional together.</p>
            </div>
            <div className='w-[70%]   '>
                <form action="" className='flex flex-col justify-center w-[100%] gap-6 '>
                    <div className='w-[100%] flex flex-row gap-8'>
                        <div className='ml-4 w-[45%]'>
                            <p className='font-semibold text-lg'>Your Name</p>
                            <div className='flex gap-1.5  h-[8vh] items-center pl-3 border-2 rounded-2xl   border-gray-400'>
                                <img src={user} alt="" className='h-[20px]' />
                                <input type="text" placeholder='Enter your name' />
                            </div>
                        </div>

                        <div className='w-[45%]'>
                            <p className='font-semibold text-lg'>Email id</p>
                            <div className='flex gap-1.5  h-[8vh] items-center pl-3 border-2 rounded-2xl   border-gray-400'>
                                <img src={email} alt="" className='h-[20px]' />
                                <input type="text" placeholder='Enter your name' />
                            </div>
                        </div>
                    </div>

                    <div className=' pl-4'>
                        <p className='text-lg font-semibold'>Message</p>
                        <input type="text" placeholder='enter your message' className='border border-2 rounded-2xl w-[90%] h-[30vh] border-gray-400' />
                    </div>

                    <div className='rounded-3xl bg-purple-800 flex flex-row gap-2 justify-center items-center text-white font-bold text-lg w-[20%] ml-4 px-4 py-2.5 border-2 border-gray-500'>
                        <button>Submit</button>
                        <img src={arrow} alt="" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact_us