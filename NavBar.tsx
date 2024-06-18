import React, { useState } from 'react';
import SocialLinks from './SocialLinks';

interface NavBarProps {
    scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
    refs: {
        mainSectionRef: React.RefObject<HTMLDivElement>;
        contactRef: React.RefObject<HTMLDivElement>;
        galleryRef: React.RefObject<HTMLDivElement>;
        servicesRef: React.RefObject<HTMLDivElement>;
    };
}

const NavBar: React.FC<NavBarProps> = ({ scrollToSection, refs }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="relative flex items-center px-10 py-3 bg-transparent text-white w-full">
            {/* Goddess Ink title on the top left */}
            <div className="absolute left-10">
                <h1 className="text-xl font-bold">Goddess Ink</h1>
            </div>
            {/* Navigation items centered */}
            <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex space-x-4">
                <span onClick={() => scrollToSection(refs.mainSectionRef)} className="text-lg cursor-pointer">Home</span>
                <span onClick={() => scrollToSection(refs.servicesRef)} className="text-lg cursor-pointer">Services</span>
                <span onClick={() => scrollToSection(refs.galleryRef)} className="text-lg cursor-pointer">Gallery</span>
                <span onClick={() => scrollToSection(refs.contactRef)} className="text-lg cursor-pointer">Contact</span>
            </div>
            {/* Social Links on the right */}
            <div className="ml-auto">
                <SocialLinks />
            </div>
            {/* Mobile menu button */}
            <div className="block md:hidden relative ml-auto">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
                    <svg className={`fill-current h-3 w-3 transition-transform duration-300 ${isMenuOpen ? 'transform rotate-180' : ''}`} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
                {isMenuOpen && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-auto min-w-full max-w-2xl bg-transparent py-30 px-40 z-20 mt-6 flex flex-col items-center rounded-lg shadow-lg border border-white">
                        <span onClick={() => scrollToSection(refs.mainSectionRef)} className="block mt-2 text-lg text-white hover:text-gray-300 cursor-pointer">Home</span>
                        <span onClick={() => scrollToSection(refs.servicesRef)} className="block mt-2 text-lg text-white hover:text-gray-300 cursor-pointer">Services</span>
                        <span onClick={() => scrollToSection(refs.galleryRef)} className="block mt-2 text-lg text-white hover:text-gray-300 cursor-pointer">Gallery</span>
                        <span onClick={() => scrollToSection(refs.contactRef)} className="block mt-2 text-lg text-white hover:text-gray-300 cursor-pointer">Contact</span>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavBar;