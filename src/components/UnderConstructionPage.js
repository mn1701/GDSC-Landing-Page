import React from 'react';
import { Link } from 'react-router-dom';

export default function UnderConstructionPage() {
  return (
    <div className="bg-white flex flex-col items-center justify-center min-h-[66vh]">
      {/* Icon */}
      <div className="mb-8">
        <img src="/Images/hammer-svgrepo-com.svg" alt="Under Construction" className="w-[100px] h-[100px]" />
      </div>
      
      {/* Text */}
      <h1 className="text-black text-h2 font-bold mb-4">Under Construction</h1>
      <p className="text-black text-p1 mb-8">We're working hard to get this page up and running. Check back later!</p>

      {/* Back to Home Button */}
      <Link 
        to="/" 
        className="bg-[#3182CE] text-white px-6 py-2 rounded-[8px] transition duration-300 ease-in-out hover:bg-white hover:text-[#3182CE] border border-[#3182CE]">
        Back to Home
      </Link>
    </div>
  );
}
