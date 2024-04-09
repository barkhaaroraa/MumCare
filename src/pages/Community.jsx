import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const CommunityPage = () => {
  return (
    <div>
      <NavBar />
      <div className="container mx-auto px-4 py-14 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-pink-800 mb-8">Join Our Community for more support!</h1>
        <p className="text-lg text-center text-gray-800 mb-8"style={{ maxWidth: '35rem'}}>
          Connect with us on social media platforms and join our Discord community to engage with other women and stay updated with the latest news and events.
        </p>
        <div className="flex items-center justify-center space-x-6 mb-8">
          <a href="#" className="hover:text-pink-600">
            <FontAwesomeIcon icon={faDiscord} size="2x" />
          </a>
          <a href="#" className="hover:text-pink-600">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="#" className="hover:text-pink-600">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="#" className="hover:text-pink-600">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
        <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full focus:outline-none">
          Join Our Discord
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default CommunityPage;

