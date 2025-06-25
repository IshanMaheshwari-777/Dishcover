import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const featuredItems = [
  {
    title: 'Veg Biryani',
    description: 'Aromatic basmati rice cooked with vegetables and spices.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Veg_Biryani.jpg',
    link: '/recipes/veg-biryani'
  },
  {
    title: 'Paneer Tikka Wrap',
    description: 'Grilled paneer wrapped with veggies in soft paratha.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Paneer_Tikka_Wrap.jpg',
    link: '/recipes/paneer-wrap'
  },
  {
    title: 'Masala Maggi',
    description: 'Spiced instant noodles cooked with onions and peppers.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Masala_Maggi.jpg',
    link: '/recipes/masala-maggi'
  },
  {
    title: 'Aloo Paratha',
    description: 'Crispy stuffed flatbread with spiced potato filling.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Aloo_paratha_with_curds_and_pickle.jpg',
    link: '/recipes/aloo-paratha'
  },
  {
    title: 'Chole Chawal',
    description: 'North Indian-style spicy chickpeas served with rice.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Chole_chawal.jpg',
    link: '/recipes/chole-chawal'
  }
];

const HomeCarousel = () => {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <motion.div
        className="flex justify-between items-center mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-gray-800">Featured Recipes</h2>
      </motion.div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
        className="overflow-visible"
      >
        {featuredItems.map((item, idx) => (
          <SwiperSlide key={idx}>
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                {item.link && (
                  <a
                    href={item.link}
                    className="inline-block text-sm font-medium text-orange-600 hover:underline"
                  >
                    View More
                  </a>
                )}
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HomeCarousel;
