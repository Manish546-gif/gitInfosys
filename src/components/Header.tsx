import { IoCart } from 'react-icons/io5';
import { MdMenu } from 'react-icons/md';
import { GrSun } from 'react-icons/gr';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/85 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <GrSun className="text-yellow-500 text-3xl" />
          <div className="flex flex-col">
            <span className="text-lg font-bold text-gray-800">Sunrise</span>
            <span className="text-xs text-gray-600">A2 Milk Dairy</span>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex gap-8 text-gray-700">
          <a href="#" className="border-b-2 border-[#516341] text-[#516341] pb-1">Home</a>
          <a href="#" className="hover:text-[#516341] transition">About Us</a>
          <a href="#" className="hover:text-[#516341] transition">Our Farm</a>
          <a href="#" className="hover:text-[#516341] transition">Products</a>
          <a href="#" className="hover:text-[#516341] transition">Gallery</a>
          <a href="#" className="hover:text-[#516341] transition">Blogs</a>
          <a href="#" className="hover:text-[#516341] transition">Contact</a>
        </nav>

        {/* Order Button */}
        <button className="hidden md:flex items-center gap-2 bg-[#516341] hover:bg-[#3d4a2f] text-white px-6 py-2 rounded transition">
          <IoCart />
          Order Now
        </button>

        {/* Mobile Menu Icon */}
        <MdMenu className="md:hidden text-2xl text-gray-700 cursor-pointer" />
      </div>
    </header>
  );
}
