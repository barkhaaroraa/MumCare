import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import YouTubeVideo from "../components/YoutubeVideo";

const DepressionPage = () => {
    return (
      <div>
        <NavBar />
        <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-bold text-pink-800 mb-4">Understanding Pregnancy Depression</h2>
               <YouTubeVideo videoId="ifwP1VVBQ7k" /> 
            </div>
        <Footer />
      </div>
    );      
}

export default DepressionPage;
