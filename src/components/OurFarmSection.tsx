export default function OurFarmSection() {
  return (
    <section className="flex items-center relative py-10 bg-white" style={{ minHeight: '50vh' }}>
      <div className="w-full grid grid-cols-2 gap-12 items-center max-full mx-auto ">
        {/* Left - Farm Image */}
        <div className="relative h-80">
           <div className="absolute right-0 h-full w-40 bg-gradient-to-r from-transparent to-white"></div>
          <img 
            src="/pexels-rovichytb-maksim-334691663-13938313.jpg" 
            alt="Our Farm" 
            className="w-full h-full object-cover  "
          />
        </div>

        {/* Right - Content */}
        <div className="flex flex-col   justify-center">
          <span className="text-sm font-bold text-gray-500 tracking-widest mb-2">OUR FARM</span>
          <h2 className="text-5xl md:text-6xl font-bold font-serif text-gray-900 mb-6 leading-tight">
            Where Purity Begins
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed font-serif">
            At Sunrise A2 Dairy, our cows are raised in open, clean environments and fed with fresh green fodder. We believe healthy cows give healthy milk.
          </p>
          <button className="flex items-center gap-2 bg-[#516341] hover:bg-[#3d4a2f] text-white px-8 py-3 rounded font-semibold transition shadow-lg w-fit">
            Know More About Us
          </button>
        </div>
      </div>
    </section>
  );
}
