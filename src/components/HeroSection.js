import React from 'react';
import { useScrollFadeIn } from './useScrollFadeIn'; // Import the hook

export default function MainContent() {
  const firstBlock = useScrollFadeIn();
  const secondBlock = useScrollFadeIn();
  const thirdBlock = useScrollFadeIn();

  return (
    <div className="flex flex-col space-y-[140px] font-nunito-sans mt-[20px] mb-[140px]">
      {/* First Content Block */}
      <div
        ref={firstBlock.ref}
        className={`w-full flex flex-col lg:flex-row justify-center items-center h-auto lg:h-[580px] transition-opacity duration-1000 ${
          firstBlock.isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Text Block */}
        <div className="flex flex-col justify-between w-full lg:w-[578px] h-auto lg:h-[418px] px-4">
          <div className="w-full lg:w-[525px]">
            <p className="text-[#184065] text-p1 font-medium">
              Build Real-World Products with the
            </p>
            <h1 className="text-black text-h1 font-bold" style={{ lineHeight: '1.2' }}>
              UC Davis Product Cohort
            </h1>
            <p className="text-[#555555] text-p1 mt-[20px]">
              This cohort focuses on collaborating with real-world startups to
              deliver a fully-functional product, simulating the experience of
              working in a professional environment.
            </p>
          </div>

          {/* Button Container */}
          <div className="flex space-x-[20px] mt-[40px] lg:space-x-[40px]">
            <a
              href="/under-construction"
              className="w-[174px] h-[46px] bg-[#3182CE] text-white text-[16px] 
                         rounded-[8px] flex items-center justify-center transition 
                         duration-300 ease-in-out hover:bg-white hover:text-[#3182CE] 
                         border border-[#3182CE]"
            >
              Join our cohort
            </a>
            <a
              href="/under-construction"
              className="w-[143px] h-[46px] bg-white text-[#3182CE] text-[16px] 
                         rounded-[8px] flex items-center justify-center transition 
                         duration-300 ease-in-out hover:bg-[#3182CE] hover:text-white 
                         border-[1.5px] border-[#3182CE]"
            >
              Contact us
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex items-center justify-center w-full lg:w-[580px] h-auto lg:h-[580px] mt-[40px] lg:mt-0 px-4">
          <img
            src="/Images/Photo1.png"
            alt="Photo1"
            className="w-full h-auto max-w-[580px] max-h-[580px] object-contain"
          />
        </div>
      </div>

      {/* Second Content Block */}
      <div
        ref={secondBlock.ref}
        className={`w-full flex flex-col lg:flex-row justify-center items-center space-y-[40px] lg:space-y-0 lg:space-x-[44px] px-4 transition-opacity duration-1000 ${
          secondBlock.isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Text Block */}
        <div className="w-full lg:w-[576px] h-auto lg:h-[479px] flex flex-col space-y-[20px] font-light">
          <h2 className="text-black text-h2 font-bold">Why join the Product Cohort?</h2>
          <p className="text-[#184065] font-satoshi text-p1 font-medium">
            Because we turn your skills into tangible results!
          </p>
          <p className="text-black text-p2 font-light">
            Do you want to take your development/design skills to the next level?
            Are you ready to collaborate with a startup and create a product that 
            makes an impact? The UC Davis Google Developer Student Club’s Product 
            Cohort is the opportunity you've been waiting for.
          </p>
          <p className="text-black text-p2 font-light">
            In this hands-on cohort, you won’t just learn—you’ll do. You will join 
            a small, dynamic team tasked with building a functional website for an 
            innovative startup. Together, you’ll experience the thrill and challenges 
            of working in a fast-paced, real-world environment.
          </p>

          {/* Button */}
          <a
            href="/under-construction"
            className="mt-[40px] w-[195px] h-[46px] text-[#3182CE] border-[1.5px] 
                       border-[#3182CE] rounded-[8px] flex items-center justify-center 
                       transition duration-300 ease-in-out hover:bg-[#3182CE] hover:text-white"
          >
            View our projects
          </a>
        </div>

        {/* Image */}
        <div className="flex items-center justify-center w-full lg:w-[540px] h-auto lg:h-[480px]">
          <img
            src="/Images/diversity.png"
            alt="Diversity"
            className="w-full h-auto max-w-[540px] max-h-[480px] object-contain"
          />
        </div>
      </div>

      {/* Third Content Block */}
      <div
        ref={thirdBlock.ref}
        className={`w-full flex flex-col-reverse lg:flex-row justify-center items-center space-y-[40px] lg:space-y-0 lg:space-x-[60px] px-4 transition-opacity duration-1000 ${
          thirdBlock.isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Image Container */}
        <div className="flex items-center justify-center w-full lg:w-[520px] h-auto lg:h-[710px] flex flex-col justify-between space-y-[60px] lg:space-y-0 mt-[80px]">
          <img
            src="/Images/photo2.png"
            alt="Photo2"
            className="w-full h-auto max-w-[520px] max-h-[345px] object-contain"
          />
          <img
            src="/Images/photo3.png"
            alt="Photo3"
            className="w-full h-auto max-w-[520px] max-h-[345px] object-contain"
          />
        </div>

        {/* Text Block */}
        <div className="w-full lg:w-[580px] h-auto lg:h-[702px]">
          <div className="w-full lg:w-[580px] h-auto lg:h-[596px] flex flex-col space-y-10">
            <h2 className="text-black text-h2 font-medium">Benefits of the Product Cohort</h2>

            {/* Text Box 1 */}
            <div className="w-full lg:w-[580px] h-auto lg:h-[141px] flex flex-col space-y-2">
              <div className="flex items-center space-x-3">
                <img src="/Images/iconY.png" alt="Icon 1" className="w-[44px] h-[46px]" />
                <h3 className="text-[#184065] text-h3 font-medium">Hands-on Experience</h3>
              </div>
              <p className="text-black text-p2 font-light">
                This cohort gives you the chance to work in a real-world scenario with 
                real deadlines, clients, and deliverables. By the end of the project, 
                you’ll have a fully developed website to showcase in your portfolio.
              </p>
            </div>

            {/* Text Box 2 */}
            <div className="w-full lg:w-[580px] h-auto lg:h-[141px] flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <img src="/Images/iconB.png" alt="Icon 2" className="w-[44px] h-[46px]" />
                <h3 className="text-[#184065] text-h3 font-medium">Mentorship That Matters</h3>
              </div>
              <p className="text-black text-p2 font-light">
                With guidance from experienced product managers who know the ins and outs 
                of launching professional websites, you’ll navigate through the complexities 
                of client communication and team dynamics.
              </p>
            </div>

            {/* Text Box 3 */}
            <div className="w-full lg:w-[580px] h-auto lg:h-[141px] flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <img src="/Images/iconG.png" alt="Icon 3" className="w-[44px] h-[46px]" />
                <h3 className="text-[#184065] text-h3 font-medium">A Professional Network</h3>
              </div>
              <p className="text-black text-p2 font-light">
                Working with a startup means you’re not just gaining experience—you’re 
                building relationships. The connections you make in our cohort could 
                open doors to internships or even startup ventures of your own.
              </p>
            </div>

            {/* Button Container */}
            <div className="flex space-x-[20px] lg:space-x-[40px] mb-[40px]">
              <a
                href="/under-construction"
                className="w-[174px] h-[46px] bg-[#3182CE] text-white text-[16px] 
                           rounded-[8px] flex items-center justify-center transition 
                           duration-300 ease-in-out hover:bg-white hover:text-[#3182CE] 
                           border border-[#3182CE]"
              >
                Join our cohort
              </a>
              <a
                href="/under-construction"
                className="w-[143px] h-[46px] bg-white text-[#3182CE] text-[16px] 
                           rounded-[8px] flex items-center justify-center transition 
                           duration-300 ease-in-out hover:bg-[#3182CE] hover:text-white 
                           border-[1.5px] border-[#3182CE]"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
