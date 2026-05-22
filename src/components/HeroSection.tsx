import { IoCart } from 'react-icons/io5';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="relative h-screen pt-10 flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0  z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/pexels-rovichytb-maksim-334691663-13938313.jpg')",
        }}
      >
        {/* Overlay for gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-50/98 via-yellow-50/90 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-8xl mx-auto w-full px-6">
        <motion.div
          className="max-w-2xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-6xl md:text-7xl font-bold font-serif text-gray-900 mb-4 leading-tight"
            variants={itemVariants}
          >
            100% Pure<br />Farm Fresh A2 Milk
          </motion.h1>
          <motion.p
            className="text-2xl text-amber-800 mb-8 font-medium font-serif"
            variants={itemVariants}
          >
            From Our Farm to Your Home Daily
          </motion.p>

          {/* Buttons */}
          <motion.div className="flex gap-4" variants={itemVariants}>
            <motion.button
              className="flex items-center gap-2 bg-[#516341] hover:bg-[#3d4a2f] text-white px-8 py-3 rounded font-semibold transition shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <IoCart />
              Order Fresh Milk
            </motion.button>
            <motion.button
              className="flex items-center gap-2 border-2 border-amber-800 text-amber-900 hover:bg-amber-100 px-8 py-3 rounded font-semibold transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Visit Our Farm
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Curved Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg className="w-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z" fill="white"></path>
        </svg>
      </div>
    </section>
  );
}
