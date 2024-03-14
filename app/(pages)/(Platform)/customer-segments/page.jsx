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
    name: "Navigate Your Audience's World",
    summary:
      "AI tailors exceptional experiences for B2B and B2C clients, ensuring unique personalization.",
    list: [
      {
        id: 1,
        listData:
          "Pinpoint Precision: RFM filters for resonant audience targeting.",
      },
      {
        id: 2,
        listData:
          "Empathetic Messaging: Reflect preferences, foster connections.",
      },
      {
        id: 3,
        listData:
          "Timed Perfection: Deliver messages at peak engagement moments.",
      },
      {
        id: 4,
        listData:
          "Lasting Bonds: Forge relationships through profound resonance.",
      },
    ],
    path: "/contact",
    img: img1,
  },
  {
    id: 2,
    name: "360° view of customer",
    summary:
      "Extend your reach to new countries and customer segments and evolve sales strategies from a single platform.",
    list: [
      {
        id: 1,
        listData:
          "Immerse in a panoramic customer perspective, blending offline interactions, online behaviour, loyalty program engagement, and feedback.",
      },
      {
        id: 2,
        listData:
          "Link the dots to foster profound connections and insights for enhanced engagement strategies.",
      },
    ],
    path: "/contact",
    img: img2,
  },
  {
    id: 3,
    name: "Discover Behavior Patterns",
    summary:
      "Use powerful developer tools and an API-first, headless solution to innovate quickly.",
    list: [
      {
        id: 1,
        listData:
          "Quickly build customised apps and extend native capabilities with modern development tools and a server less runtime.",
      },
      {
        id: 2,
        listData:
          "Easily integrate or replace third-party services with a flexible API orchestration layer.",
      },
      {
        id: 3,
        listData:
          "Build connected customer experiences across channels with a headless commerce platform.",
      },
    ],
    path: "/contact",
    img: img3,
  },
  {
    id: 4,
    name: "Targeted Campaigns",
    summary: "Bringing Customers Together Through Segmentation",
    list: [
      {
        id: 1,
        listData:
          "Smoothly integrates local stores and virtual carts, enveloping customers in a single, cohesive segmentation.",
      },
      {
        id: 2,
        listData:
          "Shape campaigns resonate with their journey and preferences, fostering personalized connections.",
      },
    ],
    path: "/contact",
    img: img4,
  },
];

const CustomerSegments = () => {
  return (
    <section className=" w-full min-h-screen">
      {/* ----------HERO---SECTION--------- */}
      <div className=" w-full min-h-[65vh] lg:min-h-[90vh] flex flex-col lg:items-center justify-center gap-3 bg-[#fbfbfb] px-5">
        <p className=" text-gray-800 font-medium lg:text-center lg:text-xl">
          Your Pass to Decode Audience Desires
        </p>
        <h1 className=" font-bold text-[28px] leading-[35px] lg:text-5xl lg:text-center lg:max-w-5xl text-slate-800">
          Strategic Insights Reshaping Engagement Success
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

export default CustomerSegments;
