import YogaCarousel from "../components/YogaCarousel";
<<<<<<< HEAD
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function YogaNutritionPage() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <header className="py-8 text-center">
        {/* <h1 className="text-5xl font-semibold text-pink-700">Yoga and Nutrition Tips for Women</h1> */}
=======
import NavBar from "../components/NavBar"

function YogaNutritionPage() {

return (
 <div>
  <NavBar/>
      <header className="py-4 text-center">
      <h1 className="text-pink-800 md:text-6xl sm:text-4xl text-4xl font-bold md:py-8">Yoga and Nutrition After Pregnancy!</h1>
>>>>>>> 6328b32ae4940fdb2a553afea1531f96fc31481f
      </header>
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-gradient-to-br from-pink-200 via-pink-300 to-pink-200 shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-3xl text-pink-700 font-semibold mb-4">The Benefits of Yoga After Pregnancy: Nurturing Mind, Body, and Soul</h2>
          <p className="text-2xl leading-relaxed mt-8">
            Welcoming a new life into the world is a beautiful and transformative experience for any parent. However, the journey of pregnancy and childbirth can also bring about physical and emotional changes that require care and attention. Yoga, with its gentle yet powerful practices, emerges as a beacon of support for mothers post-pregnancy. Let's explore why integrating yoga into your postnatal routine can be immensely beneficial for your overall well-being.
          </p>
          <p className="text-xl leading-relaxed mt-4">
            <strong className="text-pink-600">1. Restoring Core Strength:</strong> Pregnancy and childbirth can significantly weaken the core muscles. Yoga offers a holistic approach to rebuilding this strength gradually and safely. Through targeted poses and breathing exercises, mothers can regain stability in their abdominal muscles, pelvic floor, and back, aiding in posture improvement and alleviating any discomfort caused by weakened muscles.
          </p>
          <p className="text-xl leading-relaxed mt-4">
            <strong className="text-pink-600">2. Stress Relief and Relaxation:</strong> The postpartum period is often accompanied by heightened stress levels and sleep deprivation as mothers adjust to the demands of caring for a newborn. Yoga provides a sanctuary for mothers to unwind, release tension, and reconnect with their breath...
          </p>
          <p className="text-xl leading-relaxed mt-4">
            <strong className="text-pink-600">3. Hormonal Balance:</strong> The hormonal fluctuations during pregnancy and childbirth can leave mothers feeling emotionally imbalanced and overwhelmed. Yoga offers a natural way to regulate hormonal levels and promote emotional well-being. Specific yoga poses, such as gentle twists and inversions, stimulate the endocrine system, supporting hormonal balance and aiding in postpartum recovery...
          </p>
          <p className="text-xl leading-relaxed mt-4">
            <strong className="text-pink-600">4. Enhancing Bonding with Baby:</strong> Yoga provides a unique opportunity for mothers to bond with their babies in a nurturing and supportive environment. Partner yoga poses and gentle movements with baby not only promote physical closeness but also deepen the emotional connection between mother and child...
          </p>
          <p className="text-xl leading-relaxed mt-4">
            <strong className="text-pink-600" ClassName="text-pink-600">5. Improving Posture and Alignment:</strong> The physical strain of pregnancy and the demands of caring for a newborn can take a toll on posture and alignment. Yoga focuses on proper body alignment and mindful movement, helping mothers realign their spine, shoulders, and hips...
          </p>
        </div>
      </div>
      <YogaCarousel />
      <Footer />
    </div>
  );
}

export default YogaNutritionPage;
