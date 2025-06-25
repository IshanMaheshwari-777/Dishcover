import { motion } from 'framer-motion';

const RecipesHero = () => {
  return (
    <section
      className="relative h-[28rem] md:h-[32rem] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1600')",
      }}
    >
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center px-6 md:px-20">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-4">
            Discover Delicious Recipes
          </h1>
          <p className="text-white text-lg max-w-xl">
            Easy, healthy, and tasty meals — explore, choose, and cook your favorite dishes.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RecipesHero;