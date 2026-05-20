import React from 'react'
import logo from '../assets/logo.svg'
import moon from '../assets/moon_icon.svg'
import { FaArrowRight } from "react-icons/fa";
export const Navbar = () => {
    return (
        <div  className='flex w-11/12 mx-auto py-6 gap-2  items-center justify-evenly'>
            <img src={logo} alt="" />

            <div className=' mt-2 ml-10 flex gap-6 items-center justify-center font-medium'>
                <a href="#home">Home</a>
                <a href="#services">Services</a>
                <a href="#work">Our Work</a>
                <a href="#testimonials">Testimonials</a>
            </div>

            <div className='flex gap-6 items-center justify-center'>
                <button className='border border-gray-600 p-1  rounded-full'>
                    <img src={moon} alt="dark mode" />
                </button>
                <button className='bg-purple-700 flex items-center  gap-2 text-white rounded-full px-8 py-2'>
                    Connect
                    <FaArrowRight />
                </button>
            </div>

        </div>
    )
}
