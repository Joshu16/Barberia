/**
 * Script de migración de datos a Sanity
 * 
 * IMPORTANTE: Necesitas un token de API con permisos de escritura
 * Obténlo desde: https://www.sanity.io/manage
 * 
 * Ejecutar: 
 *   SANITY_API_TOKEN=tu_token node scripts/migrate-data.js
 */

import {createClient} from '@sanity/client'

if (!process.env.SANITY_API_TOKEN) {
  console.error('❌ Error: SANITY_API_TOKEN no está configurado')
  console.log('\n📝 Para obtener tu token:')
  console.log('   1. Ve a https://www.sanity.io/manage')
  console.log('   2. Selecciona tu proyecto "Barbería Excelencia"')
  console.log('   3. Ve a API > Tokens')
  console.log('   4. Crea un token con permisos de Editor')
  console.log('   5. Ejecuta: SANITY_API_TOKEN=tu_token node scripts/migrate-data.js\n')
  process.exit(1)
}

const client = createClient({
  projectId: 'v1g898gw',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
})

// Datos de servicios (sin imágenes - se subirán manualmente)
const services = [
  {
    title: 'Corte Clásico',
    description: 'El corte tradicional que nunca pasa de moda. Perfecto para el caballero moderno.',
    duration: '45 min',
    order: 0
  },
  {
    title: 'Barba Premium',
    description: 'Arreglo completo de barba con técnicas profesionales y productos de alta calidad.',
    duration: '30 min',
    order: 1
  },
  {
    title: 'Corte + Barba',
    description: 'Combo completo: corte de cabello y arreglo de barba en una sola sesión.',
    duration: '60 min',
    order: 2
  },
  {
    title: 'Afeitado Clásico',
    description: 'Afeitado tradicional con navaja caliente y productos de primera calidad.',
    duration: '40 min',
    order: 3
  },
  {
    title: 'Tratamiento Capilar',
    description: 'Hidratación y cuidado profundo para el cabello y cuero cabelludo.',
    duration: '50 min',
    order: 4
  },
  {
    title: 'Corte Moderno',
    description: 'Tendencias actuales y cortes innovadores para el caballero contemporáneo.',
    duration: '50 min',
    order: 5
  }
]

// Datos de reviews
const reviews = [
  {
    name: 'Maria Lizano',
    rating: 5,
    comment: 'Excelente atención, Roxana es muy profesional y el ambiente es relajante. Definitivamente volveré.',
    date: 'Hace 3 meses',
    verified: true,
    localGuide: true,
    order: 0
  },
  {
    name: 'Verónica Flores',
    rating: 5,
    comment: 'Un lugar lindo y tranquilo, genial para venir en familia! Excelente servicio al cliente.',
    date: 'Hace 2 años',
    verified: true,
    localGuide: false,
    order: 1
  },
  {
    name: 'Sergio Monge',
    rating: 5,
    comment: 'Precio aceptable, calidad buena, técnica buena, bonito local. Usa navajilla larga y no los dedos, lo cual para mi es primordial.',
    date: 'Hace 6 años',
    verified: true,
    localGuide: true,
    order: 2
  },
  {
    name: 'Marconey Arguedas',
    rating: 5,
    comment: 'Roxana es excelente. Te puede ayudar con todo.',
    date: 'Hace 6 años',
    verified: true,
    localGuide: false,
    order: 3
  },
  {
    name: 'Irela Rocha',
    rating: 5,
    comment: 'Excelente servicio, muy recomendado para cualquier ocasión.',
    date: 'Hace 2 años',
    verified: true,
    localGuide: false,
    order: 4
  },
  {
    name: 'Alejandro José Morales León',
    rating: 5,
    comment: 'Excelente servicio, ambiente profesional y cortes impecables.',
    date: 'Hace 4 años',
    verified: true,
    localGuide: false,
    order: 5
  },
  {
    name: 'Cesar Jimenez',
    rating: 5,
    comment: 'On Vogue - La mejor experiencia de barbería que he tenido.',
    date: 'Hace 7 años',
    verified: true,
    localGuide: true,
    order: 6
  },
  {
    name: 'ultra x el ser mas poderoso',
    rating: 5,
    comment: 'La mejor peluquería de la zona, servicio excepcional.',
    date: 'Hace 6 años',
    verified: true,
    localGuide: true,
    order: 7
  },
  {
    name: 'Luis R Cordoba',
    rating: 5,
    comment: 'Recomendado al 100%, Roxana es una profesional excepcional.',
    date: 'Hace 6 años',
    verified: true,
    localGuide: true,
    order: 8
  }
]

// Datos de galería (solo metadatos - imágenes se subirán manualmente)
const galleryImages = [
  { alt: 'Corte clásico', order: 0 },
  { alt: 'Barba premium', order: 1 },
  { alt: 'Corte moderno', order: 2 },
  { alt: 'Afeitado clásico', order: 3 },
  { alt: 'Tratamiento capilar', order: 4 },
  { alt: 'Corte + Barba', order: 5 },
  { alt: 'Estilo premium', order: 6 },
  { alt: 'Experiencia completa', order: 7 }
]

async function migrateData() {
  console.log('🚀 Iniciando migración de datos a Sanity...\n')

  try {
    // Migrar servicios
    console.log('📦 Migrando servicios...')
    for (const service of services) {
      const serviceDoc = {
        _type: 'service',
        ...service
      }
      
      const result = await client.create(serviceDoc)
      console.log(`  ✓ Creado: ${service.title} (${result._id})`)
      console.log(`    → Sube la imagen desde el panel de Sanity`)
    }

    // Migrar reviews
    console.log('\n⭐ Migrando reviews...')
    for (const review of reviews) {
      const reviewDoc = {
        _type: 'review',
        ...review
      }
      
      const result = await client.create(reviewDoc)
      console.log(`  ✓ Creado: ${review.name} (${result._id})`)
    }

    // Migrar imágenes de galería (solo metadatos)
    console.log('\n🖼️  Creando entradas de galería...')
    for (const img of galleryImages) {
      const galleryDoc = {
        _type: 'galleryImage',
        ...img
      }
      
      const result = await client.create(galleryDoc)
      console.log(`  ✓ Creado: ${img.alt} (${result._id})`)
      console.log(`    → Sube la imagen desde el panel de Sanity`)
    }

    console.log('\n✅ Migración de datos completada!')
    console.log('\n📝 Próximos pasos:')
    console.log('   1. Ve al panel de Sanity (http://localhost:3333)')
    console.log('   2. Para cada servicio: edita y sube la imagen correspondiente')
    console.log('   3. Para cada imagen de galería: edita y sube la imagen')
    console.log('   4. Verifica que todos los datos se vean correctamente')

  } catch (error) {
    console.error('❌ Error durante la migración:', error.message)
    if (error.response) {
      console.error('   Detalles:', JSON.stringify(error.response.body, null, 2))
    }
    process.exit(1)
  }
}

// Ejecutar migración
migrateData()
