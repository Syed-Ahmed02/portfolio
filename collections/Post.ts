import type { CollectionConfig } from "payload";
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import {
    MetaDescriptionField,
    MetaImageField,
    MetaTitleField,
    OverviewField,
    PreviewField,
  } from '@payloadcms/plugin-seo/fields'

  import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

  import { convertLexicalToPlaintext } from '@payloadcms/richtext-lexical/plaintext'
  
  // Your richtext data here
 


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
        name:"description",
        type:"text",
        label:"Short Description of Blog Post",
        maxLength:200,
        required:true
      },
      {
        type:"tabs",
        tabs:[
            {
              fields: [
                {
                  name:"heroImage",
                  type:"upload",
                  relationTo:"media",
                  filterOptions:{
                      mimeType: {contains:'image'}
                  },
                  required:true,
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
        required:true,
      },
      {
        name:"webhook",
        type:"text",
        admin:{
            position:"sidebar"
        },
        hooks:{
          afterChange:[
            async ({ data }) => {
              if(data && data._status === "published") {
                const webhookURL = data.webhook;
               
                if (webhookURL) {
                  try {
                    const lexicalData: SerializedEditorState = data.content

                
                    const plaintext = convertLexicalToPlaintext( {data:lexicalData} )
                    await fetch(webhookURL, {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ postId: data.id, title: data.title, postContent:plaintext, postDescription: data.description})
                    });
                    console.log(`Webhook triggered for post: ${data.title}`);
                  } catch (error) {
                    console.error("Error triggering webhook:", error);
                  }
                }
              }
            }
          ]
        },
      }
    ],
    versions:{
        drafts:{
            schedulePublish:true,
        },
        maxPerDoc:50
    
    }
  }