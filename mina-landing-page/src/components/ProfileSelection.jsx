import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProfileSelection({ t }) {
  const [expandedSection, setExpandedSection] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleProfileSelect = (profile) => {
    setIsAnimating(true);
    setExpandedSection(expandedSection === profile ? null : profile);
    
    // Reset animation after 1 second
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  const ownerFeatures = [
    'Publica tu propiedad en minutos',
    'Recibe propuestas de agentes calificados',
    'Compara ofertas y elige la mejor',
    'Gestiona todo desde tu panel de control',
    'Estadísticas detalladas de visitas',
    'Chat directo con agentes'
  ];

  const agentFeatures = [
    'Acceso a base de datos premium de propiedades',
    'Filtros avanzados por ubicación y precio',
    'Envía propuestas personalizadas',
    'Conecta directamente con propietarios',
    'Herramientas de seguimiento de clientes',
    'Estadísticas de rendimiento'
  ];

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
          {t.hero.headline === 'Mina App' ? '¿Qué perfil te identifica mejor?' : 'Which profile identifies you best?'}
        </h1>
        <p className="text-white/80 text-lg max-w-2xl mx-auto">
          {t.hero.headline === 'Mina App' 
            ? 'Selecciona tu perfil para descubrir cómo Mina puede ayudarte en tu experiencia inmobiliaria'
            : 'Select your profile to discover how Mina can help you in your real estate experience'
          }
        </p>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-8 pb-16 relative z-10">
        {/* Owner Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Owner Card - Left */}
            <div className="order-1 lg:order-1">
              <div className={`bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-center border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 ${expandedSection === 'owner' ? 'bg-white/20' : ''}`}>
                {/* Icon */}
                <div className="mb-6">
                  <div className={`w-28 h-28 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4 transition-all duration-500 ${expandedSection === 'owner' && isAnimating ? 'animate-bounce' : ''}`}>
                    <svg className="w-14 h-14 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                    </svg>
                  </div>
                </div>

                {/* Button */}
                <button
                  onClick={() => handleProfileSelect('owner')}
                  className={`bg-secondary text-white font-bold py-4 px-8 rounded-2xl text-xl mb-6 w-full hover:bg-orange-400 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25 ${expandedSection === 'owner' && isAnimating ? 'animate-pulse' : ''}`}
                >
                  {t.hero.headline === 'Mina App' ? 'Soy Propietario' : 'I am an Owner'}
                </button>

                {/* Description */}
                <p className="text-white text-sm mb-6 leading-relaxed">
                  {t.hero.headline === 'Mina App' 
                    ? 'Se abre una pestaña donde se mostrará cómo publicar como propietario, beneficios, estadísticas y opiniones de usuarios'
                    : 'A tab opens where it will be shown how to publish as an owner, benefits, statistics, and user opinions'
                  }
                </p>

                {/* Expanded Features */}
                {expandedSection === 'owner' && (
                  <div className="mt-8 p-6 bg-white/10 rounded-2xl border border-white/20 animate-fade-in">
                    <h3 className="text-white text-xl font-bold mb-4">
                      {t.hero.headline === 'Mina App' ? 'Características para Propietarios' : 'Features for Owners'}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {ownerFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center text-white text-sm">
                          <span className="text-secondary mr-2">✓</span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Goal Text - Outside the white box, same width */}
              <div className="mt-6 text-center">
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                  <div className="text-secondary text-2xl md:text-3xl font-bold leading-tight space-y-1">
                    {t.hero.headline === 'Mina App' ? (
                      <>
                        <div className="hover:text-white transition-colors">Quiero</div>
                        <div className="hover:text-white transition-colors">vender/rentar</div>
                        <div className="hover:text-white transition-colors">mi propiedad</div>
                        <div className="hover:text-white transition-colors">rápido y seguro</div>
                      </>
                    ) : (
                      <>
                        <div className="hover:text-white transition-colors">I want to</div>
                        <div className="hover:text-white transition-colors">sell/rent</div>
                        <div className="hover:text-white transition-colors">my property</div>
                        <div className="hover:text-white transition-colors">fast and secure</div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Owner Video Space - Right */}
            <div className="order-2 lg:order-2">
              <div className="w-full h-80 bg-white/5 rounded-3xl flex items-center justify-center border border-white/20 backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏠</div>
                  <span className="text-white/60 text-lg">Owner App Video</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Agent Section */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Agent Video Space - Left */}
            <div className="order-1 lg:order-1">
              <div className="w-full h-80 bg-white/5 rounded-3xl flex items-center justify-center border border-white/20 backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-6xl mb-4">💼</div>
                  <span className="text-white/60 text-lg">Agent App Video</span>
                </div>
              </div>
            </div>

            {/* Agent Card - Right */}
            <div className="order-2 lg:order-2">
              <div className={`bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-center border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 ${expandedSection === 'agent' ? 'bg-white/20' : ''}`}>
                {/* Icon */}
                <div className="mb-6">
                  <div className={`w-28 h-28 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4 transition-all duration-500 ${expandedSection === 'agent' && isAnimating ? 'animate-bounce' : ''}`}>
                    <svg className="w-14 h-14 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                </div>

                {/* Button */}
                <button
                  onClick={() => handleProfileSelect('agent')}
                  className={`bg-secondary text-white font-bold py-4 px-8 rounded-2xl text-xl mb-6 w-full hover:bg-orange-400 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25 ${expandedSection === 'agent' && isAnimating ? 'animate-pulse' : ''}`}
                >
                  {t.hero.headline === 'Mina App' ? 'Soy Asesor' : 'I am an Agent'}
                </button>

                {/* Description */}
                <p className="text-white text-sm mb-6 leading-relaxed">
                  {t.hero.headline === 'Mina App' 
                    ? 'Se abre una pestaña donde se mostrará cómo publicar como asesor, beneficios, estadísticas, precios y opiniones de usuarios'
                    : 'A tab opens where it will be shown how to publish as an agent, benefits, statistics, prices, and user opinions'
                  }
                </p>

                {/* Expanded Features */}
                {expandedSection === 'agent' && (
                  <div className="mt-8 p-6 bg-white/10 rounded-2xl border border-white/20 animate-fade-in">
                    <h3 className="text-white text-xl font-bold mb-4">
                      {t.hero.headline === 'Mina App' ? 'Características para Asesores' : 'Features for Agents'}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {agentFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center text-white text-sm">
                          <span className="text-secondary mr-2">✓</span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Goal Text - Outside the white box, same width */}
              <div className="mt-6 text-center">
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                  <div className="text-secondary text-2xl md:text-3xl font-bold leading-tight space-y-1">
                    {t.hero.headline === 'Mina App' ? (
                      <>
                        <div className="hover:text-white transition-colors">Estoy buscando</div>
                        <div className="hover:text-white transition-colors">clientes que necesiten</div>
                        <div className="hover:text-white transition-colors">ayuda para</div>
                        <div className="hover:text-white transition-colors">vender/rentar su</div>
                        <div className="hover:text-white transition-colors">propiedad</div>
                      </>
                    ) : (
                      <>
                        <div className="hover:text-white transition-colors">I am looking for</div>
                        <div className="hover:text-white transition-colors">clients who need</div>
                        <div className="hover:text-white transition-colors">help to</div>
                        <div className="hover:text-white transition-colors">sell/rent their</div>
                        <div className="hover:text-white transition-colors">property</div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
