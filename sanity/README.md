# Sanity CMS - Barbería Excelencia

Este es el CMS (Content Management System) para la barbería, construido con Sanity.io.

## Configuración Inicial

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Autenticarse con Sanity:**
   ```bash
   sanity login
   ```

3. **Crear proyecto en Sanity:**
   ```bash
   sanity init
   ```
   - Selecciona "Create new project"
   - Nombre: "Barbería Excelencia" o similar
   - Dataset: "production"
   - Template: "Clean project with no predefined schemas"

4. **Actualizar `sanity.config.js`:**
   - Copia el `projectId` que te da Sanity
   - Pégalo en `sanity.config.js` donde dice `YOUR_PROJECT_ID`

5. **Iniciar el estudio de Sanity:**
   ```bash
   npm run dev
   ```

## Estructura de Esquemas

- **service**: Servicios de la barbería (cortes, barba, etc.)
- **galleryImage**: Imágenes de la galería
- **review**: Reseñas de clientes
- **teamMember**: Miembros del equipo
- **siteSettings**: Configuración general del sitio

## Próximos Pasos

Después de configurar, podrás:
- Agregar servicios desde el panel de Sanity
- Subir imágenes de la galería
- Gestionar reseñas
- Configurar información general del sitio

