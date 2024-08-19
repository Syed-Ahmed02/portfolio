import type { CollectionConfig } from 'payload'

export const Buttons: CollectionConfig = {
    slug: 'buttons',
    admin:{
        hidden:true
    },
    fields: [
        {
            name: 'text',
            maxLength:150,
            type: 'text',
            required: true,
        },
        {
            name: 'link',
            type: 'text',
            required: true,
        },
        {
            name: 'variant',
            type: 'select',
            options: [ 'destructive', 'outline', 'secondary', 'ghost', 'link', 'default'],
            required: true,
            defaultValue: 'default',
        },
        {
            type:'checkbox',
            name:"openInNewTab",
            label:"Open in new tab",
            defaultValue:true,
        }
        
    ],
}
