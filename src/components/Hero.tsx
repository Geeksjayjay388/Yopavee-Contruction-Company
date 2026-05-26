import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import hero from "../assets/hero.webp";
import { fadeUpItem, sectionMotionProps, staggerContainer } from '../lib/motion';

export default function Hero() {
    return (
        <motion.section
            {...sectionMotionProps}
            className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-12 lg:pt-0 lg:pb-20 min-h-[calc(100vh-80px)] flex flex-col md:block items-center justify-center overflow-hidden font-sans"
        >
            
            
            {/* Mobile Layout */}
            <motion.div variants={staggerContainer} className="md:hidden flex flex-col w-full relative pt-4 pb-8 overflow-visible">
                {/* Top Text */}
                <motion.h1 variants={fadeUpItem} className="text-[1.5rem] sm:text-[1.75rem] font-['Anta'] font-normal leading-[1.1] text-black text-left self-end pr-4 w-[75%] sm:w-[60%] z-10">
                    We will install paving<br/>
                    stones that will last<br/>
                    at least <span className="text-[#FF4D11]">20 years</span>
                </motion.h1>
                
                {/* Image */}
                <motion.div variants={fadeUpItem} className="w-[115%] -ml-[5%] relative z-0 mt-2 -mb-8 pointer-events-none">
                    <img src={hero} alt="Paving Stones" className="w-full h-auto object-contain" />
                </motion.div>

                {/* Bottom Section */}
                <div className="flex justify-between items-end px-4 relative z-10 mt-2">
                    <motion.div variants={fadeUpItem} className="w-[60%] text-gray-500 text-[13px] sm:text-sm text-left leading-snug">
                        <p>We have been laying high-quality paving stones for yards, driveways and entrance areas for 8 years.</p>
                    </motion.div>
                    
                    <motion.button variants={fadeUpItem} className="bg-[#1D1D1D] hover:bg-black text-white p-3 sm:p-4 rounded-full flex items-center justify-center shadow-xl border-[5px] border-white cursor-pointer transition-colors -mb-4 mr-2">
                        <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
                    </motion.button>
                </div>
            </motion.div>

            {/* Desktop Layout (Absolute Positioning) */}
            <motion.div variants={staggerContainer} className="hidden md:block w-full h-full relative min-h-[600px] lg:min-h-[750px]">
                
                {/* Main Image */}
                <motion.div variants={fadeUpItem} className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <img src={hero} alt="Paving Stones" className="w-[95%] max-w-7xl object-contain -mt-10" />
                </motion.div>

                {/* Top Right Text */}
                <motion.div variants={fadeUpItem} className="absolute top-[5%] right-[5%] z-20 max-w-[300px] text-gray-500 text-xl leading-snug">
                    <p>We have been laying high-quality paving stones for yards, driveways and entrance areas for 8 years.</p>
                </motion.div>

                {/* Bottom Left Text */}
                <motion.div variants={fadeUpItem} className="absolute bottom-[12%] left-[5%] z-20">
                    <h1 className="text-4xl lg:text-5xl xl:text-[3.5rem] font-['Anta'] font-normal leading-[0.8] text-black tracking-wide">
                        We will install<br/>
                        paving stones<br/>
                        that will last at<br/>
                        least <span className="text-[#FF4D11]">20 years</span>
                    </h1>
                </motion.div>

                {/* Bottom Right Arrow Button */}
                <motion.div variants={fadeUpItem} className="absolute bottom-26 right-[26%] z-20 translate-y-1/2">
                    <button className="bg-[#1D1D1D] hover:bg-black text-white p-4 rounded-full transition-colors flex items-center justify-center shadow-xl border-[6px] border-white cursor-pointer">
                        <ArrowDown className="w-6 h-6" strokeWidth={1.5} />
                    </button>
                </motion.div>
            </motion.div>
            
        </motion.section>
    )
}