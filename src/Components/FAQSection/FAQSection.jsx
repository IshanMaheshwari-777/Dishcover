import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'How do I submit my own recipe?',
    answer:
      'We currently feature a comprehensive collection of recipes for all major dishes and are not accepting external submissions at this time.',
  },
  {
    question: 'Are all recipes vegetarian?',
    answer: "Most recipes are vegetarian, but we will be expanding soon with filters for all preferences.",
  },
  {
    question: 'Is Dishcover free to use?',
    answer: 'Yes! Dishcover is free to access for everyone.',
  },
  {
    question: 'How do I search for a recipe?',
    answer: `Simply search the name of the dish. and clicking a result shows the full recipe with ingredients and steps.`,
  },
  {
    question: 'How accurate are the nutrition details?',
    answer: 'Nutritional info is approximate and based on standard serving sizes. Actual values may vary depending on ingredients and portion size.',
  },
  {
    question: 'Do I need to create an account to use the site?',
    answer: 'You can explore recipes without an account, but to save favorites, access personalized features, or submit voice searches, we recommend signing in.',
  }
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (idx) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <section className="bg-white py-20 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="border border-gray-200 rounded-md p-4 cursor-pointer bg-gray-50"
            onClick={() => toggle(idx)}
          >
            <h4 className="text-lg font-medium text-gray-800">{faq.question}</h4>
            <AnimatePresence>
              {activeIndex === idx && (
                <motion.p
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="text-gray-600 mt-2 text-sm overflow-hidden"
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;

