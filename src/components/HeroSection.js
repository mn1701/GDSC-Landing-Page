import React from 'react';

export default function HeroSection() {
  return (
    <section className="text-center p-10 bg-gray-100 sm:p-4 md:p-6 lg:p-10">
      <h1 className="text-4xl md:text-3xl sm:text-2xl">Welcome to Our Club</h1>
      <p className="text-lg mt-4">Join us for exciting events and activities to foster innovation and collaboration!</p>
      <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
        Learn More
      </button>
    </section>
  );
}
