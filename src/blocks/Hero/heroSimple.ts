import type {Block} from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
  BlocksFeature
} from '@payloadcms/richtext-lexical'
import { Code } from '../Code'

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
            BlocksFeature({ blocks: [ Code] }),
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