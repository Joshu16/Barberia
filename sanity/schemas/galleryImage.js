export default {
  name: 'galleryImage',
  title: 'Imagen de Galería',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Imagen',
      type: 'image',
      options: {
        hotspot: true
      },
      // Imagen opcional - puede agregarse después
      validation: Rule => Rule.optional()
    },
    {
      name: 'alt',
      title: 'Texto Alternativo',
      type: 'string',
      description: 'Descripción de la imagen para accesibilidad',
      validation: Rule => Rule.required()
    },
    {
      name: 'order',
      title: 'Orden',
      type: 'number',
      description: 'Orden de aparición en la galería',
      validation: Rule => Rule.required().integer().min(0)
    }
  ],
  preview: {
    select: {
      title: 'alt',
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

