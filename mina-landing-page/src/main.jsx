import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import ProfileSelectionPage from './ProfileSelectionPage.jsx'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

function MainApp() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800, offset: 80 });
  }, []);
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/profile-selection" element={<ProfileSelectionPage />} />
      </Routes>
    </Router>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainApp />
  </StrictMode>,
)
