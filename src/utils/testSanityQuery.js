// Script de prueba para verificar conexión con Sanity
import { client } from '../lib/sanity'

export async function testSanityQuery() {
  console.log('🔍 Testing Sanity connection...')
  console.log('Project ID: v1g898gw')
  console.log('Dataset: production')
  
  try {
    // Query muy simple para probar
    const simpleQuery = '*[_type == "service"]'
    console.log('📤 Sending query:', simpleQuery)
    
    const result = await client.fetch(simpleQuery)
    
    console.log('✅ Connection successful!')
    console.log('📊 Services found:', result.length)
    console.log('📋 First service:', result[0])
    
    return result
  } catch (error) {
    console.error('❌ Connection failed:', error)
    console.error('Error message:', error.message)
    console.error('Error status:', error.statusCode)
    if (error.response) {
      console.error('Error response:', error.response)
    }
    throw error
  }
}

// Para usar en la consola del navegador:
// import { testSanityQuery } from './utils/testSanityQuery'
// testSanityQuery()

