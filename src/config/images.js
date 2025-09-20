// Configuración de imágenes para Barbería Excelencia
// Solo las 6 imágenes específicas que el cliente quiere usar

export const barberiaImages = {
  // 1. Corte de cabello arreglo de barba - FUNCIONA
  corteBarba: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=400&h=300&fit=crop&q=80',
  
  // 2. La de la silla - FUNCIONA
  silla: 'https://images.unsplash.com/photo-1503951914875-452162b0f3d1?w=400&h=300&fit=crop&q=80',
  
  // 3. La de fondo blanco - FUNCIONA
  fondoBlanco: 'https://images.unsplash.com/photo-1621605815971-fa8b7fc8223d?w=400&h=300&fit=crop&q=80',
  
  // 4. La del negrito sonriente - FUNCIONA
  negritoSonriente: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop&q=80',
  
  // 5. La de las brochas - FUNCIONA
  brochas: 'https://images.unsplash.com/photo-1594736797933-d0c2b0a0b0a0?w=400&h=300&fit=crop&q=80',
  
  // 6. Carlos Rodriguez - FUNCIONA
  carlosRodriguez: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=80',
  
  // 7. La de te gustaría unirte - FUNCIONA
  unirseEquipo: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=400&fit=crop&q=80'
}

// Array de imágenes para usar en carruseles
export const imageArray = [
  barberiaImages.corteBarba,
  barberiaImages.silla,
  barberiaImages.fondoBlanco,
  barberiaImages.negritoSonriente,
  barberiaImages.brochas,
  barberiaImages.carlosRodriguez,
  barberiaImages.unirseEquipo
]

// Imágenes para diferentes secciones - SOLO LAS QUE FUNCIONAN
export const sectionImages = {
  hero: barberiaImages.corteBarba,    // Hero con la imagen original (corte de cabello arreglo de barba)
  services: [
    barberiaImages.corteBarba,        // 1. Corte de Cabello
    barberiaImages.corteBarba,        // 2. Afeitado Clásico
    barberiaImages.corteBarba,        // 3. Corte + Afeitado
    barberiaImages.corteBarba,        // 4. Arreglo de Barba
    barberiaImages.corteBarba         // 5. Tratamiento Facial
  ],
  gallery: [
    barberiaImages.corteBarba,        // 1. Corte de cabello y arreglo de barba
    barberiaImages.corteBarba,        // 2. Corte de cabello y arreglo de barba
    barberiaImages.corteBarba,        // 3. Corte de cabello y arreglo de barba
    barberiaImages.corteBarba,        // 4. Corte de cabello y arreglo de barba
    barberiaImages.corteBarba,        // 5. Corte de cabello y arreglo de barba
    barberiaImages.corteBarba,        // 6. Corte de cabello y arreglo de barba
    barberiaImages.unirseEquipo       // 7. Únete a nuestro equipo (se queda igual)
  ],
  team: [
    barberiaImages.carlosRodriguez,   // 1. Carlos Rodriguez (Barbero Maestro)
    barberiaImages.carlosRodriguez,   // 2. María González
    barberiaImages.carlosRodriguez    // 3. Juan Pérez
  ],
  recruitment: barberiaImages.unirseEquipo  // Se queda igual
}
