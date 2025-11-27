/**
 * Script para remover el campo 'price' de los servicios existentes en Sanity
 * 
 * Ejecutar:
 *   $env:SANITY_API_TOKEN="tu_token" node scripts/remove-prices.js
 */

import {createClient} from '@sanity/client'

if (!process.env.SANITY_API_TOKEN) {
  console.error('❌ Error: SANITY_API_TOKEN no está configurado')
  process.exit(1)
}

const client = createClient({
  projectId: 'v1g898gw',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
})

async function removePrices() {
  console.log('🔧 Removiendo campo "price" de los servicios...\n')

  try {
    // Obtener todos los servicios
    const services = await client.fetch('*[_type == "service"]')
    
    console.log(`📦 Encontrados ${services.length} servicios\n`)

    // Actualizar cada servicio removiendo el campo price
    for (const service of services) {
      const {price, ...serviceWithoutPrice} = service
      
      await client
        .patch(service._id)
        .unset(['price'])
        .commit()
      
      console.log(`  ✓ Actualizado: ${service.title}`)
    }

    console.log('\n✅ Campo "price" removido de todos los servicios!')

  } catch (error) {
    console.error('❌ Error:', error.message)
    if (error.response) {
      console.error('   Detalles:', JSON.stringify(error.response.body, null, 2))
    }
    process.exit(1)
  }
}

removePrices()

