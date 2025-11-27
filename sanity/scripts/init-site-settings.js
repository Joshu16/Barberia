/**
 * Script para inicializar la configuración del sitio en Sanity
 * 
 * IMPORTANTE: Necesitas un token de API con permisos de escritura
 * Obténlo desde: https://www.sanity.io/manage
 * 
 * Ejecutar: 
 *   SANITY_API_TOKEN=tu_token node scripts/init-site-settings.js
 */

import {createClient} from '@sanity/client'

if (!process.env.SANITY_API_TOKEN) {
  console.error('❌ Error: SANITY_API_TOKEN no está configurado')
  console.log('\n📝 Para obtener tu token:')
  console.log('   1. Ve a https://www.sanity.io/manage')
  console.log('   2. Selecciona tu proyecto "Barbería Excelencia"')
  console.log('   3. Ve a API > Tokens')
  console.log('   4. Crea un token con permisos de Editor')
  console.log('   5. Ejecuta: SANITY_API_TOKEN=tu_token node scripts/init-site-settings.js\n')
  process.exit(1)
}

const client = createClient({
  projectId: 'v1g898gw',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
})

// Datos iniciales de configuración del sitio
const siteSettings = {
  _type: 'siteSettings',
  title: 'Barbería Roxana',
  heroTitle: 'Tu Estilo, Nuestra Pasión',
  heroSubtitle: 'Barbería Profesional',
  heroDescription: 'Especialistas en cortes de cabello y arreglo de barba. Ofrecemos servicios premium con la más alta calidad y atención personalizada.',
  quoteText: 'El estilo no es solo cómo te ves, es cómo te sientes',
  phone: '+506 8382 3505',
  email: 'info@barberiaroxana.com',
  address: 'Barberia Roxana, WQ74+RVR, Av. Central, San José, Cd Colón',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Barberia+Roxana+WQ74%2BRVR+Av.+Central+San+José+Cd+Colón',
  schedule: [
    { day: 'Lunes - Viernes', hours: '9:00 AM - 7:00 PM' },
    { day: 'Sábados', hours: '8:00 AM - 6:00 PM' },
    { day: 'Domingos', hours: '10:00 AM - 4:00 PM' }
  ],
  socialMedia: {
    facebook: '',
    instagram: '',
    whatsapp: '+506 8382 3505',
    whatsappBooking: '+506 8382 3505'
  },
  faq: [
    {
      question: '¿Cuáles son los horarios de atención?',
      answer: 'Nuestro horario es de lunes a sábado de 9:00 AM a 7:00 PM. Los domingos estamos cerrados para que nuestro equipo pueda descansar y estar al 100% para la próxima semana.'
    },
    {
      question: '¿Necesito agendar una cita o puedo llegar sin cita?',
      answer: 'Recomendamos agendar tu cita con anticipación para garantizar tu lugar. Aunque aceptamos clientes sin cita, el tiempo de espera puede variar según la disponibilidad del momento.'
    },
    {
      question: '¿Qué servicios ofrecen?',
      answer: 'Ofrecemos cortes de cabello clásicos y modernos, arreglo de barba, tratamientos faciales, servicios de grooming premium, y productos especializados para el cuidado personal masculino.'
    },
    {
      question: '¿Cuánto tiempo dura una sesión promedio?',
      answer: 'Un corte de cabello estándar toma entre 30-45 minutos, mientras que un servicio completo con barba puede durar hasta 60 minutos. Esto nos permite dedicar el tiempo necesario para lograr la perfección.'
    },
    {
      question: '¿Aceptan pagos con tarjeta?',
      answer: 'Sí, aceptamos efectivo, tarjetas de débito y crédito, y también transferencias bancarias. Nuestro objetivo es hacer que tu experiencia sea lo más cómoda posible.'
    },
    {
      question: '¿Tienen productos para la venta?',
      answer: 'Sí, contamos con una selección cuidadosa de productos premium para el cuidado del cabello y la barba, incluyendo pomadas, aceites, champús especializados y herramientas de grooming.'
    }
  ]
}

async function initSiteSettings() {
  try {
    console.log('🔍 Verificando si ya existe configuración del sitio...')
    
    // Verificar si ya existe
    const existing = await client.fetch('*[_type == "siteSettings"][0]')
    
    if (existing) {
      console.log('✅ Ya existe una configuración del sitio')
      console.log('📝 Puedes editarla desde el panel de Sanity')
      return
    }

    console.log('📤 Creando configuración inicial del sitio...')
    
    const result = await client.create(siteSettings)
    
    console.log('✅ Configuración del sitio creada exitosamente!')
    console.log(`📋 ID del documento: ${result._id}`)
    console.log('\n📝 Próximos pasos:')
    console.log('   1. Ve al panel de Sanity (npm run dev en la carpeta sanity)')
    console.log('   2. Busca "Configuración del Sitio"')
    console.log('   3. Edita los campos según necesites')
    console.log('   4. Guarda y publica los cambios\n')
    
  } catch (error) {
    console.error('❌ Error al crear configuración:', error.message)
    if (error.response) {
      console.error('Detalles:', error.response.body)
    }
    process.exit(1)
  }
}

initSiteSettings()

