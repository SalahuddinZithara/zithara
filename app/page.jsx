"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { equalSplitArray, splitArray } from "@/lib/utils";
const carouselItems = [
  {
    id: 1,
    name: "",
    img: "/vc/vc1.png",
  },
  {
    id: 2,
    name: "",
    img: "/vc/vc2.png",
  },
  {
    id: 3,
    name: "",
    img: "/vc/vc3.png",
  },
  {
    id: 4,
    name: "",
    img: "/vc/vc4.png",
  },
  {
    id: 5,
    name: "",
    img: "/vc/vc5.png",
  },
  {
    id: 6,
    name: "",
    img: "/vc/vc6.png",
  },
  {
    id: 7,
    name: "",
    img: "/vc/vc7.png",
  },
  {
    id: 8,
    name: "",
    img: "/vc/vc8.png",
  },
  {
    id: 9,
    name: "",
    img: "/vc/vc9.png",
  },
  {
    id: 10,
    name: "",
    img: "/vc/vc10.png",
  },
  {
    id: 11,
    name: "",
    img: "/vc/vc11.png",
  },
  {
    id: 12,
    name: "",
    img: "/vc/vc12.png",
  },
  {
    id: 13,
    name: "",
    img: "/vc/vc13.png",
  },
  {
    id: 14,
    name: "",
    img: "/vc/vc14.png",
  },
  {
    id: 15,
    name: "",
    img: "/vc/vc15.png",
  },
  {
    id: 16,
    name: "",
    img: "/vc/vc16.png",
  },
  {
    id: 17,
    name: "",
    img: "/vc/vc17.png",
  },
  {
    id: 18,
    name: "",
    img: "/vc/vc18.png",
  },
  {
    id: 19,
    name: "",
    img: "/vc/vc19.png",
  },
  {
    id: 20,
    name: "",
    img: "/vc/vc20.png",
  },
  {
    id: 21,
    name: "",
    img: "/vc/vc21.png",
  },
  {
    id: 22,
    name: "",
    img: "/vc/vc22.png",
  },
  {
    id: 23,
    name: "",
    img: "/vc/vc23.png",
  },
  {
    id: 24,
    name: "",
    img: "/vc/vc24.png",
  },
  {
    id: 25,
    name: "",
    img: "/vc/vc25.png",
  },
  // {
  //   id: 26,
  //   name: "",
  //   img: "/vc/vc26.png",
  // },
];
import { CiBookmarkCheck } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import {
  TbBrandGoogleAnalytics,
  TbProgressCheck,
  TbSettingsAutomation,
} from "react-icons/tb";
import hero from "@/public/hero1.svg";
import ScrollAnimate from "@/components/ScrollAnimate";
import {
  ArrowBigRight,
  Gift,
  Layers2,
  ShoppingBag,
  UserRoundCog,
  Users,
} from "lucide-react";
import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";
import { RiUserSettingsLine } from "react-icons/ri";
import { BsCart2 } from "react-icons/bs";
import { IoGiftOutline } from "react-icons/io5";

