import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TextGenerate } from "./text-generate";
export const Hero = () => (
    <div className="w-full  py-20 lg:py-40">
        <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
                <div className="flex gap-4 flex-col">
                    
                    <div className="flex gap-4 flex-col">
                        <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
                            My Name is Syed
                        </h1>
                        <div className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                            <TextGenerate words = {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec ultrices tincidunt arcu non sodales neque sodales ut. Consequat nisl vel pretium lectus quam id leo in vitae. Tortor aliquam nulla facilisi cras fermentum odio eu."}/>
                        </div>
                    </div>
                    
                </div>
                <div className="bg-muted rounded-md  aspect-square"></div>
            </div>
        </div>
    </div>
);