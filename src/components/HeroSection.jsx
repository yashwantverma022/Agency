import React from 'react'
import people from '../assets/group_profile.png'
import heroimg from '../assets/hero_img.png'
import bggradient1 from '../assets/bgImage1.png'
import bggradient2 from '../assets/bgImage2.png'
import airbnb from '../assets/airbnb_logo.svg'
import coinbase from '../assets/coinbase_logo.png'
import google from '../assets/google_logo.svg'
import microsoft from '../assets/microsoft_logo.png'
import rakuten from '../assets/rakuten_logo.png'
import zoom from '../assets/zoom_logo.png'

const HeroSection = () => {
    return (
        <div className='w-11/12 mx-auto relative    flex flex-col gap-4  items-center text-black '>
            <div className='flex px-2 py-2 mb-6 items-center justify-center border rounded-full gap-2 text-sm font-light '>
                <img className='h-[20px]' src={people} alt="" />
                <p>trusted by 10k+ people</p>
            </div>

            <div className='text-7xl w-full  flex flex-col gap-2  items-center    font-bold'>
                <p>Turning imagination into</p>
                <p > <span className='text-purple-700 pr-4'>digital</span>impact.</p>  
            </div>

            <p className='w-[38%] mt-2 text-center text-xl'>Creating meaningful connections and turning big ideas into interactive digital experiences</p>

            <img src={bggradient1} className='absolute -translate-y-20 left-[20vw] z-1' alt="" />
            <img src={heroimg} alt="" className='z-2 w-[80%] mt-14' />
            <img src={bggradient2} className='absolute -translate-x-130 top-60 z-1' alt="" />

            <p className='mt-12 mb-4'>Trusted by Leading Companies</p>
            <div className='flex items-center gap-16'>
                <img src={airbnb} alt="airbnb" />
                <img src={coinbase}  alt="coinbase" className='h-[20px]' />
                <img src={google} alt="google" className='h-[20px]' />
                <img src={microsoft} alt="microsoft" className='h-[20px]' />
                <img src={rakuten} alt="rakuten" className='h-[20px]' />
                <img src={zoom} alt="zoom" className='h-[20px]' />
            </div>
        </div>
    )
}

export default HeroSection