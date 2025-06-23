import React from 'react';
import { motion } from 'framer-motion';

const KeySelling = () => {
  const sections = [
    {
      title: "Find Recipes with What You Have",
      text: "Stop wasting food and time! Our intelligent recipe finder suggests delicious meals based on the ingredients you already have in your kitchen.",
      list: ["Enter ingredients you have on hand", "Get instant recipe matches", "Filter by diet, cuisine, or cooking time"],
      img: "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
      imgFirst: false
    },
    {
      title: "Detailed Nutritional Insights",
      text: "Make informed choices about what you eat. Every recipe comes with comprehensive nutritional information, helping you maintain a balanced diet while enjoying delicious meals.",
      list: ["Complete macro breakdown", "Calorie information for each recipe", "Dietary tags and allergen alerts"],
      img: "https://images.unsplash.com/photo-1554998171-706e730d721d",
      imgFirst: true
    }
  ];

  return (
    <div className="bg-[#f3f4f6] py-16 px-4 md:px-12">
      {sections.map((section, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: section.imgFirst ? 60 : -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className={`flex flex-col md:flex-row items-center gap-8 mb-16 ${section.imgFirst ? 'md:flex-row-reverse' : ''}`}
        >
          <div className="flex-1 text-gray-800">
            <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
            <p className="text-lg mb-4">{section.text}</p>
            <ul className="list-disc list-inside text-gray-600">
              {section.list.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <img
              src={section.img}
              alt="section visual"
              className="rounded-xl shadow-lg w-full max-w-md mx-auto"
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default KeySelling;
