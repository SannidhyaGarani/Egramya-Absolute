import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

// Layout Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Preloader from "./components/pages/Preloader";

// Pages
import Home from "./components/homepage/Home";
import AboutPage from "./components/pages/About";
import VisionMissionPage from "./components/pages/Mission";
import EmpoweringActivities from "./components/pages/Empowering";
import ContactPage from "./components/pages/Contact";
import NotFoundPage from "./components/pages/NotFound";
import AchievementsPage from "./components/pages/Achivement";

// Scroll to top
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Preloader duration (2 seconds)

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <Router>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/vision-mission" element={<VisionMissionPage />} />
        <Route path="/activities" element={<EmpoweringActivities />} />
        <Route path="/achievements" element={<AchievementsPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* 404 Page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;