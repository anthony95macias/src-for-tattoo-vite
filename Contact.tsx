import React from 'react';

const Contact: React.FC = () => {
    return (
        <section className="flex flex-col items-center justify-center h-auto py-80 bg-gray-900 text-center">
            <h2 className="text-sm uppercase tracking-widest text-gray-300">Get in Touch</h2>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
                Connect With Us:<br />Book Your Appointment<br />Today
            </h1>
            {/* Assuming you have a route set up for your booking page */}
            <button className="mt-8 bg-white text-black py-2 px-4 rounded-lg shadow-lg transform transition hover:scale-105">
                BOOK APPOINTMENT
            </button>
        </section>
    );
};

export default Contact;