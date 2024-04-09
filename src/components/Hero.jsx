import React from 'react';

const Hero = () => {
  return (
    <div className='text-black'>
      <div className='max-w-[800px] mx-auto py-8'>
        <h1 className='text-pink-800 md:text-6xl sm:text-4xl text-4xl font-bold md:py-8'>
          Welcome to MumCares!
        </h1>
        <div className='flex justify-center items-center'>
          <div className="md:w-1/2 md:pr-8">
            <p className="text-lg font-semibold text-pink-800 mb-8">
              <span className="font-bold italic">Pregnancy depression</span> is a common mental health concern affecting expecting mothers. MumCares provides a supportive platform for mothers to connect, access resources, and receive professional guidance to address pregnancy depression and promote mental well-being during the journey of motherhood.
            </p>
            <p className='md:text-2xl text-xl font-bold text-gray-700 mb-8'>
              Connect, Access Resources, and Promote Mental Well-being with MumCares.
            </p>
            <button className='bg-[#FF69B4] hover:bg-[#F64885] w-[200px] rounded-md font-medium py-3 text-black'>
              Get Started
            </button>
          </div>
          <div className="md:w-1/2">
            <img src="src\assets\images\6378447_adobe_express.png" alt="Pregnant Mother" className="w-full md:w-auto mb-8 md:ml-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

