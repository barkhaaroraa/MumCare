import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import RelaxationPage from "./pages/RelaxationPage"
import YogaNutritionPage from "./pages/YogaNutritionPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/relax" element={<RelaxationPage />} />
          <Route path="/yoga" element={<YogaNutritionPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

