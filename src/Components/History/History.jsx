import { motion } from 'framer-motion';

const History = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-20">
      <motion.div
        className="max-w-4xl mx-auto text-center md:text-left"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our History</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          <strong>Dishcover</strong> was founded in 2025 in a college hostel room with a mission to help students discover easy and healthy meals.
          Within the first year, we launched our first recipe recommender, added AI-powered ingredient detection,
          and reached over <strong>10,000 users</strong>. In 2025 only, we expanded our team and introduced <strong>voice-based recipe search</strong>,
          helping users cook smarter and faster.
        </p>
      </motion.div>
    </section>
  );
};

export default History;
