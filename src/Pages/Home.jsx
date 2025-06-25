import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import Searchbar from '../Components/Searchbar/Searchbar'
// import Carousel from '../Components/Carousel/Carousel'
import KeySelling from '../Components/KeySelling/KeySelling'
import Footer from '../Components/Footer/Footer'
import HomeCarousel from '../Components/HomeCarousel/HomeCarousel'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Searchbar/>
      <Hero/>
      <HomeCarousel/>
      {/* <Carousel/> */}
      <KeySelling/> 
      <Footer/>

      
     
    </div>
  )
}

export default Home


