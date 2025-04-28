import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Find Recipes with Ingredients You Already Have</h1>
        <p>Stop wondering what to cook! Enter your ingredients and discover delicious recipes tailored to what's in your kitchen.</p>
        <button className='explorebtn'>Explore Recipes</button>
      </div>
      <div className="getintouchform">
        <h2 className='getintouchformheading'>Get in Touch</h2>
        <form action="">
          <input type="text" placeholder='Your Name' className='inputname'/>
          <input type="email" placeholder='Your Email' className='inputemail'/>
          <textarea name="" id="" cols="30" rows="10" placeholder='Your Message' className='inputmessage'></textarea>
          <button className='dark-btn'>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Hero
