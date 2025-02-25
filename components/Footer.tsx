import React from "react";

const Footer: React.FC = () => {
  return (
      <div className="max-w-6xl w-full bg-[#111] rounded-2xl border border-gray-700 py-10 px-6 text-white ">
        {/* TEDxPCE Heading */}
        <h2 className="text-3xl font-bold text-red-600 text-left mb-8">
         <span className="font-bold">TED</span><sup >x</sup><span className="text-white ">PCE</span>
        </h2>
        <div className="px-8">

        {/* Footer Content */}
        <div className="flex flex-col sm:flex-row items-center justify-center text-center">
          {/* First Column */}
          <div className="flex-1 flex flex-col items-center sm:items-start">
            <h4 className="text-red-600 font-semibold mb-2">FOLLOW US</h4>
            <ul className="space-y-1 text-center sm:text-left">
              {["FACEBOOK", "INSTAGRAM", "YOUTUBE", "LINKEDIN"].map((platform) => (
                <li
                  key={platform}
                  className="hover:text-red-500 transition-all duration-300 cursor-pointer"
                >
                  {platform}
                </li>
              ))}
            </ul>
          </div>

          {/* First Vertical Line (Closer) */}
          <div className="hidden sm:block w-px bg-gray-600 h-16 mx-6"></div>

          {/* Second Column (Closer to First) */}
          <div className="flex-1 flex flex-col items-center">
            <h4 className="text-red-600 font-semibold mb-2">FOLLOW US</h4>
            <ul className="space-y-1 text-center">
              {["FACEBOOK", "INSTAGRAM", "YOUTUBE", "LINKEDIN"].map((platform) => (
                <li
                  key={platform}
                  className="hover:text-red-500 transition-all duration-300 cursor-pointer"
                >
                  {platform}
                </li>
              ))}
            </ul>
          </div>

          {/* Second Vertical Line (More Spacing) */}
          <div className="hidden sm:block w-px bg-gray-600 h-16 mx-12"></div>

          {/* Third Column (Further from First Two) */}
          <div className="flex-1 flex flex-col items-center sm:items-end">
            <h4 className="text-red-600 font-semibold mb-2">FOLLOW US</h4>
            <ul className="space-y-1 text-center sm:text-right">
              {["FACEBOOK", "INSTAGRAM", "YOUTUBE", "LINKEDIN"].map((platform) => (
                <li
                  key={platform}
                  className="hover:text-red-500 transition-all duration-300 cursor-pointer"
                >
                  {platform}
                </li>
              ))}
            </ul>
          </div>
        </div>
        </div>
      </div>
  );
};

export default Footer;
