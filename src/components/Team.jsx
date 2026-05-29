import React from 'react'

const employees = [
  {
    id: 1,
    name: "Sergio de Oliveira",
    role: "CEO & Founder",
    img: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Jason Peterrson",
    role: "Vice President",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Mark Rohen",
    role: "Ads Manager",
    img: "https://images.unsplash.com/photo-1742518424517-ca7890ff9510?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Lucas Calloch",
    role: "Marketing & Sales",
    img: "https://images.unsplash.com/photo-1634551053528-d50092733600?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Usman Yousuf",
    role: "Content marketer",
    img: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "Yogendra Singh",
    role: "Content writer",
    img: "https://images.unsplash.com/photo-1569128782402-d1ec3d0c1b1b?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    name: "Amrihosain Gozar",
    role: "Performance manager",
    img: "https://images.unsplash.com/photo-1625332788083-fc0db07a2169?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    name: "Khalid Ali",
    role: "Senior writer",
    img: "https://images.unsplash.com/photo-1638823479047-3e79058c6e24?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]

const Team = () => {
  return (
    <div id='testimonials' className=' mt-10  flex flex-col gap-6 items-center '>
      <div className='items-center gap-2 flex flex-col'>
        <p className='font-bold text-4xl'>Meet the Team</p>
        <p className='font-light text-md'>A passionate team of digital experts dedicated to your
          brand’s success.</p>
      </div>

      <div className='px-4   ml-12 grid grid-cols-4 gap-6'>
{employees.map((item, id) => (<div key={id} className='h-[20vh] w-[20vw] rounded-2xl shadow-lg shadow-gray-300 bg-white hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 items-center gap-6 p-6 flex '>
        <img src={item.img} alt={item.name} className='rounded-full h-[50px] w-[50px] object-cover' />
        <div className='flex flex-col justify-center items-center'>
          <p className='font-semibold '>{item.name}</p>
          <p className='font-light text-sm'>{item.role}</p>
        </div>
      </div>
      ))}
      </div>
      
    </div>
  )
}

export default Team