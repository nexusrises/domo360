# Nexus Rise 3.0 🚀

**Nexus Rise 3.0** es una plataforma web inmersiva de última generación orientada a la exhibición y gestión de recorridos virtuales 360° interactivos y experiencias visuales 3D premium. Diseñada con una estética moderna, fluida y de alta gama, ofrece soluciones personalizadas para diversas industrias.

---

## 🌟 Características Clave

* **Recorridos Virtuales 360° Interactivos**: Integración completa con `PhotoSphereViewer` y un sistema de marcadores dinámicos (*hotspots*) que permiten la navegación fluida entre estancias e interactividad con información contextual.
* **Editor de Recorridos 360 Privado**: Una herramienta de administración local para configurar y diseñar los tours de manera visual (habilitada mediante variables de entorno en desarrollo).
* **Globo Terráqueo 3D Interactivo**: Un globo interactivo moderno en la sección de inicio desarrollado con `cobe` para mostrar el alcance y presencia del proyecto.
* **Experiencia de Usuario e Interfaz Premium**: 
  * Estética oscura con efectos de resplandor (*glow*) y degradados modernos.
  * Fondo interactivo de líneas topográficas dinámicas (`TopographicBackground`).
  * Animaciones y transiciones fluidas de página mediante `Framer Motion`.
  * Optimización y adaptabilidad móvil en todas las páginas e interacciones.
* **Páginas Especializadas por Sector**:
  * Constructoras e Inmobiliarias.
  * Clínicas y Centros Médicos.
  * Empresas y Comercios.
  * Soluciones para Profesionales y Consultores.

---

## 🛠️ Tecnologías Utilizadas

* **Núcleo**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
* **Enrutamiento**: [React Router DOM v7](https://reactrouter.com/)
* **Estilos y Diseño**: [Tailwind CSS v4](https://tailwindcss.com/) + [PostCSS](https://postcss.org/) + [Lucide React](https://lucide.dev/) (Iconografía)
* **Animaciones**: [Framer Motion](https://www.framer.com/motion/)
* **3D e Imagen 360°**:
  * [@photo-sphere-viewer/core](https://photo-sphere-viewer.js.org/) (Visor de fotos 360°)
  * [@photo-sphere-viewer/markers-plugin](https://photo-sphere-viewer.js.org/plugins/markers.html) (Marcadores interactivos)
  * [Three.js](https://threejs.org/) + [@react-three/fiber](https://r3f.docs.pmnd.rs/) + [@react-three/drei](https://github.com/pmndrs/drei) (Modelado 3D)
  * [cobe](https://github.com/shuding/cobe) (Globo terráqueo interactivo ligero)

---

## 📂 Estructura del Proyecto

El código está organizado de la siguiente manera:

```text
Nexus Rise 3.0/
├── public/                # Recursos estáticos (imágenes de recorridos, logotipos, etc.)
├── src/
│   ├── assets/            # Archivos multimedia locales
│   ├── components/        # Componentes reutilizables (Navbar, Footer, Globe, VirtualTour, etc.)
│   ├── data/              # Archivos JSON de datos (configuraciones de tours virtuales)
│   ├── pages/             # Vistas principales de la aplicación (Home, Nosotros, Servicios, etc.)
│   ├── App.css            # Estilos globales específicos
│   ├── index.css          # Estilos base y tokens del sistema de diseño (Tailwind)
│   ├── App.jsx            # Enrutador y estructura base del layout
│   └── main.jsx           # Punto de entrada de la aplicación
├── .env.example           # Plantilla de variables de entorno
├── eslint.config.js       # Configuración del linter
├── tailwind.config.js     # Configuración del entorno de Tailwind
└── vite.config.js         # Configuración del empaquetador Vite
```

---

## 🚀 Instalación y Desarrollo Local

Sigue estos pasos para levantar el proyecto en tu entorno local:

### 1. Requisitos Previos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión 18 o superior recomendada) y `npm` (o `yarn` / `pnpm`).

### 2. Clonar el Repositorio

```bash
git clone <URL_DEL_REPOSITORIO_EN_GITHUB>
cd nexus-rise-3.0
```

### 3. Instalar Dependencias

```bash
npm install
```

### 4. Configurar Variables de Entorno

Copia el archivo de plantilla `.env.example` y renómbralo a `.env.local`:

```bash
cp .env.example .env.local
```

Ajusta la variable `VITE_ENABLE_360_EDITOR` en `true` si deseas tener acceso a la vista `/editor-360-privado` localmente.

### 5. Iniciar Servidor de Desarrollo

```bash
npm run dev
```

Abre tu navegador en [http://localhost:5173](http://localhost:5173) para ver la aplicación ejecutándose.

### 6. Compilar para Producción

Para generar el bundle optimizado listo para subir a producción:

```bash
npm run build
```

Los archivos resultantes se guardarán en la carpeta `dist`. Puedes probar esta compilación localmente usando:

```bash
npm run preview
```

---

## 📝 Licencia

Este proyecto es de carácter privado. Consulta con los administradores del repositorio para más información sobre licencias y permisos de distribución.
# NexusRise
