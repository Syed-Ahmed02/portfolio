import type { Field } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import HeroSimple from '@/components/sections/HeroSimple'
export const hero: Field = {
  name: 'hero',
  type: 'group',
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'heroWithImage',
      label: 'Type',
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'Hero with Background',
          value: 'heroWithBackground',
        },
        {
          label: 'Hero with Image',
          value: 'heroWithImage',
        },
        {
          label: 'Hero with Text',
          value: 'heroWithText',
        },
      ],
      required: true,
    },

    {
      name: 'richText',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: false,
    },
    
    {
      name: 'media',
      type: 'upload',
      admin: {
        condition: (_, { type } = {}) => ['heroWithImage', 'heroWithBackground'].includes(type),
      },
      relationTo: 'media',
      required: true,
    },
    {
      name: 'myCustomUIField', // required
      type: 'ui', // required
      admin: {
        condition: (_, { type } = {}) => ['heroWithBackground'].includes(type),
      },
      
    },
   
  ],
  label: false,
}