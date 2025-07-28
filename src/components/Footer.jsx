const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-accent-900/20"></div>
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-accent-500/5 rounded-full blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Sergio Oyarzo
            </h3>
            <p className="text-gray-400 leading-relaxed">
              QA Tester Funcional & Developer en Formación
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Puerto Aysén, Chile 🇨🇱
            </p>
          </div>
          
          {/* Navigation */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4 text-gray-300">Navegación</h4>
            <div className="space-y-2">
              <a href="#sobre-mi" className="block text-gray-400 hover:text-primary-400 transition-colors">Sobre mí</a>
              <a href="#proyectos" className="block text-gray-400 hover:text-primary-400 transition-colors">Proyectos</a>
              <a href="#habilidades" className="block text-gray-400 hover:text-primary-400 transition-colors">Habilidades</a>
              <a href="#contacto" className="block text-gray-400 hover:text-primary-400 transition-colors">Contacto</a>
            </div>
          </div>
          
          {/* Contact */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4 text-gray-300">Contacto</h4>
            <div className="space-y-2">
              <a href="mailto:sergiooyarzoh@gmail.com" className="block text-gray-400 hover:text-primary-400 transition-colors">
                sergiooyarzoh@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/sergio-oyarzo-414652130/" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-primary-400 transition-colors">
                LinkedIn
              </a>
              <a href="https://github.com/sergi199904" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-primary-400 transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="text-center">
            <p className="text-gray-400 mb-2">
              &copy; {currentYear} Sergio Oyarzo. Todos los derechos reservados.
            </p>
            <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
              <span>Desarrollado con</span>
              <span className="text-red-400">❤️</span>
              <span>usando</span>
              <span className="font-semibold text-primary-400">React</span>
              <span>+</span>
              <span className="font-semibold text-accent-400">Vite</span>
              <span>+</span>
              <span className="font-semibold text-blue-400">Tailwind CSS</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer