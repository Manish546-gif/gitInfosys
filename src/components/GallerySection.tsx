'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function GallerySection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const images = [
    '/dan-meyers-0AgtPoAARtE-unsplash.jpg',
    '/dan-meyers-IQVFVH0ajag-unsplash.jpg',
    '/frances-gunn-QcBAZ7VREHQ-unsplash.jpg',
    '/illiya-vjestica-W5FdAcHp7l8-unsplash.jpg',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="bg-white py-10 border-t-[1px]  border-[#516341] px-6" ref={ref}>
      <div className="max-w-8xl mx-auto">
        {/* Section Title */}
        <motion.h2
          className="text-5xl md:text-4xl font-bold font-serif text-center text-[#516341] mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          Real Farm. Real Cows. Real Milk.
        </motion.h2>

        {/* Image Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative h-64 rounded-lg overflow-hidden shadow-lg"
              variants={itemVariants}
              whileHover={{ y: -10, shadow: '0 20px 40px rgba(0,0,0,0.2)' }}
            >
              <motion.img
                src={image}
                alt={`Farm image ${index + 1}`}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
