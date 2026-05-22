'use client';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import OurFarmSection from '@/components/OurFarmSection';
import ProcessSection from '@/components/ProcessSection';
import GallerySection from '@/components/GallerySection';
import ProductsSection from '@/components/ProductsSection';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <OurFarmSection />
      <ProcessSection />
      <GallerySection />
      <ProductsSection />
      <TestimonialsSection />
    </div>
  );
}
