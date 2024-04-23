"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils"
import Image from "next/image";

type Card = {
    id: number;
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
    const [selected, setSelected] = useState<Card | null>(null);
    const [lastSelected, setLastSelected] = useState<Card | null>(null);

    const handleClick = (card: Card) => {
        setLastSelected(selected);
        setSelected(card);
    };

    const handleOutsideClick = () => {
        setLastSelected(selected);
        setSelected(null);
    };

    return (
        <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3  max-w-7xl mx-auto gap-4 relative">
            {cards.map((card, i) => (
                <div key={i} className={cn(card.className, "")}>
                    <motion.div
                        onClick={() => handleClick(card)}
                        className={cn(
                            card.className,
                            "relative overflow-hidden",
                            selected?.id === card.id
                                ? "rounded-lg cursor-pointer absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                                : lastSelected?.id === card.id
                                    ? "z-40 bg-white rounded-xl h-full w-full"
                                    : "bg-white rounded-xl h-full w-full"
                        )}
                        layout
                    >
                        {selected?.id === card.id && <SelectedCard selected={selected} />}
                        <BentoCard card={card} />

                    </motion.div>
                </div>
            ))}
            <motion.div
                onClick={handleOutsideClick}
                className={cn(
                    "absolute h-full w-full left-0 top-0 z-10",
                    selected?.id ? "pointer-events-auto" : "pointer-events-none"
                )}
                animate={{ opacity: selected?.id ? 0.3 : 0 }}
            />
        </div>
    );
};

const BentoCard = ({ card }: { card: Card }) => {
    return (
        <div
            className={cn(
                "row-span-1 rounded-xl  hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2]  bg-card border border-card-foreground justify-between flex flex-col space-y-4",
                card.className
            )}
        >
            {card.header}
            <div className="group-hover/bento:translate-x-2 transition duration-200">
                {card.icon}
                <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
                    {card.title}
                </div>
                <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
                    {card.description}
                </div>
            </div>
        </div>
    );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
    return (
        <div className=" h-full w-full  justify-end rounded-lg shadow-2xl relative z-[60]">
            <motion.div
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 0.6,
                }}
                className="absolute inset-0 h-full w-full  bg-primary opacity-60 z-10 "
            />
            {selected?.header}
            {selected?.title}
            <motion.div
                initial={{
                    opacity: 0,
                    y: 100,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                }}
                className="row-span-1 rounded-xl  hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2]  bg-card border border-card-foreground justify-between flex flex-col space-y-4 relative px-8 pb-4 z-[70]"
            >
                {selected?.header}
                {selected?.title}

                <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
                    {selected?.description}

                </div>

            </motion.div>
        </div>
    );
};
