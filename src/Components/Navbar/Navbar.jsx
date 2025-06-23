import React from 'react';
import logo from '../../assets/logo.png';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton, SignUpButton } from '@clerk/clerk-react';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-white fixed top-0 left-0 z-10 py-3 shadow-md px-6 flex justify-between items-center"
    >
      <a href="/home">
        <motion.img
          src={logo}
          alt="Logo"
          className="w-24 hover:cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        />
      </a>

      <ul className="hidden md:flex gap-6">
        {[
          { name: 'Home', path: '/home' },
          { name: 'About', path: '/about' },
          { name: 'Recipes', path: '/recipes' },
          { name: 'Blog', path: '/blog' }
        ].map(({ name, path }) => (
          <motion.li
            key={path}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 250 }}
          >
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
          </motion.li>
        ))}
      </ul>

      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <SignedOut>
          <SignUpButton className="bg-[#FF4B3E] text-white px-4 py-2 rounded-lg shadow-md" />
          <SignInButton className="bg-[#FF4B3E] text-white px-4 py-2 rounded-lg shadow-md" />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
