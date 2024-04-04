"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CiBookmarkCheck } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { TbProgressCheck } from "react-icons/tb";
import ScrollAnimate from "@/components/ScrollAnimate";
import HeroCarousel from "@/components/HeroCarousel";
import EngageParallax from "@/components/EngageParallax";
import Link from "next/link";
import Feedback from "@/components/Feedback";
import Blog from "@/components/Blog";
import Solutions from "@/components/Solutions";
import ModalVideo from "react-modal-video";
import { useState } from "react";
import BookDemoModal from "@/components/BookDemoModal";

export default function Home() {
  const [openBookModal, setOpenBookModal] = useState(false);

  return (
    <main className="flex flex-col min-h-screen w-full">
      {/* -----------HERO---SECTION------------- */}
      <div className=" w-full h-auto py-7 lg:py-0 lg:min-h-[86vh] flex flex-col lg:flex-row items-center md:items-start lg:items-center justify-between gap-10 px-5 md:px-8 lg:px-16 2xl:px-40">
        <div className=" flex flex-col gap-5 lg:gap-7 w-full lg:w-[50%]">
          <h2 className=" text-2xl md:text-3xl leading-9 lg:text-[42px] lg:leading-[51px] font-bold">
            India’s <span className=" text-blue-800">fastest</span> growing{" "}
            <span className=" text-blue-800">AI-driven</span> Customer Data
            platform for Visionary Retailers!
          </h2>
          <p className=" mt-1 lg:mt-0">
            Harness Zithara’s All-In-One engagement platform to unify customer
            data, gain insights, and personalize marketing across SMS, Email,
            Whatsapp, and Instagram, delighting loyal customers.
          </p>

          <div className=" w-full flex items-center gap-3 md:gap-4 mt-3 lg:mt-3">
            <span onClick={() => setOpenBookModal(true)}>
              <Button className=" bg-blue-800 hover:bg-blue-900 duration-200 flex w-[50%] md:w-[150px] items-center gap-1 text-white rounded-sm ">
                <CiBookmarkCheck className=" text-xl" />
                <p className="font-semibold ">Book A Demo</p>
              </Button>
            </span>
            <Link href={"/contact"}>
              <Button className=" bg-black flex md:w-[150px] w-[50%] items-center gap-1.5 text-white rounded-sm ">
                <IoCallOutline className=" text-lg" />
                <p className="font-semibold ">Talk to Us</p>
              </Button>
            </Link>
          </div>
        </div>
        <div className=" w-full md:w-[60%] lg:w-[40%] h-auto mt-3">
          <Image
            alt="hero-image"
            src="/home/Hero.webp"
            className=" w-auto h-auto"
            width={400}
            height={400}
          />
        </div>
      </div>

      {/* -----------HORIZONTAL---SCROLL---SECTION------------- */}
      <div className=" w-full flex flex-col gap-3 py-7 md:px-5 lg:px-28 bg-gray-100">
        <div className=" w-full flex flex-col items-center gap-2">
          <h2 className=" px-5 lg:px-0 text-blue-950 text-left lg:text-left font-bold text-2xl md:text-3xl leading-8 lg:text-3xl">
            Where Founders and Marketers Unite
          </h2>
          <h4 className=" px-5 lg:px-0 font-medium text-left mt-2 text-sm lg:text-base lg:text-left">
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

      {/* -----------SOLUTIONS---SECTION------------- */}
      <Solutions />

      {/* -----------FEEDBACK---SECTION------------- */}
      <Feedback />

      {/* -----------BLOGS---SECTION------------- */}
      <Blog />

      {/* <ModalVideo /> */}
      <BookDemoModal openModal={openBookModal} closeModal={setOpenBookModal} />
    </main>
  );
}
