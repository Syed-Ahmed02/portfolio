

import { Check, MoveRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export const Contact = () => {


    return (
        <div className="w-full py-20 lg:py-40">
            <div className="container max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-10">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-regular">
                                    Contact me!
                                </h4>
                                <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-sm text-left">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Feugiat in ante metus dictum at tempor commodo.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-6 items-start text-left">
                            <Check className="w-4 h-4 mt-2 text-primary" />
                            <div className="flex flex-col gap-1">
                                <p>Skill 1</p>
                                <p className="text-muted-foreground text-sm">
                                    Description 1
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-6 items-start text-left">
                            <Check className="w-4 h-4 mt-2 text-primary" />
                            <div className="flex flex-col gap-1">
                                <p>Skill 2</p>
                                <p className="text-muted-foreground text-sm">
                                    Description 2
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-6 items-start text-left">
                            <Check className="w-4 h-4 mt-2 text-primary" />
                            <div className="flex flex-col gap-1">
                                <p>Skill 3</p>
                                <p className="text-muted-foreground text-sm">
                                    Description 3
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="justify-center flex items-center">
                        <div className="rounded-md max-w-sm flex flex-col border p-8 gap-4">
                            <div className="grid w-full max-w-sm items-center gap-1">
                                <Label htmlFor="firstname">First name</Label>
                                <Input id="firstname" type="text" />
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1">
                                <Label htmlFor="lastname">Last name</Label>
                                <Input id="lastname" type="text" />
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1">
                                <Label htmlFor="lastname">Email </Label>
                                <Input id="lastname" type="text" />
                            </div>

                            <Button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border  bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-primary transition-colors focus:outline-none focus:ring-2 ">
                                Submit!<MoveRight className="w-4 h-4" />
                            </Button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

/*
<button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                Shimmer
                            </button>*/