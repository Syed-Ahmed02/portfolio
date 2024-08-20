import type { CollectionConfig } from 'payload'
import { slugField } from '@/fields/slug'
import { HeroSimpleBlock } from '@/blocks/Hero/heroSimple'
import {ArchiveBlock } from '@/blocks/Archive'
export const Page: CollectionConfig = {
  slug: 'pages',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'layout',
      type: 'blocks',
      blocks: [HeroSimpleBlock,ArchiveBlock],
      required: true,
    },

    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    slugField(),
  ],
}
