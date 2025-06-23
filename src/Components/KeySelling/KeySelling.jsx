import React from 'react';

const KeySelling = () => {
  return (
    <div className="bg-[#f3f4f6] py-16 px-4 md:px-12">
      {[{
        title: "Find Recipes with What You Have",
        text: "Stop wasting food and time! Our intelligent recipe finder suggests delicious meals based on the ingredients you already have in your kitchen.",
        list: ["Enter ingredients you have on hand", "Get instant recipe matches", "Filter by diet, cuisine, or cooking time"],
        img: "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
        imgFirst: false
      }, {
        title: "Detailed Nutritional Insights",
        text: "Make informed choices about what you eat. Every recipe comes with comprehensive nutritional information, helping you maintain a balanced diet while enjoying delicious meals.",
        list: ["Complete macro breakdown", "Calorie information for each recipe", "Dietary tags and allergen alerts"],
        img: "https://images.unsplash.com/photo-1554998171-706e730d721d",
        imgFirst: true
      }].map((section, idx) => (
        <div key={idx} className={`flex flex-col md:flex-row items-center gap-8 mb-16 ${section.imgFirst ? 'md:flex-row-reverse' : ''}`}>
          <div className="flex-1 text-gray-800">
            <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
            <p className="text-lg mb-4">{section.text}</p>
            <ul className="list-disc list-inside text-gray-600">
              {section.list.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
          <div className="flex-1">
            <img src={section.img} alt="section visual" className="rounded-xl shadow-lg w-full max-w-md mx-auto" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default KeySelling;