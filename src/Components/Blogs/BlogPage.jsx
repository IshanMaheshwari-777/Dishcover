import React from 'react';
import { motion } from 'framer-motion';

// Blog posts data
const blogPosts = [
  {
    title: 'Why Cooking at Home Wins Every Time',
    description: 'Discover the benefits of home-cooked meals and how they positively impact your health and wallet.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    author: 'Ishan Maheshwari'
  },
  {
    title: 'Top 5 AI Tools That Help You Cook Smarter',
    description: 'Learn about AI tools transforming the kitchen experience and how you can leverage them today.',
    image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80',
    author: 'Priya Singh'
  },
  {
    title: 'Healthy Eating Habits for Hostel Life',
    description: 'Quick and nutritious meal ideas for students living away from home.',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=1200',
    author: 'Aman Verma'
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const BlogPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        className="relative h-[28rem] md:h-[32rem] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1600')"
        }}
      >
        <motion.div
          className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center px-6 text-center text-white"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Blog</h1>
          <p className="text-lg md:text-xl max-w-2xl">
          Smart cooking, fresh ideas — all served here.
          </p>
        </motion.div>
      </section>

      {/* Blog Cards */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 cursor-pointer"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src={post.image}
                alt={post.title}
                loading="lazy"
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-2">{post.description}</p>
                <p className="text-xs text-gray-500 mt-4">By {post.author}</p>
                <button className="mt-4 text-[#FF4B3E] font-semibold hover:underline">
                  Read More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
