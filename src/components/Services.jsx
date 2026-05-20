import React from 'react'
import ads from '../assets/ads_icon.svg'
import content from '../assets/content_icon.svg'
import social from '../assets/social_icon.svg'
import marketing from '../assets/marketing_icon.svg'

const Services = () => {
    return (
        <div id="services" className='w-11/12 mx-auto mt-12 flex flex-col items-center '>
            <p className='font-bold text-3xl'>How can we help ?</p>
            <p className='font-light pt-4 w-[35%] text-center'>From strategy to execution, we craft digital solutions that move your business forward.</p>

            <div className='grid grid-cols-2 mt-6 grid-rows-2 gap-10'>
                
                <div className=' w-[30vw] px-8  border-2 flex justify-center items-center gap-6 border-amber-900 h-[22vh]'>
                    <div className='border-4 border-gray-300 p-1 rounded-full'>
                        <img src={ads} alt="" className='w-[5vw]' />
                    </div>
                    <div className='flex flex-col gap-1.5 '>
                        <p className='font-semibold text-[20px]'>Advertising</p>
                        <p className='font-light'>We turn bold ideas into powerful digital solutions that connect, engage...</p>
                    </div>
                </div>

                <div className=' w-[30vw] px-8  border-2 flex justify-center items-center gap-6 border-amber-900 h-[22vh]'>
                    <div className='border-4 border-gray-300 p-1 rounded-full'>
                        <img src={marketing} alt="" />
                    </div>
                    <div className='flex flex-col gap-1.5 '>
                        <p className='font-semibold text-[20px]'>Content marketing</p>
                        <p className='font-light'>We turn bold ideas into powerful digital solutions that connect, engage and...</p>
                    </div>
                </div>
                
                <div className=' w-[30vw] px-8  border-2 flex justify-center items-center gap-6 border-amber-900 h-[22vh]'>
                    <div className='border-4 border-gray-300 p-1 rounded-full'>
                        <img src={content} alt="" />
                    </div>
                    <div className='flex flex-col gap-1.5 '>
                        <p className='font-semibold text-[20px]'>Content writing</p>
                        <p className='font-light'>We turn bold ideas into powerful digital solutions that connect...</p>
                    </div>
                </div>
                
                <div className=' w-[30vw] px-8  border-2 flex justify-center items-center gap-6 border-amber-900 h-[22vh]'>
                    <div className='border-4 border-gray-300 p-1 rounded-full'>
                        <img src={social} alt="" />
                    </div>
                    <div className='flex flex-col gap-1.5 '>
                        <p className='font-semibold text-[20px]'>Social media</p>
                        <p className='font-light'>We turn bold ideas into powerful digital solutions that connect, engage...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services