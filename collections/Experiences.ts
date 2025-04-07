import type { CollectionConfig } from 'payload'
/*
{
    title: "Senior Frontend Developer at TechCorp",
    period: "2021 - Present",
    description:
      "Led the development of the company's flagship product, improving performance by 40%. Mentored junior developers and implemented best practices.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
    image: "/placeholder.svg?height=300&width=300&text=TechCorp",
  },
  */
export const Experiences: CollectionConfig = {
  slug: 'experience',
  admin: {
    useAsTitle: 'Experience',
  },
  fields: [
    {
        name:"title",
        type:"text",
        label:"Title of Experience",
        required:true,
    },
    {
        name:"period",
        type:"text",
        label:"Period of Experience (i.e March 2021 - Jan 2024)",
        required:false,
    },
    {
        name:"description",
        type:"textarea",
        label:"Short description of experience",
        maxLength:500,
        required:true,
    },
    // {
    //     name:"skills",
    //     label:"Skills"
    //     type:"relationship",
    //     relationTo:"tags",
    //     hasMany:true,
    //     required:false,
    // },
    {
        name:"image",
        type:"upload",
        relationTo:"media",
        filterOptions:{
            mimeType: {contains:'image'}
        },
        required:true,
    },
    {
        name:"link",
        label:"Link",
        type:"text",
        required:false,
    }
  ],
}
