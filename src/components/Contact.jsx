import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  const contactInfo = [
    {
      icon: faEnvelope,
      title: "Email",
      value: "sergiooyarzoh@gmail.com",
      link: "mailto:sergiooyarzoh@gmail.com",
      iconColor: "text-white",
      bgGradient: "from-blue-400 to-blue-600"
    },
    {
      icon: faLinkedin,
      title: "LinkedIn",
      value: "Sergio Oyarzo",
      link: "https://www.linkedin.com/in/sergio-oyarzo-414652130/",
      iconColor: "text-white",
      bgGradient: "from-blue-600 to-blue-800"
    },
    {
      icon: faGithub,
      title: "GitHub",
      value: "@sergi199904",
      link: "https://github.com/sergi199904",
      iconColor: "text-white",
      bgGradient: "from-gray-600 to-gray-800 dark:from-gray-700 dark:to-gray-900"
    }
  ]

  return (
    <section id="contacto" className="py-20 bg-white dark:bg-gray-900 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 dark:from-blue-900/10 dark:to-purple-900/10"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            data-aos="fade-up"
          >
            Contacto
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-6" data-aos="fade-up" data-aos-delay="100"></div>
          <p 
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            ¿Interesado en trabajar juntos? ¡Contáctame y conversemos sobre tu próximo proyecto!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((contact, index) => (
            <div
              key={index}
              className="group text-center"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 border border-white/20 dark:border-gray-700/20">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${contact.bgGradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <FontAwesomeIcon 
                    icon={contact.icon} 
                    className={`text-3xl ${contact.iconColor}`}
                  />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {contact.title}
                </h3>
                
                <a
                  href={contact.link}
                  target={contact.title !== 'Email' ? '_blank' : undefined}
                  rel={contact.title !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="inline-block text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium text-lg group-hover:scale-105 transform duration-200"
                >
                  {contact.value}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Contact CTA */}
        <div 
          className="text-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="bg-gradient-to-br from-primary-500 to-accent-600 rounded-3xl shadow-2xl p-12 max-w-4xl mx-auto text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/5 rounded-full blur-lg"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">
                ¡Trabajemos juntos!
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Estoy siempre abierto a nuevas oportunidades y colaboraciones. 
                Si tienes un proyecto en mente o simplemente quieres conectar, 
                no dudes en contactarme.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:sergiooyarzoh@gmail.com"
                  className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="mr-3" />
                  Enviar Email
                </a>
                <a
                  href="https://www.linkedin.com/in/sergio-oyarzo-414652130/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="mr-3" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact