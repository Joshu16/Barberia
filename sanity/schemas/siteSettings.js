export default {
  name: 'siteSettings',
  title: 'Configuración del Sitio',
  type: 'document',
  __experimental_actions: [
    // 'create',
    'update',
    // 'delete',
    'publish',
  ],
  fields: [
    {
      name: 'title',
      title: 'Título del Sitio',
      type: 'string',
      description: 'Título principal de la barbería',
      validation: Rule => Rule.required()
    },
    {
      name: 'heroTitle',
      title: 'Título del Hero',
      type: 'string',
      description: 'Título grande en la sección principal',
      validation: Rule => Rule.required()
    },
    {
      name: 'heroSubtitle',
      title: 'Subtítulo del Hero',
      type: 'string',
      description: 'Subtítulo en la sección principal'
    },
    {
      name: 'heroDescription',
      title: 'Descripción del Hero',
      type: 'text',
      description: 'Texto descriptivo en la sección principal'
    },
    {
      name: 'heroImage',
      title: 'Imagen del Hero',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'quoteText',
      title: 'Texto de la Cita',
      type: 'string',
      description: 'Texto que aparece en la sección de cita'
    },
    {
      name: 'phone',
      title: 'Teléfono',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: Rule => Rule.email()
    },
    {
      name: 'address',
      title: 'Dirección',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'googleMapsUrl',
      title: 'URL de Google Maps',
      type: 'url'
    },
    {
      name: 'schedule',
      title: 'Horarios',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {name: 'day', title: 'Día', type: 'string', validation: Rule => Rule.required()},
          {name: 'hours', title: 'Horas', type: 'string', validation: Rule => Rule.required()}
        ]
      }]
    },
    {
      name: 'socialMedia',
      title: 'Redes Sociales',
      type: 'object',
      fields: [
        {name: 'facebook', title: 'Facebook URL', type: 'url'},
        {name: 'instagram', title: 'Instagram URL', type: 'url'},
        {name: 'whatsapp', title: 'WhatsApp', type: 'string'}
      ]
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Configuración del Sitio'
      }
    }
  }
}