const platformItems = [
  {
    id: 1,
    name: "Customer segments & Insightful Analytics",
    summary:
      "Understand and evaluate customers; alert, update, and communicate with them ",
    icon: <TbBrandGoogleAnalytics className="text-lg" />,
    path: "/",
  },
  {
    id: 2,
    name: "New age Omnichannel Lead management to bar none",
    summary:
      "Never lose a lead!  curate and retarget  leads  from  Instagram, FB, Instore walk-ins, website visits, Referals, google ads, News paper ads and more.",
    icon: <RiUserSettingsLine className=" text-lg" />,
    path: "/",
  },
  {
    id: 3,
    name: "AI-powered Omni channel campaigner",
    summary:
      "Optimize interactions and improve ROI with Zithara.AI Use multi mode communication on EMAIL, SMA or Whatsapp.",
    icon: <UserRoundCog size={20} strokeWidth={2} />,
    path: "/",
  },
  {
    id: 4,
    name: "E-commerce, App Commerce or In-store",
    summary:
      "Zithara.AI Enables you take your retail business to e-commerce store, App-based store and In Store.",
    icon: <BsCart2 className=" text-lg" />,
    path: "/",
  },
  {
    id: 5,
    name: "Customer Journey Automation",
    summary:
      "Build relevant customer experiences at every stage using Generative AI ",
    icon: <TbSettingsAutomation className=" text-lg" />,
    path: "/",
  },
  {
    id: 6,
    name: "New-age Reward and Redemption",
    summary:
      "Industry’s Most Configurable Loyalty System to Craft Programs for Ultimate Customer Delight",
    icon: <IoGiftOutline className=" text-lg" />,
    path: "/",
  },
  {
    id: 7,
    name: "New-age CDP",
    summary: "A retail-focused CDP powerhouse for effortless Personalisation",
    icon: <Layers2 size={20} strokeWidth={2} />,
    path: "/",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full">
      {/* -----------HERO---SECTION------------- */}
      <div className=" w-full h-auto py-7 lg:py-0 lg:min-h-[85vh] flex flex-col lg:flex-row items-center justify-between gap-10 px-5 lg:px-16">
        <div className=" flex flex-col gap-5 lg:gap-7 w-full lg:w-[50%]">
          <h2 className=" text-3xl leading-9 lg:text-[42px] lg:leading-[51px] font-bold">
            India’s <span className=" text-blue-800">fastest</span> growing{" "}
            <span className=" text-blue-800">AI-driven</span> platform for
            Future Focused Retail growth
          </h2>
          <p className=" mt-1 lg:mt-0">
            {/* Create personalized experiences to retain your most valuable
            customers, forever, with Zithara’s All-In-One engagement platform. */}
            Unify customer data, generate insights, personalise marketing
            communications across SMS, Email, Whatsapp & Instagram to delight
            your loyal customers with Zithara’s All-In-One engagement platform.
          </p>

          <div className=" w-full flex items-center gap-4 mt-3 lg:mt-3">
            <Button className=" bg-blue-800 flex w-[150px] items-center gap-1 text-white rounded-sm ">
              <CiBookmarkCheck className=" text-xl" />
              <p className="font-semibold ">Book A Demo</p>
            </Button>
            <Button className=" bg-black flex w-[150px] items-center gap-1.5 text-white rounded-sm ">
              <IoCallOutline className=" text-xl" />
              <p className="font-semibold ">Talk to Us</p>
            </Button>
          </div>
        </div>
        <div className=" w-full md:w-[40%] mt-3">
          <Image src={hero} width={400} height={400} />
        </div>
      </div>

      {/* -----------HORIZONTAL---SCROLL---SECTION------------- */}
      <div className=" w-full flex flex-col gap-3 py-7 px-5 lg:px-28 bg-gray-100">
        <div className=" w-full flex flex-col items-center gap-2">
          <h2 className=" text-center lg:text-left font-bold text-[28px] leading-8 lg:text-3xl">
            Where Founders and Marketers Unite
          </h2>
          <h4 className=" font-medium text-center mt-2 text-sm lg:text-base lg:text-left">
            Make your mark today by joining 1000+ industry leaders
          </h4>

          <div className="w-full mt-5 overflow-hidden">
            <HeroCarousel />
          </div>
        </div>
      </div>

      {/* -----------STATISTICS---SECTION------------- */}
      <div className=" w-full my-5 px-5 lg:px-16 ">
        <div className=" w-full flex flex-col lg:flex-row items-center justify-between gap-5 lg:h-[270px]">
          <div className=" w-full flex flex-col gap-5 items-center px-3 py-7">
            <span className=" py-5">
              <TbProgressCheck className=" text-6xl text-gray-700" />
            </span>
            <h2 className=" text-2xl md:text-2xl font-semibold text-center text-gray-800">
              End-customers engaged each month
            </h2>
          </div>

          <span className=" h-[250px] w-0.5 bg-gray-300 lg:block hidden"></span>
          <span className=" w-full h-[1px] bg-gray-300 lg:hidden"></span>

          <div className=" w-full flex flex-col gap-5 items-center px-3 py-7">
            <span className=" py-5">
              <TbProgressCheck className=" text-6xl text-gray-700" />
            </span>
            <h2 className=" text-2xl md:text-2xl font-semibold text-center text-gray-800">
              Messages sent daily around the globe
            </h2>
          </div>

          <span className=" h-[250px] w-0.5 bg-gray-300 lg:block hidden"></span>
          <span className=" w-full h-[1px] bg-gray-300 lg:hidden"></span>

          <div className=" w-full flex flex-col gap-5 items-center px-3 py-7">
            <span className=" py-5">
              <TbProgressCheck className=" text-6xl text-gray-700" />
            </span>
            <h2 className=" text-2xl md:text-2xl font-semibold text-center text-gray-800">
              Omnichannel experiences delivered monthly
            </h2>
          </div>
        </div>
      </div>

      {/* -----------ENGAGE---SECTION------------- */}
      <div className=" flex flex-col gap-5 w-full py-16 px-5 lg:px-16 bg-teal-50">
        <h1 className=" text-3xl lg:text-4xl font-bold lg:text-center">
          Capture the Insights, Nurture the growth
        </h1>
        <p className=" lg:text-center lg:max-w-4xl my-1 mx-auto leading-7">
          Zithara is an AI -Driven Customer Engagement platform for offline
          retail brands, that empowers marketers and product owners with future
          focussed insights to create omnichannel experiences that consumers
          love.
        </p>

        <div className=" w-full grid grid-cols-1 md:grid-cols-3 gap-6 mt-5">
          {platformItems.map((item) => {
            const { id, name, summary, icon, path } = item;
            return (
              <div
                key={id}
                className=" w-full flex gap-3 bg-white shadow-md px-3 py-4 rounded-md"
              >
                <span className=" w-12 h-12 rounded-full flex items-center justify-center bg-gray-500 border text-white">
                  {icon}
                </span>
                <div className=" flex flex-col gap-1.5 flex-1">
                  <h3 className=" font-semibold text leading-5">{name}</h3>
                  <p className=" text-[13px] ">{summary}</p>
                  <Link href={path} className=" flex items-center gap-1">
                    <p className=" text-xs border-b text-blue-800 font-medium border-b-blue-800 hover:text-black hover:border-b-black duration-200">
                      Learn More
                    </p>
                    <span className=" w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                      <ArrowBigRight size={15} />
                    </span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* -----------SCROLL--ANIMATE---SECTION------------- */}
      <div className=" py-12 px-5 lg:px-16 ">
        <ScrollAnimate />
      </div>
    </main>
  );
}
