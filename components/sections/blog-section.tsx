"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { BlurFade } from "../ui/blur-fade";
import { Post } from "@/payload-types";
import Link from "next/link";
import Image from "next/image";

interface GalleryItem {
  id: string;
  title: string;
  summary: string;
  url: string;
  image: string;
}

interface GalleryProps {
  posts: Post[];
}

export const BlogGallery: React.FC<GalleryProps> = ({ posts }) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);
  return (
    <section className="py-32 mx-auto ">
      <BlurFade>
        <div className="mx-auto max-w-6xl">
          <div className="container  ">
            <div className="mb-8 flex flex-col justify-between md:mb-14 md:flex-row md:items-end lg:mb-16">
              <div>
                <h2 className="mb-3 text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
                  View Latests Posts
                </h2>
                <Link
                  href="/posts"
                  className="group flex items-center gap-1 text-sm font-medium md:text-base lg:text-lg"
                >
                  Book a demo
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              <div className="mt-8 flex shrink-0 items-center justify-start gap-2">
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => {
                    carouselApi?.scrollPrev();
                  }}
                  disabled={!canScrollPrev}
                  className="disabled:pointer-events-auto"
                >
                  <ArrowLeft className="size-5" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => {
                    carouselApi?.scrollNext();
                  }}
                  disabled={!canScrollNext}
                  className="disabled:pointer-events-auto"
                >
                  <ArrowRight className="size-5" />
                </Button>
              </div>
            </div>
          </div>
          <div className="w-full">
            <Carousel
              setApi={setCarouselApi}
              opts={{
                breakpoints: {
                  "(max-width: 768px)": {
                    dragFree: true,
                  },
                },
              }}
              className="relative"
            >
              <CarouselContent className="-mr-4  ml-8 2xl:ml-[max(8rem,calc(50vw-700px+1rem))] 2xl:mr-[max(0rem,calc(50vw-700px-1rem))]">
                {posts.length > 0 ? (
                  posts.map((item) => {
                    console.log("Blog Item:", item);
                    console.log("Hero Image Data:", item.heroImage);
                    return (
                      <CarouselItem
                        key={item.id}
                        className="pl-4 md:max-w-[452px]  border py-8"
                      >
                        <Link
                          href={`/blog/${item.title}`}
                          className="group flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex aspect-[3/2] overflow-clip rounded-xl">
                              <div className="flex-1 aspect-w-4 aspect-h-3 overflow-hidden rounded-lg shadow-lg mr-4">
                                <div className="relative h-full w-full transition duration-300 group-hover:scale-105">
                                  {/* <Image
                                    src="https://mrucujpvbprmpznsgmfr.supabase.co/storage/v1/object/public/msa_public/Photos/tarteel.png"
                                    alt={item.title}
                                    width={452}
                                    height={452}
                                    className="object-cover"
                                  /> */}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mb-2 line-clamp-3 break-words pt-4 text-lg font-medium md:mb-3 md:pt-4 md:text-xl lg:pt-4 lg:text-2xl">
                            {item.title}
                          </div>
                          <div className="mb-8 line-clamp-2 text-sm text-muted-foreground md:mb-12 md:text-base lg:mb-9 break-words">
                            {item.description}
                          </div>
                          <div className="flex items-center text-sm">
                            Read more{" "}
                            <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                          </div>
                        </Link>
                      </CarouselItem>
                    );
                  })
                ) : (
                  <p className="text-center text-lg">No Data Avaliable</p>
                )}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </BlurFade>
    </section>
  );
};
