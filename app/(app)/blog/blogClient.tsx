"use client";
import type { Post, Tag } from "@/payload-types";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface BlogClientProps {
  posts: Post[];
  categories: Tag[];
}

export default function BlogClient({ posts, categories }: BlogClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categoryIds = categories.map((category) => category.id);
  const categoryTitles = categories.map((category) => category.title);
  // Get unique categories
  const filteredPosts = selectedCategory
    ? posts.filter((post) => {
        // Find the ID that corresponds to the selected category title
        const categoryObj = categories.find(
          (cat) => cat.title === selectedCategory
        );
        console.log(categoryObj)
        if (!categoryObj) return false;

        //JSON.stringify to compare two objects
        return post.categories?.some((postCat) => JSON.stringify(postCat) === JSON.stringify(categoryObj));
      })
    : posts;

  return (
    <main className="dark min-h-screen max-w-7xl mx-auto pb-16 text-foreground">
      <section className="container px-4 py-16 md:py-24">
        <div className="mb-12 flex flex-col items-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Blog
          </h1>
          <p className="mt-4 text-center text-muted-foreground max-w-2xl">
            Thoughts, ideas, and insights from my journey as a frontend
            developer
          </p>

          {/* Category Filter Buttons */}
          <div className="mt-8 flex flex-wrap gap-2 justify-center">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              onClick={() => setSelectedCategory(null)}
            >
              All
            </Button>
            {categories.map((category) => (
              <Button
                key={category.title}
                variant={
                  selectedCategory === category.title ? "default" : "outline"
                }
                onClick={() => setSelectedCategory(category.title)}
              >
                {category.title}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post, index) => (
            <div className="pl-4 md:max-w-[452px]  border py-8" key={index}>
              <Link
                href={`/blog/${post.title}`}
                className="group flex flex-col justify-between"
              >
                <div>
                  <div className="flex aspect-[3/2] overflow-clip rounded-xl">
                    <div className="flex-1 aspect-w-4 aspect-h-3 overflow-hidden rounded-lg shadow-lg mr-4">
                      <div className="relative h-full w-full transition duration-300 group-hover:scale-105">
                        <Image
                          src={
                            typeof post.heroImage === "object" &&
                            post.heroImage.url
                              ? post.heroImage.url
                              : `/placeholder.svg?height=300&width=300&text=${encodeURIComponent(
                                  post.title.split(" ")[0]
                                )}`
                          }
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-2 line-clamp-3 break-words pt-4 text-lg font-medium md:mb-3 md:pt-4 md:text-xl lg:pt-4 lg:text-2xl">
                  {post.title}
                </div>
                <div className="mb-8 line-clamp-2 text-sm text-muted-foreground md:mb-12 md:text-base lg:mb-9 break-words">
                  {post.description}
                </div>
                <div className="flex items-center text-sm">
                  Read more{" "}
                  <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
