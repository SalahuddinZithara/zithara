"use client";
import React, { useState } from "react";
import Image from "next/image";
import { TbBrandGoogleAnalytics, TbSettingsAutomation } from "react-icons/tb";
import { RiUserSettingsLine } from "react-icons/ri";
import { Layers2, UserRoundCog } from "lucide-react";
import { BsCart2 } from "react-icons/bs";
import { IoGiftOutline } from "react-icons/io5";
import { TiArrowRight } from "react-icons/ti";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import img1 from "@/public/eng/cl2.webp";
import img2 from "@/public/eng/cl3.webp";
import img3 from "@/public/eng/cl4.webp";
import img4 from "@/public/eng/cl5.webp";
import img5 from "@/public/eng/cl1.webp";
const platformItems = [
  {
    id: 1,
    name: "Customer segments & Insightful Analytics",
    summary:
      "Understand and evaluate customers; alert, update, and communicate with them ",
    icon: <TbBrandGoogleAnalytics className="text-lg" />,
    path: "/",
    img: img1,
  },
  {
    id: 2,
    name: "New age Omnichannel Lead management to bar none",
    summary:
      "Never lose a lead!  curate and retarget  leads  from  Instagram, FB, Instore walk-ins, website visits, Referals, google ads, News paper ads and more.",
    icon: <RiUserSettingsLine className=" text-lg" />,
    path: "/",
    img: img2,
  },
  {
    id: 3,
    name: "AI-powered Omni channel campaigner",
    summary:
      "Optimize interactions and improve ROI with Zithara.AI Use multi mode communication on EMAIL, SMA or Whatsapp.",
    icon: <UserRoundCog size={20} strokeWidth={2} />,
    path: "/",
    img: img3,
  },
  {
    id: 4,
    name: "E-commerce, App Commerce or In-store",
    summary:
      "Zithara.AI Enables you take your retail business to e-commerce store, App-based store and In Store.",
    icon: <BsCart2 className=" text-lg" />,
    path: "/",
    img: img4,
  },
  {
    id: 5,
    name: "Customer Journey Automation",
    summary:
      "Build relevant customer experiences at every stage using Generative AI ",
    icon: <TbSettingsAutomation className=" text-lg" />,
    path: "/",
    img: img5,
  },
  {
    id: 6,
    name: "New-age Reward and Redemption",
    summary:
      "Industry’s Most Configurable Loyalty System to Craft Programs for Ultimate Customer Delight",
    icon: <IoGiftOutline className=" text-lg" />,
    path: "/",
    img: img1,
  },
  {
    id: 7,
    name: "New-age CDP",
    summary: "A retail-focused CDP powerhouse for effortless Personalisation",
    icon: <Layers2 size={20} strokeWidth={2} />,
    path: "/",
    img: img2,
  },
];

const EngageParallax = () => {
  return (
    <section className=" relative w-full h-[500vh] ">
      <div className=" w-full sticky flex flex-col h-screen  left-0 top-0">
        <div className=" w-full h-full relative flex">
          <div className=" w-[50%] h-screen sticky top-0">
            <img src="/eng/cl1.webp" alt="" className="w-full h-screen" />
          </div>
          <div className=" w-[50%] sticky top-0 right-0 h-full flex items-center justify-center bg-indigo-200 p-5"></div>
        </div>
      </div>

      <div className=" sticky z-10 w-full flex flex-col h-screen  left-0 top-[100vh]">
        <div className=" w-full h-full relative flex">
          <div className=" w-[50%] h-screen sticky top-0">
            <img src="/eng/cl2.webp" alt="" className="w-full h-screen" />
          </div>
          <div className=" w-[50%] sticky top-0 right-0 h-full flex items-center justify-center bg-indigo-200 p-5"></div>
        </div>
      </div>
    </section>
  );
};

export default EngageParallax;

{
  {
    /* <div className=" w-full sticky left-0 top-0 h-screen font-bold text-4xl flex items-center"> */
    /* </div> */
  }
}
{
  /* {platformItems.map((item) => {
        const { id, name, img, path, summary } = item;
        return (
            <div></div>
        );
      })} */
}
