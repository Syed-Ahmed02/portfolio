import type { CollectionConfig } from "payload";
import { lexicalEditor } from '@payloadcms/richtext-lexical'

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
                  editor: lexicalEditor(),
                  required: true,
                },
              ],
              label: 'Content',
            },
        
        ]
      }
    ],
    versions:{
        drafts:{
            schedulePublish:true,
        },
        maxPerDoc:50
    
    }
  }