import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { SignedIn, SignedOut, SignInButton, UserButton, SignUpButton} from '@clerk/clerk-react'

const Navbar = () => {
  return (
    <nav className='container'>
      <a href=""><img src={logo} alt="" className='logo'/></a>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Recipes</a></li>
        <li><a href="#">Blog</a></li>
        
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
