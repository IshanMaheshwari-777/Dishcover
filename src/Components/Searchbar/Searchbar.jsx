

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Searchbar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex justify-center items-center px-4 py-4 mt-16 md:mt-24 mx-auto max-w-4xl bg-white/90 backdrop-blur-sm rounded-xl z-0">
      <button
        onClick={() => {
          navigate('/recipes');
          
          setTimeout(() => {
            const searchInput = document.getElementById('searchBar');
            
            searchInput?.focus();
          }, 800)
          
        }}
        className="bg-[#FF4B3E] hover:bg-[#e04335] text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105 hover:shadow-xl text-center"
      >
        <div className="flex flex-col items-center">
          <span className="text-xl animate-spin">🍪</span>
          <span className="text-base mt-1">Click here to Search Recipes.</span>
        </div>
      </button>
    </div>
  );
}  
export default Searchbar;