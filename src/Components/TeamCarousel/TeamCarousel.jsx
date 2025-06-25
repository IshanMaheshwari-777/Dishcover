import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Ishan Maheshwari',
    role: 'Founder & Developer',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    bio: 'A full-stack developer passionate about food, tech, and building intuitive experiences.',
  },
  {
    name: 'Priya Singh',
    role: 'UI/UX Designer',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    bio: 'Designs clean, user-friendly interfaces that make Dishcover a joy to use.',
  },
  {
    name: 'Aman Verma',
    role: 'Backend Engineer',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
    bio: 'Ensures the engine behind Dishcover runs smoothly and scales reliably.',
  },
  {
    name: 'Neha Kapoor',
    role: 'Content Strategist',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    bio: 'Crafts engaging recipe stories and food content that users love to explore.',
  },
  {
    name: 'Rohan Malhotra',
    role: 'Mobile App Developer',
    image: 'https://randomuser.me/api/portraits/men/41.jpg',
    bio: 'Builds seamless mobile experiences so users can cook on the go.',
  },
  {
    name: 'Anjali Mehta',
    role: 'Marketing Lead',
    image: 'https://randomuser.me/api/portraits/women/43.jpg',
    bio: 'Spreads the word about Dishcover with data-driven campaigns and community efforts.',
  },
];

const TeamCarousel = () => {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <motion.h2
        className="text-3xl font-bold text-gray-800 mb-10 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Meet the Team
      </motion.h2>

      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: true }}
        grabCursor={true}
        speed={600}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="bg-white rounded-xl shadow-md p-6 text-center transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full mb-4 object-cover border border-gray-300"
              />
              <h4 className="text-lg font-semibold text-gray-800">{member.name}</h4>
              <p className="text-sm text-gray-500 mb-2">{member.role}</p>
              <p className="text-sm text-gray-600">{member.bio}</p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TeamCarousel;
