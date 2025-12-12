import { CollectionConfig } from 'payload'

export const AgeGroups: CollectionConfig = {
  slug: 'age-groups',

  admin: {
    useAsTitle: 'name',
  },

  access: {
    read: () => true,
  },

  fields: [
    {
      name: 'name',
      label: 'Alder',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Kort beskrivelse',
      type: 'text',
      required: true,
    },
  ],
}
