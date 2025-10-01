# PROYECTO BARBERÍA - INFORMACIÓN COMPLETA

## 🎨 DISEÑO OBJETIVO
Diseño elegante y sofisticado con tema **NEGRO, DORADO y BLANCO** como se muestra en la imagen de referencia. Debe ser un diseño premium de barbería de lujo.

## 📁 ESTRUCTURA DEL PROYECTO

### Archivos principales:
- `src/App.jsx` - Componente principal con Router
- `src/main.jsx` - Punto de entrada
- `src/index.css` - Estilos globales
- `src/App.css` - Estilos adicionales

### Componentes:
- `src/components/LandingPage.jsx` - Página principal
- `src/components/Header.jsx` - Navegación
- `src/components/HeroSection.jsx` - Sección principal
- `src/components/ServicesSection.jsx` - Servicios
- `src/components/GallerySection.jsx` - Galería
- `src/components/RatingSection.jsx` - Reseñas
- `src/components/BarbersSection.jsx` - Barberos
- `src/components/LocationSection.jsx` - Ubicación
- `src/components/FAQSection.jsx` - Preguntas frecuentes
- `src/components/Footer.jsx` - Pie de página
- `src/components/BookingModal.jsx` - Modal de reservas
- `src/components/Breadcrumbs.jsx` - Navegación breadcrumb

### Configuración:
- `src/config/images.js` - Configuración de imágenes
- `src/config/seo.js` - Configuración SEO
- `src/hooks/useIntersectionObserver.js` - Hook para animaciones

## 🎨 SISTEMA DE COLORES

```css
:root {
  --primary-black: #000000;
  --primary-charcoal: #1a1a1a;
  --primary-dark-gray: #2a2a2a;
  --accent-gold: #d4af37;
  --accent-gold-light: #f4d03f;
  --accent-gold-dark: #b8860b;
  --white: #ffffff;
  --light-gray: #f8f8f8;
  --medium-gray: #e5e5e5;
  --text-white: #ffffff;
  --text-light: #cccccc;
  --text-dark: #333333;
  --text-muted: #666666;
  --border-gold: rgba(212, 175, 55, 0.3);
  --shadow-gold: rgba(212, 175, 55, 0.2);
}
```

## 🔤 TIPOGRAFÍAS

- **Playfair Display**: Para títulos y elementos elegantes (serif)
- **Inter**: Para texto del cuerpo (sans-serif)

## 📱 ESTRUCTURA DE LA PÁGINA

### 1. HEADER
- **Logo**: "BARBER SHOP" en dorado, tipografía Playfair Display
- **Navegación**: Enlaces en blanco con hover dorado
- **Fondo**: Negro sólido con borde dorado inferior
- **Responsive**: Menú hamburguesa en móvil

### 2. HERO SECTION
- **Imagen de fondo**: Barbería profesional con overlay negro
- **Título principal**: "MÁS QUE UN CORTE UNA EXPERIENCIA"
- **Subtítulo**: "Cortes modernos, afeitado clásico y cuidado de barba en Ciudad Colón"
- **Botones**: 
  - "Agenda Aquí" (dorado sólido)
  - "Servicios" (transparente con borde blanco)

### 3. SERVICIOS SECTION
- **Fondo**: Blanco
- **Título**: "Nuestros Servicios"
- **Tarjetas de servicios**:
  - Corte de Cabello - $15
  - Afeitado Clásico - $12
  - Corte + Barba - $25
  - Tratamiento Capilar - $20
  - Corte + Barba + Tratamiento - $40
- **Estilo**: Tarjetas blancas con bordes dorados, hover elegante

### 4. GALERÍA SECTION
- **Fondo**: Gris claro
- **Título**: "Galería de Trabajos"
- **Imágenes**: 6 imágenes de trabajos realizados
- **Estilo**: Marcos dorados, efecto hover con escala

### 5. RATING SECTION
- **Fondo**: Negro con gradiente
- **Contenido**: Reseñas de Google con estrellas doradas
- **Elementos**: Iconos dorados, texto blanco

### 6. BARBEROS SECTION
- **Fondo**: Blanco
- **Título**: "Nuestros Barberos"
- **Barberos**:
  - Carlos Mendoza (Barbero Principal)
  - Miguel Rodríguez (Especialista en Barbas)
  - Andrés Herrera (Cortes Modernos)
  - Luis Jiménez (Afeitado Clásico)
- **Estilo**: Tarjetas negras con información dorada

