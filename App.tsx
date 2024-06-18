import React, { useRef } from 'react';
import NavBar from './components/NavBar';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import MainSection from './components/MainSection';
import FullPageCard from './components/AboutServicesCard';

const App: React.FC = () => {
    const mainSectionRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);
    const galleryRef = useRef<HTMLDivElement>(null);
    const servicesRef = useRef<HTMLDivElement>(null);

    const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <div className="fixed w-full z-50">
                <NavBar scrollToSection={scrollToSection} refs={{ mainSectionRef, contactRef, galleryRef, servicesRef }} />
            </div>
            <div ref={mainSectionRef}>
                <MainSection />
            </div>
            <div ref={servicesRef}>
                <FullPageCard />
            </div>
            <div ref={galleryRef}>
                <Gallery />
            </div>
            <div ref={contactRef}>
                <Contact />
            </div>
        </div>
    );
};

export default App;