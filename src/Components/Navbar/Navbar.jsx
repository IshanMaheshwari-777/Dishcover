
import React from 'react';
import logo from '../../assets/logo.png';
import { SignedIn, SignedOut, SignInButton, UserButton, SignUpButton } from '@clerk/clerk-react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full bg-white fixed top-0 left-0 z-10 py-3 shadow-md px-6 flex justify-between items-center">
      <a href="/home">
        <img src={logo} alt="Logo" className="w-24 hover:cursor-pointer" />
      </a>
      
      <ul className="hidden md:flex gap-6">
  {[
    { name: 'Home', path: '/home' },
    { name: 'About', path: '/about' },
    { name: 'Recipes', path: '/recipes' },
    { name: 'Blog', path: '/blog' }
  ].map(({ name, path }) => (
    <li key={path}>
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive
            ? 'text-[#FF4B3E] border-b-2 border-[#FF4B3E] pb-1'
            : 'text-gray-800 hover:text-[#FF4B3E] transition'
        }
      >
        {name}
      </NavLink>
    </li>
  ))}
</ul>
      <div className="flex gap-4">
        <SignedOut>
          <SignUpButton className="bg-[#FF4B3E] text-white px-4 py-2 rounded-lg shadow-md" />
          <SignInButton className="bg-[#FF4B3E] text-white px-4 py-2 rounded-lg shadow-md" />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;