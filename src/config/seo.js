// Configuración SEO para Barbería Excelencia
// IMPORTANTE: Actualiza estos datos con la información real de la barbería

export const seoConfig = {
  // Información básica del negocio
  business: {
    name: "Barbería Excelencia",
    alternateName: "Barbería Excelencia Ciudad Colón",
    description: "Barbería premium especializada en cortes modernos, afeitado clásico, cuidado de barba y tratamientos faciales en Ciudad Colón, San José, Costa Rica.",
    url: "https://barberiaexcelencia.com", // TODO: Cambiar por el dominio real
    email: "info@barberiaexcelencia.com", // TODO: Cambiar por el email real
    phone: "+506-8382-3505", // ✅ Número real actualizado
    address: {
      streetAddress: "Centro Comercial Plaza Real, Local 15", // TODO: Verificar dirección exacta
      addressLocality: "Ciudad Colón",
      addressRegion: "San José",
      postalCode: "10701", // TODO: Verificar código postal
      addressCountry: "CR"
    },
    coordinates: {
      latitude: "9.8765432", // TODO: Obtener coordenadas exactas de Google Maps
      longitude: "-84.1234567" // TODO: Obtener coordenadas exactas de Google Maps
    }
  },

  // Horarios de atención
  openingHours: [
    {
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00"
    },
    {
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "16:00"
    }
  ],

  // Servicios y precios
  services: [
    {
      name: "Corte de Cabello",
      description: "Corte profesional adaptado a tu estilo personal",
      price: "20000",
      priceCurrency: "CRC"
    },
    {
      name: "Afeitado Clásico",
      description: "Afeitado tradicional con navaja clásica",
      price: "18000",
      priceCurrency: "CRC"
    },
    {
      name: "Corte + Afeitado",
      description: "Paquete completo de grooming masculino",
      price: "35000",
      priceCurrency: "CRC"
    },
    {
      name: "Arreglo de Barba",
      description: "Diseño y mantenimiento de barba",
      price: "8000",
      priceCurrency: "CRC"
    },
    {
      name: "Tratamiento Facial",
      description: "Cuidado facial completo",
      price: "12000",
      priceCurrency: "CRC"
    }
  ],

  // Redes sociales
  socialMedia: {
    facebook: "https://www.facebook.com/barberiaexcelencia", // TODO: Cambiar por el perfil real
    instagram: "https://www.instagram.com/barberiaexcelencia", // TODO: Cambiar por el perfil real
    whatsapp: "https://wa.me/50683823505" // ✅ Número real actualizado
  },

  // Enlaces de reserva
  booking: {
    calendly: "https://calendly.com/barberia-excelencia", // TODO: Configurar Calendly real
    whatsapp: "https://wa.me/50683823505" // ✅ Número real actualizado
  },

  // Palabras clave SEO
  keywords: [
    "barbería Ciudad Colón",
    "barbería San José",
    "cortes de cabello",
    "afeitado",
    "barba",
    "barbería premium",
    "Costa Rica",
    "grooming masculino",
    "estilista",
    "barbero profesional",
    "barbería cerca de mí",
    "corte de cabello masculino",
    "afeitado clásico",
    "diseño de barba",
    "tratamiento facial masculino"
  ],

  // Imágenes para redes sociales
  images: {
    ogImage: "https://barberiaexcelencia.com/images/og-image.jpg", // TODO: Crear imagen optimizada 1200x630
    twitterCard: "https://barberiaexcelencia.com/images/twitter-card.jpg", // TODO: Crear imagen optimizada 1200x630
    logo: "https://barberiaexcelencia.com/images/logo.png" // TODO: Crear logo optimizado
  },

  // Información del equipo
  team: [
    {
      name: "Juan Pérez", // TODO: Cambiar por nombres reales
      title: "Barbero Maestro",
      linkedin: "#", // TODO: Agregar enlaces reales
      instagram: "#" // TODO: Agregar enlaces reales
    },
    {
      name: "María González", // TODO: Cambiar por nombres reales
      title: "Estilista Senior",
      linkedin: "#", // TODO: Agregar enlaces reales
      instagram: "#" // TODO: Agregar enlaces reales
    },
    {
      name: "Carlos Rodríguez", // TODO: Cambiar por nombres reales
      title: "Barbero",
      linkedin: "#", // TODO: Agregar enlaces reales
      instagram: "#" // TODO: Agregar enlaces reales
    }
  ]
}

// Función para generar meta tags dinámicos
export const generateMetaTags = (page = 'home') => {
  const baseConfig = seoConfig.business
  
  const metaTags = {
    home: {
      title: `${baseConfig.name} - Barbería Premium en Ciudad Colón | Cortes de Cabello y Barba`,
      description: `${baseConfig.name} es la barbería premium #1 en Ciudad Colón, San José. Especialistas en cortes de cabello modernos, afeitado clásico, cuidado de barba y tratamientos faciales. ¡Reserva tu cita hoy!`,
      keywords: seoConfig.keywords.join(', ')
    },
    services: {
      title: `Servicios de Barbería en Ciudad Colón - ${baseConfig.name}`,
      description: `Descubre nuestros servicios de barbería premium en Ciudad Colón. Corte de cabello, afeitado clásico, cuidado de barba y más. Reserva tu cita.`,
      keywords: seoConfig.keywords.join(', ')
    },
    contact: {
      title: `Contacto - ${baseConfig.name} | Barbería en Ciudad Colón`,
      description: `Contacta con ${baseConfig.name} en Ciudad Colón. Dirección, teléfono, horarios y formulario de contacto. ¡Reserva tu cita hoy!`,
      keywords: seoConfig.keywords.join(', ')
    }
  }
  
  return metaTags[page] || metaTags.home
}
