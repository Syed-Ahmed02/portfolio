"use client"
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid"
import { LayoutGrid } from "./ui/layout-grid";
import { motion } from "framer-motion";
export function Projects() {
    return (
        <motion.div
            initial={{ opacity: 0 }} // Start from fully transparent
            animate={{ opacity: 1 }} // Animate to fully opaque
            transition={{ duration: 0.5 }} // Transition duration
        >
            <h4 className="text-center text-3xl md:text-5xl tracking-tighter  mb-4 font-regular">
                My Work
            </h4>

            <div className="h-fit w-full">
                <LayoutGrid cards={items} />
            </div>
        </motion.div>
    );
}
const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2]  [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
    {
        id: 1,
        title: "Project 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        header: <Skeleton />,
        className: "md:col-span-2",

    },
    {
        id: 2,
        title: "Project 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        header: <Skeleton />,
        className: "md:col-span-1",

    },
    {
        id: 3,
        title: "Project 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        header: <Skeleton />,
        className: "md:col-span-1",

    }, {
        id: 4,
        title: "Project 4",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        header: <Skeleton />,
        className: "md:col-span-1",

    }, {
        id: 5,
        title: "Project 5",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        header: <Skeleton />,
        className: "md:col-span-1",

    },
    {
        id: 6,
        title: "Project 6",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        header: <Skeleton />,
        className: "md:col-span-1",

    },
    {
        id: 7,
        title: "Project 7",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        header: <Skeleton />,
        className: "md:col-span-2",

    },
];
