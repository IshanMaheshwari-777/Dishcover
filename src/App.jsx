import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Searchbar from './Components/Searchbar/Searchbar'
import Carousel from './Components/Carousel/Carousel'
import KeySelling from './Components/KeySelling/KeySelling'
import Footer from './Components/Footer/Footer'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Searchbar/>
      <Hero/>
      <Carousel/>
      <KeySelling/> 
      <Footer/>

      
     
    </div>
  )
}

export default App
