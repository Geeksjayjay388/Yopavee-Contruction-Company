import { ArrowUpRight } from 'lucide-react';
import footerLogo from '../assets/footerlogo.png';
import { useContact } from '../context/ContactContext';

function Footer() {
  const { openContact } = useContact();

  return (
    <footer className="bg-[#151515] text-white pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Top Row - Contact & Social Links */}
        <div className="flex flex-col sm:flex-row border-b border-gray-800">
          {/* Maps + Phone */}
          <div className="flex-1 flex flex-col sm:flex-row min-w-0">
            <div className="flex-1 p-6 sm:p-8 lg:p-10 flex items-center justify-between group cursor-pointer hover:bg-white/5 transition-colors border-b sm:border-b-0 sm:border-r border-gray-800">
              <span className="text-base sm:text-[1.35rem] font-medium tracking-wide">Google Maps</span>
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-white transition-colors" />
            </div>
            <div className="flex-1 p-6 sm:p-8 lg:p-10 flex items-center justify-between group cursor-pointer hover:bg-white/5 transition-colors">
              <span className="text-base sm:text-[1.35rem] font-medium tracking-wide">+1 123 123 12</span>
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-white transition-colors" />
            </div>
          </div>

          {/* Instagram + Facebook */}
          <div className="flex-1 flex flex-col sm:flex-row min-w-0">
            <div className="flex-1 p-6 sm:p-8 lg:px-10 flex items-center justify-between group cursor-pointer hover:bg-white/5 transition-colors border-b sm:border-b-0 sm:border-r border-gray-800">
              <span className="text-[15px] font-medium">Instagram</span>
              <ArrowUpRight className="w-[18px] h-[18px] text-gray-400 group-hover:text-white transition-colors" />
            </div>
            <div className="flex-1 p-6 sm:p-8 lg:px-10 flex items-center justify-between group cursor-pointer hover:bg-white/5 transition-colors">
              <span className="text-[15px] font-medium">Facebook</span>
              <ArrowUpRight className="w-[18px] h-[18px] text-gray-400 group-hover:text-white transition-colors" />
            </div>
          </div>

          {/* TikTok + Threads */}
          <div className="flex-1 flex flex-col sm:flex-row min-w-0">
            <div className="flex-1 p-6 sm:p-8 lg:px-10 flex items-center justify-between group cursor-pointer hover:bg-white/5 transition-colors border-b sm:border-b-0 sm:border-r border-gray-800">
              <span className="text-[15px] font-medium">TikTok</span>
              <ArrowUpRight className="w-[18px] h-[18px] text-gray-400 group-hover:text-white transition-colors" />
            </div>
            <div className="flex-1 p-6 sm:p-8 lg:px-10 flex items-center justify-between group cursor-pointer hover:bg-white/5 transition-colors">
              <span className="text-[15px] font-medium">Threads</span>
              <ArrowUpRight className="w-[18px] h-[18px] text-gray-400 group-hover:text-white transition-colors" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 py-12 lg:py-16">
          
          {/* Contact / Left Column */}
          <div className="lg:w-[22%] flex flex-col">
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <p className="text-gray-300 text-[15px] leading-relaxed max-w-[260px] mb-8">
                  4521 Maple Industrial Blvd,<br/>Tampa, FL 33619
                </p>
                <div className="text-gray-500 text-[13px] flex flex-col gap-2 font-medium">
                  <p>Mon — Fri: 7:00 AM — 6:00 PM</p>
                  <p>Saturday: 8:00 AM — 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
              <p className="text-gray-500 text-xs mt-10">© 2026 Aonix Studio — All Rights Reserved</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:w-[26%] flex flex-col items-start">
            <ul className="flex flex-col gap-3.5 text-gray-400 text-[15px]">
              <li className="hover:text-white cursor-pointer transition-colors">Home</li>
              <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-white cursor-pointer transition-colors">Services</li>
              <li className="hover:text-white cursor-pointer transition-colors">Reviews</li>
              <li className="hover:text-white cursor-pointer transition-colors">Work Process</li>
              <li className="hover:text-white cursor-pointer transition-colors">FAQ</li>
              <li 
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  openContact();
                }} 
                className="text-[#FF4D11] hover:text-white font-medium cursor-pointer transition-colors"
              >
                Contact Sales
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:w-[26%] flex flex-col items-start">
            <ul className="flex flex-col gap-3.5 text-gray-400 text-[15px]">
              <li className="hover:text-white cursor-pointer transition-colors">Driveway Installation</li>
              <li className="hover:text-white cursor-pointer transition-colors">Patio Installation</li>
              <li className="hover:text-white cursor-pointer transition-colors">Walkways & Pathways</li>
              <li className="hover:text-white cursor-pointer transition-colors">Front Entrance & Steps</li>
              <li className="hover:text-white cursor-pointer transition-colors">Backyard Paving</li>
              <li className="hover:text-white cursor-pointer transition-colors">Pool Deck Paving</li>
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:w-[26%] flex flex-col items-start">
            <ul className="flex flex-col gap-3.5 text-gray-400 text-[15px]">
              <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer transition-colors">Terms & Conditions</li>
              <li className="hover:text-white cursor-pointer transition-colors">Cookies Privacy</li>
              <li className="hover:text-white cursor-pointer transition-colors">Copyright</li>
              <li className="hover:text-white cursor-pointer transition-colors">Disclaimer</li>
            </ul>
          </div>
        </div>

        {/* Email & CTA Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 py-8 border-t border-gray-800">
          <span className="text-lg sm:text-xl lg:text-[1.75rem] font-medium tracking-wide">Exampleemail@gmail.com</span>
          <button 
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              openContact();
            }}
            className="w-full sm:w-auto bg-[#FF4D11] text-white px-6 py-2.5 rounded-md flex items-center justify-center gap-2 font-medium hover:bg-[#E6450F] transition-colors shadow-lg shadow-[#FF4D11]/25 hover:shadow-[#FF4D11]/35 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            Contact Us
          </button>
        </div>

        {/* Logo Row */}
        <div className="flex justify-center lg:justify-start py-8 border-t border-gray-800">
          <img src={footerLogo} alt="Yopavve Logo" className="h-8 md:h-10 object-contain" />
        </div>

      </div>

      {/* Giant Text Background */}
      <div className="w-full overflow-hidden flex justify-center items-end leading-none select-none pt-16 bg-[#151515]">
        <h1 className="text-[24vw] font-['Anta'] font-black tracking-tighter leading-[0.7] m-0 p-0 text-white flex translate-y-[42%] pb-2">
          <span className="text-[#FF4D11]">YO</span>PAVVE
        </h1>
      </div>
    </footer>
  );
}

export default Footer;
