import { Button } from "@/components/ui/button";
import { GridPattern } from "../ui/grid-pattern";
import { TextShimmer } from "../ui/text-shimmer";
import { BlurFade } from "../ui/blur-fade";

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
      <BlurFade delay={0.1} inView>
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <TextShimmer
              duration={3}
              className="text-4xl font-bold  tracking-tighter sm:text-5xl md:text-4xl [--base-color:theme(colors.white)] [--base-gradient-color:theme(colors.gray.200)] dark:[--base-color:theme(colors.white)] dark:[--base-gradient-color:theme(colors.gray.400)]"
            >
              Hey I'm Syed 👋
            </TextShimmer>
            <p className="text-lg text-muted-foreground md:text-xl">
              I'm a{" "}
              <span className="font-bold text-foreground">
                AI full-stack developer{" "}
              </span>
              graduating soon from Wilfrid Laurier University.
              <span className="font-bold text-foreground">
                {" "}
                I'm open to new opportunities
              </span>{" "}
              and currently working on several projects to keep me up to date
              with the latest tech. When I'm not coding, you'll find me diving
              into books or participating in hackathons to stay at the cutting
              edge of technology. Feel free to{" "}
              <span className="font-bold text-foreground">
                connect with me on Linkedin
              </span>{" "}
              or{" "}
              <span className="font-bold text-foreground">
                book a call using
              </span>{" "}
              the form below!
            </p>
            <div className="flex gap-4">
              <Button>Get in touch</Button>
              <Button variant="outline">View Resume</Button>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative h-80 w-80 overflow-hidden rounded-md bg-muted/20 border border-muted">
              <img
                src="/pfp.jpeg"
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </BlurFade>
    </section>
  );
}
