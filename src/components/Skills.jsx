const Skills = () => {
  const skills = [
    { name: "Testing Funcional", category: "qa", level: 90 },
    { name: "QA Manual", category: "qa", level: 85 },
    { name: "PHP", category: "backend", level: 75 },
    { name: "JavaScript", category: "frontend", level: 80 },
    { name: "Bootstrap", category: "frontend", level: 85 },
    { name: "MySQL", category: "database", level: 70 },
    { name: "Git", category: "tools", level: 90 },
    { name: "GitHub", category: "tools", level: 90 },
    { name: "GitHub Pages", category: "tools", level: 85 },
    { name: "HTML5", category: "frontend", level: 95 },
    { name: "CSS3", category: "frontend", level: 90 },
    { name: "Responsive Design", category: "frontend", level: 85 },
    { name: "API Integration", category: "backend", level: 80 },
    { name: "CRUD Operations", category: "backend", level: 85 }
  ]

  const categoryInfo = {
    qa: { 
      name: "QA & Testing", 
      color: "purple", 
      bgClass: "bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30",
      textClass: "text-purple-800 dark:text-purple-200",
      borderClass: "border-purple-200 dark:border-purple-700",
      icon: "🧪"
    },
    frontend: { 
      name: "Frontend", 
      color: "blue", 
      bgClass: "bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30",
      textClass: "text-blue-800 dark:text-blue-200",
      borderClass: "border-blue-200 dark:border-blue-700",
      icon: "🎨"
    },
    backend: { 
      name: "Backend", 
      color: "green", 
      bgClass: "bg-gradient-to-r from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30",
      textClass: "text-green-800 dark:text-green-200",
      borderClass: "border-green-200 dark:border-green-700",
      icon: "⚙️"
    },
    database: { 
      name: "Base de Datos", 
      color: "orange", 
      bgClass: "bg-gradient-to-r from-orange-100 to-orange-200 dark:from-orange-900/30 dark:to-orange-800/30",
      textClass: "text-orange-800 dark:text-orange-200",
      borderClass: "border-orange-200 dark:border-orange-700",
      icon: "🗄️"
    },
    tools: { 
      name: "Herramientas", 
      color: "gray", 
      bgClass: "bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800/30 dark:to-gray-700/30",
      textClass: "text-gray-800 dark:text-gray-200",
      borderClass: "border-gray-200 dark:border-gray-600",
      icon: "🛠️"
    }
  }

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {})

  return (
    <section id="habilidades" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            data-aos="fade-up"
          >
            Habilidades Técnicas
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-6" data-aos="fade-up" data-aos-delay="100"></div>
          <p 
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Tecnologías y herramientas que domino, organizadas por área de especialización
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => (
            <div
              key={category}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 dark:border-gray-700/20 hover:shadow-xl transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={categoryIndex * 100}
            >
              <div className="text-center mb-6">
                <div className="text-3xl mb-2">{categoryInfo[category].icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {categoryInfo[category].name}
                </h3>
                <div className={`w-16 h-1 ${categoryInfo[category].bgClass} mx-auto rounded-full`}></div>
              </div>
              
              <div className="space-y-4">
                {categorySkills.map((skill, index) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className={`text-xs font-semibold ${categoryInfo[category].textClass}`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-2 ${categoryInfo[category].bgClass} rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse`}
                        style={{ width: `${skill.level}%` }}
                        data-aos="slide-right"
                        data-aos-delay={categoryIndex * 100 + index * 50}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills summary */}
        <div className="mt-16 text-center">
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 dark:border-gray-700/20 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="500">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              En constante aprendizaje
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Como profesional en formación, estoy comprometido con el aprendizaje continuo y la mejora de mis habilidades. 
              Cada proyecto es una oportunidad para crecer y aplicar nuevas tecnologías de manera efectiva.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills