"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";



export function TextGenerate({
    words,
    className,
  }: {
    words: string;
    className?: string;
  }) {
  return <TextGenerateEffect words={words} />;
}
