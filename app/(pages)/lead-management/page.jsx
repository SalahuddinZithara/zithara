"use client";
import HeroCarousel from "@/components/HeroCarousel";
import React from "react";
import img1 from "@/public/eng/cl2.webp";
import img2 from "@/public/eng/cl3.webp";
import img3 from "@/public/eng/cl4.webp";
import img4 from "@/public/eng/cl5.webp";
import Engagement from "@/components/Engagement";
import Solutions from "@/components/Solutions";
const platformItems = [
  {
    id: 1,
    name: "Realise upto 30% lost revenue",
    summary: "Save WalkAway customers and turn them to potential customers!",
    list: [
      {
        id: 1,
        listData: "Every lead is a potential goldmine waiting to be explored",
      },
      {
        id: 2,
        listData: "Prevent leads from slipping through the cracks",
      },
    ],
    path: "/contact",
    img: img1,
  },
  {
    id: 2,
    name: "Sync and Engage FB, Google Ads, Insta and instore leads",
    summary: "Your Leads with Our Unified Platform",
    list: [
      {
        id: 1,
        listData:
          "Perfectly sync leads from various sources including Facebook and Instagram",
      },
      {
        id: 2,
        listData:
          "Engage leads through multiple touchpoints, including WhatsApp and social media",
      },
      {
        id: 3,
        listData:
          "Utilize eye-catching popups for effective engagement on socailchannels",
      },
    ],
    path: "/contact",
    img: img2,
  },
  {
    id: 3,
    name: "Convert Prospects into customers",
    summary: "",
    list: [
      {
        id: 1,
        listData:
          "Change potential leads into customers using Zithara’s personalized engagement channels",
      },
      {
        id: 2,
        listData:
          "Tailored engagement strategies to nurture leads into loyal customers",
      },
      {
        id: 3,
        listData:
          "Cultivate customers who not only value your offerings but also contribute to your overall success",
      },
    ],
    path: "/contact",
    img: img3,
  },
  {
    id: 4,
    name: "One Platform, Endless Opportunities",
    summary: "",
    list: [
      {
        id: 1,
        listData:
          "Experience the power of a Omni Channel paltform for all lead management activities",
      },
      {
        id: 2,
        listData:
          "From capturing to engaging and converting leads, everything happens in one place",
      },
      {
        id: 3,
        listData:
          "Watch your efforts multiply and your business grow as you make the most of every opportunity",
      },
    ],
    path: "/contact",
    img: img4,
  },
];

const LeadManagement = () => {
  return (
    <section className=" w-full min-h-screen">
      {/* ----------HERO---SECTION--------- */}
      <div className=" w-full min-h-[65vh] lg:min-h-[90vh] flex flex-col lg:items-center justify-center gap-3 bg-[#fbfbfb] px-5">
        <h1 className=" font-bold text-[28px] leading-[35px] lg:text-5xl lg:text-center lg:max-w-5xl text-slate-800">
          Never Lose a Lead!
        </h1>
        <p className=" text-gray-800 font-medium lg:text-center lg:text-xl">
          Derive value from all PPC Campaigns: Realize instant ROI with
          Zithara’s Lead Management Platform
        </p>

        <div className=" mt-5">
          <img
            src="/customer-segments/cshero.png"
            className=" w-full lg:w-[700px] lg:h-[50vh] object-cover"
            alt=""
          />
        </div>
      </div>

      {/* ----------HORIZONTAL--SCROLL---SECTION--------- */}
      <div className=" w-full flex flex-col gap-4 py-7 pb-10 md:px-8 lg:px-20">
        <div className=" w-full flex flex-col items-center gap-3.5">
          <h4 className=" text-center mt-2 text-sm lg:text-2xl font-bold lg:text-left px-5">
            Make your mark today by joining 1000+ industry leaders
          </h4>
          <div className="w-full mt-5 overflow-hidden">
            <HeroCarousel />
          </div>
        </div>
      </div>

      {/* ----------EXPLAINATION---SECTION--------- */}
      <div className=" w-full bg-[#f9f9f9] flex flex-col gap-5 py-8 lg:py-16">
        <h1 className=" font-bold text-2xl lg:text-4xl lg:text-center px-5">
          Why our segmentation engine is{" "}
          <span className=" text-blue-800">PREMIUM</span> choice?
        </h1>

        <Engagement items={platformItems} />
      </div>

      {/* ----------PARALLAX---SECTION--------- */}
      <div className="">
        <Solutions />
      </div>
    </section>
  );
};

export default LeadManagement;
