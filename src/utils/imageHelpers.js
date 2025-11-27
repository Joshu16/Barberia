/**
 * Helper para validar y obtener URLs de imágenes de Sanity
 */

/**
 * Valida si una URL de imagen es válida
 * @param {string|null|undefined} imageUrl - URL de la imagen
 * @returns {boolean} true si la imagen es válida
 */
export function isValidImageUrl(imageUrl) {
  return imageUrl && typeof imageUrl === 'string' && imageUrl.trim() !== '';
}

/**
 * Obtiene la URL de una imagen desde un objeto de Sanity
 * @param {object} item - Objeto de Sanity que puede contener imageUrl o image.asset.url
 * @returns {string|null} URL de la imagen o null si no existe
 */
export function getImageUrl(item) {
  if (!item) return null;
  return item.imageUrl || item.image?.asset?.url || null;
}

/**
 * Verifica si un item tiene una imagen válida
 * @param {object} item - Objeto de Sanity
 * @returns {boolean} true si tiene imagen válida
 */
export function hasImage(item) {
  const imageUrl = getImageUrl(item);
  return isValidImageUrl(imageUrl);
}



