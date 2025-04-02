import { blogPosts } from "@/lib/data"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const slug = params.slug

  // Find the blog post with the matching slug
  const post = blogPosts.find((post) => encodeURIComponent(post.title.toLowerCase().replace(/\s+/g, "-")) === slug)

  // If no post is found, return 404
  if (!post) {
    notFound()
  }

  return (
    <main className="dark min-h-screen max-w-7xl mx-auto pb-16 bg-background text-foreground mt-10 rounded-lg">
      <article className="container px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <Button variant="ghost" className="mb-8 flex items-center gap-2" asChild>
            <Link href="/blog">
              <ArrowLeft className="h-4 w-4" />
              Back to all posts
            </Link>
          </Button>

          <div className="aspect-video w-full overflow-hidden rounded-lg mb-8">
            <img src={post.image || "/placeholder.svg"} alt={post.title} className="h-full w-full object-cover" />
          </div>

          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">{post.title}</h1>
            <p className="text-muted-foreground">{post.date}</p>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg leading-relaxed mb-6">{post.excerpt}</p>

            {/* Placeholder content for the blog post */}
            <p className="mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl
              nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl
              aliquam nisl, eu aliquam nisl nisl sit amet nisl.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Why This Matters</h2>

            <p className="mb-6">
              Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed
              euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed
              euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.
            </p>

            <p className="mb-6">
              Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed
              euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Key Takeaways</h2>

            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">First important point about this topic that readers should remember</li>
              <li className="mb-2">Second key insight that demonstrates your expertise</li>
              <li className="mb-2">Third actionable takeaway that provides value to the reader</li>
              <li className="mb-2">Final thought that wraps up the discussion nicely</li>
            </ul>

            <p className="mt-8">
              If you enjoyed this article or have any questions, feel free to reach out through the contact form or
              connect with me on social media.
            </p>
          </div>
        </div>
      </article>
    </main>
  )
}

