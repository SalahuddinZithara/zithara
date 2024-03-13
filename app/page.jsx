"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CiBookmarkCheck } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { TbProgressCheck } from "react-icons/tb";
import hero from "@/public/hero.svg";
import ScrollAnimate from "@/components/ScrollAnimate";
import HeroCarousel from "@/components/HeroCarousel";
import EngageParallax from "@/components/EngageParallax";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import Feedback from "@/components/Feedback";
import Blog from "@/components/Blog";
import Solutions from "@/components/Solutions";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full">
      {/* -----------HERO---SECTION------------- */}
      <div className=" w-full h-auto py-7 lg:py-0 lg:min-h-[86vh] flex flex-col lg:flex-row items-center md:items-start lg:items-center justify-between gap-10 px-5 md:px-8 lg:px-16 2xl:px-40">
        <div className=" flex flex-col gap-5 lg:gap-7 w-full lg:w-[50%]">
          <h2 className=" text-2xl md:text-3xl leading-9 lg:text-[42px] lg:leading-[51px] font-bold">
            India’s <span className=" text-blue-800">fastest</span> growing{" "}
            <span className=" text-blue-800">AI-driven</span> platform for
            Future Focused Retail growth
          </h2>
          <p className=" mt-1 lg:mt-0">
            {/* Create personalized experiences to retain your most valuable
            customers, forever, with Zithara’s All-In-One engagement platform. */}
            Unify customer data, generate insights, personalise marketing
            communications across SMS, Email, Whatsapp & Instagram to delight
            your loyal customers with Zithara’s All-In-One engagement platform.
          </p>

          <div className=" w-full flex items-center gap-3 md:gap-4 mt-3 lg:mt-3">
            <Button className=" bg-blue-800 hover:bg-blue-900 duration-200 flex w-[50%] md:w-[150px] items-center gap-1 text-white rounded-sm ">
              <CiBookmarkCheck className=" text-xl" />
              <p className="font-semibold ">Book A Demo</p>
            </Button>
            <Button className=" bg-black flex md:w-[150px] w-[50%] items-center gap-1.5 text-white rounded-sm ">
              <IoCallOutline className=" text-lg" />
              <p className="font-semibold ">Talk to Us</p>
            </Button>
          </div>
        </div>
        <div className=" w-full md:w-[60%] lg:w-[40%] mt-3">
          <Image src={hero} width={400} height={400} />
        </div>
      </div>

      {/* -----------HORIZONTAL---SCROLL---SECTION------------- */}
      <div className=" w-full flex flex-col gap-3 py-7 md:px-5 lg:px-28 bg-gray-100">
        <div className=" w-full flex flex-col items-center gap-2">
          <h2 className=" text-center lg:text-left font-bold text-2xl md:text-3xl leading-8 lg:text-3xl">
            Where Founders and Marketers Unite
          </h2>
          <h4 className=" font-medium text-center mt-2 text-sm lg:text-base lg:text-left">
            Make your mark today by joining 1000+ industry leaders
          </h4>

          <div className="w-full mt-5 overflow-hidden">
            <HeroCarousel />
          </div>
        </div>
      </div>

      {/* -----------STATISTICS---SECTION------------- */}
      <div className=" w-full my-5 px-5 md:px-8 lg:px-16 2xl:px-28 ">
        <div className=" w-full flex flex-col lg:flex-row items-center justify-between gap-5 lg:h-[270px]">
          <div className=" w-full flex flex-col gap-5 items-center px-3 py-7">
            <span className=" py-5">
              <TbProgressCheck className=" text-6xl text-gray-700" />
            </span>
            <h2 className=" text-2xl md:text-2xl font-semibold text-center text-gray-800">
              End-customers engaged each month
            </h2>
          </div>

          <span className=" h-[250px] w-0.5 bg-gray-300 lg:block hidden"></span>
          <span className=" w-full h-[1px] bg-gray-300 lg:hidden"></span>

          <div className=" w-full flex flex-col gap-5 items-center px-3 py-7">
            <span className=" py-5">
              <TbProgressCheck className=" text-6xl text-gray-700" />
            </span>
            <h2 className=" text-2xl md:text-2xl font-semibold text-center text-gray-800">
              Messages sent daily around the globe
            </h2>
          </div>

          <span className=" h-[250px] w-0.5 bg-gray-300 lg:block hidden"></span>
          <span className=" w-full h-[1px] bg-gray-300 lg:hidden"></span>

          <div className=" w-full flex flex-col gap-5 items-center px-3 py-7">
            <span className=" py-5">
              <TbProgressCheck className=" text-6xl text-gray-700" />
            </span>
            <h2 className=" text-2xl md:text-2xl font-semibold text-center text-gray-800">
              Omnichannel experiences delivered monthly
            </h2>
          </div>
        </div>
      </div>

      {/* -----------ENGAGE---SECTION------------- */}
      <div className=" w-full bg-gray-50 pt-10 lg:pt-10 2xl:pt-14">
        <EngageParallax />
      </div>

      {/* -----------SCROLL--ANIMATE---SECTION------------- */}
      <div className=" py-12 px-5 lg:px-16 pt-32 ">
        <ScrollAnimate />
      </div>

      {/* -----------FEEDBACK---SECTION------------- */}
      <Feedback />

      {/* -----------BLOGS---SECTION------------- */}
      <Blog />

      {/* -----------SOLUTIONS---SECTION------------- */}
      <Solutions />
    </main>
  );
}
