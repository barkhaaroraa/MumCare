import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const CommunityPage = () => {
  return (
    <div>
    <NavBar />
    <div className="container mx-auto px-4 py-8">
      <h1 className=" text-pink-800 text-3xl font-bold mb-4">Join our communities!</h1>
      <div className="flex flex-col items-center space-y-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-md">
          Join Discord
        </button>
        <div className="flex space-x-4">
          <a href="" target="_blank" rel="noopener noreferrer">
            <img src="LINKEDIN_LOGO" alt="LinkedIn" className="w-8 h-8" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <img src="GITHUB_LOGO" alt="GitHub" className="w-8 h-8" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <img src="FACEBOOK_LOGO" alt="Facebook" className="w-8 h-8" />
          </a>
        </div>
      </div>
    </div>
    <Footer />
  </div>
  );
};

export default CommunityPage;
