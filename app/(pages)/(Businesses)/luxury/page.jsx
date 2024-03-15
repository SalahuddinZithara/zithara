"use client";
import HeroCarousel from "@/components/HeroCarousel";
import React from "react";
import img1 from "@/public/eng/cl2.webp";
import img2 from "@/public/eng/cl3.webp";
import img3 from "@/public/eng/cl4.webp";
import img4 from "@/public/eng/cl5.webp";
import Engagement from "@/components/Engagement";
import ScrollAnimate from "@/components/ScrollAnimate";
import BookNow from "@/components/BookNow";
import Contact from "@/components/Contact";
const platformItems = [
  {
    id: 1,
    type: "Lead Management",
    name: "Turn your Leads into Customers",
    summary: "An innovative, all access lead management solution",
    detail:
      "As a retailer,  we understand the huge lead time to convert a lead to a customer we empower your sales personnel to enter lead details using a frictionles app. buying interest, product category, customer data, .. Our retail Lead management solution puts real marketing leverage in your hands as your traverse the lead journey of your customer.",
    path: "/lead-management",
    img: img1,
  },
  {
    id: 2,
    type: "Customer Segments",
    name: "Understand your VIP’s, loyal, About to drop off and Dorment customers with RFM",
    summary: "Customers jump segments, capture them real time",
    detail:
      "With RFM Machine learning algorithm  that segments customers, so that  you can send tailored messages to customers  who are your VIP’s, Loyal or who've forgotten about you. Automatic reminders or one-off whatsapp campaigns - the choice is yours. Keep them coming back for more with targeted promotions!",
    path: "/customer-segments",
    img: img2,
  },
  {
    id: 3,
    type: "E-Commerce Website",
    name: "Build your online visibility - Digital transformation",
    summary: "And take your offline business to the next level",
    detail:
      "With the Zithara.AI, You can instantly create your online presence via the ecommerce website  to generate a maximum number of customer repats on the platform of your choice Instore or online. Be accessible to yourcustomers in between the store purchases, nudge them to  buy more with you. Boost your online visibility and generate much more sales.",
    path: "/ecommerce-website",
    img: img3,
  },
  {
    id: 4,
    type: "Omni Channel Campaigner",
    name: "Keep your customers coming back with Whatsapp",
    summary: "Be where your customers are- Whatsapp",
    detail:
      "You can use your customer database to send automated reminders (depending on the stage of the customer journey) or one-off campaigns. The enriched database enables you to target your campaigns as effectively as possible, so you can send the right message to the right person at the right time. Use our message templates to create tailor-made loyalty campaigns on SMS/ WhatsApp/ Email with proven effectiveness.",
    path: "/omnichannel-campaigner",
    img: img4,
  },
];

const Luxury = () => {
  return (
    <section className=" w-full min-h-screen">
      {/* ----------HERO---SECTION--------- */}
      <div className=" w-full min-h-[65vh] lg:min-h-[90vh] flex flex-col lg:items-center justify-center gap-3 bg-[#fbfbfb] px-5 py-3">
        <h1 className=" font-bold text-[28px] leading-[37px] lg:text-5xl lg:text-center lg:max-w-5xl text-slate-800">
          Zithara.AI is for Luxury retail
        </h1>
        <p className=" text-gray-800 font-medium lg:text-center lg:text-lg max-w-3xl">
          Capture the interest, nurture the purchase, and keep them engaged
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

      {/* ----------BOOK-NOW--SECTION--------- */}
      <div className="">
        <Contact />
      </div>
    </section>
  );
};

export default Luxury;
