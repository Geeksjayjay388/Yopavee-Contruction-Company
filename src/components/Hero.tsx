import { ArrowDown } from 'lucide-react';
import hero from "../assets/hero.png";

function Hero() {
    return (
        <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 lg:py-20 min-h-[calc(100vh-80px)] flex flex-col md:block items-center justify-center overflow-hidden font-sans">
            
            
            {/* Mobile Layout (Stacked) */}
            <div className="md:hidden flex flex-col gap-8 w-full text-center items-center mt-8">
                <div className="max-w-sm text-gray-500 text-base text-left">
                    <p>We have been laying high-quality paving stones for yards, driveways and entrance areas for 8 years.</p>
                </div>
                
                <img src={hero} alt="Paving Stones" className="w-[90%] max-w-md mx-auto h-auto object-contain my-2" />

                <h1 className="text-sm font-['Anta'] font-normal leading-[0.2] text-black text-left w-full max-w-md">
                    We will install<br/>
                    paving stones<br/>
                    that will last at<br/>
                    least <span className="text-[#FF4D11]">20 years</span>
                </h1>
                
                <button className="bg-[#1D1D1D] text-white p-4 rounded-full mt-4 flex items-center justify-center shadow-xl border-[6px] border-white">
                    <ArrowDown className="w-6 h-6" />
                </button>
            </div>

            {/* Desktop Layout (Absolute Positioning) */}
            <div className="hidden md:block w-full h-full relative min-h-[600px] lg:min-h-[750px]">
                
                {/* Main Image */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <img src={hero} alt="Paving Stones" className="w-[95%] max-w-7xl object-contain -mt-10 scale-110" />
                </div>

                {/* Top Right Text */}
                <div className="absolute top-[5%] right-[5%] z-20 max-w-[300px] text-gray-500 text-xl leading-snug">
                    <p>We have been laying high-quality paving stones for yards, driveways and entrance areas for 8 years.</p>
                </div>

                {/* Bottom Left Text */}
                <div className="absolute bottom-[12%] left-[5%] z-20">
                    <h1 className="text-4xl lg:text-5xl xl:text-[3.5rem] font-['Anta'] font-normal leading-[0.8] text-black tracking-wide">
                        We will install<br/>
                        paving stones<br/>
                        that will last at<br/>
                        least <span className="text-[#FF4D11]">20 years</span>
                    </h1>
                </div>

                {/* Bottom Right Arrow Button */}
                <div className="absolute bottom-20 right-[25%] z-20 translate-y-1/2">
                    <button className="bg-[#1D1D1D] hover:bg-black text-white p-4 rounded-full transition-colors flex items-center justify-center shadow-xl border-[6px] border-white cursor-pointer">
                        <ArrowDown className="w-6 h-6" strokeWidth={1.5} />
                    </button>
                </div>
            </div>
            
        </section>
    )
}

export default Hero;