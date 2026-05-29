import React, { useRef, useState } from 'react'
import ads from '../assets/ads_icon.svg'
import content from '../assets/content_icon.svg'
import social from '../assets/social_icon.svg'
import marketing from '../assets/marketing_icon.svg'

const ServiceCard = ({ title, desc, icon }) => {
    const cardRef = useRef(null)
    const [coords, setCoords] = useState({ x: 0, y: 0 })
    const [isHovered, setIsHovered] = useState(false)

    const handleMouseMove = (e) => {
        if (!cardRef.current) return
        const rect = cardRef.current.getBoundingClientRect()
        setCoords({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        })
    }

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className='w-[30vw] px-8 shadow-lg shadow-gray-300/60 rounded-2xl flex justify-center items-center gap-6 h-[22vh] border-2 transition-all duration-300 relative overflow-hidden bg-white hover:shadow-2xl hover:shadow-purple-500/30'
            style={{
                borderColor: isHovered ? 'transparent' : '#f3f4f6',
                background: isHovered
                    ? `linear-gradient(white, white) padding-box, radial-gradient(130px circle at ${coords.x}px ${coords.y}px, #7e22ce, #4f46e5 50%, transparent 100%) border-box`
                    : 'white'
            }}
        >
            <div className='border-6 border-gray-100 p-1 rounded-full shrink-0'>
                <img src={icon} alt={title} className='w-[6vw]' />
            </div>
            <div className='flex flex-col gap-1.5 '>
                <p className='font-semibold text-[20px]'>{title}</p>
                <p className='font-light text-gray-600 text-sm'>{desc}</p>
            </div>
        </div>
    )
}

const Services = () => {
    const servicesData = [
        {
            title: 'Advertising',
            desc: 'We turn bold ideas into powerful digital solutions that connect, engage...',
            icon: ads
        },
        {
            title: 'Content marketing',
            desc: 'We turn bold ideas into powerful digital solutions that connect, engage and...',
            icon: marketing
        },
        {
            title: 'Content writing',
            desc: 'We turn bold ideas into powerful digital solutions that connect...',
            icon: content
        },
        {
            title: 'Social media',
            desc: 'We turn bold ideas into powerful digital solutions that connect, engage...',
            icon: social
        }
    ]

    return (
        <div id="services" className='w-11/12 mx-auto mt-12 flex flex-col items-center '>
            <p className='font-bold text-4xl text-gray-900'>How can we help ?</p>
            <p className='font-light pt-4 w-[35%] text-center text-gray-600'>From strategy to execution, we craft digital solutions that move your business forward.</p>

            <div className='grid grid-cols-2 mt-6 gap-10'>
                {servicesData.map((service, index) => (
                    <ServiceCard
                        key={index}
                        title={service.title}
                        desc={service.desc}
                        icon={service.icon}
                    />
                ))}
            </div>
        </div>
    )
}

export default Services