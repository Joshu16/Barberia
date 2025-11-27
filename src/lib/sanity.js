import {createClient} from '@sanity/client'

export const client = createClient({
  projectId: 'v1g898gw',
  dataset: 'production',
  useCdn: true, // Reactivar CDN
  apiVersion: '2024-01-01',
  // Para desarrollo local, el proxy de Vite manejará CORS
  // En producción, necesitas configurar CORS en Sanity
})

// Queries GROQ
export const queries = {
  // Obtener todos los servicios ordenados
  services: `*[_type == "service"] | order(order asc) {
    _id,
    title,
    description,
    duration,
    "imageUrl": image.asset->url,
    order
  }`,

  // Obtener todas las reviews ordenadas
  reviews: `*[_type == "review"] | order(order asc) {
    _id,
    name,
    rating,
    comment,
    date,
    verified,
    localGuide,
    order
  }`,

  // Obtener todas las imágenes de galería ordenadas
  galleryImages: `*[_type == "galleryImage"] | order(order asc) {
    _id,
    alt,
    "imageUrl": image.asset->url,
    order
  }`,

  // Obtener miembros del equipo
  teamMembers: `*[_type == "teamMember"] | order(isMain desc, order asc) {
    _id,
    name,
    role,
    description,
    specialties,
    isMain,
    requiresBooking,
    "imageUrl": image.asset->url,
    order
  }`,

  // Obtener configuración del sitio
  siteSettings: `*[_type == "siteSettings"][0] {
    title,
    heroTitle,
    heroSubtitle,
    heroDescription,
    heroImage {
      asset-> {
        _id,
        url
      }
    },
    quoteText,
    phone,
    email,
    address,
    googleMapsUrl,
    schedule,
    socialMedia {
      facebook,
      instagram,
      whatsapp,
      whatsappBooking
    },
    faq
  }`,
}

