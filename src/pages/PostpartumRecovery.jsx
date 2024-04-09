{/* have to work on this */}

import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import PostpartumResources from "../components/PostpartumResources";

const PostpartumRecovery = () => {
  return (
    <div>
      <NavBar />
      <HeroSection
        title="Postpartum Recovery Resources"
        description="Find resources and information to support your postpartum recovery journey."
      />
      <PostpartumResources />
      <Footer />
    </div>
  );
}

export default PostpartumRecovery;
