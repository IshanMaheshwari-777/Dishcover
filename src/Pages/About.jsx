import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import AboutHero from '../Components/AboutHero/AboutHero'
import History from '../Components/History/History'
import MissionVision from '../Components/MissionVision/MissionVision'
import TeamCarousel from '../Components/TeamCarousel/TeamCarousel'
const About = () => {
  return (
    <div>
      <Navbar/>
      <AboutHero/>
      <History/>
      <MissionVision/>
      <TeamCarousel/>
      <Footer/>
    </div>
  )
}

export default About
