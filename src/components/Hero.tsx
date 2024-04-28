import { Badge } from "@/components/ui/badge";
import { Handdrawn_underline } from "./svgs";
export const Hero = () => (
    <div
        className="w-full  py-20 lg:py-40">
        <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-8  lg:grid-cols-2">
                <div className="flex gap-4 flex-col">
                    <div className="flex gap-4 flex-col">
                        <h1 className="text-4xl  max-w-xl tracking-tighter text-left font-bold mt-10">
                            My Name is
                            <div className="">
                                Syed Ahmed<Handdrawn_underline />
                            </div>
                        </h1>
                        <div className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left font-normal font-bodnoi">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec ultrices tincidunt arcu non sodales neque sodales ut. Consequat nisl vel pretium lectus quam id leo in vitae. Tortor aliquam nulla facilisi cras fermentum odio eu.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="bg-muted rounded-md  aspect-square"></div>
                    <div className=" flex-row text-center justify-center">
                        <Badge className="m-4">Linkedin</Badge>
                        <Badge className="m-4">Github</Badge>
                        <Badge className="m-4">Twitter</Badge>
                        <Badge className="m-4">Instagram</Badge>
                    </div>
                </div>
            </div>
        </div>
    </div>
);