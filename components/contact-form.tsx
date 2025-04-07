import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Calendar from "./cal-embed"

export default function ContactForm() {
  return (
    <section className="px-4 py-16 md:py-24 bg-background">
      <div className="mb-8 flex flex-col items-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
        <p className="mt-4 text-center text-muted-foreground">
          Have a question or want to work together? Drop me a or book a call!
        </p>
      </div>

      <Card className="mx-auto max-w-lg overflow-hidden border-muted/20 bg-card">
        <CardHeader className="px-6 pt-6">
          <CardTitle>Contact Me</CardTitle>
          <CardDescription>Fill out the form below or book a short meeting and ill get back to you!</CardDescription>
        </CardHeader>
        <CardContent className="px-6 pb-6">
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" placeholder="John" className="bg-background/50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" placeholder="Doe" className="bg-background/50" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="john@example.com" className="bg-background/50" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="Project Inquiry" className="bg-background/50" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Your message here..." className="min-h-[120px] bg-background/50" />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
          <div className="w-full my-4">
            <Calendar />
          </div>
        </CardContent>

      </Card>

    </section>
  )
}

