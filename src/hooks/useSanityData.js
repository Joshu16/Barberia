import { useState, useEffect } from 'react'
import { client, queries } from '../lib/sanity'

/**
 * Hook para obtener datos de Sanity
 * @param {string} queryKey - Clave de la query (services, reviews, etc.)
 * @param {object} options - Opciones adicionales
 * @returns {object} { data, loading, error }
 */
export function useSanityData(queryKey, options = {}) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)
        
        const query = queries[queryKey]
        if (!query) {
          throw new Error(`Query "${queryKey}" no encontrada`)
        }

        console.log(`📤 Fetching ${queryKey}...`)
        const result = await client.fetch(query)
        console.log(`✅ ${queryKey} loaded:`, result?.length || (result ? 1 : 0), 'items')
        if (result && result.length > 0) {
          console.log(`📋 First item:`, result[0])
        }
        setData(result)
      } catch (err) {
        console.error(`❌ Error fetching ${queryKey}:`, err)
        console.error('Error details:', {
          message: err.message,
          statusCode: err.statusCode,
          response: err.response
        })
        setError(err)
        // En caso de error, retornar datos vacíos en lugar de null
        setData([])
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [queryKey])

  return { data, loading, error }
}

/**
 * Hook específico para servicios
 */
export function useServices() {
  return useSanityData('services')
}

/**
 * Hook específico para reviews
 */
export function useReviews() {
  return useSanityData('reviews')
}

/**
 * Hook específico para imágenes de galería
 */
export function useGalleryImages() {
  return useSanityData('galleryImages')
}

/**
 * Hook específico para miembros del equipo
 */
export function useTeamMembers() {
  return useSanityData('teamMembers')
}

/**
 * Hook específico para configuración del sitio
 */
export function useSiteSettings() {
  return useSanityData('siteSettings')
}

