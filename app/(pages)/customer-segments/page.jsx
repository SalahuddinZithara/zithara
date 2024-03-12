"use client";
import HeroCarousel from "@/components/HeroCarousel";
import React from "react";
const customerViewData = [
  {
    id: 1,
    title: "Increased Granularity",
    value: "7x Data Points",
    img: "",
  },
  {
    id: 2,
    title: "Extended Data Lookback",
    value: "3+ Years",
    img: "",
  },
  {
    id: 3,
    title: "Informed Decision Making",
    value: "100+ Reports",
    img: "",
  },
];

const CustomerSegments = () => {
  return (
    <section className=" w-full min-h-screen">
      {/* ----------HERO---SECTION--------- */}
      <div className=" w-full min-h-[90vh] flex flex-col items-center justify-center gap-3 bg-[#fbfbfb] ">
        <p className=" text-gray-800 font-medium text-center text-xl">
          CleverTap All-In-One Engagement Platform
        </p>
        <h1 className=" font-bold text-6xl text-center max-w-5xl text-slate-800">
          Drive Engagement with Customer Data and Analytics
        </h1>

        <div className=" mt-5">
          <img
            src="/customer-segments/cshero.png"
            className=" w-[700px] h-[50vh] object-cover"
            alt=""
          />
        </div>
      </div>

      {/* ----------HORIZONTAL--SCROLL---SECTION--------- */}
      <div className=" w-full flex flex-col gap-4 py-7 pb-10 md:px-5 lg:px-20">
        <div className=" w-full flex flex-col items-center gap-3.5">
          <h4 className=" text-center mt-2 text-sm lg:text-2xl font-bold lg:text-left">
            Make your mark today by joining 1000+ industry leaders
          </h4>
          <div className="w-full mt-5 overflow-hidden">
            <HeroCarousel />
          </div>
        </div>
      </div>

      {/* ----------360--CUSTOMER--VIEW---SECTION--------- */}
      <div className=" flex gap-5 md:px-5 lg:px-20 min-h-[90vh] bg-[#eff0f2] items-center ">
        <div className=" flex flex-col gap-3 w-[50%]">
          <h1 className="font-bold text-6xl  text-indigo-900">
            Build a 360° Customer View
          </h1>
          <p className=" text-lg">
            and Unlock Actionable Insights in Real-time
          </p>
        </div>
        <div className=" w-[50%]">
          <img
            src="/customer-segments/360cv.webp"
            alt=""
            className=" w-full h-full"
          />
        </div>
      </div>

      <div className=" w-full md:px-5 lg:px-20 bg-[#eff0f2] pb-10">
        <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 ">
          {customerViewData.map((item) => {
            const { id, title, value, img } = item;
            return (
              <div
                key={id}
                className=" w-full h-[250px] p-5 bg-white rounded-sm shadow-sm"
              >
                <p className=" font-medium text-lg">{title}</p>
                <h1 className=" font-extrabold text-3xl">{value}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CustomerSegments;
