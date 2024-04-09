import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import RelaxationPage from "./pages/RelaxationPage"
import PostpartumRecovery from "./pages/PostpartumRecovery";
import CommunityPage from "./pages/Community";
import DepressionPage from "./pages/Depression";
import YogaNutritionPage from "./pages/YogaNutritionPage";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/relax" element={<RelaxationPage />} />
          <Route path="/postpartum-recovery" element={<PostpartumRecovery />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/depression" element={<DepressionPage/>} />
          <Route path="/yoga" element={<YogaNutritionPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

