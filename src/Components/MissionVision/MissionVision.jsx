import { motion } from 'framer-motion';
import { FaBullseye, FaEye } from 'react-icons/fa';

const MissionVision = () => {
  return (
    <motion.section
      className="bg-gray-50 py-20 px-6 md:px-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          
        >
          <FaBullseye className="text-orange-500 text-4xl mb-3" />
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h3>
          <p className="text-gray-700 text-base leading-relaxed">
            To simplify everyday cooking by helping people discover recipes using ingredients they already have — saving time, money, and food waste.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <FaEye className="text-orange-500 text-4xl mb-3" />
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h3>
          <p className="text-gray-700 text-base leading-relaxed">
            To become the go-to smart kitchen assistant for every home, empowering millions to cook smarter and eat better.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MissionVision;
