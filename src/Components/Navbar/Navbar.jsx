// import React from 'react';
// import logo from '../../assets/logo.png';
// import { motion } from 'framer-motion';
// import { NavLink } from 'react-router-dom';
// import { SignedIn, SignedOut, SignInButton, UserButton, SignUpButton } from '@clerk/clerk-react';

// const Navbar = () => {
//   return (
//     <motion.nav
//       initial={{ y: -60, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6 }}
//       className="w-full bg-white fixed top-0 left-0 z-50 py-3 shadow-md px-6 flex justify-between items-center"
//     >
//       <a href="/home">
//         <motion.img
//           src={logo}
//           alt="Logo"
//           className="w-24 hover:cursor-pointer"
//           whileHover={{ scale: 1.05 }}
//           transition={{ type: 'spring', stiffness: 300 }}
//         />
//       </a>

//       <ul className="hidden md:flex gap-6">
//         {[
//           { name: 'Home', path: '/home' },
//           { name: 'About', path: '/about' },
//           { name: 'Recipes', path: '/recipes' },
//           { name: 'Blog', path: '/blog' }
//         ].map(({ name, path }) => (
//           <motion.li
//             key={path}
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: 'spring', stiffness: 250 }}
//           >
//             <NavLink
//               to={path}
//               className={({ isActive }) =>
//                 isActive
//                   ? 'text-[#FF4B3E] border-b-2 border-[#FF4B3E] pb-1'
//                   : 'text-gray-800 hover:text-[#FF4B3E] transition'
//               }
//             >
//               {name}
//             </NavLink>
//           </motion.li>
//         ))}
//       </ul>

//       <motion.div
//         className="flex gap-4"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.4 }}
//       >
//         <SignedOut>
//           <SignUpButton className="bg-[#FF4B3E] text-white px-4 py-2 rounded-lg shadow-md" />
//           <SignInButton className="bg-[#FF4B3E] text-white px-4 py-2 rounded-lg shadow-md" />
//         </SignedOut>
//         <SignedIn>
//           <UserButton />
//         </SignedIn>
//       </motion.div>
//     </motion.nav>
//   );
// };

// export default Navbar;


// import { useState, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import logo from '../../assets/logo.png';
// import {
//   SignedIn,
//   SignedOut,
//   SignInButton,
//   UserButton,
//   SignUpButton,
// } from '@clerk/clerk-react';

// const Navbar = () => { 

  

//   return (
//     <motion.nav
//       initial={{ y: -60, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6 }}
//       className="w-full bg-white  fixed top-0 left-0 z-10 py-3 shadow-md px-6 flex justify-between items-center"
//     >
//       <a href="/home">
//         <motion.img
//           src={logo}
//           alt="Logo"
//           className="w-24 hover:cursor-pointer"
//           whileHover={{ scale: 1.05 }}
//           transition={{ type: 'spring', stiffness: 300 }}
//         />
//       </a>

//       <ul className="hidden md:flex gap-6">
//         {[
//           { name: 'Home', path: '/home' },
//           { name: 'About', path: '/about' },
//           { name: 'Recipes', path: '/recipes' },
//           { name: 'Blog', path: '/blog' }
//         ].map(({ name, path }) => (
//           <motion.li
//             key={path}
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: 'spring', stiffness: 250 }}
//           >
//             <NavLink
//               to={path}
//               className={({ isActive }) =>
//                 isActive
//                   ? 'text-[#FF4B3E] border-b-2 border-[#FF4B3E] pb-1'
//                   : 'text-gray-800  hover:text-[#FF4B3E] transition'
//               }
//             >
//               {name}
//             </NavLink>
//           </motion.li>
//         ))}
//       </ul>

//       <motion.div
//         className="flex gap-4 items-center"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.4 }}
//       >
        
//         <SignedOut>
//           <SignUpButton className="bg-[#FF4B3E] text-white px-4 py-2 rounded-lg shadow-md" />
//           <SignInButton className="bg-[#FF4B3E] text-white px-4 py-2 rounded-lg shadow-md" />
//         </SignedOut>
//         <SignedIn>
//           <UserButton />
//         </SignedIn>
//       </motion.div>
//     </motion.nav>
//   );
// };

// export default Navbar;

import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../../assets/logo.png';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  SignUpButton,
} from '@clerk/clerk-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/home' },
    { name: 'About', path: '/about' },
    { name: 'Recipes', path: '/recipes' },
    { name: 'Blog', path: '/blog' }
  ];

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

      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-6">
        {navItems.map(({ name, path }) => (
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

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <button
          className="text-3xl text-gray-800 focus:outline-none mr-7"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Auth Buttons (Always visible) */}
      <motion.div
        className="hidden md:flex gap-4 items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        
      >
        <SignedOut>
          <SignUpButton className="bg-[#FF4B3E] text-white px-4 py-2 rounded-lg shadow-md" />
          <SignInButton className="bg-[#FF4B3E] text-white px-4 py-2 rounded-lg shadow-md" />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </motion.div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start px-6 py-4 md:hidden z-50">
          {navItems.map(({ name, path }) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setIsOpen(false)}
              className="text-gray-800 py-2 w-full hover:text-[#FF4B3E] border-b border-gray-200"
            >
              {name}
            </NavLink>
          ))}
          <div className="mt-4">
            <SignedOut>
              <SignUpButton className="bg-[#FF4B3E] text-white px-4 py-2 rounded-lg shadow-md w-full mb-2" />
              <SignInButton className="bg-[#FF4B3E] text-white px-4 py-2 rounded-lg shadow-md w-full" />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;


