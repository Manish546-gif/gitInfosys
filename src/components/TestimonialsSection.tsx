import { useState } from 'react';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import { IoWaterSharp } from 'react-icons/io5';
import { MdBlock } from 'react-icons/md';
import { GiCow } from 'react-icons/gi';
import { MdFavorite } from 'react-icons/md';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Neha Sharma',
      review: 'The milk is so fresh and pure. You can feel the difference in taste!',
      rating: 5,
      image: '/dan-meyers-0AgtPoAARtE-unsplash.jpg',
    },
    {
      name: 'Rajesh Mehta',
      review: 'Best A2 milk in Jaipur. My family is loving it.',
      rating: 5,
      image: '/dan-meyers-IQVFVH0ajag-unsplash.jpg',
    },
    {
      name: 'Priya Singh',
      review: 'Amazing quality and delivery is always on time. Highly recommend!',
      rating: 5,
      image: '/frances-gunn-QcBAZ7VREHQ-unsplash.jpg',
    },
    {
      name: 'Amit Patel',
      review: 'Great customer service and premium quality products.',
      rating: 5,
      image: '/illiya-vjestica-W5FdAcHp7l8-unsplash.jpg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 2 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 2) % testimonials.length);
  };

  const visibleTestimonials = [
    testimonials[currentIndex % testimonials.length],
    testimonials[(currentIndex + 1) % testimonials.length],
  ];

  return (
    <>
      {/* Testimonials Section */}
      <section
        className="relative py-16 px-6 bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.30)), url(/pexels-rovichytb-maksim-334691663-13938313.jpg)',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          minHeight: '340px',
        }}
      >
        {/* Milk bottle illustration — left edge
        <img
          src="/milk-bottle.png"
          alt="Fresh A2 Milk"
          className="absolute left-0 bottom-0 h-72 object-contain pointer-events-none select-none hidden lg:block"
          style={{ zIndex: 2 }}
        /> */}

        <div className="relative max-w-6xl mx-auto" style={{ zIndex: 3 }}>
          {/* Section Title */}
          <div className="text-center mb-10">
            <h2
              className="text-3xl md:text-4xl font-bold text-white inline-flex items-center gap-2"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif", letterSpacing: '0.01em' }}
            >
              {/* Opening quote icon */}
              <span
                className="text-4xl leading-none"
                style={{ color: '#ffffff', fontFamily: 'Georgia, serif' }}
              >
                ❝
              </span>
              <span
                className="underline underline-offset-4 decoration-2"
                style={{ color: '#ffffff', textDecorationColor: '#ffffff' }}
              >
                What Our Customers Say
              </span>
               <span
                className="text-4xl leading-none"
                style={{ color: '#ffffff', fontFamily: 'Georgia, serif' }}
              >
                ❞
              </span>
            </h2>
          </div>

          {/* Testimonials Row */}
          <div className="flex items-center justify-center gap-4 md:gap-6">
            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
              style={{ backgroundColor: '#3b5e28' }}
              aria-label="Previous testimonials"
            >
              <MdNavigateBefore className="text-white text-2xl" />
            </button>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 flex-1 max-w-3xl">
              {visibleTestimonials.map((testimonial, index) => (
                <div
                  key={`${currentIndex}-${index}`}
                  className="bg-white rounded-2xl p-5 shadow-xl flex flex-col gap-3"
                  style={{ minWidth: 0 }}
                >
                  {/* Reviewer Info */}
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-gray-100 shadow-sm flex-shrink-0"
                    />
                    <div>
                      <h3
                        className="font-bold text-gray-900 text-base"
                        style={{ fontFamily: "'Georgia', serif" }}
                      >
                        {testimonial.name}
                      </h3>
                      <div className="flex gap-0.5 mt-0.5">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-amber-400 text-base leading-none">
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Review Text */}
                  <p
                    className="text-gray-600 text-sm leading-relaxed"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    {testimonial.review}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
              style={{ backgroundColor: '#3b5e28' }}
              aria-label="Next testimonials"
            >
              <MdNavigateNext className="text-white text-2xl" />
            </button>
          </div>
        </div>
        <div className="relative max-w-6xl mx-auto" style={{ zIndex: 2 }}>
          {/* CTA Text */}
          <div className="text-center mb-8">
            <h2
              className="text-3xl md:text-5xl font-bold mb-1"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              Start Your Healthy Morning Today
            </h2>
            <p
              className="text-lg md:text-xl mb-6 text-white/90"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              With Sunrise A2 Milk Dairy
            </p>
            <button
              className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 hover:bg-white hover:text-green-800 text-base"
              style={{
                fontFamily: "'Georgia', serif",
                backgroundColor: 'rgba(255,255,255,0.08)',
              }}
            >
              Subscribe Now <span className="text-lg">›</span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div
            className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10 border-t pt-7"
            style={{ borderColor: 'rgba(255,255,255,0.25)' }}
          >
            {/* Indicator 1 */}
            <div className="flex items-center gap-2">
              <IoWaterSharp className="text-2xl" style={{ color: '#a8d8f0' }} />
              <span className="text-sm md:text-base" style={{ fontFamily: "'Georgia', serif" }}>
                100% Pure A2 Milk
              </span>
            </div>

            <div
              className="hidden md:block text-xl font-thin"
              style={{ color: 'rgba(255,255,255,0.35)' }}
            >
              |
            </div>

            {/* Indicator 2 */}
            <div className="flex items-center gap-2">
              <MdBlock className="text-2xl" style={{ color: '#f4a7a7' }} />
              <span className="text-sm md:text-base" style={{ fontFamily: "'Georgia', serif" }}>
                No Preservatives
              </span>
            </div>

            <div
              className="hidden md:block text-xl font-thin"
              style={{ color: 'rgba(255,255,255,0.35)' }}
            >
              |
            </div>

            {/* Indicator 3 */}
            <div className="flex items-center gap-2">
              <GiCow className="text-2xl" style={{ color: '#f9e4a0' }} />
              <span className="text-sm md:text-base" style={{ fontFamily: "'Georgia', serif" }}>
                Happy Cows
              </span>
            </div>

            <div
              className="hidden md:block text-xl font-thin"
              style={{ color: 'rgba(255,255,255,0.35)' }}
            >
              |
            </div>

            {/* Indicator 4 */}
            <div className="flex items-center gap-2">
              <MdFavorite className="text-2xl" style={{ color: '#f9b4c8' }} />
              <span className="text-sm md:text-base" style={{ fontFamily: "'Georgia', serif" }}>
                Happy Families
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      
    </>
  );
}