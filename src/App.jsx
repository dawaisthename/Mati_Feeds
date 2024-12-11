import { BrowserRouter, Routes, Route } from "react-router-dom"; // Corrected import

import LandingPage from "./pages/LandingPage";
import ContactPage from "./pages/ContactPage";
import AboutusPage from "./pages/AboutusPage";
import BlogPage from "./pages/BlogPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutusPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
