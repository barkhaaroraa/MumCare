import YogaCarousel from "../components/YogaCarousel";
import NavBar from "../components/NavBar"

function YogaNutritionPage() {

return (
 <div>
  <NavBar/>
      <header className="py-4 text-center">
      <h1 className="text-pink-800 md:text-6xl sm:text-4xl text-4xl font-bold md:py-8">Yoga and Nutrition After Pregnancy!</h1>
      </header>
    <YogaCarousel/>
 </div>
)
}

export default YogaNutritionPage;
