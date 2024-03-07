import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";
const carouselItems = [
  {
    id: 1,
    name: "XPAND - Grow Customers",
    img: "/4.png",
  },
  {
    id: 2,
    name: "ZOOM - Grow Revenues",
    img: "/5.png",
  },
  {
    id: 3,
    name: "MAXX - Grow Customer Experience",
    img: "/6.png",
  },
  {
    id: 4,
    name: "AMPL - Grow Omni Channel presence",
    img: "/7.png",
  },
  {
    id: 5,
    name: "CREST - All-in-one pack",
    img: "/8.png",
  },
];

const HeroCarousel = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className=" w-[90%]"
    >
      <CarouselContent>
        {carouselItems.map(({ id, name, img }) => {
          return (
            <CarouselItem className="border-none" key={id}>
              <div className="p-1 border-none">
                <Card>
                  <CardContent className="flex w-full flex-col gap-5 items-center border-none justify-center p-6">
                    <span className="text-4xl font-semibold">{name}</span>
                    <Image
                      src={img}
                      width={500}
                      alt={name}
                      height={400}
                      priority
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default HeroCarousel;