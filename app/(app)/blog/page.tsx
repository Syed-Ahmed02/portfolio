"use client"

import { blogPosts } from "@/lib/data"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  
  // Get unique categories
  const categories = Array.from(new Set(blogPosts.map(post => post.category)))
  
  // Filter posts based on selected category
  const filteredPosts = selectedCategory 
    ? blogPosts.filter(post => post.category === selectedCategory)
    : blogPosts

  return (
    <main className="dark min-h-screen max-w-7xl mx-auto pb-16 text-foreground">
      <section className="container px-4 py-16 md:py-24">
        <div className="mb-12 flex flex-col items-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Blog</h1>
          <p className="mt-4 text-center text-muted-foreground max-w-2xl">
            Thoughts, ideas, and insights from my journey as a frontend developer
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
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post, index) => (
            <Card key={index} className="group flex flex-col overflow-hidden border-muted/20 bg-card h-full">
              <div className="flex aspect-[3/2] overflow-clip rounded-xl">
                <div className="flex-1">
                  <div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
                    <img
                      src={post.image || `/placeholder.svg?height=200&width=400&text=Blog+${index + 1}`}
                      alt={post.title}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>
              <CardHeader className="px-6 pt-6 flex-grow">
                <CardTitle className="line-clamp-3 break-words text-lg font-medium md:text-xl lg:text-2xl">{post.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">{post.date}</CardDescription>
              </CardHeader>
              <CardContent className="px-6">
                <p className="text-sm text-muted-foreground line-clamp-2 md:text-base">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="px-6 pb-6">
                <Link 
                  href={`/blog/${encodeURIComponent(post.title.toLowerCase().replace(/\s+/g, "-"))}`}
                  className="flex items-center text-sm group/link"
                >
                  Read more{" "}
                  <ArrowRight className="ml-2 size-5 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}

