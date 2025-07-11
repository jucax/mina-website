import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

function MainApp() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800, offset: 80 });
  }, []);
  return <App />;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainApp />
  </StrictMode>,
)
