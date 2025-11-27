# Guía de Migración de Datos - FASE 2

Este documento explica cómo migrar los datos actuales de la barbería a Sanity.

## Opción 1: Migración Automática (Recomendada)

### Paso 1: Obtener Token de API

1. Ve a https://www.sanity.io/manage
2. Selecciona tu proyecto "Barbería Excelencia"
3. Ve a **API** > **Tokens**
4. Haz clic en **Add API token**
5. Nombre: "Migración de datos"
6. Permisos: **Editor** (necesita permisos de escritura)
7. Copia el token generado

### Paso 2: Ejecutar Script de Migración

**En Windows PowerShell (Recomendado):**
```powershell
cd sanity
$env:SANITY_API_TOKEN="tu_token_aqui"
node scripts/migrate-data.js
```

**En Linux/Mac:**
```bash
cd sanity
SANITY_API_TOKEN=tu_token_aqui node scripts/migrate-data.js
```

### Paso 3: Subir Imágenes Manualmente

Después de ejecutar el script:

1. Abre el panel de Sanity: `npm run dev`
2. Ve a **Servicios**
3. Para cada servicio, edita y sube la imagen correspondiente
4. Ve a **Imágenes de Galería**
5. Para cada entrada, edita y sube la imagen

## Opción 2: Migración Manual (Alternativa)

Si prefieres hacerlo todo manualmente desde el panel:

1. Abre el panel de Sanity: `npm run dev`
2. Ve creando cada servicio, review e imagen de galería manualmente
3. Usa los datos de `src/data/services.js` y `src/data/reviews.js` como referencia

## Datos a Migrar

### Servicios (6)
- Corte Clásico
- Barba Premium
- Corte + Barba
- Afeitado Clásico
- Tratamiento Capilar
- Corte Moderno

### Reviews (9)
- Todas las reseñas de `src/data/reviews.js`

### Imágenes de Galería (8)
- Las 8 imágenes definidas en `src/components/Gallery.jsx`

## Inicializar Configuración del Sitio

Para crear el documento inicial de configuración del sitio:

**En Windows PowerShell:**
```powershell
cd sanity
$env:SANITY_API_TOKEN="tu_token_aqui"
node scripts/init-site-settings.js
```

**En Linux/Mac:**
```bash
cd sanity
SANITY_API_TOKEN=tu_token_aqui node scripts/init-site-settings.js
```

Esto creará el documento "Configuración del Sitio" con datos iniciales que puedes editar desde el panel.

## Verificación

Después de la migración, verifica que:
- ✅ Todos los servicios tienen sus imágenes
- ✅ Todas las reviews están completas
- ✅ Todas las imágenes de galería están subidas
- ✅ Los órdenes están correctos (0, 1, 2, etc.)
- ✅ La configuración del sitio está creada y publicada

