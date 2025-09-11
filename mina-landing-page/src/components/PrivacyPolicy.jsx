export default function PrivacyPolicy({ t }) {
  const isSpanish = t?.hero?.headline === 'Mina App';

  return (
    <div className="min-h-screen bg-primary flex flex-col relative overflow-hidden" style={{ backgroundColor: '#144E7A' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white rounded-full blur-2xl"></div>
      </div>

      {/* Header */}
      <div className="text-center pt-16 pb-8 relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-4 font-mina">
          {isSpanish ? 'Aviso de Privacidad' : 'Privacy Policy'}
        </h1>
        <p className="text-white/80 text-lg max-w-2xl mx-auto">
          {isSpanish 
            ? 'Conoce cómo protegemos y utilizamos tu información personal'
            : 'Learn how we protect and use your personal information'
          }
        </p>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-8 pb-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
            
            {/* PDF Embed Container */}
            <div className="w-full">
              <div className="bg-white rounded-2xl p-4 shadow-2xl">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-gray-800">
                    {isSpanish ? 'Aviso de Privacidad - Mina Real Estate' : 'Privacy Policy - Mina Real Estate'}
                  </h2>
                  <a
                    href="/privacy-policy.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-400 transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                    </svg>
                    {isSpanish ? 'Abrir en nueva pestaña' : 'Open in new tab'}
                  </a>
                </div>
                
                {/* PDF Embed */}
                <div className="w-full h-[800px] rounded-lg overflow-hidden">
                  <iframe
                    src="/privacy-policy.pdf#toolbar=1&navpanes=1&scrollbar=1"
                    width="100%"
                    height="100%"
                    className="border-0"
                    title={isSpanish ? 'Aviso de Privacidad' : 'Privacy Policy'}
                  />
                </div>
                
                {/* Fallback for browsers that don't support PDF embedding */}
                <div className="mt-4 text-center">
                  <p className="text-gray-600 text-sm mb-4">
                    {isSpanish 
                      ? 'Si no puedes ver el documento, haz clic en el botón de arriba para abrirlo en una nueva pestaña.'
                      : 'If you cannot see the document, click the button above to open it in a new tab.'
                    }
                  </p>
                  <a
                    href="/privacy-policy.pdf"
                    download
                    className="inline-flex items-center text-secondary hover:text-orange-400 transition-colors font-medium"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                    </svg>
                    {isSpanish ? 'Descargar PDF' : 'Download PDF'}
                  </a>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mt-8 bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-white text-lg font-bold mb-4">
                {isSpanish ? 'Información Adicional' : 'Additional Information'}
              </h3>
              <div className="text-white/90 space-y-2 text-sm">
                <p>
                  {isSpanish 
                    ? '• Este documento está disponible en formato PDF para su descarga'
                    : '• This document is available in PDF format for download'
                  }
                </p>
                <p>
                  {isSpanish 
                    ? '• Para preguntas sobre privacidad, contacta: privacy@minarealestate.com'
                    : '• For privacy questions, contact: privacy@minarealestate.com'
                  }
                </p>
                <p>
                  {isSpanish 
                    ? '• Última actualización: ' + new Date().toLocaleDateString('es-MX')
                    : '• Last updated: ' + new Date().toLocaleDateString('en-US')
                  }
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center pb-8 relative z-10">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-8 h-1 bg-secondary rounded-full"></div>
          <p className="text-secondary text-sm font-medium">
            {isSpanish ? 'Aviso de Privacidad' : 'Privacy Policy'}
          </p>
          <div className="w-8 h-1 bg-secondary rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
