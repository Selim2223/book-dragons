import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },

  upload: {
    staticDir: 'media',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 200,
        height: 300,
        position: 'centre',
      },

      {
        name: 'card',
        width: 400,
        height: 600,
        position: 'centre',
      },
    ],

    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
  },

  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
}
//glemete sub-issues, men gjort etterpå