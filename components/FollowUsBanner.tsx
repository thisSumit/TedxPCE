import React from "react";

const FollowUsBanner: React.FC = () => {
  return (
    <div className="bg-black text-white flex flex-col items-center justify-center py-10 px-4 text-center rounded-2xl">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        BE INSPIRED, STAY INFORMED <br /> AND KEEP IN TOUCH
      </h2>
      <button className="bg-red-600 hover:bg-red-700 transition-all duration-300 px-6 py-3 text-lg font-bold rounded-full">
        FOLLOW US
      </button>
    </div>
  );
};

export default FollowUsBanner;
