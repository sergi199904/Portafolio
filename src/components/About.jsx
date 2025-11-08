const About = () => {
  return (
    <section id="sobre-mi" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-slate-900 dark:to-purple-900/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 
            className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            data-aos="fade-up"
          >
            Sobre mí
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 mx-auto mb-12" data-aos="fade-up" data-aos-delay="100"></div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 sm:p-12 shadow-2xl border border-gray-100 dark:border-gray-700" data-aos="fade-up" data-aos-delay="200">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/3 flex justify-center">
                  <div className="relative">
                    <div className="w-48 h-48 bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 rounded-3xl flex items-center justify-center shadow-2xl transform rotate-3 hover:rotate-6 transition-transform duration-300">
                      <span className="text-6xl font-bold text-white">SO</span>
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-gradient-to-br from-blue-300 to-purple-300 rounded-3xl -z-10 blur-xl opacity-50"></div>
                  </div>
                </div>
                <div className="lg:w-2/3 space-y-6">
                  <p 
                    className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    Soy <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">Sergio Oyarzo</span>, un profesional apasionado por la calidad del software y el desarrollo web. 
                    Actualmente me especializo en <span className="font-semibold text-indigo-600 dark:text-indigo-400">Testing QA Funcional</span> y desarrollo web full-stack.
                  </p>
                  
                  <p 
                    className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    Ubicado en <span className="font-semibold text-purple-600 dark:text-purple-400">Puerto Aysén, Chile 🇨🇱</span>, combino mi experiencia en testing con conocimientos en desarrollo 
                    web para crear soluciones completas y de calidad. He trabajado con tecnologías como <span className="font-semibold text-blue-600 dark:text-blue-400">PHP, MySQL, JavaScript, React</span> y más.
                  </p>
                  
                  <p 
                    className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    Mi objetivo es contribuir al desarrollo de <span className="font-semibold text-indigo-600 dark:text-indigo-400">software robusto y funcional</span>, aplicando buenas prácticas 
                    tanto en testing como en desarrollo.
                  </p>

                  <div className="pt-4 flex flex-wrap gap-3" data-aos="fade-up" data-aos-delay="600">
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-semibold">
                      🧪 QA Testing
                    </span>
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold">
                      💻 Full Stack Dev
                    </span>
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-semibold">
                      🚀 En formación
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About