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
    name: "Build customer loyalty",
    summary: "Reward program to match your image",
    detail:
      "Using Industry's most configurable Reward program, Strengthen your customer loyalty with a rewards program that reflects your image. With every visit, your customers earn points - and you learn a little more about their habits",
    path: "/rewards",
    img: img1,
  },
  {
    id: 2,
    name: "Keep them coming back with Whatsapp messages",
    summary: "Our well-targeted campaigns are more effective than ever",
    detail:
      "Use the information collected to launch Whatsapp campaigns tailored to each profile. Win back dormant customers, celebrate birthdays, reward regulars, drive experiences.",
    path: "/omnichannel-campaigner",
    img: img2,
  },
  {
    id: 3,
    name: "Boost your Google reviews",
    summary: "Maintain higher NPS score",
    detail:
      "Ensure you ask the Feedback at the right time using the right medium  - Whatsapp! see that boost your Google reviews. It's accessible via a link, which you can turn into a QR code and display everywhere: on the counter, in front of customers during appointments, on social networks.",
    path: "/feedback",
    img: img3,
  },
  {
    id: 4,
    name: "Understand your VIP’s, loyal, About to drop off and Dorment customers with RFM",
    summary: "Customers jump segments, capture them real time",
    detail:
      "With RFM Machine learning algorithm  that segments customers, so that  you can send tailored messages to customers  who are your VIP’s, Loyal or who've forgotten about you. Automatic reminders or one-off whatsapp campaigns - the choice is yours. Keep them coming back for more with targeted promotions!",
    path: "/customer-segments",
    img: img4,
  },
];

const Wellness = () => {
  return (
    <section className=" w-full min-h-screen">
      {/* ----------HERO---SECTION--------- */}
      <div className=" w-full min-h-[65vh] lg:min-h-[90vh] flex flex-col lg:items-center justify-center gap-3 bg-[#fbfbfb] px-5 py-3">
        <h1 className=" font-bold text-[28px] leading-[37px] lg:text-5xl lg:text-center lg:max-w-5xl text-slate-800">
          Zithara.AI is for future focussed Spa’s and Salon’s
        </h1>
        <p className=" text-gray-800 font-medium lg:text-center lg:text-lg max-w-3xl">
          Enhance Customer Loyalty and drive footfalls to your business
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

        <Engagement items={platformItems} category="business" />
      </div>

      {/* ----------PARALLAX---SECTION--------- */}
      <div className="">
        <ScrollAnimate />
      </div>
    </section>
  );
};

export default Wellness;
