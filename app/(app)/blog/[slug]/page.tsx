import { Button } from "@/components/ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { fetchPostsData } from "@/lib/api";
import RichText from "@/components/RichText";

// Set revalidation time to 1 hour (3600 seconds)
export const revalidate = 3600;

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const res = await fetchPostsData({
    where: {
      title: { equals: slug },
    },
    limit: 1,
  });

  const post = res[0];
  // Find the blog post with the matching slug
  // const post = blogPosts.find((post) => encodeURIComponent(post.title.toLowerCase().replace(/\s+/g, "-")) === slug)

  // If no post is found, return 404
  if (!post) {
    notFound();
  }

  return (
    <main className="dark min-h-screen max-w-7xl mx-auto pb-16 bg-background text-foreground mt-10 rounded-lg">
      <article className="container px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <Button
            variant="ghost"
            className="mb-8 flex items-center gap-2"
            asChild
          >
            <Link href="/blog">
              <ArrowLeft className="h-4 w-4" />
              Back to all posts
            </Link>
          </Button>

          <div className="aspect-video w-full overflow-hidden rounded-lg mb-8">
            <img
              src={
                typeof post.heroImage === "object" && post.heroImage.url
                  ? post.heroImage.url
                  : `/placeholder.svg?height=300&width=300&text=${encodeURIComponent(
                      post.title.split(" ")[0]
                    )}`
              }
              alt={post.title}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              {post.title}
            </h1>
            <p className="text-muted-foreground">{post.publishedAt}</p>
          </div>

          <div className="prose prose-invert max-w-none">
            <RichText data={post.content} />
          </div>
        </div>
      </article>
    </main>
  );
}
