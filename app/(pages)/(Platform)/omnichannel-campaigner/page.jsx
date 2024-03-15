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
    name: "Drip Marketing Game with Omni channel  Magic",
    summary:
      "Drip by Drip, Craft Your Brand’s Epic Saga with WhatsApp, SMS, or EMAIL",
    list: [
      {
        id: 1,
        listData: "Crafting Compelling WhatsApp Promotions",
      },
      {
        id: 2,
        listData: "Nurturing Customer Loyalty through Whatsapp Drip Campaigns",
      },
      {
        id: 3,
        listData: "Elevating Customer Satisfaction through Strategic Messaging",
      },
    ],
    path: "/contact",
    img: img1,
  },
  {
    id: 2,
    name: "Craft Moments, Not Just Messages",
    summary: "Breaking the B2C Boundaries for Dynamic Conversations",
    list: [
      {
        id: 1,
        listData: "Reconnect with Authentic Conversations",
      },
      {
        id: 2,
        listData:
          "Experience Zithara’s WhatsApp for Business Connect on a Personal Level",
      },
      {
        id: 3,
        listData: "Rediscover Authentic  Customer Engagement",
      },
    ],
    path: "/contact",
    img: img2,
  },
  {
    id: 3,
    name: "Your E-Commerce Playground on WhatsApp",
    summary: "Take Your Store to WhatsApp – Where Your Shoppers Hang Out",
    list: [
      {
        id: 1,
        listData: "Artistic Product Catalogues: Your Digital Storefront",
      },
      {
        id: 2,
        listData: "Bringing Your Store to Where Shoppers Are: WhatsApp",
      },
      {
        id: 3,
        listData: "WhatsApp: Your E-commerce Store’s New Home",
      },
      {
        id: 4,
        listData: "Payment Magic: Seamlessly, Securely, Swiftly",
      },
    ],
    path: "/contact",
    img: img3,
  },
  {
    id: 4,
    name: "Fusing Human Touch with Automation",
    summary: "All-in-One Hub for Smoother B2C Conversations",
    list: [
      {
        id: 1,
        listData: "The Perfect Blend: Human and Bot Support",
      },
      {
        id: 2,
        listData: "24/7 Customer Support That Never Takes a Bow",
      },
      {
        id: 3,
        listData: "Live Chat with Multiple Agents",
      },
      {
        id: 4,
        listData: "Crafting Moments that Make Every Customer Feel Special",
      },
    ],
    path: "/contact",
    img: img4,
  },
];

const Rewards = () => {
  return (
    <section className=" w-full min-h-screen">
      {/* ----------HERO---SECTION--------- */}
      <div className=" w-full min-h-[65vh] lg:min-h-[90vh] flex flex-col lg:items-center justify-center gap-3 bg-[#fbfbfb] px-5">
        <h1 className=" font-bold text-[28px] leading-[37px] lg:text-5xl lg:text-center lg:max-w-5xl text-slate-800">
          New Era of Customer Engagement
        </h1>
        {/* <p className=" text-gray-800 font-medium lg:text-center lg:text-xl">
          Derive value from all PPC Campaigns: Realize instant ROI with
          Zithara’s Lead Management Platform
        </p> */}

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
      <div className=" w-full bg-[#f9f9f9] flex flex-col gap-5 pt-8 lg:pt-16">
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

export default Rewards;
