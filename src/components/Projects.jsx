import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGem, faUsers, faGamepad, faPizzaSlice, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Projects = () => {
  const projects = [
    {
      title: "Cfm-Joyas-Hosting",
      description: "Sitio web real para una joyería, desarrollado con tecnologías web modernas. Incluye catálogo de productos, información de contacto y diseño responsive.",
      icon: faGem,
      iconColor: "text-blue-500",
      liveUrl: "https://cfmjoyas.cl/",
      githubUrl: "https://github.com/sergi199904/Cfm-Joyas-Hosting"
    },
    {
      title: "Mantenedor de Usuarios y Proyectos",
      description: "Sistema de gestión para administrar usuarios y proyectos. Implementa funcionalidades CRUD completas con interfaz intuitiva y gestión de datos eficiente.",
      icon: faUsers,
      iconColor: "text-green-500",
      githubUrl: "https://github.com/sergi199904/Mantenedor-Usuarios-y-Proyectos"
    },
    {
      title: "Pokemon App",
      description: "Aplicación interactiva que consume la API de Pokémon. Permite buscar y visualizar información detallada de diferentes Pokémon con una interfaz atractiva y funcional.",
      icon: faGamepad,
      iconColor: "text-yellow-500",
      githubUrl: "https://github.com/sergi199904/Pokemon-App"
    },
    {
      title: "Prueba MammaMia",
      description: "Proyecto de prueba técnica para una pizzería. Desarrollado como demostración de habilidades en desarrollo web y manejo de interfaces de usuario dinámicas.",
      icon: faPizzaSlice,
      iconColor: "text-red-500",
      githubUrl: "https://github.com/sergi199904/Prueba-MammaMia"
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
            Proyectos Destacados
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-6" data-aos="fade-up" data-aos-delay="100"></div>
          <p 
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Algunos de mis trabajos más representativos que demuestran mi pasión por el desarrollo y la calidad del software
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-[1.02] overflow-hidden border border-gray-100 dark:border-gray-700"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`w-14 h-14 rounded-xl ${project.iconColor} bg-gradient-to-br from-${project.iconColor.split('-')[1]}-100 to-${project.iconColor.split('-')[1]}-200 dark:from-${project.iconColor.split('-')[1]}-900/20 dark:to-${project.iconColor.split('-')[1]}-800/20 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <FontAwesomeIcon 
                      icon={project.icon} 
                      className={`text-2xl ${project.iconColor}`}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  {project.description}
                </p>
                
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
                  
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-primary-500 dark:hover:border-primary-400 transition-all duration-300 font-medium"
                  >
                    <FontAwesomeIcon icon={faGithub} className="mr-2" />
                    Repositorio
                  </a>
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