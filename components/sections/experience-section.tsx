"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { BlurFade } from "../ui/blur-fade"
import { Experience as ExperienceProps } from "@/payload-types"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
interface ExperienceComponentProps {
  experiences: ExperienceProps[]
}

export const Experience: React.FC<ExperienceComponentProps> = ({ experiences }) => {
  const [activeTab, setActiveTab] = useState("work")
  const [displayData, setDisplayData] = useState<ExperienceProps[]>([])

  useEffect(() => {
    // Filter experiences based on the active tab and type field
    if (activeTab === "work") {
      setDisplayData(experiences.filter(exp => exp.type === "Work Experience"))
    } else if (activeTab === "projects") {
      setDisplayData(experiences.filter(exp => exp.type === "Project"))
    } else if (activeTab==="volunteer"){
      setDisplayData(experiences.filter(exp=> exp.type ==="Volunteer" ))
    }
    else {
      setDisplayData(experiences)
    }
  }, [activeTab, experiences])

  return (
    <section className="px-4 py-16 md:py-24 bg-background ">
      <BlurFade delay={0.3} inView>
        <div className="mb-8 flex flex-col items-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience</h2>
          <p className="mt-4 text-center text-muted-foreground">My professional journey and notable projects</p>
          <div className="mt-8 flex gap-4">
            <Button variant={activeTab === "work" ? "default" : "outline"} onClick={() => setActiveTab("work")}>
              Work Experience
            </Button>
            <Button variant={activeTab === "projects" ? "default" : "outline"} onClick={() => setActiveTab("projects")}>
              Projects
            </Button>
            <Button variant={activeTab === "volunteer" ? "default" : "outline"} onClick={() => setActiveTab("volunteer")}>
              Volunteer Experience
            </Button>
          </div>
        </div>
      </BlurFade>
      <div className="mx-auto max-w-3xl space-y-6">
        {displayData.length > 0 ? (displayData.map((item, index) => (
          <BlurFade delay={0.1 * index + 0.2} inView key={index}>
            <Card className="w-full overflow-hidden border-muted/20 bg-card">
              <div className="md:flex">
                <div className="md:w-1/3 h-48 md:h-auto relative">
                  <Image
                    src={
                      typeof item.image === 'object' && item.image.url
                        ? item.image.url
                        : `/placeholder.svg?height=300&width=300&text=${encodeURIComponent(item.title.split(" ")[0])}`
                    }
                    alt={item.title}
                    width={300}
                    height={300}
                    className="object-cover"
                  />
                </div>
                <div className="md:w-2/3">
                  <CardHeader className="px-6 pt-6">
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.period}</CardDescription>
                  </CardHeader>
                  <CardContent className="px-6 pb-6">
                    <p className="mb-4 text-muted-foreground break-words">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.skills &&
                        item.skills.map((skill, i) => (
                          <Badge key={i} variant="secondary" className="bg-secondary/20 text-secondary-foreground">
                            {typeof skill === 'object' ? skill.title : skill}
                          </Badge>
                        ))}
                    </div>
                  </CardContent>
                  {item.link &&
                  <CardFooter>
                    <Link href={item.link} className="w-full" target="_blank">
                      <Button className="w-full" variant={"outline"}>
                          View{" "}
                          <ExternalLink className="ml-2 size-5  " />
                      </Button>
                    </Link>
                  </CardFooter>
                  }
                </div>
              </div>
            </Card>
          </BlurFade>)
        )) : (
          <p className="text-center text-lg">No Data Avaliable</p>
        )}
        
      </div>
    </section>
  )
}

