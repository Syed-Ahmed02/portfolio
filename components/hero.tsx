import { Button } from "@/components/ui/button"
import { GridPattern } from "./magicui/grid-pattern"

export default function Hero() {
  return (
    <section className="container relative px-4 py-16 md:py-24 max-w-6xl mx-auto">
      <div className="absolute inset-0 -z-10">
        <GridPattern
          width={30}
          height={30}
          x={-1}
          y={-1}
          strokeDasharray={"4 2"}
          className="[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
        />
      </div>
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">John Doe</h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            Frontend Developer specializing in building exceptional digital experiences
          </p>
          <div className="flex gap-4">
            <Button>Get in touch</Button>
            <Button variant="outline">View Resume</Button>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="relative h-80 w-80 overflow-hidden rounded-md bg-muted/20 border border-muted">
            <img src="/placeholder.svg?height=320&width=320" alt="Profile" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

