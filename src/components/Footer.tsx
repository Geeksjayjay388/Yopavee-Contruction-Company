import { ArrowUpRight } from 'lucide-react';
import footerLogo from '../assets/footerlogo.png';
import { useContact } from '../context/ContactContext';

function Footer() {
  const { openContact } = useContact();

  return (
    <footer className="bg-[#151515] text-white pt-10">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-4">
          
          {/* Row 1 */}
          <div className="p-6 sm:p-8 lg:p-12 flex items-center justify-between group cursor-pointer hover:bg-white/5 transition-colors">
            <span className="text-lg sm:text-[1.35rem] font-medium tracking-wide">Google Maps</span>
            <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
          </div>
          <div className="p-6 sm:p-8 lg:p-12 flex items-center justify-between group cursor-pointer hover:bg-white/5 transition-colors">
            <span className="text-lg sm:text-[1.35rem] font-medium tracking-wide">+1 123 123 12</span>
            <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
          </div>
          <div className="flex flex-col">
            <div className="flex-1 p-6 sm:p-8 lg:px-10 flex items-center justify-between group cursor-pointer hover:bg-white/5 transition-colors">
              <span className="text-[15px] font-medium">Instagram</span>
              <ArrowUpRight className="w-[18px] h-[18px] text-gray-400 group-hover:text-white transition-colors" />
            </div>
            <div className="flex-1 p-6 sm:p-8 lg:px-10 flex items-center justify-between group cursor-pointer hover:bg-white/5 transition-colors">
              <span className="text-[15px] font-medium">Facebook</span>
              <ArrowUpRight className="w-[18px] h-[18px] text-gray-400 group-hover:text-white transition-colors" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex-1 p-6 sm:p-8 lg:px-10 flex items-center justify-between group cursor-pointer hover:bg-white/5 transition-colors">
              <span className="text-[15px] font-medium">TikTok</span>
              <ArrowUpRight className="w-[18px] h-[18px] text-gray-400 group-hover:text-white transition-colors" />
            </div>
            <div className="flex-1 p-6 sm:p-8 lg:px-10 flex items-center justify-between group cursor-pointer hover:bg-white/5 transition-colors">
              <span className="text-[15px] font-medium">Threads</span>
              <ArrowUpRight className="w-[18px] h-[18px] text-gray-400 group-hover:text-white transition-colors" />
            </div>
          </div>

          {/* Row 2 & 3 */}
          {/* Left Col (spans row 2 and 3) */}
          <div className="md:row-span-2 p-6 sm:p-8 lg:p-12 flex flex-col justify-between md:min-h-[400px]">
            <div>
              <p className="text-gray-300 text-[15px] leading-relaxed mb-10 max-w-[200px]">
                4521 Maple Industrial Blvd,<br/>Tampa, FL 33619
              </p>
              <div className="text-gray-500 text-[13px] flex flex-col gap-2 font-medium">
                <p>Mon — Fri: 7:00 AM — 6:00 PM</p>
                <p>Saturday: 8:00 AM — 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
            <p className="text-gray-400 text-xs mt-10">© 2026 Aonix Studio — All Rights Reserved</p>
          </div>

          {/* Row 2: Col 2, 3, 4 */}
          <div className="p-6 sm:p-8 lg:p-12">
            <ul className="flex flex-col gap-3.5 text-gray-400 text-[15px]">
              <li className="hover:text-white cursor-pointer transition-colors w-fit">Home</li>
              <li className="hover:text-white cursor-pointer transition-colors w-fit">About Us</li>
              <li className="hover:text-white cursor-pointer transition-colors w-fit">Services</li>
              <li className="hover:text-white cursor-pointer transition-colors w-fit">Reviews</li>
              <li className="hover:text-white cursor-pointer transition-colors w-fit">Work Process</li>
              <li className="hover:text-white cursor-pointer transition-colors w-fit">FAQ</li>
              <li 
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  openContact();
                }} 
                className="text-[#FF4D11] hover:text-white font-medium cursor-pointer transition-colors w-fit"
              >
                Contact Sales
              </li>
            </ul>
          </div>
          <div className="p-6 sm:p-8 lg:p-12">
            <ul className="flex flex-col gap-3.5 text-gray-400 text-[15px]">
              <li className="hover:text-white cursor-pointer transition-colors w-fit">Driveway Installation</li>
              <li className="hover:text-white cursor-pointer transition-colors w-fit">Patio Installation</li>
              <li className="hover:text-white cursor-pointer transition-colors w-fit">Walkways & Pathways</li>
              <li className="hover:text-white cursor-pointer transition-colors w-fit">Front Entrance & Steps</li>
              <li className="hover:text-white cursor-pointer transition-colors w-fit">Backyard Paving</li>
              <li className="hover:text-white cursor-pointer transition-colors w-fit">Pool Deck Paving</li>
            </ul>
          </div>
          <div className="p-6 sm:p-8 lg:p-12">
            <ul className="flex flex-col gap-3.5 text-gray-400 text-[15px]">
              <li className="hover:text-white cursor-pointer transition-colors w-fit">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer transition-colors w-fit">Terms & Conditions</li>
              <li className="hover:text-white cursor-pointer transition-colors w-fit">Cookies Privacy</li>
              <li className="hover:text-white cursor-pointer transition-colors w-fit">Copyright</li>
              <li className="hover:text-white cursor-pointer transition-colors w-fit">Disclaimer</li>
            </ul>
          </div>

          {/* Row 3: Col 2+3, Col 4 */}
          <div className="md:col-span-2 p-6 sm:p-8 lg:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 group hover:bg-white/5 transition-colors border-t border-gray-800">
            <span className="text-lg sm:text-xl lg:text-[1.75rem] font-medium tracking-wide">Exampleemail@gmail.com</span>
            <button 
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                openContact();
              }}
              className="w-full sm:w-auto bg-[#FF4D11] text-white px-6 py-2.5 rounded-md flex items-center justify-center gap-2 font-medium hover:bg-[#E6450F] transition-colors shrink-0 shadow-lg shadow-[#FF4D11]/25 hover:shadow-[#FF4D11]/35 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer relative z-10"
            >
              Contact Sales
            </button>
          </div>
          <div className="p-6 sm:p-8 lg:p-12 flex items-center justify-center lg:justify-start">
            <img src={footerLogo} alt="Yopavve Logo" className="h-8 md:h-10" />
          </div>
        </div>

        {/* Giant Text Bottom */}
        <div className="w-full overflow-hidden flex justify-center items-end leading-none select-none pt-16 bg-[#151515]">
          <h1 className="text-[24vw] font-['Anta'] font-black tracking-tighter leading-[0.7] m-0 p-0 text-white flex translate-y-[42%] pb-2">
            <span className="text-[#FF4D11]">YO</span>PAVVE
          </h1>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
