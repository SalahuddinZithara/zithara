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
    name: "Lifting Your Marketing Game",
    summary:
      "We’re breaking the B2B and B2C boundaries to facilitate dynamic conversations that engage and convert",
    list: [
      {
        id: 1,
        listData:
          "Zithara’s AI-powered WhatsApp, Emails or SMS crafts a unique journey for every customer.",
      },
      {
        id: 2,
        listData:
          "These campaigns are designed to establish authentic connections, nurture participation, and ultimately deliver significant results.",
      },
    ],
    path: "/contact",
    img: img1,
  },
  {
    id: 2,
    name: "Your Campaign, Your Way",
    summary: "Take Your Store to WhatsApp – Where Your Shoppers Hang Out",
    list: [
      {
        id: 1,
        listData: "Tailoring Campaigns for Your Audience",
      },
      {
        id: 2,
        listData:
          "Personalized Rewards for ever-lasting Engagement. With AI-Driven Conversations",
      },
    ],
    path: "/contact",
    img: img2,
  },
  {
    id: 3,
    name: "Insights that Drive Growth",
    summary: "Your Roadmap to Data-Driven Marketing Excellence",
    list: [
      {
        id: 1,
        listData: "Gain deep campaign performance insights",
      },
      {
        id: 2,
        listData: "Refine strategies with data-driven analytics",
      },
    ],
    path: "/contact",
    img: img3,
  },
  {
    id: 4,
    name: "Simplified Automation, Maximum Impact",
    summary:
      "Your One-Stop Solution for Making B2B and B2C Conversations Easier",
    list: [
      {
        id: 1,
        listData: "Zithara is for both beginners and experienced marketers",
      },
      {
        id: 2,
        listData: "It’s easy to create effective campaigns",
      },
      {
        id: 3,
        listData: "Get real-time results of your campaign",
      },
    ],
    path: "/contact",
    img: img4,
  },
];

const JourneyAutomation = () => {
  return (
    <section className=" w-full min-h-screen">
      {/* ----------HERO---SECTION--------- */}
      <div className=" w-full min-h-[65vh] lg:min-h-[90vh] flex flex-col lg:items-center justify-center gap-3 bg-[#fbfbfb] px-5">
        {/* <p className=" text-gray-800 font-medium lg:text-center lg:text-xl">
          Your Pass to Decode Audience Desires
        </p> */}
        <h1 className=" font-bold text-[28px] leading-[35px] lg:text-5xl lg:text-center lg:max-w-5xl text-slate-800">
          Precision Strategies for Accelerated Success
        </h1>

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

export default JourneyAutomation;
