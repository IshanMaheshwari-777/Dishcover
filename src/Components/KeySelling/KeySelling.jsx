import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
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

const users = [
  {
    name: 'Alex Rodriguez',
    role: `"As a busy professional, this app saves me so much time. I can quickly find recipes based on my limited ingredients and the nutritional information helps me stay on track with my fitness goals."`,
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
   
  },
  {
    name: 'Sarah Davis',
    role: `"The recipes are not only easy to follow but delicious too! My family loves every meal I've made using Recipe Finder. It's become our go-to for dinner ideas."`,
    image: 'https://randomuser.me/api/portraits/women/65.jpg'
    
  },
  {
    name: 'Michael Chen',
    role: `"I've discovered so many new flavor combinations I would have never thought of. This app has expanded my culinary horizons while using ingredients I already have!"`,
    image: 'https://randomuser.me/api/portraits/men/75.jpg'
  },
    
  {
    name: 'Emily Johnson',
    role: `"Recipe Finder has transformed my cooking routine! I no longer waste food because I can find recipes with exactly what I have in my pantry."`,
    image: 'https://randomuser.me/api/portraits/women/68.jpg'
    
  }
];

  return (
    <div>
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
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <motion.h2
        className="text-3xl font-bold text-gray-800 mb-10 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
       What Our Users Say
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
          1024: { slidesPerView: 2 },
        }}
      >
        {users.map((member, index) => (
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
              <p className="text-sm text-gray-500 mb-2">{member.role}</p>
              <h4 className="text-lg font-semibold text-gray-800">{member.name}</h4>
              
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>

    </div>

  );
};

export default KeySelling;
