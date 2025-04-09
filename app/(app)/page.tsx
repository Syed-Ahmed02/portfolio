import Hero from "@/components/hero"
import {Experience} from "@/components/experience"
import BlogCarousel from "@/components/blog-carousel"
import ContactForm from "@/components/contact-form"
import { BlogGallery } from "@/components/BlogGallery"
import { fetchExperienceData, fetchPostsData } from "@/lib/api"

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

