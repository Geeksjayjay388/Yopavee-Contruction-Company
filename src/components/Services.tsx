import { useContact } from '../context/ContactContext';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';
import card4 from '../assets/card4.png';
import card5 from '../assets/card5.png';
import card6 from '../assets/card6.png';
import { fadeUpItem, sectionMotionProps, staggerContainer } from '../lib/motion';

const servicesData = [
  { id: 1, img: card1, label: 'Driveway Paving',     desc: 'Smooth, durable driveways' },
  { id: 2, img: card2, label: 'Patio & Backyard',    desc: 'Elegant outdoor living spaces' },
  { id: 3, img: card3, label: 'Garden Pathways',     desc: 'Scenic garden stone paths' },
  { id: 4, img: card4, label: 'Steps & Staircases',  desc: 'Sturdy, stylish stone steps' },
  { id: 5, img: card5, label: 'Commercial Areas',    desc: 'Large-scale paving solutions' },
  { id: 6, img: card6, label: 'Pool Surrounds',      desc: 'Slip-resistant pool decking' },
];

function Services() {
  const { openContact } = useContact();
  return (
    <motion.section
      {...sectionMotionProps}
      id="services"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 scroll-mt-24"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black tracking-tight">Our Services</h2>
        <p className="text-gray-500 max-w-[320px] text-lg leading-snug">
          We work with many types of work - all so that you can find the perfect service for you
        </p>
      </div>

      {/* Card Grid */}
      <motion.div
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {servicesData.map((service) => (
          <motion.div
            key={service.id}
            variants={fadeUpItem}
            className="group relative rounded-[20px] overflow-hidden bg-gray-100 cursor-pointer"
            style={{ aspectRatio: '4/3' }}
          >
            {/* Image fills the card */}
            <img
              src={service.img}
              alt={service.label}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />

            {/* Gradient overlay — always slightly visible, stronger on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-opacity duration-300 opacity-80 group-hover:opacity-100" />

            {/* Card number badge — top-left */}
            <div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
              <span className="text-white text-sm font-semibold leading-none">{String(service.id).padStart(2, '0')}</span>
            </div>

            {/* Arrow icon — top-right, appears on hover */}
            <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#FF4D11] flex items-center justify-center opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </div>

            {/* Label & description — bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-white/70 text-sm mb-1 tracking-wide uppercase font-medium">{service.desc}</p>
              <h3 className="text-white text-xl font-semibold leading-tight">{service.label}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Action Bar */}
      <motion.div variants={fadeUpItem} className="mt-16 flex flex-col md:flex-row items-stretch gap-4">
        {/* Black Banner */}
        <div className="flex-grow bg-black rounded-2xl md:rounded-full px-5 sm:px-6 py-4 flex items-start sm:items-center gap-4 shadow-lg">
          <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border-[1.5px] border-gray-600">
            <img src="https://i.pravatar.cc/150?u=robert_williams" alt="Avatar" className="w-full h-full object-cover" />
          </div>
          <span className="text-white text-lg sm:text-[1.35rem] font-medium">Let's start working on your project!</span>
        </div>

        {/* Call Button */}
        <button
          type="button"
          onClick={openContact}
          className="bg-[#FF4D11] text-white px-8 sm:px-10 py-4 rounded-full flex items-center justify-center gap-3 font-medium text-base sm:text-lg hover:bg-[#e6450f] transition-colors shrink-0 shadow-lg"
        >
          <Phone className="w-5 h-5" />
          Contact Us
        </button>
        
      </motion.div>
    </motion.section>
  );
}

export default Services;
