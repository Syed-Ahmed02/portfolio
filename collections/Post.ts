import type { CollectionConfig } from "payload";
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import {
    MetaDescriptionField,
    MetaImageField,
    MetaTitleField,
    OverviewField,
    PreviewField,
  } from '@payloadcms/plugin-seo/fields'
/*
 {
    title: "The Future of React: What's Coming in 2025",
    date: "March 15, 2025",
    excerpt: "Exploring the upcoming features in React and how they will change the way we build web applications.",
    image: "/placeholder.svg?height=200&width=400&text=React+Future",
    category: "React"
  },
*/
export const Posts: CollectionConfig = {
    slug: 'posts',
    access: {
        read: ({ req }) => {
            // If there is a user logged in,
            // let them retrieve all documents
            if (req.user) return true
      
            // If there is no user,
            // restrict the documents that are returned
            // to only those where `_status` is equal to `published`
            return {
              _status: {
                equals: 'published',
              },
            }
        },
    },
    fields: [
      {
        name: 'title',
        type: 'text',
        required: true,
      },
      {
        type:"tabs",
        tabs:[
            {
              fields: [
                {
                  name: 'heroImage',
                  type: 'upload',
                  relationTo: 'media',
                },
                {
                  name: 'content',
                  type: 'richText',
                  
                  required: true,
                },
              ],
              label: 'Content',
            },
            {
                fields: [
                  {
                    name: 'relatedPosts',
                    type: 'relationship',
                    admin: {
                      position: 'sidebar',
                    },
                    filterOptions: ({ id }) => {
                      return {
                        id: {
                          not_in: [id],
                        },
                      }
                    },
                    hasMany: true,
                    relationTo: 'posts',
                  },
                  {
                    name: 'categories',
                    type: 'relationship',
                    admin: {
                      position: 'sidebar',
                    },
                    hasMany: true,
                    relationTo: 'tags',
                  },
                ],
                label: 'Meta',
              },
            {
                name: 'meta',
                label: 'SEO',
                fields: [
                  OverviewField({
                    titlePath: 'meta.title',
                    descriptionPath: 'meta.description',
                    imagePath: 'meta.image',
                  }),
                  MetaTitleField({
                    hasGenerateFn: true,
                  }),
                  MetaImageField({
                    relationTo: 'media',
                  }),
      
                  MetaDescriptionField({}),
                  PreviewField({
                    // if the `generateUrl` function is configured
                    hasGenerateFn: true,
      
                    // field paths to match the target field for data
                    titlePath: 'meta.title',
                    descriptionPath: 'meta.description',
                  }),
                ],
              },
        ]
      },
      {
        name: 'publishedAt',
        type: 'date',
        admin: {
          date: {
            pickerAppearance: 'dayAndTime',
          },
          position: 'sidebar',
        },
        hooks: {
          beforeChange: [
            ({ siblingData, value }) => {
              if (siblingData._status === 'published' && !value) {
                return new Date()
              }
              return value
            },
          ],
        },
      },
      {
        name: 'authors',
        type: 'relationship',
        admin: {
          position: 'sidebar',
        },
        hasMany: true,
        relationTo: 'users',
      },
      {
        name:"slug",
        type:"text",
        admin:{
            position: "sidebar",
        },
      },
      {
        name:"webhook",
        type:"text",
        admin:{
            position:"sidebar"
        }
      }
    ],
    versions:{
        drafts:{
            schedulePublish:true,
        },
        maxPerDoc:50
    
    }
  }