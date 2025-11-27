// Script de prueba para verificar conexión con Sanity
import { client, queries } from '../lib/sanity'

export async function testSanityConnection() {
  console.log('🔍 Testing Sanity connection...')
  
  try {
    // Probar query simple
    const testQuery = '*[_type == "service"] | order(order asc) { _id, title }'
    const result = await client.fetch(testQuery)
    
    console.log('✅ Connection successful!')
    console.log('📊 Services found:', result.length)
    console.log('📋 Services:', result)
    
    return result
  } catch (error) {
    console.error('❌ Connection failed:', error)
    throw error
  }
}

// Ejecutar en consola del navegador:
// import { testSanityConnection } from './utils/testSanity'
// testSanityConnection()

