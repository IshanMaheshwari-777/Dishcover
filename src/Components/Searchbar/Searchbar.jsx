import React from 'react';

const Searchbar = () => {
  return (
    <div className="w-full flex items-center gap-2 shadow-md px-4 py-3 rounded-xl mt-24 mx-auto max-w-4xl z-0 relative bg-white/90 backdrop-blur-sm
">
      <input
        type="text"
        placeholder="Search for Recipes, ingredients or blog posts"
        className="flex-grow rounded-lg border border-gray-300 px-4 py-2 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF4B3E]"
      />
      {/* <button
        className="bg-[#FF4B3E] hover:bg-[#e04335] text-white px-5 py-2 rounded-lg shadow-md transition-all duration-200 cursor-pointer"
      > */}
      <button className="bg-[#FF4B3E] hover:bg-[#e04335] text-white font-semibold px-5 py-2 rounded-lg shadow-md transition-all duration-200 cursor-pointer hover:scale-[1.03]">

        🔍 Search
      </button>
    </div>
  );
};

export default Searchbar;
