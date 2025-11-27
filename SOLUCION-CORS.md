# Solución para Error CORS

## Problema
Las peticiones desde `http://localhost:5173` están siendo bloqueadas por CORS.

## Solución: Configurar CORS en Sanity

### Pasos:

1. **Ve a Sanity Manage:**
   - Abre: https://www.sanity.io/manage
   - Inicia sesión si es necesario

2. **Selecciona tu proyecto:**
   - Busca "Barbería Excelencia" o el proyecto con ID `v1g898gw`
   - Haz clic en él

3. **Configura CORS:**
   - En el menú lateral, ve a **API** (o busca "CORS")
   - Busca la sección **CORS origins** o **Allowed origins**
   - Haz clic en **Add CORS origin** o **Add origin**

4. **Agrega el origen:**
   - **Origin URL**: `http://localhost:5173`
   - **Allow credentials**: ✅ (marcado si está disponible)
   - Haz clic en **Save** o **Add**

5. **Para producción (después):**
   - También agrega tu dominio de Vercel cuando lo despliegues
   - Ejemplo: `https://tu-dominio.vercel.app`

### Verificación

Después de configurar CORS:
1. Espera 1-2 minutos (puede tardar en propagarse)
2. Recarga la página (`Ctrl+R` o `F5`)
3. Deberías ver los datos cargando correctamente

### Si no encuentras la opción CORS:

Algunos proyectos de Sanity tienen CORS habilitado por defecto. Si no ves la opción:
- Verifica que el proyecto esté en modo público (no privado)
- Contacta con Sanity support o revisa la documentación

