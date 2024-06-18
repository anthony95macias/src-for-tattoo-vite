import React from 'react';

const Gallery: React.FC = () => {
    return (
        <section className="flex flex-col items-center justify-center h-auto py-80 bg-black text-center">
            <h2 className="text-sm uppercase tracking-widest text-gray-300">Discover Our Story</h2>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
                Tradition & Excellence:<br />Crafting Unique Experiences<br />at Our Barbershop
            </h1>
            <button className="mt-8 bg-white text-black py-2 px-4 rounded-lg shadow-lg transform transition hover:scale-105">
                LEARN MORE
            </button>
        </section>
    );
};

export default Gallery;