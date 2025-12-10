import { CollectionConfig } from 'payload'

export const Genres: CollectionConfig = {
  slug: 'genres',
  admin: { useAsTitle: 'name' },
  access: { read: () => true },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'description', label: 'Beskrivelse av sjangeren', type: 'textarea', required: false },
  ],
}
