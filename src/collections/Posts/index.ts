import type { CollectionConfig } from 'payload'
import { slugField } from '@/fields/slug'
import {
    FixedToolbarFeature,
    HeadingFeature,
    InlineToolbarFeature,
    lexicalEditor,
    BlocksFeature
} from '@payloadcms/richtext-lexical'
import { Code } from '@/blocks/Code'
export const Posts: CollectionConfig = {
    slug: 'posts',
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'headline',
            type: 'text',
            required: true,
            maxLength: 250,

        },
        {
            name: "headerImage",
            label: "Header Image",
            type: "upload",
            relationTo: "media",
        },
        {
            name: "author",
            type: "relationship",
            relationTo: "users",
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'content',
            required: true,
            type: 'richText',
            editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                    return [
                        ...rootFeatures,
                        HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                        FixedToolbarFeature(),
                        InlineToolbarFeature(),
                        BlocksFeature({ blocks: [Code] }),
                    ]
                },
            }),
        },
        {
            name: "tag",
            type: "relationship",
            relationTo: "tags",
            hasMany: true,
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
