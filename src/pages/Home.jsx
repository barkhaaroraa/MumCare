import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import YouTubeVideo from "../components/YoutubeVideo";


const HomePage = () => {
  return (
    <div>
      <NavBar />
      <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-pink-800 mb-4">Welcome to MumCares!</h1>
      <p className="text-lg font-semibold text-pink-800 mb-8">
        <span className="font-bold italic">Pregnancy depression</span> is a common mental health concern affecting expecting mothers.
        MumCares provides a supportive platform for mothers to connect, access resources, and receive professional guidance to address pregnancy depression and promote mental well-being during the journey of motherhood.
      </p>
      <div className="flex flex-wrap mb-8">
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold text-pink-800 mb-4"> Understanding Pregnancy Depression</h2>
          <YouTubeVideo videoId="ifwP1VVBQ7k" />
        </div>
        <div className="w-full md:w-1/2 pr-4">
          <h3 className="text-2xl font-bold text-pink-800 mb-4">Pregnancy Timeline</h3>
            {/* Timeline component*/}
        </div>
      </div>
      {/* <img src="src\assets\images\9080066.jpg" alt="Pregnant Mother" className="w-full md:w-1/2 mb-8 md:ml-auto" /> */}
    </div>
      
      
      <Footer />
    </div>
  );
}

export default HomePage;
