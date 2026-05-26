import { useState } from 'react';
import { ChevronDown, ChevronUp, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import faqImg from '../assets/faq.png';
import { sectionMotionProps } from '../lib/motion';

const faqs = [
  {
    q: "How long does the installation take?",
    a: "We spend approximately 3-14 days for installation. It depends on your purpose, the area of the territory and its shape."
  },
  {
    q: "Do I need to be home during the installation?",
    a: "Only for our first visit. When we start working on the task - you do not have to be at home. It is just desirable to be in touch"
  },
  {
    q: "Do you offer a warranty on your work?",
    a: "Yes. Our work is guaranteed for 20 years, so you don't have to worry if something goes wrong after installing the paving stones."
  },
  {
    q: "What happens if a paver cracks or shifts?",
    a: "We will come and fix this problem if the warranty is still valid. If not - we can fix the problem for a small fee"
  },
  {
    q: "Can I choose the paving stones myself?",
    a: "Yes. We have 50+ types of paving stones and 25+ different color shades so you can choose the perfect option for your home."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(2);

  return (
    <motion.section {...sectionMotionProps} className="bg-[#111111] text-white py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight">Still Have Questions?</h2>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-5 mb-20">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className={`rounded-lg overflow-hidden transition-all duration-300 border ${isOpen ? 'bg-[#FF4D11] border-[#FF4D11]' : 'bg-[#181818] border-white/10 hover:border-white/20'}`}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between px-8 py-6 text-left focus:outline-none cursor-pointer"
                >
                  <span className={`font-medium ${isOpen ? 'text-white' : 'text-gray-200'} text-base md:text-lg`}>
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-6 h-6 text-white shrink-0 ml-4" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 shrink-0 ml-4" />
                  )}
                </button>
                
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-8 pb-7 text-white/90 text-[15px] md:text-base leading-relaxed pr-12">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="relative w-full rounded-xl overflow-hidden min-h-[340px] flex flex-col items-center justify-center text-center p-8 border border-white/5 shadow-2xl">
          {/* Background Image */}
          <img src={faqImg} alt="Pavers" className="absolute inset-0 w-full h-full object-cover" />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
          
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto w-full">
            <h3 className="text-3xl md:text-[2.5rem] font-semibold mb-3 tracking-tight">Pavers don't lay themselves.</h3>
            <p className="text-gray-200 text-sm md:text-[15px] mb-8">
              Contact us to start working on your project. We will respond within 24 hours
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-[#FF4D11] text-white px-8 py-3 rounded-md flex items-center justify-center gap-2 font-medium hover:bg-[#e6450f] transition-colors cursor-pointer text-[15px]">
                <Phone className="w-5 h-5" />
                Book a Call
              </button>
              <button className="w-full sm:w-auto bg-transparent border border-white/40 text-white px-10 py-3 rounded-md font-medium hover:bg-white/10 transition-colors cursor-pointer text-[15px]">
                Contact Us
              </button>
            </div>
          </div>
        </div>

      </div>
    </motion.section>
  );
}
