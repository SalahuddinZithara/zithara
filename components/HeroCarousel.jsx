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
import Autoplay from "embla-carousel-autoplay";
const carouselItems = [
  {
    id: 0,
    name: "",
    img: "/vc/1.png",
  },
  {
    id: 1,
    name: "",
    img: "/vc/2.png",
  },
  {
    id: 2,
    name: "",
    img: "/vc/3.png",
  },
  {
    id: 3,
    name: "",
    img: "/vc/4.png",
  },
  {
    id: 4,
    name: "",
    img: "/vc/5.png",
  },
  {
    id: 5,
    name: "",
    img: "/vc/6.png",
  },
  {
    id: 6,
    name: "",
    img: "/vc/7.png",
  },
  {
    id: 7,
    name: "",
    img: "/vc/8.png",
  },
  {
    id: 8,
    name: "",
    img: "/vc/9.png",
  },
  {
    id: 9,
    name: "",
    img: "/vc/10.png",
  },
  {
    id: 10,
    name: "",
    img: "/vc/11.png",
  },
  {
    id: 11,
    name: "",
    img: "/vc/12.png",
  },
];

const HeroCarousel = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className=" md:w-[90%] mx-auto cursor-grab"
    >
      <CarouselContent>
        {carouselItems.map(({ id, name, img }) => (
          <CarouselItem
            key={id}
            className=" basis-1/3 md:basis-1/4 lg:basis-1/5 flex items-center gap-0"
          >
            <div>
              <Card className="flex items-center border-0">
                <CardContent className="p-0 flex items-center border-0">
                  <Image
                    className=" bg-transparent w-auto h-auto"
                    key={id}
                    src={img}
                    width={120}
                    height={80}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious className="hidden" />
      <CarouselNext className="hidden" /> */}
    </Carousel>
  );
};

export default HeroCarousel;
