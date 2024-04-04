import Link from "next/link";
import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
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
import { useRouter } from "next/navigation";
const blogs = [
  {
    id: 1,
    name: "The importance of customer segmentation in retail",
    img: "/blog/blog1.png",
    category: "Category",
    path: "/",
    date: "Oct 12, 2023",
    duration: "3 Min Read",
  },
  {
    id: 2,
    name: "Jewellery Beyond Limits: The Offline to Online Metamorphosis of O2O",
    img: "/blog/blog2.png",
    category: "Category",
    path: "/",
    date: "Aug 29, 2023",
    duration: "5 Min Read",
  },
  {
    id: 3,
    name: 'Enhancing Customer Experience Through Loyalty Programs: A Retailer"s Perspective',
    img: "/blog/blog3.png",
    category: "Category",
    path: "/",
    date: "July 25, 2023",
    duration: "5 Min Read",
  },
  {
    id: 4,
    name: "No more whatsapp broadcasting, level up the game with whatsapp drip marketing",
    img: "/blog/blog4.png",
    category: "Category",
    path: "/",
    date: "Jun 12, 2023",
    duration: "7 Min Read",
  },
  {
    id: 5,
    name: "Can CRM manage the Lead life cycle for Jewellery Business?",
    img: "/blog/blog5.png",
    category: "Category",
    path: "/",
    date: "Jun 8, 2023",
    duration: "6 Min Read",
  },
  {
    id: 6,
    name: "Customer Experience is the new Battle Ground for Customer Retention: Loyalty vs CRM",
    img: "/blog/blog6.png",
    category: "Category",
    path: "/",
    date: "Jun 2, 2023",
    duration: "5 Min Read",
  },
];

const Blog = () => {
  const router = useRouter();

  return (
    <section className="w-full flex flex-col items-center gap-5 py-12 px-5 lg:px-12">
      <h1 className=" font-bold text-2xl lg:text-4xl text-center max-w-5xl lg:text-center text-slate-800">
        Latest Trends in Customer Engagement
      </h1>
      <Link
        href={"/"}
        className=" group hover:border-b hover:border-b-blue-800 duration-200 flex items-center gap-2"
      >
        <h5 className="font-semibold text-lg text-blue-800">Learn More</h5>{" "}
        <HiArrowNarrowRight className=" text-lg group-hover:translate-x-0.5 duration-300 text-blue-900 " />
      </Link>

      <div className=" w-full flex items-center gap-5 overflow-hidden mt-5">
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
            {blogs.map(({ id, name, img, category, path, date, duration }) => (
              <CarouselItem
                key={id}
                className=" basis-[100%] md:basis-1/3 lg:basis-1/3 2xl:basis-1/4 flex lg:mx-1"
              >
                <div>
                  <Card
                    onClick={() => router.push(path)}
                    className="w-full cursor-pointer flex flex-col gap-5 bg-transparent p-0 border-0"
                  >
                    <CardContent className=" w-[90%] lg:w-full flex flex-col gap-3 border-0 p-0">
                      <img
                        src={img}
                        alt="blog image"
                        className="w-full h-44 rounded-md object-cover"
                      />
                      <div className="w-full flex flex-col gap-3 mt-2">
                        <div className=" lg:w-full flex items-start justify-between">
                          <span className=" px-2 py-0.5 w-fit rounded-md border border-gray-400 text-xs font-medium">
                            {category}
                          </span>
                          <p className=" text-[10px] font-medium">
                            {date} - {duration}
                          </p>
                        </div>
                        <h3 className=" text-[13px] font-medium max-w-sm lg:max-w-full">
                          {name}
                        </h3>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex" />
          <CarouselNext className="hidden lg:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Blog;
