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
            name: "title",
            label: "Title",
            type: "text",
            required: true
        },
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
            defaultValue: "Posts",
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
                    name: "Tags",
                    type: "relationship",
                    relationTo: "tags",
                    hasMany: true
                },
                {
                    name: "LinkTo",
                    type: "text",
                    label: "Link To",
                    required: false
                }

            ]
        },
        {
            name: 'populateBy',
            type: 'select',
            defaultValue: 'collection',
            admin: {
                condition: (_, siblingData) => siblingData.type === 'Posts',
            },
            options: [
                {   
                    label: 'Collection',
                    value: 'collection',
                },
                {
                    label: 'Individual Selection',
                    value: 'selection',
                },
            ],
        },
        {
            name: 'relationTo',
            type: 'select',
            admin: {
                condition: (_, siblingData) => siblingData.populateBy === 'collection',
            },
            defaultValue: 'posts',
            label: 'Collections To Show',
            options: [
                {
                    label: 'Posts',
                    value: 'posts',
                },
            ],
        },
        {
            name: 'tags',
            type: 'relationship',
            admin: {
                condition: (_, siblingData) => siblingData.populateBy === 'collection',
            },
            hasMany: true,
            label: 'Tags to filter by',
            relationTo: 'tags',
        },
        {
            name: 'limit',
            type: 'number',
            admin: {
                condition: (_, siblingData) => siblingData.populateBy === 'collection',
                step: 1,
            },
            defaultValue: 10,
            label: 'Limit',
        },
        {
            name: 'selectedDocs',
            type: 'relationship',
            admin: {
                condition: (_, siblingData) => siblingData.populateBy === 'selection',
            },
            hasMany: true,
            label: 'Selection',
            relationTo: ['posts'],
        },
        {
            name: "Media",
            type: "relationship",
            relationTo: "media",
            required: true,
        },
    ],




    interfaceName: 'ArchiveBlock',
}