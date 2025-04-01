"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { workExperience, projectExperience } from "@/lib/data"
import Image from "next/image"

export default function Experience() {
  const [activeTab, setActiveTab] = useState("work")
  const [displayData, setDisplayData] = useState(workExperience)

  useEffect(() => {
    setDisplayData(activeTab === "work" ? workExperience : projectExperience)
  }, [activeTab])

  return (
    <section className="container px-4 py-16 md:py-24 bg-background">
      <div className="mb-8 flex flex-col items-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience</h2>
        <p className="mt-4 text-center text-muted-foreground">My professional journey and notable projects</p>
        <div className="mt-8 flex gap-4">
          <Button variant={activeTab === "work" ? "default" : "outline"} onClick={() => setActiveTab("work")}>
            Work
          </Button>
          <Button variant={activeTab === "projects" ? "default" : "outline"} onClick={() => setActiveTab("projects")}>
            Projects
          </Button>
        </div>
      </div>

      <div className="mx-auto max-w-3xl space-y-6">
        {displayData.map((item, index) => (
          <Card key={index} className="w-full overflow-hidden border-muted/20 bg-card">
            <div className="md:flex">
              <div className="md:w-1/3 h-48 md:h-auto relative">
                <Image
                  src={
                    item.image ||
                    `/placeholder.svg?height=300&width=300&text=${encodeURIComponent(item.title.split(" ")[0])}`
                  }
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:w-2/3">
                <CardHeader className="px-6 pt-6">
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.period}</CardDescription>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <p className="mb-4 text-muted-foreground">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.skills &&
                      item.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary" className="bg-secondary/20 text-secondary-foreground">
                          {skill}
                        </Badge>
                      ))}
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

