"use client"
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
export const Blog = () => (
    <motion.div
        initial={{ opacity: 0 }} // Start from fully transparent
        animate={{ opacity: 1 }} // Animate to fully opaque
        transition={{ duration: 0.5 }} // Transition duration
        className="w-full py-20 lg:py-40">
        <div className="container mx-auto flex flex-col gap-14">
            <h4 className="text-3xl md:text-5xl tracking-tighter  font-regular text-center w-full">
                Latest articles
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer">
                    <div className="bg-muted rounded-md aspect-video mb-4 "></div>
                    <h3 className="text-xl tracking-tight">Article Heading #1</h3>
                    <p className="text-muted-foreground text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat in ante metus dictum at tempor commodo.
                    </p>
                </div>
                <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer">
                    <div className="bg-muted rounded-md aspect-video mb-4"></div>
                    <h3 className="text-xl tracking-tight">PArticle Heading #2</h3>
                    <p className="text-muted-foreground text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat in ante metus dictum at tempor commodo.
                    </p>
                </div>
                <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer">
                    <div className="bg-muted rounded-md aspect-video mb-4"></div>
                    <h3 className="text-xl tracking-tight">Article Heading #3</h3>
                    <p className="text-muted-foreground text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat in ante metus dictum at tempor commodo.
                    </p>
                </div>
                <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer">
                    <div className="bg-muted rounded-md aspect-video mb-4"></div>
                    <h3 className="text-xl tracking-tight">Article Heading #4</h3>
                    <p className="text-muted-foreground text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat in ante metus dictum at tempor commodo.
                    </p>
                </div>
            </div>
            <div className="text-center">
                <Button className="gap-4 ">
                    View all articles <MoveRight className="w-4 h-4" />
                </Button>
            </div>
        </div>
    </motion.div>
);