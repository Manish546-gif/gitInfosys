import { IoLeaf } from 'react-icons/io5';
import { MdDeliveryDining } from 'react-icons/md';
import { GiCow } from 'react-icons/gi';

export default function FeaturesSection() {
  return (
    <section className="bg-white pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Feature 1 */}
        <div className="flex gap-6 items-center text-center">
          <div className="rounded-lg">
            <GiCow className="text-8xl text-[#516341]" />
          </div>
          <div className='text-start'>
            <h3 className="text-lg font-bold font-serif text-start text-gray-900 mb-3">
              Indigenous<br />Healthy Cows
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed font-serif">
              Our cows are native,<br/> healthy & well cared
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex gap-6 items-center text-center">
          <div className="rounded-lg">
            <IoLeaf className="text-8xl text-[#516341]" />
          </div>
          <div className='text-start'>
            <h3 className="text-lg font-bold font-serif text-start text-gray-900 mb-3">
              Natural<br />Green Fodder
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed font-serif">
              We feed only natural<br/> green fodder
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex gap-6 items-center text-center">
          <div className="rounded-lg">
            <MdDeliveryDining className="text-8xl text-[#516341]" />
          </div>
          <div className='text-start'>
            <h3 className="text-lg font-bold font-serif text-start text-gray-900 mb-3">
              Morning<br />Home Delivery
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed font-serif">
              Fresh milk delivered<br/> to your doorstep
            </p>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="flex gap-6 items-center text-center">
          <div className="rounded-lg">
            <IoLeaf className="text-8xl text-[#516341]" />
          </div>
          <div className='text-start'>
            <h3 className="text-lg font-bold font-serif text-start text-gray-900 mb-3">
              No Chemicals<br />No Adulteration
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed font-serif">
              Pure, natural &<br/> 100% safe milk
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
