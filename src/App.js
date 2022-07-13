import LandingPage from "./landingPage";
import { Routes, Route, HashRouter } from 'react-router-dom'
import ProjectDetails from "./ProjectDetails";
import Footer from "./Footer";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
