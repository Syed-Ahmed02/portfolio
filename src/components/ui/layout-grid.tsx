"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils"
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
type Card = {
    id: string;
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
    const [selectedId, setSelectedId] = useState<string | null>(null);
    return (

        <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3  max-w-7xl mx-auto gap-4 relative ">
            {cards.map((card, i) => (
                <div key={i} className={cn(card.className, "")}>
                    <motion.div
                        onClick={() => handleClick(card)}
                        className={cn(
                            card.className,
                            "relative overflow-hidden",
                            selected?.id === card.id
                                ? "rounded-lg cursor-pointer absolute inset-0 h-1/4 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col mx-auto space-y-4 max-w-7xl border border-card-foreground "
                                : lastSelected?.id === card.id
                                    ? "z-40 bg-white rounded-xl h-full "
                                    : "bg-white rounded-xl h-full w-full"
                        )}
                        layout
                    >
                        {selected?.id === card.id ? <SelectedCard selected={selected} /> : <BentoCard card={card} />}

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
                "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2]  bg-card border border-card-foreground justify-between flex flex-col space-y-4 max-w-4xl mx-auto md:auto-rows-[20rem]",
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
        <div className="bg-primary h-full w-full flex flex-col  rounded-lg shadow-2xl relative z-[60] text-center ">
            <motion.div
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 0.6,
                }}
                className="absolute inset-0 h-full w-full z-10 "
            />

            {selected?.header}

            <div className="font-sans font-bold text-black mb-2 mt-2 mx-auto">
                {selected?.title}
            </div>
            <div className="font-sans font-normal text-black text-xs mx-auto ">
                {selected?.description}
            </div>
        </div>
    );
};
/*
        
        */

        /* <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3  max-w-7xl mx-auto gap-4 relative ">
            {cards.map(item => (
                <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)}>
                    <motion.h5>{item.description}</motion.h5>
                    <motion.h2>{item.title}</motion.h2>
                </motion.div>
            ))}

            <AnimatePresence>
                {selectedId && (
                    <motion.div layoutId={selectedId}>
                        <motion.h5>{cards[Number(selectedId)].description}</motion.h5>
                        <motion.h2>{cards[Number(selectedId)].title}</motion.h2>
                        <motion.button onClick={() => setSelectedId(null)} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>*/