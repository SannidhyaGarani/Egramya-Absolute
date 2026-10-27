import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { LanguageProvider } from "./context/LanguageContext";

// Layout Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Preloader from "./components/pages/Preloader";
import ProposalModal from "./components/ProposalModal";

// Pages
import Home from "./components/homepage/Home";
import AboutPage from "./components/pages/About";
import EcosystemPage from "./components/pages/EcosystemPage";
import VerticalsPage from "./components/pages/VerticalsPage";
import StorePage from "./components/pages/StorePage";
import PartnershipsPage from "./components/pages/PartnershipsPage";
import ContactPage from "./components/pages/Contact";
import VisionMissionPage from "./components/pages/Mission";
import EmpoweringActivities from "./components/pages/Empowering";
import AchievementsPage from "./components/pages/Achivement";
import NotFoundPage from "./components/pages/NotFound";

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

function AppContent() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalCta, setModalCta] = useState('Partner With Us (CSR & Govt)');

  const handleGlobalOpenModal = (cta) => {
    setModalCta(cta || 'Partner With Us (CSR & Govt)');
    setModalOpen(true);
  };

  return (
    <Router>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/ecosystem" element={<EcosystemPage />} />
        <Route path="/verticals" element={<VerticalsPage />} />
        <Route path="/e-gramya-store" element={<StorePage />} />
        <Route path="/partnerships" element={<PartnershipsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        
        {/* Legacy / Auxiliary Routes */}
        <Route path="/vision-mission" element={<VisionMissionPage />} />
        <Route path="/activities" element={<EmpoweringActivities />} />
        <Route path="/achievements" element={<AchievementsPage />} />

        {/* 404 Page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer onOpenModal={handleGlobalOpenModal} />

      <ProposalModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialCtaType={modalCta}
      />
    </Router>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;