import React from "react";
import "../styles.css";

const Hero = () => {
  return (
    <div className="h-screen">
      <div className="max-w-[800px] mx-auto py-8">
        <h1 className="text-pink-800 md:text-6xl sm:text-4xl text-4xl font-bold md:py-8 hover-animation">
          Welcome to MumCares!
        </h1>
        <div className="flex justify-center items-center">
          <div className="md:w-1/2 md:pr-8">
            <p className="text-xl font-semibold text-pink-800 mb-8">
              <span className="font-bold italic">Pregnancy depression</span> is
              a common mental health concern affecting expecting mothers.
              MumCares provides a supportive platform for mothers to connect,
              access resources, and receive professional guidance to address
              pregnancy depression and promote mental well-being during the
              journey of motherhood.
            </p>
            <p className="md:text-2xl text-xl font-bold text-gray-700 mb-8">
              <span className="text-pink-800">Connect, Access Resources, and Promote Mental Well-being with MumCares.</span>
            </p>
            <button
              className="bg-[#FF69B4] hover:bg-[#F64885] w-[250px] md:w-[300px] rounded-md font-medium py-4 text-pink-900 hover:text-pink-200 text-lg md:text-xl hover-animation"
              onClick={() =>
                window.open(
                  "https://www.youtube.com/watch?v=ifwP1VVBQ7k",
                  "_blank"
                )
              }
            >
              Pregnancy Depression?
            </button>
          </div>
          <div className="md:w-1/2">
            <img
              src="src\assets\images\6378447_adobe_express.png"
              alt="Pregnant Mother"
              className="w-full md:w-auto mb-8 md:ml-auto hover-animation"
              style={{ maxWidth: "580px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
