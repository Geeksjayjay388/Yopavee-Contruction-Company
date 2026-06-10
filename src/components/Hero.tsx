import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import hero from "../assets/hero.png";
import { fadeUpItem, sectionMotionProps, staggerContainer } from '../lib/motion';

export default function Hero() {
    return (
        <motion.section
            {...sectionMotionProps}
            id="home"
            className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-1 pb-12 lg:pt-0 lg:pb-20 min-h-[calc(100vh-80px)] flex flex-col md:block items-center justify-center font-sans scroll-mt-24"
        >

            {/* Mobile Layout */}
            <motion.div
                variants={staggerContainer}
                className="md:hidden flex flex-col w-full relative pt-4 pb-4 overflow-visible"
            >
                {/* 1. Title Heading Layer - Confined to the right side */}
                <div className="w-full flex justify-end z-10 relative pr-2 mb-7">
                    <motion.h1
                        variants={fadeUpItem}
                        className="text-[30px] sm:text-[26px] font-['Anta'] font-normal leading-none text-black text-left w-[100%]"
                    >
                        We will install paving<br />
                        stones that will last<br />
                        at least <span className="text-[#FF4D11]">20 years</span>
                    </motion.h1>
                </div>

                {/* 2. Image Wrapper - Scales the width block naturally to handle correct vertical flow */}
                <motion.div
                    variants={fadeUpItem}
                    className="w-[110%] -ml-[5%] sm:w-[120%] sm:-ml-[10%] relative z-0 pointer-events-none"
                >
                    <img
                        src={hero}
                        alt="Paving Stones"
                        className="w-full h-auto object-contain"
                    />
                </motion.div>

                {/* 3. Bottom Description & Button - Placed underneath layout flow with light pull up adjustment */}
                <div className="w-full z-10 flex justify-between items-end px-2 -mt-4 sm:-mt-8 relative">

                    {/* Paragraph on the bottom left (sits perfectly below the red brick gap) */}
                    <motion.div
                        variants={fadeUpItem}
                        className="w-[65%] text-gray-500 text-[20px] sm:text-sm text-left leading-tight font-normal opacity-85"
                    >
                        <p>We have been laying high-quality paving stones for yards, driveways and entrance areas for 8 years.</p>
                    </motion.div>

                    {/* Round action button on the bottom right (overlaps the bottom right grey brick) */}
                    <motion.button
                        variants={fadeUpItem}
                        className="bg-[#1D1D1D] hover:bg-black text-white w-12 h-12 rounded-full flex items-center justify-center shadow-2xl cursor-pointer transition-colors mr-2 transform translate-y-3"
                        aria-label="Scroll down"
                    >
                        <ArrowDown className="w-5 h-5" strokeWidth={2} />
                    </motion.button>
                </div>
            </motion.div>

            {/* Desktop Layout */}
            <motion.div variants={staggerContainer} className="hidden md:block w-full h-full relative min-h-[600px] lg:min-h-[750px]">

                {/* Main Image */}
                <motion.div variants={fadeUpItem} className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <img src={hero} alt="Paving Stones" className="w-[95%] max-w-7xl object-contain -mt-10" />
                </motion.div>

                {/* Top Right Text */}
                <motion.div variants={fadeUpItem} className="absolute top-[5%] right-[5%] z-20 max-w-[300px] text-gray-500 text-xl leading-tight">
                    <p>We have been laying high-quality paving stones for yards, driveways and entrance areas for 8 years.</p>
                </motion.div>

                {/* Bottom Left Text */}
                <motion.div variants={fadeUpItem} className="absolute bottom-[12%] left-[5%] z-20">
                    <h1 className="text-4xl lg:text-5xl xl:text-[3.5rem] font-['Anta'] font-normal leading-[0.8] text-black tracking-wide">
                        We will install<br />
                        paving stones<br />
                        that will last at<br />
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
    );
}