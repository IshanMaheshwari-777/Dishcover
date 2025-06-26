import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { marked } from 'marked';
import details from './Details.js'
const RecipeDetail = ({ recipe }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Reset visibility whenever a new recipe is passed
    setVisible(true);
  }, [recipe]);

  if (!recipe || !visible) return null;
  console.log("Recipe title:", recipe.title);
  console.log("All details titles:", details.map(d => d.title));
  let idx= details.findIndex((item) => item.title.toLowerCase().trim() === recipe.title.toLowerCase().trim());

  return (
    <div id='details'>
        
    <section className="px-6 md:px-20 py-12 bg-orange-50">
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setVisible(false)}
          className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600 cursor-pointer"
          
        >
          Close
        </button>
      </div>
      <div className="flex flex-col md:flex-row gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2"
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-4">{recipe.title}</h3>
          <p
  className="text-gray-700 text-lg leading-relaxed">
  {
    idx >= 0 ? (
      <span dangerouslySetInnerHTML={{ __html: marked(details[idx].fullDesc) }} />
    ) : (
      <span dangerouslySetInnerHTML={{ __html: marked(recipe.fullDesc) }} />
    )
  }
  
  
  
</p>
         
        </motion.div>
        <motion.img
          src={recipe.image}
          alt={recipe.title}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 rounded-xl shadow-md"
        />
      </div>
    </section>
    </div>
  );
};

export default RecipeDetail;
