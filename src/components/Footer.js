import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#F9F9F9] h-[182px] w-full">
      <div className="max-w-[1440px] w-full mx-auto flex justify-between items-center px-4 h-full">
        
        {/* Block 1: Hidden below 900px */}
        <div className="flex-1 text-center h-full md:flex hidden flex-col justify-center">
          <img src="/Images/logo.svg" alt="GDSC Logo" className="mx-auto mb-4 w-[60px]" /> {/* Logo */}
          <h3 className="font-nunito font-bold text-p2">Google Developer Student Clubs</h3>
          <p className="font-nunito text-[16px]">University of California, Davis</p>
        </div>

        {/* Block 2 */}
        <div className="flex-1 text-center h-full flex flex-col justify-center">
          <div className="grid grid-cols-2 gap-4 mx-auto">
            {/* First Column */}
            <div>
              <h3 className="font-nunito font-bold text-[16px]">Links</h3>
              <ul className="font-nunito text-p3 text-[#555555]">
                <li><a href="/under-construction">About</a></li>
                <li><a href="/under-construction">Apply</a></li>
                <li><a href="/under-construction">Projects</a></li>
              </ul>
            </div>

            {/* Second Column */}
            <div>
              <h3 className="font-nunito font-bold text-[16px]">Students</h3>
              <ul className="font-nunito text-p3 text-[#555555]">
                <li><a href="/under-construction">FAQ</a></li>
                <li><a href="/under-construction">Contact</a></li>
                <li><a href="/under-construction">Newsletter</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Block 3: Social Media Icons */}
        <div className="flex-1 flex justify-center items-center space-x-[24px] w-[236px] h-full mx-auto">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <picture>
              <source src="/Images/instagram.svg" type="image/svg+xml" />
              <img src="/Images/instagram.png" alt="Instagram" className="w-[24px] h-[24px]" />
            </picture>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <picture>
              <source src="/Images/linkedin.svg" type="image/svg+xml" />
              <img src="/Images/linkedin.png" alt="LinkedIn" className="w-[24px] h-[24px]" />
            </picture>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <picture>
              <source src="/Images/youtube.svg" type="image/svg+xml" />
              <img src="/Images/youtube.png" alt="YouTube" className="w-[24px] h-[24px]" />
            </picture>
          </a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
            <picture>
              <source src="/Images/discord.svg" type="image/svg+xml" />
              <img src="/Images/discord.png" alt="Discord" className="w-[24px] h-[24px]" />
            </picture>
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
            <picture>
              <source src="/Images/tiktok.svg" type="image/svg+xml" />
              <img src="/Images/tiktok.png" alt="TikTok" className="w-[24px] h-[24px]" />
            </picture>
          </a>
        </div>
        
      </div>
    </footer>
  );
}
