const About = () => {
  return (
    <section id="sobre-mi" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 
            className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            data-aos="fade-up"
          >
            Sobre mí
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-12" data-aos="fade-up" data-aos-delay="100"></div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 sm:p-12 shadow-xl border border-white/20 dark:border-gray-700/20" data-aos="fade-up" data-aos-delay="200">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/3 flex justify-center">
                  <div className="w-48 h-48 bg-gradient-to-br from-primary-400 to-accent-500 rounded-full flex items-center justify-center shadow-2xl">
                    <span className="text-6xl font-bold text-white">SO</span>
                  </div>
                </div>
                <div className="lg:w-2/3 space-y-6">
                  <p 
                    className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    Soy <span className="font-semibold text-primary-600 dark:text-primary-400">Sergio Oyarzo</span>, un profesional apasionado por la calidad del software y el desarrollo web. 
                    Actualmente me especializo en <span className="font-semibold text-accent-600 dark:text-accent-400">Testing QA funcional básico</span> y me encuentro en formación continua 
                    como desarrollador.
                  </p>
                  
                  <p 
                    className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    Ubicado en <span className="font-semibold text-primary-600 dark:text-primary-400">Puerto Aysén, Chile</span>, combino mi experiencia en testing con conocimientos en desarrollo 
                    web para ofrecer soluciones completas y de calidad. Estoy enfocado en mi crecimiento profesional 
                    con estudios programados hasta <span className="font-semibold text-accent-600 dark:text-accent-400">julio de 2025</span>.
                  </p>
                  
                  <p 
                    className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    Mi objetivo es contribuir al desarrollo de <span className="font-semibold text-primary-600 dark:text-primary-400">software robusto y funcional</span>, aplicando buenas prácticas 
                    tanto en testing como en desarrollo.
                  </p>
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