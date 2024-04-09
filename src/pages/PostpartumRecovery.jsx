import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const PostpartumRecovery = () => {
  return (
    <div>
      <NavBar />
      <div className="container mx-auto px-4 py-8 flex flex-wrap">
        <div className="w-full md:w-1/2">
          <h1 className="text-pink-800 md:text-5xl sm:text-3xl text-4xl font-bold md:py-6">Postpartum Guide!!</h1>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-pink-700">Postpartum Information</h2>
            <p className="text-lg mb-4 text-pink-800">
              Postpartum recovery involves more than just breastfeeding. It's a period of adjustment for both mother and baby, physically, emotionally, and mentally. Here are some important aspects to consider:
            </p>
            <ul className="list-disc ml-6 text-pink-800">
              <li className="mb-2">Physical recovery from childbirth</li>
              <li className="mb-2">Managing postpartum hormones and mood changes</li>
              <li className="mb-2">Nutrition and hydration for breastfeeding mothers</li>
              <li className="mb-2">Rest and sleep for both mother and baby</li>
              <li className="mb-2">Seeking support from partners, family, and healthcare professionals</li>
            </ul>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/F_ssj7-8rYg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="mt-14 mb-14"></iframe>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-pink-700">Breastfeeding Techniques</h2>
            <p className="text-lg mb-4 text-pink-800">
              Breastfeeding is an essential aspect of postpartum recovery and bonding between mother and baby. Proper breastfeeding techniques can help ensure a successful and comfortable breastfeeding experience. Some key techniques include:
            </p>
            <ul className="list-disc ml-6 text-pink-800">
              <li className="mb-2">Correct positioning and latch</li>
              <li className="mb-2">Ensuring baby is properly attached to the breast</li>
              <li className="mb-2">Using different nursing positions to find what works best</li>
              <li className="mb-2">Offering support pillows or cushions for comfort</li>
              <li className="mb-2">Seeking assistance from lactation consultants or healthcare providers</li>
            </ul>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4 text-pink-700">Additional Resources</h2>
            <a href="https://parenting.firstcry.com/articles/indian-foods-to-eat-after-delivery-postnatal-diet-for-indian-mothers/" target="_blank" className="block mb-2 text-pink-800 hover:underline">Nutrition for New Mothers</a>
            <a href="https://www.womenshealthmag.com/fitness/a45418106/pelvic-floor-exercises-for-women/" target="_blank" className="block mb-2 text-pink-800 hover:underline">Pelvic Strengthening Exercises</a>
            <a href="https://www.healthline.com/health/depression/how-to-deal-with-postpartum-depression" target="_blank" className="block mb-2 text-pink-800 hover:underline">How to deal with postpartum depression?</a>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img src="src\assets\images\pregg_home.png" alt="Image" className="max-w-full" />
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
          <img src="src\assets\images\breast_feed_.svg" alt="Image" className="max-w-full w-7/12" />
        </div>
      <Footer />
    </div>
  );
};

export default PostpartumRecovery;
