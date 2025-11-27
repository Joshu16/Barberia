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
      validation: Rule => Rule.required().min(1).max(5).integer()
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
      description: 'Ejemplo: "Hace 3 meses", "Hace 2 años"',
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
      description: 'Orden de aparición',
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
      const stars = '⭐'.repeat(rating || 0)
      return {
        title: `${title} ${stars}`,
        subtitle: subtitle?.substring(0, 60) + '...'
      }
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


