import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import bgAudio from "../assets/audio/stressRelief.mp3";
import bgImage from "../assets/images/bg_stress_2.jpg";

function RelaxationPage() {
  const location = useLocation();
  const pageStyle = {
    backgroundImage:
      location.pathname === "/relax" ? `url(${bgImage})` : "none",
    backgroundSize: "cover",
    minHeight: "100vh",
  };
  const [getTextValue, setTextValue] = useState("");
  const [getCircleStyle, setCircleStyle] = useState(
    "w-64 h-64 rounded-full bg-white text-black shadow-lg flex items-center justify-center text-5xl border-l"
  );
  const [getSubmitText, setSubmitText] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);
  const [audio] = useState(new Audio(bgAudio));
  const [quotes, setQuotes] = useState([
    " ",
    "Relax and observe your thoughts.",
    "Inhale deeply...",
    "...exhale slowly.",
    "Everything is going to be alright.",
    "Your life is going to be alright.",
    "Life transcends this moment.",
    "The universe spans over 93 billion light-years.",
    "Our galaxy is relatively small.",
    "Our sun is incredibly small.",
    "The earth is minute.",
    "Our cities are inconsequential...",
    "...and you are insignificant.",
    "This thought... holds no significance.",
    "It can vanish effortlessly.",
    "Life persists.",
    "Now your all stress gone away..",
    "You are HAPPY :)",
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showQuotes, setShowQuotes] = useState(false);
  const [hideComponent, setHideComponent] = useState(false);

  useEffect(() => {
    let interval;

    if (buttonClicked) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % quotes.length;
          if (nextIndex === 0) {
            clearInterval(interval);
            // audio.pause();
          }
          return nextIndex;
        });
      }, 3000);
    }

    return () => clearInterval(interval);
  }, [buttonClicked, quotes.length]);

  const handleClick = () => {
    setButtonClicked(true);
  };

  const handleTextValue = (event) => {
    setTextValue(event.target.value);
  };

  const handleSubmit = (event) => {
    setSubmitText(getTextValue);
    playAudio();
    handleClick();
    setShowQuotes(true);
    setCircleStyle(
      "w-64 h-64 rounded-full bg-white text-black shadow-lg flex items-center justify-center text-5xl border-l animate-pulse animation-timer"
    );
    setHideComponent(true);
  };

  const playAudio = () => {
    audio.play();
  };

  return (
    <div style={pageStyle}>
      <div className="flex flex-col items-center justify-center min-h-screen text-white gap-10 pt-8">
        {showQuotes ? (
          <div className="text-center">
            <h2 className="text-5xl font-bold text-pink-300">
              {quotes[currentIndex]}
            </h2>
          </div>
        ) : (
           <h2 className="text-5xl font-semibold italic text-pink-300">
            Put your Stressful thoughts in the circle...
          </h2>
        )}
        <div className={getCircleStyle}>{getSubmitText}</div>
        {!hideComponent && (
          <>
            <input
              value={getTextValue}
              onChange={handleTextValue}
              placeholder="What's bothering You...?"
              className="p-4 my-4 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-200 rounded-3xl"
            ></input>
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-red-500 hover:bg-purple-700 text-xl text-pink-200 font-semibold rounded-md"
            >
              Submit
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default RelaxationPage;
