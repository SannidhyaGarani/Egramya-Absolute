import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Layout Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './components/homepage/Home';
import AboutPage from './components/pages/About';
import VisionMissionPage from './components/pages/Mission';
import EmpoweringActivities from './components/pages/Empowering';
import AchievementsPage from './components/pages/Achivement';
import ContactPage from './components/pages/Contact';
import NotFoundPage from './components/pages/NotFound';

// Luxury UX: Scroll to top on every route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
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
        
        {/* The 404 Catch-all */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;