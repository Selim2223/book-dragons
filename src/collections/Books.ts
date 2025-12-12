import { CollectionConfig } from 'payload'
import type { CollectionSlug } from 'payload'

export const Books: CollectionConfig = {
  slug: 'books',

  admin: {
    useAsTitle: 'title',
  },

  access: {
    read: () => true,
  },

  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,

      admin: {
        description: 'Brukes i URL, f eks the-book',
      },
    },

    {
      name: 'author',
      label: 'Forfatter',
      type: 'relationship',
      relationTo: 'authors',
      required: true,
    },

    {
      name: 'genres',
      label: 'Sjangere',
      type: 'relationship',
      relationTo: 'genres',
      hasMany: true,
      required: true,
    },
    {
      name: 'ageGroup',
      label: 'Alder',
      type: 'relationship',
      relationTo: 'age-groups' as CollectionSlug,
      required: true,
    },
    {
      name: 'price',
      label: 'Pris',
      type: 'number',
      required: true,
    },

    {
      name: 'stock',
      label: 'På lager',
      type: 'number',
      required: true,
      defaultValue: 0,
    },
    {
        name: "cover",
        label: "Bilde av boka",
        type: "upload",
        relationTo: "media",
        required: true,
    },
    {
        name: "description",
        label: "Beskriv kort om boken",
        type: "textarea",
        required: true,
    }
  ],
}
