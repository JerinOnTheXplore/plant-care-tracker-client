import Lottie from 'lottie-react';
import React from 'react';
import plantWarningAnimation from '../assets/Animation - 1747915939377.json'


const SignsYourPlantNeedHelp = () => {
    return (
    <div className='px-4'>
     <div className='max-w-6xl mx-auto my-12 p-8 bg-lime-100 rounded-3xl shadow-lg border border-lime-300 flex flex-col md:flex-row items-center gap-8'>
     <div className="w-full md:w-1/2 flex justify-center">
        <div className="bg-[#f9fbe7] p-4 rounded-full shadow-inner border border-lime-400">
          <Lottie animationData={plantWarningAnimation} style={{ width: 260, height: 260 }} loop />
        </div>
      </div>

      {/* Text */}
      <div className="w-full md:w-1/2 text-[#3b4d29] space-y-4">
        <h2 className="text-4xl font-extrabold text-[#2f3e1c] mb-4">
          🚨 Signs Your Plant Needs Help
        </h2>
        <p className="text-lg italic text-[#4a5c2f]">
          Don’t miss the early signals — protect your plant before it’s too late.
        </p>
        <ul className="list-inside list-disc space-y-2 text-base md:text-lg font-medium">
          <li> Yellowing or browning leaves</li>
          <li> Wilting despite watering</li>
          <li> Mold or spots on the soil</li>
          <li> Slowed or no visible growth</li>
          <li> Sudden or frequent leaf drop</li>
        </ul>
        <p className="text-sm text-[#5e7041] mt-4">Stay alert, save a green friend 🌱</p>
      </div>       
    </div>
    </div>
    );
};

export default SignsYourPlantNeedHelp;