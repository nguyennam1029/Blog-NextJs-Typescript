"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
const imageSlide = [
  { img: "/images/Background.jpg" },
  { img: "/images/Background2.jpg" },
  { img: "/images/kaapkokaro.jpg" },
  { img: "/images/WorldTravel2.jpg" },
  { img: "/images/Background.jpg" },
  { img: "/images/Background2.jpg" },
  { img: "/images/kaapkokaro.jpg" },
  { img: "/images/WorldTravel2.jpg" },
];
export function CarouselSpacing() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[plugin.current]}
      className="w-full max-w-[1280px] mx-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="-ml-1">
        {imageSlide.map((item, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/4">
            <div className="p-2">
              <Card className="border-0">
                <CardContent className="flex aspect-square items-center justify-center p-0">
                  <Image
                    src={item?.img}
                    width={270}
                    height={270}
                    alt="ca"
                    quality={100}
                    className="w-full h-full object-cover rounded-2xl shadow-md overflow-hidden"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
