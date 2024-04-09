import React from "react";

const YouTubeVideo = ({ videoId }) => {
  return (
    <div className="youtube-video mb-8">
      <iframe 
        width="100%" 
        height="315" 
        src={`https://www.youtube.com/embed/${videoId}`} 
        title="Understanding Pregnancy Depression" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default YouTubeVideo;
