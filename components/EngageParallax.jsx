"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { TbBrandGoogleAnalytics, TbSettingsAutomation } from "react-icons/tb";
import { RiUserSettingsLine } from "react-icons/ri";
import { Layers2, UserRoundCog } from "lucide-react";
import { BsCart2 } from "react-icons/bs";
import { IoGiftOutline } from "react-icons/io5";
import { TiArrowRight } from "react-icons/ti";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import img1 from "@/public/eng/cl2.webp";
import img2 from "@/public/eng/cl3.webp";
import img3 from "@/public/eng/cl4.webp";
import img4 from "@/public/eng/cl5.webp";
import img5 from "@/public/eng/cl1.webp";
const platformItems = [
  {
    id: 1,
    name: "Customer segments & Insightful Analytics",
    summary:
      "Understand your customers with RFM segmentation, Keep them hooked for life with the industry's one-of-a-kind platform that effortlessly analyzes data from every source, all at once.",
    icon: <TbBrandGoogleAnalytics className="text-lg" />,
    path: "/customer-segments",
    img: img1,
  },
  {
    id: 2,
    name: "Omnichannel Lead management",
    summary:
      "Never lose a lead!  curate and retarget  leads  from  Instagram, FB, Instore walk-ins, website visits, Referals, google ads, News paper ads and more.",
    icon: <RiUserSettingsLine className=" text-lg" />,
    path: "/lead-management",
    img: img2,
  },
  {
    id: 3,
    name: "AI-powered Omni channel campaigner",
    summary:
      "Unleash the potential of Omni Channel communications with  EMAIL, SMS or Whatsapp. uncover the pulse of your campaigns, and supercharge your engagement with AI-driven insights to pinpoint your top-performing campaigns.",
    icon: <UserRoundCog size={20} strokeWidth={2} />,
    path: "/omnichannel-campaigner",
    img: img3,
  },
  {
    id: 4,
    name: "Ecommerce website for your Offline business",
    summary:
      "Zithara.AI’s no-code visual builder lets you easily create and E-cmmerce website and see it track the movement of your customers from Offline to Online.",
    icon: <BsCart2 className=" text-lg" />,
    path: "/ecommerce-website",
    img: img4,
  },
  {
    id: 5,
    name: "Customer Journey Automation",
    summary:
      "Craft seamless omnichannel experiences with our AI-powered journey orchestration and optimization platform. Tailor unique experiences based on your customer's interactions with your brand to ensure they engage at the right time and on the right channel.",
    icon: <TbSettingsAutomation className=" text-lg" />,
    path: "/journey-automation",
    img: img5,
  },
  {
    id: 6,
    name: "Rewards and Redemption",
    summary:
      "Transform customer loyalty with with the industry's most configurable system,, crafting instant-reward programs for today's and tomorrow's customers.",
    icon: <IoGiftOutline className=" text-lg" />,
    path: "/rewards",
    img: img1,
  },
  {
    id: 7,
    name: "Customer Data Plaform",
    summary:
      "Zithara.AI is the ultimate retail-focused CDP powerhouse, offering seamless personalization. Everything you need is in one platform, providing an end-to-end CDP solution designed specifically for retail.",
    icon: <Layers2 size={20} strokeWidth={2} />,
    path: "/cdp",
    img: img2,
  },
];

const EngageParallax = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <section className="w-full h-auto md:h-auto rounded-md">
      <h1 className=" text-2xl md:text-3xl w-full lg:text-4xl font-bold text-left lg:text-center px-5 mb-3">
        Unlock Insights, Fuel growth
      </h1>
      <p className=" text-left lg:text-center w-full lg:max-w-4xl mb-10 mx-auto leading-7 px-5">
        Zithara is an AI-driven Customer Engagement platform designed for
        offline retail brands. It empowers marketers and product owners with
        future-focused insights to create omnichannel experiences that consumers
        love
      </p>

      <div className=" relative w-full h-[700vh] space-y-3 ">
        {platformItems.map((item) => {
          const { id, name, img, path, summary } = item;
          return (
            <div
              key={id}
              data-aos="fade-up"
              className=" w-full sticky flex flex-col h-screen left-0 top-0"
            >
              <div className=" w-full h-full relative flex flex-col lg:flex-row">
                <div className=" w-full lg:w-[50%] md:h-[35vh] h-screen lg:h-screen sticky top-0">
                  <Image
                    width="auto"
                    src={img}
                    height="auto"
                    className=" mx-auto object-cover h-[50vh] md:h-[35vh] lg:h-[100vh] w-[100%] "
                    alt={name}
                  />
                  {/* <img src="/eng/cl1.webp" alt="" className="w-full h-screen" /> */}
                </div>
                <div className=" w-full lg:w-[50%] sticky top-0 right-0 h-full md:h-[40vh] lg:h-full flex flex-col gap-7 items-start justify-center px-5 py-5 md:px-8 lg:py-5 pt-10 md:pt-0 lg:px-12 bg-white 2xl:pl-20">
                  <h3 className=" text-xl md:text-3xl font-bold text-left md:max-w-lg 2xl:max-w-lg ">
                    {name}
                  </h3>
                  <p className=" text-sm text-left max-w-md">{summary}</p>
                  <Link
                    href={path}
                    className=" group flex items-center gap-1.5 "
                  >
                    <p className=" text-sm text-blue-800 font-medium border-b border-b-blue-800">
                      Learn More
                    </p>{" "}
                    <span className=" w-6 rounded-full bg-gray-100 flex items-center justify-center h-6 text-black group-hover:translate-x-0.5 duration-300">
                      <TiArrowRight className=" text-lg" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default EngageParallax;
