export default function ProductsSection() {
  const products = [
    {
      name: 'A2 Cow Milk',
      description: '500ml / 1L',
      image: '/pexels-rovichytb-maksim-334691663-13938313.jpg',
    },
    {
      name: 'Fresh Curd',
      description: 'Made daily',
      image: '/dan-meyers-0AgtPoAARtE-unsplash.jpg',
    },
    {
      name: 'Bilona Ghee',
      description: 'Made from A2 milk',
      image: '/dan-meyers-IQVFVH0ajag-unsplash.jpg',
    },
    {
      name: 'Paneer',
      description: 'Soft & Protein Rich',
      image: '/frances-gunn-QcBAZ7VREHQ-unsplash.jpg',
    },
  ];

  return (
    <section className="bg-white py-10 px-6">
      <div className="max-w-8xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-gray-500 tracking-widest">OUR PRODUCTS</span>
          <h2 className="text-5xl md:text-4xl font-bold font-serif text-gray-900 mt-2">
            Pure by Nature, Made for You
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col items-center text-center bg-white rounded-lg shadow-md overflow-hidden">
              {/* Product Image */}
              <div className="w-full h-56 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Info */}
              <div className="p-6 flex flex-col items-center flex-grow w-full">
                <h3 className="text-xl font-bold font-serif text-gray-900 mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 font-serif mb-6">
                  {product.description}
                </p>
                <button className="bg-[#516341] hover:bg-[#3d4a2f] text-white px-6 py-2 rounded font-semibold transition">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
