import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import ProfileSelectionPage from './ProfileSelectionPage.jsx'
import PrivacyPolicyPage from './PrivacyPolicyPage.jsx'
import { LanguageProvider } from './contexts/LanguageContext.jsx'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

function MainApp() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800, offset: 80 });
  }, []);
  
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/profile-selection" element={<ProfileSelectionPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainApp />
  </StrictMode>,
)
