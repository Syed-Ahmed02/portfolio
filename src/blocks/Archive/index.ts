import type { Block } from 'payload'

import {
    FixedToolbarFeature,
    HeadingFeature,
    InlineToolbarFeature,
    lexicalEditor,
} from '@payloadcms/richtext-lexical'


export const ArchiveBlock: Block = {
    slug: 'archive',
    fields: [
        {
            name: "introContent",
            type: "richText",
            label: "Intro Content",
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
        },
        {
            name: 'type',
            label: 'Type',
            type: 'select',
            options: ["Posts", "Other"],
            defaultValue:"Posts",
            required: true
        },
        {
            label: "Content",
            type: "array",
            name: "content",
            admin: {
                condition: (_, siblingData) => siblingData.type === 'Other',
            },
            fields: [
                {
                    name: "content",
                    type: "richText",
                    label: "Content",
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
                    required: true
                },
                {
                    name: "Media",
                    type: "relationship",
                    relationTo: "media",
                    required: true,
                },
                {
                    name: "Tags",
                    type: "relationship",
                    relationTo: "tags",
                    hasMany: true
                }
            ]
        },
        {
            name: 'Buttons',
            type: 'relationship',
            relationTo: 'buttons',
            hasMany: true,
            maxRows: 2,
        },
        {
            name: 'media',
            type: 'upload',
            relationTo: 'media',
            required: false,
        },


    ],
    interfaceName: 'ArchiveBlock',
}