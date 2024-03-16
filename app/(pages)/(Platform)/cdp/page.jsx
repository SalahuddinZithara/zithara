"use client";
import HeroCarousel from "@/components/HeroCarousel";
import Engagement from "@/components/Engagement";
import Solutions from "@/components/Solutions";
import { platformItems } from "./platform";

const Rewards = () => {
  return (
    <section className=" w-full min-h-screen">
      {/* ----------HERO---SECTION--------- */}
      <div className=" w-full min-h-[65vh] lg:min-h-[90vh] flex flex-col lg:items-center justify-center gap-3 bg-[#fbfbfb] px-5">
        <h1 className=" font-bold text-[28px] leading-[37px] lg:text-5xl lg:text-center lg:max-w-5xl text-slate-800">
          Customer Insights on Demand
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
