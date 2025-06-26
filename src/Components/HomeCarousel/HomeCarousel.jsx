import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const featuredItems = [
    {
        "id": 1,
        "title": "Palak Paneer",
        "shortDesc": "Spinach and cottage cheese curry.",
        "fullDesc": "A classic North Indian dish made with fresh spinach, paneer, and mild spices. Best served with naan or rice.",
        "image": "https://images.pexels.com/photos/8625948/pexels-photo-8625948.jpeg?auto=compress&cs=tinysrgb&h=350",
        "link":"/recipes"
      },
      {
        "id": 2,
        "title": "Chole Bhature",
        "shortDesc": "Spicy chickpeas with fried bread.",
        "fullDesc": "A Punjabi favorite featuring spicy chickpeas and fluffy deep-fried bread, perfect for a hearty brunch.",
        "image": "https://images.pexels.com/photos/11818239/pexels-photo-11818239.jpeg?auto=compress&cs=tinysrgb&h=350",
        "link":"/recipes"
      },
      {
        "id": 3,
        "title": "Vegetable Pulao",
        "shortDesc": "Fragrant rice with mixed veggies.",
        "fullDesc": "Aromatic basmati rice cooked with seasonal vegetables and mild spices for a light, satisfying meal.",
        "image": "https://images.pexels.com/photos/15059063/pexels-photo-15059063.jpeg?auto=compress&cs=tinysrgb&h=350",
        "link":"/recipes"
      },
      {
        "id": 4,
        "title": "Paneer Butter Masala",
        "shortDesc": "Creamy tomato-based paneer curry.",
        "fullDesc": "Paneer cubes simmered in a rich, buttery tomato gravy with aromatic spices. A vegetarian favorite.",
        "image": "https://images.pexels.com/photos/11188417/pexels-photo-11188417.jpeg?auto=compress&cs=tinysrgb&h=350",
        "link":"/recipes"
      },
      {
        "id": 5,
        "title": "Rajma Chawal",
        "shortDesc": "Kidney beans curry with rice.",
        "fullDesc": "Red kidney beans cooked in a spiced onion-tomato gravy served over steamed basmati rice.",
        "image": "https://images.pexels.com/photos/12737912/pexels-photo-12737912.jpeg?auto=compress&cs=tinysrgb&h=350",
        "link":"/recipes"
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
                <p className="text-sm text-gray-600 mb-3">{item.shortDesc}</p>
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
