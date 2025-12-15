import { CollectionConfig } from 'payload'

export const Orders: CollectionConfig = {
  slug: 'orders',

  admin: {
    useAsTitle: 'customerName',
    defaultColumns: ['customerName', 'createdAt', 'status'],
  },

  access: {
    read: () => true,
    create: () => true,
  },

  fields: [
    {
      name: 'customerName',
      label: 'Navn',
      type: "text",
      required: true,
    },
    {
        name: "customerEmail",
        label: "E-post",
        type: "text",
        required: true,
    },

    {
        name: "customerPhone",
        label: "Telefon",
        type: "text",
        required: true,
    },
    {
        name: "pickupNote",
        label: "Ønsket hentetid",
        type: "text",
        required: false,
    },

    { 
        name: "status",
        type: "select",
        required: true, 
        defaultValue: "new",

        options: [
            {label: "Ny bestilling", value: "new"},
            {label: "Klar til henting", value: "ready"},
            {label: "Hentet", value: "pickedUp"},
        ],
    },

    {
        name: "items",
        label: "Bestilte bøker",
        type: "array",
        fields: [
        {
              name: "book",
            label: "Bok",
            type: "relationship",
            relationTo: "books",
            required: true,
        },

    {

        name: "quantity",
        label: "Antall",
        type: "number",
        required: true,
        defaultValue: 1
    }
        ]
    }
  ],
}
