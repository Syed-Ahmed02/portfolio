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
export const Tags: CollectionConfig = {
  slug: 'tags',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
        name:"title",
        type:"text",
        label:"Title of Experience",
        required:true,
    },
    {
        name:"type",
        type:"select",
        label:"Is it a skill,category, or tag",
        options:["Skill","Tag","Category"],
        required:true,
    }
    
  ],
}
