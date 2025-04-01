"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { blogPosts } from "@/lib/data"

export default function BlogCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const visiblePosts = 3
  const maxIndex = blogPosts.length - visiblePosts

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  return (
    <section className="container px-4 py-16 md:py-24">
      <div className="mb-8 flex flex-col items-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Latest Posts</h2>
        <p className="mt-4 text-center text-muted-foreground">Thoughts, ideas, and insights from my journey</p>
      </div>

      <div className="relative">
        <div className="flex gap-6 overflow-hidden">
          {blogPosts.slice(currentIndex, currentIndex + visiblePosts).map((post, index) => (
            <Card key={index} className="min-w-[300px] flex-1 overflow-hidden border-muted/20 bg-card">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={post.image || `/placeholder.svg?height=200&width=400&text=Blog+${index + 1}`}
                  alt={post.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardHeader className="px-6 pt-6">
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.date}</CardDescription>
              </CardHeader>
              <CardContent className="px-6">
                <p className="text-muted-foreground">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="px-6 pb-6">
                <Button variant="outline" className="w-full">
                  Read More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="absolute inset-y-0 left-0 flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="h-8 w-8 rounded-full bg-background/20 backdrop-blur-sm"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous</span>
          </Button>
        </div>

        <div className="absolute inset-y-0 right-0 flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className="h-8 w-8 rounded-full bg-background/20 backdrop-blur-sm"
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next</span>
          </Button>
        </div>
      </div>
    </section>
  )
}

