export default function DownloadSection({ t }) {
  return (
    <section className="relative w-full py-20 flex justify-center items-center overflow-hidden bg-green-50">
      {/* Abstract background shapes */}
      <div className="absolute left-0 top-0 w-full h-full z-0 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1600 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-0 top-0">
          <ellipse cx="600" cy="300" rx="900" ry="300" fill="#C7F5D9" />
        </svg>
      </div>
      <div className="relative z-10 flex flex-col md:flex-row items-center max-w-7xl w-full gap-12 px-4">
        {/* Left: Text and buttons */}
        <div className="flex-1 flex flex-col items-start justify-center max-w-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-mina">{t.download.headline}</h2>
          <p className="text-lg md:text-xl text-primary mb-8 font-medium">{t.download.subheadline}</p>
          <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
            <img src="/assets/qr-placeholder.png" alt="QR code" className="w-24 h-24 rounded bg-white shadow-md" />
            <div className="flex flex-col gap-2">
              <a href="#" className="block"><img src="/assets/appstore-badge.png" alt={t.download.appstore} className="h-12" /></a>
              <a href="#" className="block"><img src="/assets/googleplay-badge.png" alt={t.download.googleplay} className="h-12" /></a>
            </div>
          </div>
        </div>
        {/* Right: Phone mockup */}
        <div className="flex-1 flex items-center justify-center">
          <img src="/assets/phone-mockup.png" alt="Mina app phone mockup" className="w-72 md:w-96 rounded-3xl shadow-2xl border-4 border-white" />
        </div>
      </div>
    </section>
  );
} 