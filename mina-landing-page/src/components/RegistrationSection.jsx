import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function RegistrationSection({ t }) {
  const [showNotOpenMessage, setShowNotOpenMessage] = useState(false);

  const handleRegisterClick = (e) => {
    e.preventDefault();
    setShowNotOpenMessage(true);
    // Hide the message after 3 seconds
    setTimeout(() => {
      setShowNotOpenMessage(false);
    }, 3000);
  };

  return (
    <section 
      data-aos="fade-up" 
      className="w-full min-h-[60vh] flex flex-col md:flex-row items-center justify-center bg-minaWhite text-primary px-4 py-24 md:py-32 relative overflow-hidden"
    >
      {/* Left: Text */}
      <div className="flex-1 flex flex-col items-center justify-center md:pl-24 max-w-2xl">
        <h2 className="text-4xl md:text-6xl font-bold font-mina text-center mb-8 leading-tight">
          <span className="text-5xl md:text-7xl text-primary">{t.registrationSection.headline}</span><br />
          <span className="text-secondary block mt-2 text-3xl md:text-5xl">{t.registrationSection.subheadline}</span>
        </h2>
        <p className="text-lg md:text-xl text-minaGray text-center max-w-xl mb-8">
          {t.registrationSection.desc}
        </p>
        
        {/* Register Now Button */}
        <button 
          onClick={handleRegisterClick}
          className="bg-secondary text-primary font-bold px-8 py-4 rounded-full shadow-lg hover:bg-orange-400 transition text-lg mb-8 relative"
        >
          {t.registrationSection.cta}
        </button>

        {/* Not Open Yet Message */}
        {showNotOpenMessage && (
          <div className="absolute top-full mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg shadow-lg animate-fade-in">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {t.registrationSection.notOpenMessage || 'Registration is not open yet. Stay tuned!'}
            </div>
          </div>
        )}

        {/* QR Code */}
        <div className="flex flex-col items-center">
          <img 
            src="/assets/expo-qr.png" 
            alt="Scan QR code to download Mina app" 
            className="w-28 h-28 bg-white p-2 rounded-xl shadow-lg" 
          />
          <p className="text-minaGray text-sm mt-2 text-center">
            {t.registrationSection.qrDesc || 'Scan to download the app'}
          </p>
        </div>
      </div>
      
      {/* Right: Video */}
      <div className="flex-1 flex items-center justify-center w-full h-full mt-12 md:mt-0">
        <video
          src="/assets/registration-mockup-mina-3.webm"
          autoPlay
          muted
          playsInline
          loop
          style={{ width: '40%', height: '40%', objectFit: 'contain', borderRadius: '2rem' }}
        />
      </div>
    </section>
  );
}