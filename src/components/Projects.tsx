import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid"


export function Projects() {
    return (
        <div className="max-w-4xl mx-auto md:auto-rows-[20rem]">
            <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl mb-4 font-regular">
                My Work
            </h4>

            <BentoGrid>
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        className={item.className}

                    />
                ))}
            </BentoGrid>
        </div>
    );
}
const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
    {
        title: "Project 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        header: <Skeleton />,
        className: "md:col-span-2",

    },
    {
        title: "Project 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        header: <Skeleton />,
        className: "md:col-span-1",

    },
    {
        title: "Project 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        header: <Skeleton />,
        className: "md:col-span-1",

    },{
        title: "Project 4",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        header: <Skeleton />,
        className: "md:col-span-1",

    },{
        title: "Project 5",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        header: <Skeleton />,
        className: "md:col-span-1",

    },
    {
        title: "Project 6",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        header: <Skeleton />,
        className: "md:col-span-1",

    },
    {
        title: "Project 7",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        header: <Skeleton />,
        className: "md:col-span-2",

    },
];
