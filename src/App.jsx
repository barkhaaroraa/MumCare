import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import RelaxationPage from "./pages/RelaxationPage"
import PostpartumRecovery from "./pages/PostpartumRecovery";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/relax" element={<RelaxationPage />} />
          <Route path="/postpartum-recovery" element={<PostpartumRecovery />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

