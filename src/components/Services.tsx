import { Phone } from 'lucide-react';
import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';
import card4 from '../assets/card4.png';
import card5 from '../assets/card5.png';
import card6 from '../assets/card6.png';

const servicesData = [
  { id: 1, img: card1 },
  { id: 2, img: card2 },
  { id: 3, img: card3 },
  { id: 4, img: card4 },
  { id: 5, img: card5 },
  { id: 6, img: card6 }
];

function Services() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <h2 className="text-4xl md:text-5xl font-semibold text-black tracking-tight">Our Services</h2>
        <p className="text-gray-500 max-w-[320px] text-lg leading-snug">
          We work with many types of work - all so that you can find the perfect service for you
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service) => (
          <img 
            key={service.id}
            src={service.img} 
            alt={`Service ${service.id}`} 
            className="w-full h-auto object-contain"
          />
        ))}
      </div>

      {/* Bottom Action Bar */}
      <div className="mt-16 flex flex-col md:flex-row items-stretch gap-4">
        {/* Black Banner */}
        <div className="flex-grow bg-black rounded-full px-6 py-4 flex items-center gap-4 shadow-lg">
            <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border-[1.5px] border-gray-600">
                <img src="https://i.pravatar.cc/150?u=robert_williams" alt="Avatar" className="w-full h-full object-cover" />
            </div>
            <span className="text-white text-xl sm:text-[1.35rem] font-medium">Let's start working on your project!</span>
        </div>
        
        {/* Call Button */}
        <button className="bg-[#FF4D11] text-white px-10 py-4 rounded-full flex items-center justify-center gap-3 font-medium text-lg hover:bg-[#e6450f] transition-colors shrink-0 shadow-lg">
            <Phone className="w-5 h-5" />
            Book a Call
        </button>
      </div>
    </section>
  );
}

export default Services;
