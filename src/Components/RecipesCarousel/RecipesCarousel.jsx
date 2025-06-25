import { useState,useEffect } from 'react';
import { motion } from 'framer-motion';
import DishSearch from './DishSearch.jsx';






const RecipesCarousel = ({ onSelect }) => {
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [input, setInput] = useState('');
    const [show, setShow] = useState(false);

useEffect(()=>{
    fetch('https://681af76017018fe5057947f3.mockapi.io/recipes')
    .then((res)=>res.json())
    .then((data)=>{
        setRecipes(data);

    })
  },[])

  const filtered = recipes.filter((recipe) =>
    recipe.title.toLowerCase() === search.toLowerCase()
  );
  
  const handleSearch = ()=>{
    if (input.trim() === '') {
        setShow(false);}
        else{
            setShow(true)
        }
    setSearch(input);
    ;
    
  }
  return (
    <div>
        <div className='flex items-center justify-between px-6 md:px-20 py-4 bg-white shadow-md gap-2'>
        <input
        type="text"
        placeholder="Search for Recipes, ingredients or blog posts"
        className="flex-grow rounded-lg border border-gray-300 px-4 py-2 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF4B3E]"
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="bg-[#FF4B3E] hover:bg-[#e04335] text-white font-semibold px-5 py-2 rounded-lg shadow-md transition-all duration-200 cursor-pointer hover:scale-[1.03]"
      onClick= {handleSearch}
      >🔍 Search</button>
      
      
      {show && (
  filtered.length > 0 ? (
    filtered.map((recipe) => (
      <div key={recipe.id} className="border rounded p-4 shadow w-full max-w-sm">
        <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover" />
        <h2 className="mt-2 font-semibold">{recipe.title}</h2>
        <p className="text-sm text-gray-600">{recipe.shortDesc}</p>
      </div>
    ))
  ) : (
    <DishSearch dishName={search} />
  )
)}

      
      </div>


    <section className="py-16 px-6 md:px-20 bg-white">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Popular Recipes</h2>
      <div className="flex overflow-x-auto space-x-6 scrollbar-hide">
        {recipes.map((recipe, idx) => (
          <motion.div
            key={recipe.id}
            className="min-w-[260px] bg-gray-50 rounded-xl shadow-md p-4 cursor-pointer hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={() => onSelect(recipe)}
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover rounded-lg mb-3"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-1">{recipe.title}</h3>
            <p className="text-gray-600 text-sm">{recipe.shortDesc}</p>
          </motion.div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default RecipesCarousel;

// const recipes = [
//   {
//     id: 1,
//     title: 'Spaghetti Aglio e Olio',
//     shortDesc: 'Quick and flavorful garlic pasta.',
//     image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     fullDesc:
//       'Made with just garlic, olive oil, red chili flakes, and parsley, this Italian classic is perfect for quick dinners.',
//   },
//   {
//     id: 2,
//     title: 'Chickpea Salad Bowl',
//     shortDesc: 'Healthy, protein-packed vegetarian salad.',
//     image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     fullDesc:
//       'Loaded with chickpeas, cucumbers, tomatoes, and feta — a refreshing and filling choice for any time.',
//   },
//   {
//     id: 3,
//     title: 'Paneer Tikka Wrap',
//     shortDesc: 'Smoky paneer in a soft roti wrap.',
//     image: 'https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     fullDesc:
//       'Marinated paneer grilled and wrapped with onions, sauces, and fresh herbs — perfect on the go.',
//   },
// ];
