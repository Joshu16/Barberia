# Guía Completa: Implementación de Sanity CMS para Proyectos Web

Esta guía documenta el proceso completo y eficiente para implementar Sanity.io como CMS headless en proyectos web estáticos (Vercel, Netlify, etc.), permitiendo que los clientes editen contenido sin tocar código.

---

## 📋 Tabla de Contenidos

1. [Introducción y Conceptos](#introducción-y-conceptos)
2. [Fase 1: Configuración Inicial](#fase-1-configuración-inicial)
3. [Fase 2: Creación de Esquemas](#fase-2-creación-de-esquemas)
4. [Fase 3: Migración de Datos](#fase-3-migración-de-datos)
5. [Fase 4: Integración con React](#fase-4-integración-con-react)
6. [Fase 5: Configuración de Webhooks y Deploy](#fase-5-configuración-de-webhooks-y-deploy)
7. [Mejores Prácticas](#mejores-prácticas)
8. [Troubleshooting](#troubleshooting)

---

## 🎯 Introducción y Conceptos

### ¿Qué es Sanity.io?

Sanity.io es un CMS headless (sin interfaz predefinida) que permite:
- **Gestión de contenido** sin tocar código
- **Almacenamiento de imágenes** optimizado
- **API GraphQL/REST** para consumir datos
- **Panel de administración** personalizable
- **Deploy automático** mediante webhooks

### Arquitectura del Proyecto

```
proyecto/
├── src/                    # Código frontend (React/Vue/etc)
├── sanity/                 # Configuración de Sanity CMS
│   ├── schemas/           # Definición de tipos de contenido
│   ├── scripts/           # Scripts de migración/utilidad
│   └── sanity.config.js   # Configuración principal
└── package.json           # Dependencias del proyecto
```

### Flujo de Trabajo

1. **Desarrollo**: Creas esquemas en Sanity y conectas el frontend
2. **Migración**: Subes datos iniciales (opcional)
3. **Deploy**: Subes el sitio a Vercel/Netlify
4. **Cliente**: Edita contenido desde el panel de Sanity
5. **Actualización**: Webhook dispara rebuild automático

---

## 🚀 Fase 1: Configuración Inicial

### Paso 1.1: Instalar Sanity CLI

```bash
npm install -g @sanity/cli
```

### Paso 1.2: Iniciar Sesión en Sanity

```bash
sanity login
```

Esto abrirá tu navegador para autenticarte.

### Paso 1.3: Crear Proyecto Sanity

**Opción A: Si el directorio `sanity/` no existe:**

```bash
mkdir sanity
cd sanity
sanity init
```

Sigue las instrucciones:
- Selecciona "Create new project"
- Nombre del proyecto: `Tu Proyecto CMS`
- Dataset: `production`
- Template: `Clean project with no predefined schemas`

**Opción B: Si ya tienes un proyecto (extraer projectId):**

Si ya tienes un proyecto en Sanity pero necesitas el `projectId`:

1. Ve a https://www.sanity.io/manage
2. Selecciona tu proyecto
3. Copia el `Project ID` de la configuración
4. Actualiza `sanity/sanity.config.js`:

```javascript
export default defineConfig({
  projectId: 'TU_PROJECT_ID',  // ← Aquí
  dataset: 'production',
  // ...
})
```

### Paso 1.4: Instalar Dependencias

**En el proyecto principal:**
```bash
npm install @sanity/client
```

**En la carpeta sanity:**
```bash
cd sanity
npm install
```

### Paso 1.5: Configurar `sanity.config.js`

```javascript
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Tu Proyecto CMS',

  projectId: 'TU_PROJECT_ID',  // ← Reemplazar
  dataset: 'production',

  plugins: [
    deskTool(),
    visionTool()  // Para probar queries GROQ
  ],

  schema: {
    types: schemaTypes,
  },
})
```

### Paso 1.6: Verificar Instalación (Local)

```bash
cd sanity
npm run dev
```

Deberías ver el panel de Sanity en `http://localhost:3333`

### Paso 1.7: Acceso al Panel de Sanity

El cliente puede acceder al panel de administración desde cualquier lugar:

1. Ve a: **https://www.sanity.io/manage**
2. Inicia sesión con su cuenta de Sanity
3. Selecciona el proyecto
4. Accede al panel de administración directamente desde la web

**Importante:**
- No necesitas desplegar nada, el acceso es directo desde manage.sanity.io
- El cliente puede acceder desde cualquier dispositivo
- Los cambios se guardan automáticamente
- Para desarrollo local, usa `npm run dev` en la carpeta `sanity/`

---

## 📝 Fase 2: Creación de Esquemas

Los esquemas definen los tipos de contenido que el cliente puede editar.

### Estructura de Esquemas

Crea archivos en `sanity/schemas/`:

```
schemas/
├── index.js          # Exporta todos los esquemas
├── service.js        # Ejemplo: Servicios
├── review.js         # Ejemplo: Reseñas
├── galleryImage.js   # Ejemplo: Imágenes de galería
├── teamMember.js     # Ejemplo: Miembros del equipo
└── siteSettings.js   # Configuración global del sitio
```

### Ejemplo 1: Esquema Simple (Service)

**`sanity/schemas/service.js`:**

```javascript
export default {
  name: 'service',
  title: 'Servicio',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Descripción',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'duration',
      title: 'Duración',
      type: 'string',
      description: 'Ejemplo: 45 min, 1 hora',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Imagen',
      type: 'image',
      options: {
        hotspot: true  // Permite recortar imagen
      },
      validation: Rule => Rule.optional()  // Opcional
    },
    {
      name: 'order',
      title: 'Orden',
      type: 'number',
      description: 'Orden de aparición (menor número aparece primero)',
      validation: Rule => Rule.required().integer().min(0)
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'duration',
      media: 'image'
    }
  },
  orderings: [
    {
      title: 'Orden',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}]
    }
  ]
}
```

### Ejemplo 2: Esquema con Array (Review)

**`sanity/schemas/review.js`:**

```javascript
export default {
  name: 'review',
  title: 'Reseña',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nombre del Cliente',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'rating',
      title: 'Calificación',
      type: 'number',
      validation: Rule => Rule.required().integer().min(1).max(5)
    },
    {
      name: 'comment',
      title: 'Comentario',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'date',
      title: 'Fecha',
      type: 'string',
      description: 'Ejemplo: Hace 3 meses',
      validation: Rule => Rule.required()
    },
    {
      name: 'verified',
      title: 'Verificado',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'localGuide',
      title: 'Guía Local',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'order',
      title: 'Orden',
      type: 'number',
      validation: Rule => Rule.required().integer().min(0)
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'comment',
      rating: 'rating'
    },
    prepare({title, subtitle, rating}) {
      return {
        title: `${title} (${rating}⭐)`,
        subtitle: subtitle?.substring(0, 50) + '...'
      }
    }
  }
}
```

### Ejemplo 3: Esquema de Configuración Global (SiteSettings)

**`sanity/schemas/siteSettings.js`:**

```javascript
export default {
  name: 'siteSettings',
  title: 'Configuración del Sitio',
  type: 'document',
  // Solo permitir crear/actualizar, no eliminar
  __experimental_actions: [
    'create',
    'update',
    'publish',
  ],
  fields: [
    {
      name: 'title',
      title: 'Título del Sitio',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'phone',
      title: 'Teléfono',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: Rule => Rule.email()
    },
    {
      name: 'address',
      title: 'Dirección',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'socialMedia',
      title: 'Redes Sociales',
      type: 'object',
      fields: [
        {name: 'facebook', title: 'Facebook URL', type: 'url'},
        {name: 'instagram', title: 'Instagram URL', type: 'url'},
        {name: 'whatsapp', title: 'WhatsApp', type: 'string'},
      ]
    },
    {
      name: 'faq',
      title: 'Preguntas Frecuentes',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {name: 'question', title: 'Pregunta', type: 'string', validation: Rule => Rule.required()},
          {name: 'answer', title: 'Respuesta', type: 'text', validation: Rule => Rule.required()}
        ]
      }]
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Configuración del Sitio'
      }
    }
  }
}
```

### Exportar Esquemas

**`sanity/schemas/index.js`:**

```javascript
import service from './service'
import review from './review'
import galleryImage from './galleryImage'
import teamMember from './teamMember'
import siteSettings from './siteSettings'

export const schemaTypes = [
  service,
  review,
  galleryImage,
  teamMember,
  siteSettings,
]
```

### Tipos de Campos Comunes

| Tipo | Uso | Ejemplo |
|------|-----|---------|
| `string` | Texto corto | Título, nombre |
| `text` | Texto largo | Descripción, comentario |
| `number` | Números | Precio, orden, rating |
| `boolean` | Verdadero/Falso | Verificado, destacado |
| `image` | Imágenes | Foto, logo |
| `url` | URLs | Enlaces a redes sociales |
| `array` | Listas | FAQ, horarios |
| `object` | Objetos anidados | Redes sociales, dirección |

### Validaciones Importantes

```javascript
// Campo requerido
validation: Rule => Rule.required()

// Campo opcional
validation: Rule => Rule.optional()

// Email válido
validation: Rule => Rule.email()

// Número entero entre 1 y 5
validation: Rule => Rule.required().integer().min(1).max(5)

// Texto con longitud mínima
validation: Rule => Rule.required().min(10).max(200)
```

---

## 📦 Fase 3: Migración de Datos

Si tienes datos hardcodeados, puedes migrarlos automáticamente.

### Paso 3.1: Obtener Token de API

1. Ve a https://www.sanity.io/manage
2. Selecciona tu proyecto
3. Ve a **API** > **Tokens**
4. Haz clic en **Add API token**
5. Nombre: "Migración de datos"
6. Permisos: **Editor** (necesita escritura)
7. Copia el token

### Paso 3.2: Crear Script de Migración

**`sanity/scripts/migrate-data.js`:**

```javascript
/**
 * Script de migración de datos a Sanity
 * 
 * Ejecutar: 
 *   $env:SANITY_API_TOKEN="tu_token" node scripts/migrate-data.js
 */

import {createClient} from '@sanity/client'

if (!process.env.SANITY_API_TOKEN) {
  console.error('❌ Error: SANITY_API_TOKEN no está configurado')
  process.exit(1)
}

const client = createClient({
  projectId: 'TU_PROJECT_ID',  // ← Reemplazar
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
})

// Datos a migrar
const services = [
  {
    title: 'Servicio 1',
    description: 'Descripción del servicio',
    duration: '45 min',
    order: 0
  },
  // ... más servicios
]

async function migrateData() {
  console.log('🚀 Iniciando migración...\n')

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
    }

    console.log('\n✅ Migración completada!')
  } catch (error) {
    console.error('❌ Error:', error.message)
    process.exit(1)
  }
}

migrateData()
```

### Paso 3.3: Ejecutar Migración

**Windows PowerShell:**
```powershell
cd sanity
$env:SANITY_API_TOKEN="tu_token_aqui"
node scripts/migrate-data.js
```

**Linux/Mac:**
```bash
cd sanity
SANITY_API_TOKEN=tu_token_aqui node scripts/migrate-data.js
```

### Paso 3.4: Script de Inicialización de Configuración

Para crear el documento inicial de `siteSettings`:

**`sanity/scripts/init-site-settings.js`:**

```javascript
import {createClient} from '@sanity/client'

if (!process.env.SANITY_API_TOKEN) {
  console.error('❌ Error: SANITY_API_TOKEN no está configurado')
  process.exit(1)
}

const client = createClient({
  projectId: 'TU_PROJECT_ID',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
})

const siteSettings = {
  _type: 'siteSettings',
  title: 'Tu Sitio Web',
  phone: '+506 0000 0000',
  email: 'info@tusitio.com',
  address: 'Tu dirección aquí',
  socialMedia: {
    facebook: '',
    instagram: '',
    whatsapp: '+506 0000 0000'
  },
  faq: [
    {
      question: '¿Pregunta ejemplo?',
      answer: 'Respuesta ejemplo'
    }
  ]
}

async function initSiteSettings() {
  try {
    // Verificar si ya existe
    const existing = await client.fetch('*[_type == "siteSettings"][0]')
    
    if (existing) {
      console.log('✅ Ya existe configuración del sitio')
      return
    }

    console.log('📤 Creando configuración inicial...')
    const result = await client.create(siteSettings)
    
    console.log('✅ Configuración creada exitosamente!')
    console.log(`📋 ID: ${result._id}`)
  } catch (error) {
    console.error('❌ Error:', error.message)
    process.exit(1)
  }
}

initSiteSettings()
```

---

## ⚛️ Fase 4: Integración con React

### Paso 4.1: Configurar Cliente Sanity

**`src/lib/sanity.js`:**

```javascript
import {createClient} from '@sanity/client'

export const client = createClient({
  projectId: 'TU_PROJECT_ID',  // ← Reemplazar
  dataset: 'production',
  useCdn: true,  // Usar CDN para mejor rendimiento
  apiVersion: '2024-01-01',
})

// Queries GROQ
export const queries = {
  // Servicios ordenados
  services: `*[_type == "service"] | order(order asc) {
    _id,
    title,
    description,
    duration,
    "imageUrl": image.asset->url,
    order
  }`,

  // Reviews ordenadas
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

  // Configuración del sitio (solo el primero)
  siteSettings: `*[_type == "siteSettings"][0] {
    title,
    phone,
    email,
    address,
    socialMedia {
      facebook,
      instagram,
      whatsapp
    },
    faq
  }`,
}
```

### Paso 4.2: Crear Hook Personalizado

**`src/hooks/useSanityData.js`:**

```javascript
import { useState, useEffect } from 'react'
import { client, queries } from '../lib/sanity'

/**
 * Hook genérico para obtener datos de Sanity
 */
export function useSanityData(queryKey) {
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

        const result = await client.fetch(query)
        setData(result)
      } catch (err) {
        if (process.env.NODE_ENV === 'development') {
          console.error(`Error fetching ${queryKey}:`, err)
        }
        setError(err)
        setData([])  // Retornar array vacío en caso de error
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [queryKey])

  return { data, loading, error }
}

// Hooks específicos
export function useServices() {
  return useSanityData('services')
}

export function useReviews() {
  return useSanityData('reviews')
}

export function useSiteSettings() {
  return useSanityData('siteSettings')
}
```

### Paso 4.3: Usar en Componentes

**`src/components/Services.jsx`:**

```javascript
import { useServices } from '../hooks/useSanityData'
import { LoadingState, EmptyState } from './LoadingState'

const Services = () => {
  const { data: services, loading } = useServices()

  if (loading) {
    return <LoadingState message="Cargando servicios..." />
  }

  if (!services || services.length === 0) {
    return <EmptyState message="No hay servicios disponibles." />
  }

  return (
    <section className="services">
      {services.map((service) => (
        <div key={service._id} className="service-card">
          {service.imageUrl ? (
            <img src={service.imageUrl} alt={service.title} />
          ) : (
            <div className="image-placeholder">Sin imagen</div>
          )}
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <span>{service.duration}</span>
        </div>
      ))}
    </section>
  )
}

export default Services
```

### Paso 4.4: Manejar Imágenes Opcionales

**`src/utils/imageHelpers.js`:**

```javascript
/**
 * Verifica si una URL de imagen es válida
 */
export function isValidImageUrl(url) {
  return url && typeof url === 'string' && url.length > 0
}

/**
 * Obtiene la URL de la imagen o retorna null
 */
export function getImageUrl(image) {
  if (!image) return null
  if (typeof image === 'string') return image
  if (image.asset?.url) return image.asset.url
  return null
}

/**
 * Verifica si hay imagen disponible
 */
export function hasImage(image) {
  return isValidImageUrl(getImageUrl(image))
}
```

**Uso en componentes:**

```javascript
import { getImageUrl, hasImage } from '../utils/imageHelpers'

const ServiceCard = ({ service }) => {
  const imageUrl = getImageUrl(service.image)
  
  return (
    <div>
      {hasImage(service.image) ? (
        <img src={imageUrl} alt={service.title} />
      ) : (
        <div className="image-placeholder">Sin imagen</div>
      )}
    </div>
  )
}
```

### Paso 4.5: Componentes de Estado

**`src/components/LoadingState.jsx`:**

```javascript
import './LoadingState.css'

export function LoadingState({ message = 'Cargando...' }) {
  return (
    <div className="loading-state">
      <div className="spinner"></div>
      <p>{message}</p>
    </div>
  )
}

export function EmptyState({ message = 'No hay contenido disponible.' }) {
  return (
    <div className="empty-state">
      <p>{message}</p>
    </div>
  )
}
```

---

## 🔗 Fase 5: Configuración de Webhooks y Deploy

### Paso 5.1: Configurar CORS en Sanity

1. Ve a https://www.sanity.io/manage
2. Selecciona tu proyecto
3. Ve a **API** > **CORS origins**
4. Agrega:
   - `http://localhost:5173` (desarrollo)
   - `https://tu-dominio.vercel.app` (producción)
   - `https://tu-dominio.com` (dominio final)

### Paso 5.2: Configurar Webhook en Vercel

1. Ve a https://www.sanity.io/manage
2. Selecciona tu proyecto
3. Ve a **API** > **Webhooks**
4. Haz clic en **Create webhook**
5. Configura:
   - **Name**: "Vercel Rebuild"
   - **URL**: `https://api.vercel.com/v1/integrations/deploy/...`
   - **Dataset**: `production`
   - **Trigger on**: `Create`, `Update`, `Delete`
   - **Filter**: `_type == "service" || _type == "review" || _type == "siteSettings"`

**Para obtener la URL de Vercel:**

1. Ve a tu proyecto en Vercel
2. Ve a **Settings** > **Git**
3. Busca **Deploy Hooks**
4. Crea un nuevo hook o copia la URL existente

### Paso 5.3: Configurar Variables de Entorno

En Vercel, agrega variables de entorno (si las necesitas):

- `VITE_SANITY_PROJECT_ID`: Tu project ID
- `VITE_SANITY_DATASET`: `production`

### Paso 5.4: Deploy

```bash
# Build del proyecto
npm run build

# Deploy a Vercel
vercel --prod
```

O conecta tu repositorio Git a Vercel para deploy automático.

### Paso 5.5: Verificar Funcionamiento

1. Edita contenido en Sanity Studio
2. Publica los cambios
3. Verifica que Vercel recibe el webhook
4. Espera el rebuild automático
5. Verifica que los cambios aparecen en producción

---

## ✅ Mejores Prácticas

### 1. Estructura de Esquemas

- **Un esquema por tipo de contenido**: No mezcles conceptos
- **Campos opcionales para imágenes**: Permite agregar imágenes después
- **Campo `order`**: Para controlar el orden de aparición
- **Validaciones claras**: Ayuda al cliente a ingresar datos correctos

### 2. Queries GROQ

- **Usa CDN en producción**: `useCdn: true`
- **Ordena resultados**: `| order(order asc)`
- **Proyecta solo campos necesarios**: Mejora rendimiento
- **Maneja imágenes opcionales**: `"imageUrl": image.asset->url`

### 3. Manejo de Errores

- **Retorna arrays vacíos**: Evita errores en componentes
- **Estados de loading**: Mejora UX
- **Placeholders para imágenes**: Evita espacios vacíos

### 4. Organización de Código

```
src/
├── lib/
│   └── sanity.js          # Cliente y queries
├── hooks/
│   └── useSanityData.js   # Hooks personalizados
├── components/
│   ├── LoadingState.jsx   # Estados de carga
│   └── ...                # Componentes que usan Sanity
└── utils/
    └── imageHelpers.js    # Utilidades para imágenes
```

### 5. Seguridad

- **No expongas tokens**: Los tokens solo en scripts de migración
- **Configura CORS**: Solo permite orígenes conocidos
- **Valida datos**: Usa validaciones en esquemas

### 6. Performance

- **Usa CDN**: `useCdn: true` en producción
- **Cache queries**: React Query puede ayudar
- **Optimiza imágenes**: Sanity lo hace automáticamente

---

## 🔧 Troubleshooting

### Error: CORS Policy

**Síntoma:**
```
Access to XMLHttpRequest blocked by CORS policy
```

**Solución:**
1. Ve a https://www.sanity.io/manage
2. **API** > **CORS origins**
3. Agrega tu dominio (localhost para desarrollo, dominio real para producción)

### Error: Project ID no encontrado

**Síntoma:**
```
Invalid project ID
```

**Solución:**
1. Verifica `sanity.config.js` tiene el `projectId` correcto
2. Verifica `src/lib/sanity.js` tiene el mismo `projectId`
3. Obtén el ID desde https://www.sanity.io/manage

### Error: Token inválido

**Síntoma:**
```
Invalid token
```

**Solución:**
1. Genera un nuevo token desde https://www.sanity.io/manage
2. Verifica que tiene permisos de **Editor**
3. Usa el token solo en scripts de migración (no en el frontend)

### Imágenes no aparecen

**Síntoma:**
Las imágenes no se muestran en el sitio

**Solución:**
1. Verifica que la imagen está publicada en Sanity
2. Verifica la query GROQ incluye `"imageUrl": image.asset->url`
3. Verifica que el campo `image` existe en el esquema
4. Usa placeholders para imágenes opcionales

### Webhook no funciona

**Síntoma:**
Los cambios en Sanity no actualizan el sitio

**Solución:**
1. Verifica que el webhook está activo en Sanity
2. Verifica la URL del webhook en Vercel
3. Revisa los logs de Vercel para ver si recibe el webhook
4. Verifica que el filtro del webhook incluye los tipos correctos

### Datos no aparecen

**Síntoma:**
El sitio muestra "No hay contenido disponible"

**Solución:**
1. Verifica que los documentos están **publicados** en Sanity
2. Verifica que la query GROQ es correcta (usa Vision Tool)
3. Verifica que el `projectId` y `dataset` son correctos
4. Revisa la consola del navegador para errores

---

## 📚 Recursos Adicionales

- **Documentación Sanity**: https://www.sanity.io/docs
- **GROQ Query Language**: https://www.sanity.io/docs/groq
- **Sanity Studio**: https://www.sanity.io/docs/sanity-studio
- **React Integration**: https://www.sanity.io/docs/js-client

---

## 🎉 Conclusión

Con esta guía, puedes implementar Sanity CMS en cualquier proyecto web de forma eficiente y escalable. El cliente podrá editar contenido sin tocar código, y los cambios se reflejarán automáticamente en producción mediante webhooks.

**Flujo final:**
1. ✅ Sanity configurado
2. ✅ Esquemas creados
3. ✅ Datos migrados
4. ✅ Frontend conectado
5. ✅ Webhooks configurados
6. ✅ Deploy en producción

**¡Listo para que el cliente edite contenido!** 🚀

