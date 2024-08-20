import type { CollectionConfig } from 'payload'

export const Tags: CollectionConfig = {
  slug: 'tags',
  access: {
    read: () => true,
  },
  admin:{
    hidden:true
  },
  fields: [
    {
      name: 'tag',
      type: 'text',
      required: true,
    },
    {
        name: 'variant',
        type: 'select',
        options: [ 'destructive', 'outline', 'secondary', 'ghost', 'link', 'default'],
        required: true,
        defaultValue: 'default',
    },
    {
        name: 'colour',
        type: 'select',
        options: [ "primary","secondary","accent","foreground"],
        required: true,
        defaultValue: 'primary',
    },
  ],

}
