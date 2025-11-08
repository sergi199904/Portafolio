const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 70
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section 
      id="home" 
      className="min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 text-white relative overflow-hidden"
    >
      {/* Background decorative elements - Mejorado */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-400/20 via-transparent to-blue-500/20"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-indigo-400/15 rounded-full blur-2xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-purple-500/15 rounded-full blur-xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div data-aos="fade-up">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white/90 border border-white/20 mb-6">
              👋 Bienvenido a mi portafolio
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-100 to-blue-100 bg-clip-text text-transparent drop-shadow-2xl">
            Sergio Oyarzo
          </h1>
          <p className="text-2xl sm:text-3xl mb-4 text-purple-100 font-bold tracking-wide">
            QA Tester Funcional & Developer
          </p>
          <p className="text-lg sm:text-xl mb-3 text-blue-100/90 max-w-2xl mx-auto leading-relaxed">
            Especializado en testing funcional y desarrollo web full-stack
          </p>
          <p className="text-base mb-8 text-blue-200/70 flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            Puerto Aysén, Chile 🇨🇱
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <button
              onClick={() => scrollToSection('sobre-mi')}
              className="group inline-flex items-center px-8 py-4 bg-white text-purple-600 font-bold rounded-xl hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-xl"
            >
              <span>Conoce más sobre mí</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/20 hover:border-white/50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              📧 Contactar
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero