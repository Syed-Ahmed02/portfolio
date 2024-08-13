import type {Block} from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const HeroSimpleBlock: Block = {
  slug: 'hero-simple',
  fields: [
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
      required:true,
    },    
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },

  ],
  interfaceName: 'HeroSimpleBlock',
}