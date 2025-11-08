import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGem, faExternalLinkAlt, faCheckCircle, faChartLine } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Projects = () => {
  const projects = [
    {
      title: 'CFM Joyas',
      description:
        'Sitio web completo para joyería desarrollado desde cero con enfoque en experiencia de usuario y conversión. Incluye sistema de administración de productos, galería dinámica de joyas, formularios de contacto integrados con PHPMailer y base de datos MySQL para gestión de contenido.',
      icon: faGem,
      iconColor: 'text-amber-500',
      liveUrl: 'https://cfmjoyas.cl/',
      githubUrl: 'https://github.com/sergi199904/Cfm-Joyas-Hosting',
      stack: ['PHP', 'MySQL', 'JavaScript', 'CSS3', 'PHPMailer', 'Responsive Design', 'SEO Optimizado'],
      features: [
        'Panel de administración completo para gestión de productos',
        'Galería dinámica de joyas con filtros y categorías',
        'Formularios de contacto con validación y envío por email',
        'Base de datos MySQL para productos y contenido',
        'Diseño responsive mobile-first',
        'Optimización SEO y rendimiento web'
      ],
      metrics: {
        performance: '95/100',
        accessibility: '98/100',
        seo: '100/100'
      }
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

        <div className="grid md:grid-cols-1 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:transform hover:-translate-y-2 overflow-hidden border border-gray-100 dark:border-gray-700"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Header con gradiente */}
              <div className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 p-8">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <FontAwesomeIcon icon={project.icon} className="text-3xl text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-amber-100 text-sm">Proyecto Destacado</p>
                  </div>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-8">
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-lg">
                  {project.description}
                </p>

                {/* Características */}
                {project.features && (
                  <div className="mb-8 bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-6">
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-4 tracking-wide uppercase flex items-center">
                      <FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-green-500" />
                      Características Principales
                    </h4>
                    <ul className="space-y-3">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-gray-700 dark:text-gray-300">
                          <span className="text-amber-500 mr-2 mt-1">▸</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Métricas de rendimiento */}
                {project.metrics && (
                  <div className="mb-8 grid grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl">
                      <FontAwesomeIcon icon={faChartLine} className="text-2xl text-green-600 dark:text-green-400 mb-2" />
                      <div className="text-2xl font-bold text-green-700 dark:text-green-400">{project.metrics.performance}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wide">Performance</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl">
                      <FontAwesomeIcon icon={faChartLine} className="text-2xl text-blue-600 dark:text-blue-400 mb-2" />
                      <div className="text-2xl font-bold text-blue-700 dark:text-blue-400">{project.metrics.accessibility}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wide">Accesibilidad</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-xl">
                      <FontAwesomeIcon icon={faChartLine} className="text-2xl text-purple-600 dark:text-purple-400 mb-2" />
                      <div className="text-2xl font-bold text-purple-700 dark:text-purple-400">{project.metrics.seo}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wide">SEO</div>
                    </div>
                  </div>
                )}

                {/* Stack tecnológico */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3 tracking-wide uppercase">Tecnologías Utilizadas</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tag) => (
                      <span key={tag} className="text-sm font-medium px-4 py-2 rounded-full bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-800 dark:from-amber-900/30 dark:to-yellow-900/30 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Botones de acción */}
                <div className="flex flex-wrap gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-white rounded-xl hover:from-amber-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg hover:shadow-2xl"
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-2" />
                      Visitar Sitio Web
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-amber-500 dark:hover:border-amber-400 transition-all duration-300 font-semibold"
                    >
                      <FontAwesomeIcon icon={faGithub} className="mr-2" />
                      Ver Código Fuente
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
