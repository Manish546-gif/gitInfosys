import { GiMilkCarton } from 'react-icons/gi';
import { MdDone } from 'react-icons/md';
import { MdAcUnit } from 'react-icons/md';
import { MdLocalShipping } from 'react-icons/md';
import { MdArrowForward } from 'react-icons/md';

export default function ProcessSection() {
  const steps = [
    {
      number: 1,
      title: 'Fresh Milking',
      description: 'Milked with care and hygiene',
      icon: GiMilkCarton,
    },
    {
      number: 2,
      title: 'Quality Check',
      description: 'Every drop tested for purity',
      icon: MdDone,
    },
    {
      number: 3,
      title: 'Cooling',
      description: 'Milk is cooled quickly to lock freshness',
      icon: MdAcUnit,
    },
    {
      number: 4,
      title: 'Delivered Fresh',
      description: 'Delivered at your doorstep every morning',
      icon: MdLocalShipping,
    },
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-5xl md:text-4xl font-bold font-serif text-center text-[#516341] mb-16">
          From Our Farm to Your Home
        </h2>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={step.number} className="flex flex-col items-center justify-center relative">
                {/* Step Card */}
                <div className="flex flex-col items-center text-center w-full">
                  {/* Circle with icon */}
                  <div className="w-32 h-32 rounded-full  border-[#516341] border-2 flex items-center justify-center  mb-3">
                    <IconComponent className="text-7xl text-[#516341]" />
                  </div>

                  {/* Text */}
                  <h3 className="text-xl font-bold font-serif text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-serif">
                    {step.description}
                  </p>
                </div>

                {/* Arrow to next step (hidden on mobile, visible on desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute right-0 transform translate-x-full items-center">
                    <MdArrowForward className="text-4xl text-[#516341]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
