# Sergio Oyarzo - Portafolio Personal

Portafolio profesional moderno desarrollado con **React + Vite**, **Tailwind CSS**, **Font Awesome** y **AOS** (Animate on Scroll). Incluye soporte para modo claro/oscuro y está optimizado para GitHub Pages.

## 🚀 Características

- ✨ **Moderno y Responsive**: Diseñado con Tailwind CSS
- 🌙 **Modo Claro/Oscuro**: Toggle dinámico entre temas
- 📱 **Mobile First**: Completamente responsive
- 🎬 **Animaciones Suaves**: Implementadas con AOS
- ⚡ **Rendimiento**: Construido con Vite para máxima velocidad
- 🚀 **Deploy Automático**: Configurado para GitHub Pages

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React 18
- **Build Tool**: Vite
- **Estilos**: Tailwind CSS
- **Íconos**: Font Awesome
- **Animaciones**: AOS (Animate on Scroll)
- **Fuentes**: Google Fonts (Inter)
- **Deploy**: GitHub Pages

## 📦 Instalación y Desarrollo

### Prerrequisitos
- Node.js 18 o superior
- npm o yarn

### Pasos para instalación local

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/sergi199904/Portafolio.git
   cd Portafolio
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```
   
   El sitio estará disponible en `http://localhost:5173`

4. **Construir para producción**
   ```bash
   npm run build
   ```

5. **Previsualizar build de producción**
   ```bash
   npm run preview
   ```

## 🚀 Deploy en GitHub Pages

### Configuración Automática

El repositorio está configurado con GitHub Actions para deploy automático:

1. **Push a la rama main** activa automáticamente el deploy
2. El workflow construye el proyecto y lo despliega en la rama `gh-pages`
3. GitHub Pages sirve el contenido desde la rama `gh-pages`

### Deploy Manual

Para desplegar manualmente usando gh-pages:

1. **Construir y desplegar**
   ```bash
   npm run deploy
   ```
   
   Este comando:
   - Ejecuta automáticamente `npm run build` (predeploy)
   - Despliega el contenido de `dist/` a la rama `gh-pages`
   - GitHub Pages actualiza automáticamente el sitio

2. **Solo construir (sin desplegar)**
   ```bash
   npm run build
   ```

### Configuración Manual de GitHub Pages

Si necesitas configurar GitHub Pages manualmente:

1. Ve a **Settings** > **Pages** en tu repositorio
2. Selecciona **Deploy from a branch**
3. Elige la rama `gh-pages` y la carpeta `/ (root)`
4. Guarda los cambios

## 📁 Estructura del Proyecto

```
Portafolio/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .github/
│   └── workflows/
│       └── deploy.yml
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 Secciones del Portafolio

- **Hero**: Introducción con gradiente atractivo
- **Sobre mí**: Descripción profesional
- **Proyectos Destacados**: Cards interactivas con mis mejores trabajos
- **Habilidades Técnicas**: Badges categorizadas por área
- **Contacto**: Links a redes sociales y email
- **Footer**: Información de derechos de autor

## 🌐 Demo

Visita el portafolio en vivo: [https://sergi199904.github.io/Portafolio/](https://sergi199904.github.io/Portafolio/)

## 📞 Contacto

- **📧 Email**: [sergiooyarzoh@gmail.com](mailto:sergiooyarzoh@gmail.com)
- **💼 LinkedIn**: [Sergio Oyarzo](https://www.linkedin.com/in/sergio-oyarzo-414652130/)
- **🐙 GitHub**: [@sergi199904](https://github.com/sergi199904)

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si encuentras algún error o tienes sugerencias:

1. Fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/NuevaCaracteristica`)
3. Commit tus cambios (`git commit -m 'Agrega nueva característica'`)
4. Push a la rama (`git push origin feature/NuevaCaracteristica`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

⭐ **¡Gracias por visitar mi portafolio!** Si te parece útil, considera darle una estrella al repositorio.