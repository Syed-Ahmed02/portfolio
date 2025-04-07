import Hero from "@/components/hero"
import Experience from "@/components/experience"
import BlogCarousel from "@/components/blog-carousel"
import ContactForm from "@/components/contact-form"
import { BlogGallery } from "@/components/BlogGallery"

export default function Home() {
  return (
    <main className="dark min-h-screen">
      <div className="text-foreground">
        <Hero />
        <Experience />
        <BlogGallery/>
        <ContactForm />
      </div>
    </main>
  )
}

