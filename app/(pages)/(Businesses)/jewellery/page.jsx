"use client";
import HeroCarousel from "@/components/HeroCarousel";
import React from "react";
import img1 from "@/public/eng/cl2.webp";
import img2 from "@/public/eng/cl3.webp";
import img3 from "@/public/eng/cl4.webp";
import img4 from "@/public/eng/cl5.webp";
import Engagement from "@/components/Engagement";
import ScrollAnimate from "@/components/ScrollAnimate";
const platformItems = [
  {
    id: 1,
    name: "Go Beyond Touch Points",
    summary: "Enabling B2B and B2C Leads to Script Their Own Success Saga",
    list: [
      {
        id: 1,
        listData:
          "Tailored Experiences: Craft personalized experiences for customers",
      },
      {
        id: 2,
        listData:
          "Flexible Promotions: Adapt to changing market dynamics with ease",
      },
      {
        id: 3,
        listData:
          "Ever Lasting Connections: Build enduring brand-customer relationships",
      },
    ],
    path: "/contact",
    img: img1,
  },
  {
    id: 2,
    name: "Crafting Loyalty, Crafted for You",
    summary: "Your Leads with Our Unified Platform",
    list: [
      {
        id: 1,
        listData: "Loyalty Tailored to You: Creating Personal Connections",
      },
      {
        id: 2,
        listData:
          "Keeping the Joy Alive: Tailored Experiences for Ongoing Delight",
      },
      {
        id: 3,
        listData:
          "Present and Future United: Loyalty Programs That Speak to Your Customers",
      },
    ],
    path: "/contact",
    img: img2,
  },
  {
    id: 3,
    name: "Flexible Promotions, Endless Possibilities",
    summary: "",
    list: [
      {
        id: 1,
        listData: "Unleash Your Imagination: Our Loyalty System Opens Doors",
      },
      {
        id: 2,
        listData:
          "Campaigns That Spark Excitement: Crafting Memorable Customer Experiences",
      },
      {
        id: 3,
        listData: "Leaving a Mark: Unconventional Loyalty That Stays with You",
      },
    ],
    path: "/contact",
    img: img3,
  },
  {
    id: 4,
    name: "Personalisation for Impact",
    summary: "",
    list: [
      {
        id: 1,
        listData:
          "Deeper Connections: Personalization that Wows Loyal Customers",
      },
      {
        id: 2,
        listData:
          "Speaking Their Language: Rewards that Truly Understand and Delight",
      },
      {
        id: 3,
        listData:
          "Magic of a Personal Touch: Boosting Loyalty and Engagement with Care",
      },
    ],
    path: "/contact",
    img: img4,
  },
];

const Jewellery = () => {
  return (
    <section className=" w-full min-h-screen">
      {/* ----------HERO---SECTION--------- */}
      <div className=" w-full min-h-[65vh] lg:min-h-[90vh] flex flex-col lg:items-center justify-center gap-3 bg-[#fbfbfb] px-5 py-3">
        <h1 className=" font-bold text-[28px] leading-[37px] lg:text-5xl lg:text-center lg:max-w-5xl text-slate-800">
          Zithara.AI is for visionary Jewellers
        </h1>
        <p className=" text-gray-800 font-medium lg:text-center lg:text-lg max-w-3xl">
          Much more than a boring CRM: Now capture, activate , re-engage, and
          monetize all your customers with CDP ( Customer Data Platform)
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
      <div className=" w-full">
        <ScrollAnimate />
      </div>
    </section>
  );
};

export default Jewellery;
