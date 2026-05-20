import React from 'react'
import { Navbar } from './components/Navbar.jsx'
import HeroSection from './components/HeroSection.jsx'
import Services from './components/Services.jsx'
import Work from './components/Work.jsx'
import Team from './components/Team.jsx'
import Contact_us from './components/Contact_us.jsx'
const App = () => {
  return (
    <div className=' flex flex-col gap-[10vh] overflow-hidden justify-center'>
      <Navbar />
      <HeroSection/>
      <Services/>
      <Work/>
      <Team/>
      <Contact_us/>
    </div>
  )
}

export default App

