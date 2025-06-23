// import React from 'react';
// import heroImg from '../../assets/hero.png';

// const Hero = () => {
//   return (
//     <div
//       className="w-full min-h-screen md:h-[65vh] bg-cover bg-center text-white flex flex-col md:flex-row justify-between items-center px-6 md:px-12 py-16 md:py-8"
//       style={{
//         backgroundImage: `linear-gradient(rgba(28,28,28,0.6), rgba(28,28,28,0.6)), url(${heroImg})`
//       }}
//     >
//       <div className="text-center md:text-left max-w-2xl mb-10 md:mb-0">
//         <h1 className="text-3xl md:text-5xl font-bold leading-tight">
//           Find Recipes with Ingredients You Already Have
//         </h1>
//         <p className="mt-4 mb-6 text-base md:text-lg">
//           Stop wondering what to cook! Enter your ingredients and discover delicious recipes tailored to what's in your kitchen.
//         </p>
//         <a href="/recipes">
//           <button className="bg-[#FF4B3E] hover:bg-[#e04335] text-white px-6 py-3 rounded-lg shadow-md transition-all duration-200">
//             Explore Recipes
//           </button>
//         </a>
//       </div>

//       <div className="w-full md:max-w-md bg-black/70 backdrop-blur-sm p-6 rounded-xl shadow-2xl border border-gray-700">
//         <h2 className="text-2xl font-semibold text-white mb-6">Get in Touch</h2>
//         <form className="space-y-4">
//           <input
//             type="text"
//             placeholder="Your Name"
//             className="w-full rounded-lg px-4 py-3 border border-gray-500 text-white placeholder-gray-400 bg-transparent focus:ring-2 focus:ring-[#FF4B3E] focus:outline-none"
//             required
//           />
//           <input
//             type="email"
//             placeholder="Your Email"
//             className="w-full rounded-lg px-4 py-3 border border-gray-500 text-white placeholder-gray-400 bg-transparent focus:ring-2 focus:ring-[#FF4B3E] focus:outline-none"
//             required
//           />
//           <textarea
//             placeholder="Your Message"
//             rows="5"
//             className="w-full rounded-lg px-4 py-3 border border-gray-500 text-white placeholder-gray-400 bg-transparent resize-none focus:ring-2 focus:ring-[#FF4B3E] focus:outline-none"
//             required
//           ></textarea>
//           <button
//             type="submit"
//             className="w-full bg-[#FF4B3E] text-white font-semibold py-3 rounded-lg hover:bg-[#e04335] hover:scale-[1.02] transition-transform duration-200 shadow-md cursor-pointer"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Hero;
// Hero.jsx
import React from 'react';
import heroImg from '../../assets/hero.png';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full min-h-screen bg-cover bg-center text-white flex flex-col md:flex-row justify-between items-center px-6 md:px-12 py-8 gap-10"

      style={{ backgroundImage: `linear-gradient(rgba(28,28,28,0.6), rgba(28,28,28,0.6)), url(${heroImg})` }}
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center md:text-left max-w-2xl"
      >
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Find Recipes with Ingredients You Already Have
        </h1>
        <p className="mt-4 mb-6 text-base md:text-lg">
          Stop wondering what to cook! Enter your ingredients and discover delicious recipes tailored to what's in your kitchen.
        </p>
        <a href="/recipes">
          <button className="bg-[#FF4B3E] hover:bg-[#e04335] text-white px-6 py-3 rounded-lg shadow-md transition-all duration-200">
            Explore Recipes
          </button>
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-md mt-10 md:mt-0 md:ml-10 bg-black/70 backdrop-blur-sm p-6 rounded-xl shadow-2xl border border-gray-700"
      >
        <h2 className="text-2xl font-semibold text-white mb-6">Get in Touch</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-lg px-4 py-3 border border-gray-500 text-white placeholder-gray-400 bg-transparent focus:ring-2 focus:ring-[#FF4B3E] focus:outline-none"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full rounded-lg px-4 py-3 border border-gray-500 text-white placeholder-gray-400 bg-transparent focus:ring-2 focus:ring-[#FF4B3E] focus:outline-none"
            required
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full rounded-lg px-4 py-3 border border-gray-500 text-white placeholder-gray-400 bg-transparent resize-none focus:ring-2 focus:ring-[#FF4B3E] focus:outline-none"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-[#FF4B3E] text-white font-semibold py-3 rounded-lg hover:bg-[#e04335] hover:scale-[1.02] transition-transform duration-200 shadow-md cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Hero;

