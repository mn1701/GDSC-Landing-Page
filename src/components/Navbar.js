import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white p-4">
      <div className="max-w-[1160px] h-[121px] w-full mx-auto flex flex-col md:flex-row justify-center items-center md:justify-between">
        
        {/* Logo on the Top for Screens Below 600px, Left for Larger Screens */}
        <Link to="/" className="flex items-center mb-4 md:mb-0">
          <picture>
            <source srcSet="/Images/logo.svg" type="image/svg+xml" />
            <img 
              src="/Images/logo.png" 
              alt="Logo" 
              className="w-[66px] h-[33px]" 
            />
          </picture>
        </Link>

        {/* Group of Buttons Horizontally Aligned */}
        <div className="flex flex-row items-center space-x-[15px] md:space-x-[40px]">
          <ul className="flex flex-row space-x-[15px] md:space-x-[40px]">
            <li>
              <Link 
                to="/under-construction" 
                className="text-p2 text-black hover:bg-[#555555] px-2 py-1 rounded hover:text-white transition duration-300 ease-in-out">
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/under-construction" 
                className="text-p2 text-black hover:bg-[#555555] px-2 py-1 rounded hover:text-white transition duration-300 ease-in-out">
                Projects
              </Link>
            </li>
            <li>
              <Link 
                to="/under-construction" 
                className="text-p2 text-black hover:bg-[#555555] px-2 py-1 rounded hover:text-white transition duration-300 ease-in-out">
                FAQ
              </Link>
            </li>
            <li>
              <Link 
                to="/under-construction" 
                className="text-p2 text-black hover:bg-[#555555] px-2 py-1 rounded hover:text-white transition duration-300 ease-in-out">
                Contacts
              </Link>
            </li>
          </ul>

          {/* Join Button */}
          <Link 
            to="/under-construction" 
            className="w-[72px] h-[41px] bg-[#3182CE] text-white px-[20px] py-[8px] rounded-[8px] transition duration-300 ease-in-out hover:bg-white hover:text-[#3182CE] border border-[#3182CE]">
            Join
          </Link>
        </div>
      </div>
    </nav>
  );
}
