import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { SignedIn, SignedOut, SignInButton, UserButton, SignUpButton} from '@clerk/clerk-react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='container'>
      <a href=""><img src={logo} alt="" className='logo'/></a>
      <ul>
        <li><NavLink to="/home">Home</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>
        <li><NavLink to="/">Recipes</NavLink></li>
        <li><NavLink to="/">Blog</NavLink></li>
        
      </ul>
      <ul>
      <SignedOut>
        <SignUpButton className='signupbtn' />
        <SignInButton className='signupbtn' />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
        {/* <li><button className='loginbtn'>Login</button></li>
        <li><button className='signupbtn'>Sign Up</button></li> */}
      </ul>
    </nav>
  )
}

export default Navbar
