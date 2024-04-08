import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import RelaxationPage from "./pages/RelaxationPage"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/relax" element={<RelaxationPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

