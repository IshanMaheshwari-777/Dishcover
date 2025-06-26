// import React, { useEffect, useState } from 'react';
// import { getDishDetails } from '../../gemini.js';

// function DishSearch({ dishName }) {
//   const [result, setResult] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     async function fetchData() {
//       if (!dishName) return;
//       setLoading(true);
//       setResult('');
//       setError('');

//       try {
//         const res = await getDishDetails(dishName);
//         setResult(res);
//       } catch (err) {
//         console.error("Gemini fetch error:", err);
//         setError('❌Failed to find recipe, Please try again later.');
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchData();
//   }, [dishName]);

//   if (!dishName) return null;

//   return (
//     <div className="mt-6 bg-gray-100 p-4 rounded max-w-2xl mx-auto">
//       {loading ? (
//         <p className="text-gray-600">🔄 From Words to Wonders in Your Kitchen...</p>
//       ) : error ? (
//         <p className="text-red-600">{error}</p>
//       ) : (
//         <pre className="whitespace-pre-wrap text-sm">{result}</pre>
//       )}
//     </div>
//   );
// }

// export default DishSearch;

import React, { useEffect, useState } from 'react';
import { getDishDetails } from '../../gemini.js';
import { motion } from 'framer-motion';

function DishSearch({ dishName, onSelect }) {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchData() {
      if (!dishName) return;
      setLoading(true);
      setRecipe(null);
      setError('');

      try {
        const res = await getDishDetails(dishName);

        // Convert response to recipe object
        const formattedRecipe = {
          id: 'gemini-' + Date.now(),
          title: dishName,
          shortDesc: `AI-generated recipe for ${dishName}`,
          fullDesc: res,
          image: `https://source.unsplash.com/featured/?food,${encodeURIComponent(dishName)}`
        };

        setRecipe(formattedRecipe);
      } catch (err) {
        console.error("Gemini fetch error:", err);
        setError('❌ Failed to find recipe. Please try again later.');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [dishName]);

  if (!dishName) return null;

  return (
    <div className="mt-6 px-6 md:px-20">
      {loading ? (
        <p className="text-gray-600">🔄 From Words to Wonders in Your Kitchen...</p>
      ) : error ? (
        <p className="text-red-600">{error}</p>
      ) : (
        recipe && (
          <motion.div
            className="max-w-sm bg-gray-50 rounded-xl shadow-md p-4 cursor-pointer hover:shadow-lg"
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
        )
      )}
    </div>
  );
}

export default DishSearch;

