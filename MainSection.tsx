import React from 'react';

const MainSection: React.FC = () => {
    return (
        <main className="relative h-screen w-full overflow-hidden">
            {/* Background image with blur and dark overlay */}
            <img
                src="/medical_rm.png"
                alt="Tattoo Shop Background"
                className="absolute inset-0 w-full h-full object-cover z-0"
                style={{ backdropFilter: 'blur(10px)' }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

            {/* Main content centered, outside the effect of the background blur */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-sm uppercase tracking-widest text-yellow-400">We know your story</h2>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-none sm:leading-tight">
                    Ink with Purpose:<br />Empowering Your Journey<br />to Recovery
                </h1>
                <button className="mt-4 sm:mt-6 md:mt-8 bg-yellow-500 text-black py-2 px-4 rounded-lg shadow-lg transform transition hover:scale-105">
                    BOOK NOW
                </button>
            </div>
        </main>
    );
};

export default MainSection;