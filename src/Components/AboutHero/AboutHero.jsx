import { motion } from 'framer-motion';
import foodRecipe from '../../assets/foodRecipe.png';

const AboutHero = () => {
  return (
    <section className="pt-32 md:pt-36 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between pb-20 px-6 md:px-20 gap-12 md:gap-20 bg-gradient-to-br from-white to-orange-50 overflow-hidden">

      <motion.div
        className="w-full md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
          About Dishcover
        </h1>
        <p className="text-gray-700 text-base md:text-lg mb-4">
          <strong>Dishcover</strong> started as a simple idea: to help people — especially students and beginners — find easy, healthy, and delicious recipes using what they already have.
        </p>
        <p className="text-gray-700 text-base md:text-lg">
          Built out of a love for food and technology, Dishcover blends convenience with creativity, making cooking less overwhelming and more fun for everyone.
        </p>
      </motion.div>

      <motion.div
        className="w-full md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <img
          src={foodRecipe}
          alt="Dishcover bowl"
          className="w-72 h-72 object-cover rounded-full shadow-xl border-4 border-white"
        />
      </motion.div>
    </section>
  );
};

export default AboutHero;
