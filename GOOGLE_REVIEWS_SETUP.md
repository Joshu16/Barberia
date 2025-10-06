# Configuración de Reseñas de Google

## Pasos para integrar reseñas reales de Google

### 1. Obtener Google Place ID

1. Ve a [Google My Business](https://business.google.com/)
2. Busca tu negocio o créalo si no existe
3. En la información del negocio, busca el "Place ID"
4. También puedes usar [Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)

### 2. Obtener Google API Key

1. Ve a [Google Cloud Console](https://console.cloud.google.com/)
2. Crea un nuevo proyecto o selecciona uno existente
3. Habilita la **Google Places API**
4. Ve a "Credenciales" y crea una nueva API Key
5. Restringe la API Key solo a la Google Places API por seguridad

### 3. Configurar Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto con:

```env
REACT_APP_GOOGLE_PLACE_ID=tu_place_id_aqui
REACT_APP_GOOGLE_API_KEY=tu_api_key_aqui
```

### 4. Ejemplo de Place ID

Un Place ID se ve así:
```
ChIJN1t_tDeuEmsRUsoyG83frY4
```

### 5. Ejemplo de API Key

Una API Key se ve así:
```
AIzaSyBvOkBw3cL6j1a1b2c3d4e5f6g7h8i9j0k1l
```

## Funcionamiento

- Si tienes las credenciales configuradas, el sistema intentará obtener reseñas reales de Google
- Si no tienes credenciales o hay un error, se mostrarán reseñas de respaldo
- Las reseñas de Google incluyen foto de perfil y badge de Google
- Las reseñas de respaldo son realistas pero no están conectadas a Google

## Seguridad

- **NUNCA** subas tu archivo `.env` a Git
- Restringe tu API Key solo a la Google Places API
- Considera usar restricciones de IP si es posible

## Costos

- Google Places API tiene un límite gratuito de 1000 solicitudes por día
- Después del límite, cobra $0.017 por solicitud
- Para una página web normal, el límite gratuito es más que suficiente
