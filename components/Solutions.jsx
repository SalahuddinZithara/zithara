"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { GiDoubleNecklace } from "react-icons/gi";
import { FaSpa } from "react-icons/fa";
import { BsPlugin } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

const solutions = [
  {
    id: 1,
    name: "Jewellery",
    hero: "Zithara.AI is for  visionary Jewellers",
    summary:
      "Much more than a boring CRM: Now  capture, activate, re-engage, and monetize all your customers with CDP.",
    img: "/solutions/ecommerce.webp",
    path: "/",
    logo: "/solutions/jewels.jpg",
    to: "jewelleryRef",
  },
  {
    id: 2,
    name: "Wellness",
    hero: "Zithara.AI is for future focussed Spa's and Salon's",
    summary: "Enhance Customer Loyalty and drive footfalls to your business.",
    img: "/solutions/subscription.webp",
    path: "/",
    logo: "/solutions/jewels.jpg",
    to: "wellnessRef",
  },
  {
    id: 3,
    name: "Electronics",
    hero: "Zithara.AI will change the face of your Electronics business",
    summary:
      "Acquire more customers, engage them in between purchases, monetize them even when they are not shopping with you instore.",
    img: "/solutions/fs.webp",
    path: "/",
    logo: "/solutions/jewels.jpg",
    to: "electronicsRef",
  },
  {
    id: 4,
    name: "Luxury Retail",
    hero: "Zithara.AI is for Luxury retail",
    summary:
      "Capture the interest, nurture the purchase, and keep them engaged.",
    img: "/solutions/gaming.webp",
    path: "/",
    logo: "/solutions/jewels.jpg",
    to: "luxuryRetailRef",
  },
];

const Solutions = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  }, []);

  return (
    <section className=" w-full flex flex-col items-center gap-5 py-14 px-5 lg:px-16 bg-[#f5f5f5]">
      <h1 className="font-bold text-2xl lg:text-4xl text-center max-w-5xl lg:text-center text-slate-800">
        Your Business. Our Solutions.
      </h1>

      <div className=" relative w-full flex flex-col mt-3 h-fit lg:h-[400vh]">
        <div className=" sticky left-0 top-24 w-full flex items-center gap-5 flex-wrap lg:gap-28 my-5 justify-center">
          {solutions.map((item) => {
            const { id, name, to } = item;
            return (
              <Link
                key={id}
                href={"/"}
                duration={500}
                className="font-semibold text-sm"
              >
                {name}
              </Link>
            );
          })}
        </div>
        {solutions.map((item) => {
          const { id, name, path, img, hero, summary, logo, to } = item;
          return (
            <div
              key={id}
              data-aos="fade-up"
              className={`w-full sticky rounded-md shadow-md bg-white ${
                id === 1
                  ? "top-32"
                  : id === 2
                  ? "top-48"
                  : id === 3
                  ? "top-64"
                  : id === 4
                  ? "top-[320px]"
                  : ""
              } left-0 h-[40vh] lg:h-[80vh] gap-5 overflow-hidden border-t mb-5`}
            >
              <div className=" w-full flex flex-col lg:flex-row h-full">
                <div className=" w-full lg:w-[75%]">
                  <h3 className=" font-bold text-xl text-teal-900 px-6 py-5">
                    {name}
                  </h3>
                  <div className=" w-full px-6 py-4 h-full">
                    <img src={img} alt={name} />
                  </div>
                </div>
                <div className=" w-full hidden lg:w-[25%] h-full lg:flex flex-col items-center py-14 gap-10 bg-[#f9f9f9] px-5 lg:px-7">
                  <img src={logo} className=" w-44 rounded-md" alt="img" />

                  <div className=" flex flex-col gap-5">
                    <h1 className=" font-bold text-5xl">5x</h1>
                    <p className=" font-medium text-sm">{summary}</p>
                    <HiArrowNarrowRight className=" text-2xl" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Solutions;
