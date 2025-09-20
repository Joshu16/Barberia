# Barbería Excelencia - Barbería Premium

Una página web profesional para barbería construida con React y Vite, diseñada para maximizar conversiones y proporcionar una experiencia de usuario excepcional.

## 🚀 Características

- **Landing Page Profesional** - Diseño atractivo con CTA principal "Agenda Aquí"
- **Presentación de Servicios** - Lista clara de servicios con precios
- **Galería de Resultados** - Carrusel de imágenes mostrando trabajos realizados
- **Sección de Barberos** - Perfiles del equipo con redes sociales
- **Ubicación y Contacto** - Mapa integrado con Google Maps y información de contacto
- **Diseño Responsive** - Optimizado para móviles y escritorio
- **SEO Local** - Optimizado para búsquedas locales en Google

## 🛠️ Tecnologías Utilizadas

- React 19
- Vite
- React Router DOM
- Lucide React (iconos)
- CSS3 con variables personalizadas
- Google Maps API

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone <tu-repositorio>
cd roxana-barberia
```

2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5173`

## 🚀 Despliegue

Para desplegar en GitHub Pages:

```bash
npm run deploy
```

## ⚙️ Configuración

### Calendly Integration
Para conectar con Calendly, edita el archivo `src/components/HeroSection.jsx` y reemplaza la URL en la función `handleAgendarClick`:

```javascript
const handleAgendarClick = () => {
  window.open('https://calendly.com/barberia-excelencia', '_blank')
}
```

### WhatsApp Integration
Para conectar con WhatsApp, edita el archivo `src/components/Footer.jsx` y reemplaza el número en la función `handleWhatsAppClick`:

```javascript
const handleWhatsAppClick = () => {
  window.open('https://wa.me/1234567890', '_blank')
}
```

### Google Maps
Para personalizar el mapa, edita el archivo `src/components/LocationSection.jsx` y actualiza la URL del iframe con tu dirección específica.

### Información de Contacto
Actualiza la información de contacto en:
- `src/components/LocationSection.jsx` - Dirección y teléfono
- `src/components/Footer.jsx` - Información del footer
- `index.html` - Meta tags y schema markup

## 🎨 Personalización

### Colores
Los colores principales están definidos en `src/index.css`:

```css
:root {
  --primary-dark: #2c2c2c;
  --primary-charcoal: #1a1a1a;
  --accent-orange: #ff6b35;
  --light-beige: #f5f5f0;
  --white: #ffffff;
}
```

### Fuentes
El proyecto utiliza la fuente Inter de Google Fonts, que se carga automáticamente.

## 📱 Responsive Design

El diseño es completamente responsive y se adapta a:
- Móviles (320px+)
- Tablets (768px+)
- Escritorio (1024px+)

## 🔍 SEO

El proyecto incluye:
- Meta tags optimizados
- Schema markup para negocio local
- Open Graph tags
- Twitter Card tags
- Estructura semántica HTML

## 📄 Estructura del Proyecto

```
src/
├── components/
│   ├── Header.jsx
│   ├── HeroSection.jsx
│   ├── ServicesSection.jsx
│   ├── GallerySection.jsx
│   ├── BarbersSection.jsx
│   ├── LocationSection.jsx
│   ├── Footer.jsx
│   └── LandingPage.jsx
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Soporte

Para soporte, contacta a [tu-email@ejemplo.com](mailto:tu-email@ejemplo.com)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.