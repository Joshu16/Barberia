import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Barbería Excelencia CMS',

  projectId: 'v1g898gw',
  dataset: 'production',

  plugins: [
    deskTool(),
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
})

