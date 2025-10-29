import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGem, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Projects = () => {
  const projects = [
    {
      title: 'CFM Joyas',
      description:
        'Sitio web para la joyería CFM Joyas, enfocado en rendimiento, accesibilidad y SEO. Diseño totalmente responsive y contenido claro orientado a conversión.',
      icon: faGem,
      iconColor: 'text-blue-500',
      liveUrl: 'https://cfmjoyas.cl/',
      githubUrl: 'https://github.com/sergi199904/Cfm-Joyas-Hosting',
      stack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive', 'SEO básico']
    }
  ]

  return (
    <section id="proyectos" className="py-20 bg-white dark:bg-gray-900 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 dark:from-blue-900/10 dark:to-purple-900/10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            data-aos="fade-up"
          >
            Proyecto Destacado
          </h2>
          <div
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          ></div>
          <p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Presento en detalle el proyecto más representativo de mi trabajo reciente.
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-[1.02] overflow-hidden border border-gray-100 dark:border-gray-700"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/20 dark:to-blue-800/20 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <FontAwesomeIcon icon={project.icon} className={`text-2xl ${project.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3 tracking-wide uppercase">Stack y detalles</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tag) => (
                      <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all duration-300 transform hover:scale-105 font-medium shadow-lg hover:shadow-xl"
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-2" />
                      Ver Sitio
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-primary-500 dark:hover:border-primary-400 transition-all duration-300 font-medium"
                    >
                      <FontAwesomeIcon icon={faGithub} className="mr-2" />
                      Repositorio
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
