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
const testimonials = [
  {
    id: 1,
    brandLogo: "/vc/4.png",
    name: "Pankaj Solanki",
    role: "Marketing Head",
    story: "Men deserve increses 28% in Retention Growth",
    img: "/testimonials/Anish-Shah.webp",
    video: "/testimonials/qmart.mp4",
  },
  {
    id: 2,
    brandLogo: "/vc/5.png",
    name: "Mudit",
    role: "Managing Director",
    story:
      "PMJ Jewels modernized with Zithara CRM for 100% lead capture and satisfaction",
    img: "",
    video: "",
  },
  {
    id: 3,
    brandLogo: "/vc/9.png",
    name: "Rohil Remani",
    role: "Director",
    story:
      "Zithara improved customer experience through timely messaging on WhatsApp",
    img: "/testimonials/2.webp",
    video: "",
  },
  {
    id: 4,
    brandLogo: "/vc/4.png",
    name: "Harsha Sharma",
    role: "Operations Mangager",
    story: "Sooper Salon improves customer acquisition by 5x",
    img: "",
    video: "",
  },
  {
    id: 5,
    brandLogo: "/vc/6.png",
    name: "Uday Gajangi",
    role: "Marketing Operations Mangager",
    story:
      "Zithara helped Jabita's choice to acheive over 38% abandoned cart recovery rate",
    img: "/testimonials/3.webp",
    video: "",
  },
  {
    id: 6,
    brandLogo: "/vc/2.png",
    name: "Sravan Kumar",
    role: "Head of Marketing and Operations",
    story: "Q-Mart acheive 20% ROI on a branded rewards program",
    img: "",
    video: "/testimonials/qmart.mp4",
  },
];

const TestimonialCarousel = () => {
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
      className="mx-auto cursor-grab overflow-hidden max-w-[95vw] md:max-w-auto"
    >
      <CarouselContent className="">
        {testimonials.map(
          ({ id, name, role, brandLogo, story, video, img }) => (
            <CarouselItem
              key={id}
              className=" basis-[100%] overflow-hidden md:basis-1/2 lg:basis-1/3 flex items-center gap-5"
            >
              <div>
                <Card className="flex max-w-[90vw] md:max-w-auto items-center border shadow-md p-5 bg-white overflow-hidden">
                  <CardContent className="p-0 flex flex-col gap-4 border-0">
                    <div>
                      <Image
                        className=" w-[100px] bg-transparent border rounded-sm"
                        key={id}
                        src={brandLogo}
                        width={100}
                        height={80}
                      />
                    </div>
                    <p className=" text-sm break-words">{story}.</p>
                    <span className="">
                      <p className=" font-medium text-sm">{name}:</p>
                      <p className=" text-sm">{role}</p>
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          )
        )}
      </CarouselContent>
      <CarouselPrevious className="hidden lg:flex" />
      <CarouselNext className="hidden lg:flex" />
    </Carousel>
  );
};

export default TestimonialCarousel;
