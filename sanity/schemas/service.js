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
        hotspot: true
      },
      validation: Rule => Rule.required()
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

