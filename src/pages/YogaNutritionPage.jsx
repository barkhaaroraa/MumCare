import YogaCarousel from "../components/YogaCarousel";
import NavBar from "../components/NavBar"

function YogaNutritionPage() {

return (
 <div>
  <NavBar/>
      <header className="py-4 text-center">
      <h1 className="text-5xl font-semibold text-pink-700 pt-8">Yoga and Nutrition Tips for Women</h1>
      </header>
    <YogaCarousel/>
 </div>
)
}

export default YogaNutritionPage;
