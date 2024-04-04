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
    name: "Empowering User-Driven Growth.",
    summary: "Melody of Accomplishment: Enriched Experiences in B2B and B2C.",
    list: [
      {
        id: 1,
        listData:
          "Shift from one-way communication to collaborative expansion.",
      },
      {
        id: 2,
        listData: "The Evolution: From Buyers to loyal customers.",
      },
      {
        id: 3,
        listData: "Crafting Brand Advocates through Exceptional Experiences.",
      },
    ],
    path: "/contact",
    img: img1,
  },
  {
    id: 2,
    name: "Deep Dive into Insights",
    summary:
      "Discover how Midas Touch listens to your desires through customization.",
    list: [
      {
        id: 1,
        listData:
          "Discovering Hidden Treasures with Exclusive Feedback Features.",
      },
      {
        id: 2,
        listData: "Illuminating User Needs, Desires, and Pains.",
      },
      {
        id: 3,
        listData: "Sculpting Offerings to Perfection.",
      },
    ],
    path: "/contact",
    img: img2,
  },
  {
    id: 3,
    name: "Smart Referrals, Bigger Impact",
    summary: "WhatsApp amplifies influence with word-of-mouth magic.",
    list: [
      {
        id: 1,
        listData: "Smart Referrals in action.",
      },
      {
        id: 2,
        listData: "WhatsApp for Smart Referrals.",
      },
      {
        id: 3,
        listData: "Reaching wider audiences and unlocking new avenues.",
      },
    ],
    path: "/contact",
    img: img3,
  },
  {
    id: 4,
    name: "Transforming Satisfied Customers",
    summary:
      "The Currency of Success for Satisfied Customers in Both B2B & B2C.",
    list: [
      {
        id: 1,
        listData:
          "Elevating Satisfied Customers to Champions by going beyond transactions.",
      },
      {
        id: 2,
        listData: "Implementing Smart Feedback Loops.",
      },
      {
        id: 3,
        listData: "Strategic Referral Programs in Action.",
      },
    ],
    path: "/contact",
    img: img4,
  },
];

const Feedback = () => {
  return (
    <section className=" w-full min-h-screen">
      {/* ----------HERO---SECTION--------- */}
      <div className=" w-full min-h-[65vh] lg:min-h-[90vh] flex flex-col lg:items-center justify-center gap-3 bg-[#fbfbfb] px-5">
        <h1 className=" font-bold text-[28px] leading-[35px] lg:text-5xl lg:text-center lg:max-w-5xl text-slate-800">
          Take the guesswork out of customer happiness
        </h1>
        <p className=" text-gray-800 lg:text-center lg:text-lg max-w-4xl">
          Your customers are the most important part of your company — and
          listening to them is one of the most powerful ways to grow your
          business
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
      <div className=" w-full bg-[#f9f9f9] flex flex-col gap-5 pt-8 lg:pt-16">
        <h1 className=" font-bold text-2xl lg:text-4xl lg:text-center px-5">
          Why our platform is <span className=" text-blue-800">PREMIUM</span>{" "}
          choice?
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

export default Feedback;
