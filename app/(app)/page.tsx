import Hero from "@/components/sections/hero"
import { Experience } from "@/components/sections/experience-section"
import ContactForm from "@/components/sections/contact-section"
import { BlogGallery } from "@/components/sections/blog-section"
import { fetchExperienceData, fetchPostsData } from "@/lib/api"

// Set revalidation time to 1 hour (3600 seconds)
export const revalidate = 3600;

export default async function Home() {
  const [experienceData,blogData] = await Promise.all([
    fetchExperienceData({limit:50}),
    fetchPostsData({limit:10,sort:"-createdAt"})
  ])
  return (
    <main className="dark min-h-screen">
      <div className="text-foreground">
        <Hero />
        <Experience experiences={experienceData} />
        <BlogGallery posts={blogData}/>
        <ContactForm />
      </div>
    </main>
  )
}