### 7. UBICACIÓN SECTION
- **Fondo**: Charcoal
- **Título**: "Ubicación y Contacto"
- **Información**:
  - Dirección: Ciudad Colón, San José, Costa Rica
  - Teléfono: +506 1234-5678
  - WhatsApp: +506 8765-4321
  - Horarios: Lunes a Sábado 8:00 AM - 7:00 PM
- **Mapa**: Integrado de Google Maps

### 8. FAQ SECTION
- **Fondo**: Gris claro
- **Título**: "Preguntas Frecuentes"
- **Preguntas**:
  - ¿Necesito cita previa?
  - ¿Qué métodos de pago aceptan?
  - ¿Atienden los domingos?
  - ¿Hacen cortes para niños?
  - ¿Qué productos utilizan?

### 9. FOOTER
- **Fondo**: Negro
- **Contenido**: Información de contacto, redes sociales, horarios
- **Elementos**: Iconos dorados, enlaces blancos con hover dorado

## 🎯 CARACTERÍSTICAS ESPECÍFICAS DEL DISEÑO

### Botones:
- **Primarios**: Fondo dorado, texto negro, sin bordes redondeados
- **Secundarios**: Transparente, borde blanco, texto blanco
- **Hover**: Efectos de elevación y sombras doradas

### Tarjetas:
- **Servicios**: Blancas con bordes dorados
- **Galería**: Marcos dorados gruesos
- **Barberos**: Negras con texto dorado
- **Hover**: Transformaciones suaves y sombras

### Tipografía:
- **Títulos**: Playfair Display, mayúsculas, espaciado de letras
- **Subtítulos**: Inter, peso medio
- **Texto**: Inter, peso normal
- **Precios**: Playfair Display, dorado, destacado

### Efectos:
- **Transiciones**: 0.3s ease para todos los elementos
- **Sombras**: Tonos dorados en hover
- **Escalado**: Efectos sutiles en hover
- **Bordes**: Dorados en elementos importantes

## 📱 RESPONSIVE DESIGN

### Breakpoints:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

### Adaptaciones móviles:
- Menú hamburguesa
- Tarjetas en columna única
- Textos más pequeños
- Botones de tamaño táctil
- Imágenes optimizadas

## 🚀 FUNCIONALIDADES

### Modal de Reservas:
- **Diseño**: Negro con bordes dorados
- **Header**: Dorado con título
- **Contenido**: Formulario de reserva
- **Botones**: Estilo consistente con el tema

### Animaciones:
- **Scroll**: Elementos aparecen con fadeIn
- **Hover**: Transformaciones suaves
- **Carga**: Transiciones elegantes

### Navegación:
- **Smooth scroll**: Entre secciones
- **Active states**: Enlaces activos
- **Mobile menu**: Deslizable

## 📋 TEXTO COMPLETO DE LA PÁGINA

### Hero Section:
```
MÁS QUE UN CORTE
UNA EXPERIENCIA

Cortes modernos, afeitado clásico y cuidado de barba en Ciudad Colón.

[Agenda Aquí] [Servicios]
```

### Servicios:
```
Nuestros Servicios

Corte de Cabello - $15
Afeitado Clásico - $12
Corte + Barba - $25
Tratamiento Capilar - $20
Corte + Barba + Tratamiento - $40
```

### Barberos:
```
Nuestros Barberos

Carlos Mendoza - Barbero Principal
Miguel Rodríguez - Especialista en Barbas
Andrés Herrera - Cortes Modernos
Luis Jiménez - Afeitado Clásico
```

### Ubicación:
```
Ubicación y Contacto

Ciudad Colón, San José, Costa Rica
+506 1234-5678
WhatsApp: +506 8765-4321
Lunes a Sábado 8:00 AM - 7:00 PM
```

### FAQ:
```
Preguntas Frecuentes

¿Necesito cita previa?
¿Qué métodos de pago aceptan?
¿Atienden los domingos?
¿Hacen cortes para niños?
¿Qué productos utilizan?
```

## 🎨 REFERENCIA VISUAL

El diseño debe ser **elegante, sofisticado y de lujo** con:
- Colores negro, dorado y blanco
- Tipografías serif para títulos
- Efectos de hover suaves
- Sombras doradas
- Bordes elegantes
- Espaciado generoso
- Elementos premium

## 📦 DEPENDENCIAS

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.8.0",
  "vite": "^4.0.0"
}
```

## 🚀 COMANDOS

```bash
npm install
npm run dev
npm run build
```

---

**NOTA**: Este proyecto debe implementarse con un diseño completamente elegante y sofisticado, manteniendo toda la funcionalidad existente pero con un aspecto visual premium de barbería de lujo.


