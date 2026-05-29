import React from 'react'
import logo from '../assets/logo.svg'

const Footer = () => {
  return (
    <div className=' pt-20 px-[10vw] w-full flex flex-col gap-4 mt-10 bg-blue-50 mx-auto'>

      <div className='flex flex-row justify-between'>
        <div className='flex flex-col gap-2'>
          <div className='h-10'><img src={logo} alt="logo"  /></div>
          <p className='font-light'>From strategy to execution, we craft digital solutions that <br /> move your business forward.</p>
          <div className='mt-6 flex flex-row gap-8 font-semibold'>
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#testimonials">Testimonials</a>
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <p className='font-semibold text-lg'>Subscribe to our newsletter</p>
          <p className='font-light'>The latest news, articles, and resources, sent to your inbox weekly.</p>
          <form action="" className='flex mt-4  flex-row gap-4'>
            <input type="email" placeholder='Enter your email' className='bg-white py-2 px-4 ' />
            <button className='bg-[#5044E5] text-white py-2 px-4 rounded-md font-semibold'>Subscribe</button>
          </form>
        </div>
      </div>

      <div className='mt-6'>
        <div className='bg-gray-300 mb-4 w-full h-0.5'></div>
        <div>
          <p className='font-extralight'>Copyright 2026 © agency.ai  -  All Right Reserved</p>
        </div>
      </div>

    </div>
  )
}

export default Footer