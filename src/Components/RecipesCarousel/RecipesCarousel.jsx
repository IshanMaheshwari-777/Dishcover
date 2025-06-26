import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import DishSearch from './DishSearch.jsx';

const RecipesCarousel = ({ onSelect }) => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [input, setInput] = useState('');
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch('https://681af76017018fe5057947f3.mockapi.io/recipes')
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
      });
  }, []);

  const filtered = recipes.filter((recipe) =>
    recipe.title.toLowerCase() === search.toLowerCase()
  );

  const handleSearch = () => {
    if (input.trim() === '') {
      setShow(false);
    } else {
      setSearch(input);
      setShow(true);
    }
  };

  const handleSelect = (recipe) => {
    onSelect({ ...recipe });
    setTimeout(() => {
      const detailsSection = document.getElementById('details');
      if (detailsSection) {
        detailsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  const isEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch();
    }
  }
  return (
    <div>
      {/* Search Bar */}
      <div className="px-6 md:px-20 py-4 bg-white shadow-md">
        <div className="flex items-center gap-2 mt-2">
          <input
            type="text"
            placeholder="Search for Recipes, ingredients or blog posts"
            className="flex-grow rounded-lg border border-gray-300 px-4 py-2 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF4B3E]"
            onChange={(e) => setInput(e.target.value)} id="searchBar"
            onKeyDown={isEnter}
          />
          <button
            className="bg-[#FF4B3E] hover:bg-[#e04335] text-white font-semibold px-5 py-2 rounded-lg shadow-md transition-all duration-200 cursor-pointer hover:scale-[1.03]"
            onClick={handleSearch}
          >
            🔍 Search
          </button>
        </div>

        {/* Search Result Below Search Bar */}
        {show && (
          <div className="mt-6">
            {filtered.length > 0 ? (
              filtered.map((recipe) => (
                <motion.div
                            className="max-w-sm bg-gray-50 rounded-xl shadow-md p-4 cursor-pointer hover:shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            onClick={() => handleSelect(recipe)}
                          >
                            <img
                              src={recipe.image}
                              alt={recipe.title}
                              className="w-full h-40 object-cover rounded-lg mb-3"
                            />
                            <h3 className="text-lg font-semibold text-gray-800 mb-1">{recipe.title}</h3>
                            <p className="text-gray-600 text-sm">{recipe.shortDesc}</p>
                          </motion.div>
                
              ))
            ) : (
              <DishSearch dishName={search} onSelect={handleSelect} />
            )}
          </div>
        )}
      </div>

      {/* Carousel Section */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Popular Recipes</h2>
        <div className="flex overflow-x-auto space-x-6 scrollbar-hide">
          {recipes.map((recipe) => (
            <motion.div
              key={recipe.id}
              className="min-w-[260px] bg-gray-50 rounded-xl shadow-md p-4 cursor-pointer hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              onClick={() => handleSelect(recipe)}
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-40 object-cover rounded-lg mb-3"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {recipe.title}
              </h3>
              <p className="text-gray-600 text-sm">{recipe.shortDesc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RecipesCarousel;
