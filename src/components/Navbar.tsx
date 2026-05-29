import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';
import { useContact } from '../context/ContactContext';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('Home');
    const { openContact } = useContact();

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About Us', href: '#about-us' },
        { name: 'Services', href: '#services' },
        { name: 'Reviews', href: '#reviews' },
        { name: 'Work Process', href: '#work-process' },
        { name: 'FAQ', href: '#faq' },
    ];

    return (
        <header className="bg-white border-b border-gray-100 fixed top-0 w-full z-50">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                {/* Logo */}
                <a href="#home" className="flex-shrink-0 block cursor-pointer">
                    <img src={logo} alt="Yopavve Logo" className="h-8 object-contain" />
                </a>

                {/* Desktop Navigation Links */}
                <div className="hidden md:block">
                    <ul className="flex items-center gap-8 text-gray-500 font-medium">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a 
                                    href={link.href}
                                    onClick={() => setActiveLink(link.name)}
                                    className={`cursor-pointer transition-colors block ${
                                        activeLink === link.name ? 'bg-[#1D1D1D] text-white px-5 py-2 rounded-md' : 'hover:text-gray-900'
                                    }`}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Desktop Contact Button */}
                <div className="hidden md:block flex-shrink-0">
                    <button 
                        onClick={openContact}
                        className="bg-[#FF4D11] text-white px-6 py-2.5 rounded-md flex items-center gap-2 font-medium hover:bg-[#E6450F] transition-colors"
                    >
                        <Phone className="w-4 h-4" />
                        Contact Sales
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button 
                        onClick={() => setIsOpen(!isOpen)} 
                        className="text-gray-500 hover:text-gray-900 focus:outline-none p-2"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Navigation Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-b border-gray-100">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        <ul className="flex flex-col gap-2 text-gray-500 font-medium">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a 
                                        href={link.href}
                                        onClick={() => {
                                            setIsOpen(false);
                                            setActiveLink(link.name);
                                        }}
                                        className={`cursor-pointer transition-colors block px-3 py-2 rounded-md ${
                                            activeLink === link.name ? 'bg-[#1D1D1D] text-white' : 'hover:bg-gray-50 hover:text-gray-900'
                                        }`}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-4 pt-4 border-t border-gray-100">
                            <button 
                                onClick={() => {
                                    setIsOpen(false);
                                    openContact();
                                }}
                                className="w-full bg-[#FF4D11] text-white px-6 py-3 rounded-md flex justify-center items-center gap-2 font-medium hover:bg-[#E6450F] transition-colors"
                            >
                                <Phone className="w-4 h-4" />
                                Contact Sales
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Navbar;