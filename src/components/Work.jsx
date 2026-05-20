import React from 'react'
import img1 from '../assets/work_mobile_app.png'
import img2 from '../assets/work_dashboard_management.png'
import img3 from '../assets/work_fitness_app.png'

const Work = () => {
  return (
    <div id="work" className=' w-11/12  mx-auto mt-14 flex flex-col gap-4 items-center'>
        <div className='text-3xl font-semibold'>Our latest work</div>
        <div className='w-[33vw] text-center font-light'>Browse our portfolio of innovative digital projects that showcase creativity, performance, and results</div>
        
        <div className=' flex gap-6 mt-4 justify-center'>
          <div className='w-[30%] flex flex-col gap-2'>
            <img src={img1} alt="" />
            <p className='font-semibold text-lg'>Mobile app marketing</p>
            <p className='font-light  w-[80%]'>We turn bold ideas into powerful digital solutions that connect...</p>
          </div>

          <div className='w-[30%] flex flex-col gap-2'>
            <img src={img2} alt="" />
            <p className='font-semibold text-lg'>Dashboard management</p>
            <p className='font-light  w-[80%]'>We turn bold ideas into powerful digital solutions that connect...</p>
          </div>

          <div className='w-[30%] flex flex-col gap-2'>
            <img src={img3} alt="" />
            <p className='font-semibold text-lg'>Fitness app promotion</p>
            <p className='font-light  w-[80%]'>We turn bold ideas into powerful digital solutions that connect</p>
          </div>
        </div>
    </div>
  )
}

export default Work