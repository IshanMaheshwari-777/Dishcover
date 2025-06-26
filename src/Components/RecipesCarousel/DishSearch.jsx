// // import React, { useEffect, useState } from 'react';
// // import { getDishDetails } from '../../gemini.js';

// // function DishSearch({ dishName }) {
// //   const [result, setResult] = useState('');
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState('');

// //   useEffect(() => {
// //     async function fetchData() {
// //       if (!dishName) return;
// //       setLoading(true);
// //       setResult('');
// //       setError('');

// //       try {
// //         const res = await getDishDetails(dishName);
// //         setResult(res);
// //       } catch (err) {
// //         console.error("Gemini fetch error:", err);
// //         setError('❌Failed to find recipe, Please try again later.');
// //       } finally {
// //         setLoading(false);
// //       }
// //     }

// //     fetchData();
// //   }, [dishName]);

// //   if (!dishName) return null;

// //   return (
// //     <div className="mt-6 bg-gray-100 p-4 rounded max-w-2xl mx-auto">
// //       {loading ? (
// //         <p className="text-gray-600">🔄 From Words to Wonders in Your Kitchen...</p>
// //       ) : error ? (
// //         <p className="text-red-600">{error}</p>
// //       ) : (
// //         <pre className="whitespace-pre-wrap text-sm">{result}</pre>
// //       )}
// //     </div>
// //   );
// // }

// // export default DishSearch;

// import React, { useEffect, useState } from 'react';
// import { getDishDetails } from '../../gemini.js';
// import { motion } from 'framer-motion';

// function DishSearch({ dishName, onSelect }) {
//   const [recipe, setRecipe] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     async function fetchData() {
//       if (!dishName) return;
//       setLoading(true);
//       setRecipe(null);
//       setError('');

//       try {
//         const res = await getDishDetails(dishName);

//         // Convert response to recipe object
//         const formattedRecipe = {
//           id: 'gemini-' + Date.now(),
//           title: dishName.charAt(0).toUpperCase() + dishName.slice(1),
//           shortDesc: `Click and Get Complete recipe for ${dishName}`,
//           fullDesc: res,
//           image: `https://images.pexels.com/search/${encodeURIComponent(dishName)}`

//         };

//         setRecipe(formattedRecipe);
//       } catch (err) {
//         console.error("Gemini fetch error:", err);
//         setError('❌ Failed to find recipe. Please try again later.');
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchData();
//   }, [dishName]);

//   if (!dishName) return null;

//   return (
//     <div className="mt-6 px-6 md:px-20">
//       {loading ? (
//         <p className="text-gray-600">🔄 From Words to Wonders in Your Kitchen...</p>
//       ) : error ? (
//         <p className="text-red-600">{error}</p>
//       ) : (
//         recipe && (
//           <motion.div
//             className="max-w-sm bg-gray-50 rounded-xl shadow-md p-4 cursor-pointer hover:shadow-lg"
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: 'spring', stiffness: 300 }}
//             onClick={() => onSelect(recipe)}
//           >
//             <img
//               src={recipe.image}
//               alt={recipe.title}
//               className="w-full h-40 object-cover rounded-lg mb-3"
//             />
//             <h3 className="text-lg font-semibold text-gray-800 mb-1">{recipe.title}</h3>
//             <p className="text-gray-600 text-sm">{recipe.shortDesc}</p>
//           </motion.div>
//         )
//       )}
//     </div>
//   );
// }

// export default DishSearch;



import React, { useEffect, useState } from 'react';
import { getDishDetails } from '../../gemini.js';
import { motion } from 'framer-motion';

const PEXELS_API_KEY = '867N761Lk24wnUJNYjviNy8brkW4C7dlwTfLIu26VwoC2YmGa4CJPBLA'; // Replace with your key

async function fetchPexelsImage(query) {
  try {
    const response = await fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=1`, {
      headers: {
        Authorization: PEXELS_API_KEY,
      },
    });

    const data = await response.json();
    if (data.photos && data.photos.length > 0) {
      return data.photos[0].src.medium;
    }
  } catch (err) {
    console.error('Pexels fetch error:', err);
  }

  // Fallback placeholder
  return `https://via.placeholder.com/600x400?text=${encodeURIComponent(query)}`;
}

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
        const imageUrl = await fetchPexelsImage(dishName);

        const formattedRecipe = {
          id: 'gemini-' + Date.now(),
          title: dishName.charAt(0).toUpperCase() + dishName.slice(1),
          shortDesc: `Click and Get Complete recipe for ${dishName}`,
          fullDesc: res,
          image: imageUrl,
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
    <div className="mt-6 px-6 md:px-20"  >
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


