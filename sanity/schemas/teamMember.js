export default {
  name: 'teamMember',
  title: 'Miembro del Equipo',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nombre',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'role',
      title: 'Rol',
      type: 'string',
      description: 'Ejemplo: Barbera Principal, Barbero',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Foto',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Descripción',
      type: 'text',
      description: 'Biografía o descripción del miembro'
    },
    {
      name: 'specialties',
      title: 'Especialidades',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Lista de especialidades (ej: Cortes Clásicos, Barba Premium)'
    },
    {
      name: 'isMain',
      title: 'Barbero Principal',
      type: 'boolean',
      description: 'Marcar si es el barbero principal',
      initialValue: false
    },
    {
      name: 'requiresBooking',
      title: 'Requiere Agendar',
      type: 'boolean',
      description: 'Si requiere cita previa obligatoria',
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
      subtitle: 'role',
      media: 'image'
    }
  },
  orderings: [
    {
      title: 'Principal primero',
      name: 'mainFirst',
      by: [{field: 'isMain', direction: 'desc'}, {field: 'order', direction: 'asc'}]
    }
  ]
}

