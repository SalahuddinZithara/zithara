"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CiBookmarkCheck } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import {
  TbBrandGoogleAnalytics,
  TbProgressCheck,
  TbSettingsAutomation,
} from "react-icons/tb";
import hero from "@/public/hero1.svg";
import ScrollAnimate from "@/components/ScrollAnimate";
import { ArrowBigRight, Layers2, UserRoundCog } from "lucide-react";
import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";
import { RiUserSettingsLine } from "react-icons/ri";
import { BsCart2 } from "react-icons/bs";
import { IoGiftOutline } from "react-icons/io5";
import Engagement from "@/components/Engagement";
import img1 from "@/public/ec/e1.png";
import img2 from "@/public/ec/e2.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TiArrowRight } from "react-icons/ti";
const platformItems = [
  {
    id: 1,
    title: "Customer Segments",
    name: "Customer segments & Insightful Analytics",
    summary:
      "Understand and evaluate customers; alert, update, and communicate with them ",
    icon: <TbBrandGoogleAnalytics className="text-lg" />,
    path: "/",
    img: img1,
  },
  {
    id: 2,
    title: "Lead management",
    name: "New age Omnichannel Lead management to bar none",
    summary:
      "Never lose a lead!  curate and retarget  leads  from  Instagram, FB, Instore walk-ins, website visits, Referals, google ads, News paper ads and more.",
    icon: <RiUserSettingsLine className=" text-lg" />,
    path: "/",
    img: img2,
  },
  {
    id: 3,
    title: "Campaigner",
    name: "AI-powered Omni channel campaigner",
    summary:
      "Optimize interactions and improve ROI with Zithara.AI Use multi mode communication on EMAIL, SMA or Whatsapp.",
    icon: <UserRoundCog size={20} strokeWidth={2} />,
    path: "/",
    img: img1,
  },
  {
    id: 4,
    title: "E-commerce, or In-store",
    name: "E-commerce, App Commerce or In-store",
    summary:
      "Zithara.AI Enables you take your retail business to e-commerce store, App-based store and In Store.",
    icon: <BsCart2 className=" text-lg" />,
    path: "/",
    img: img2,
  },
  {
    id: 5,
    title: "Customer Journey Automation",
    name: "Customer Journey Automation",
    summary:
      "Build relevant customer experiences at every stage using Generative AI ",
    icon: <TbSettingsAutomation className=" text-lg" />,
    path: "/",
    img: img1,
  },
  {
    id: 6,
    title: "Reward and Redemption",
    name: "New-age Reward and Redemption",
    summary:
      "Industry’s Most Configurable Loyalty System to Craft Programs for Ultimate Customer Delight",
    icon: <IoGiftOutline className=" text-lg" />,
    path: "/",
    img: img2,
  },
  {
    id: 7,
    title: "CDP",
    name: "New-age CDP",
    summary: "A retail-focused CDP powerhouse for effortless Personalisation",
    icon: <Layers2 size={20} strokeWidth={2} />,
    path: "/",
    img: img1,
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
            <Button className=" bg-blue-800 hover:bg-blue-900 duration-200 flex w-[150px] items-center gap-1 text-white rounded-sm ">
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
        <h1 className=" text-3xl lg:text-4xl font-bold text-center">
          Capture the Insights, Nurture the growth
        </h1>
        <p className=" text-center lg:max-w-4xl my-1 mx-auto leading-7">
          Zithara is an AI -Driven Customer Engagement platform for offline
          retail brands, that empowers marketers and product owners with future
          focussed insights to create omnichannel experiences that consumers
          love.
        </p>

        <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
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

      <div className="flex flex-col gap-5 w-full py-16 lg:px-0 bg-gray-100 ">
        <Engagement />
      </div>

      <div className=" hidden lg:flex w-full px-5 lg:px-16 flex-col gap-5 py-10">
        <h1 className=" text-3xl lg:text-4xl font-bold text-center">
          Capture the Insights, Nurture the growth
        </h1>
        <p className=" text-center lg:max-w-4xl my-1 mx-auto leading-7">
          Zithara is an AI -Driven Customer Engagement platform for offline
          retail brands, that empowers marketers and product owners with future
          focussed insights to create omnichannel experiences that consumers
          love.
        </p>

        <Tabs defaultValue={1} className="w-full mt-3 border rounded-sm">
          <TabsList className="w-full flex items-center gap-2 flex-wrap bg-gray-100 px-3 rounded-sm">
            {platformItems.map((item) => {
              const { id, name, title } = item;
              return (
                <TabsTrigger value={id} className="text-xs font-medium">
                  {title}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {platformItems.map((item) => {
            const { id, name, summary, icon, img, path } = item;
            return (
              <TabsContent
                key={id}
                value={id}
                className=" w-full h-[80vh] relative scroll-smooth"
              >
                <div
                  data-aos="fade-up"
                  className={` ${
                    id % 2 === 0 ? "flex-row-reverse" : "flex-row"
                  } w-full flex flex-col lg:flex-row items-center h-[80vh] `}
                >
                  <div className=" w-full lg:w-[50%] ">
                    <Image
                      width={550}
                      src={img}
                      height={400}
                      className=" mx-auto object-cover"
                      alt=""
                    />
                  </div>
                  <div className=" flex flex-col gap-7 w-full md:w-[50%] items-center py-5 px-12">
                    <h3 className=" text-4xl font-bold text-center">{name}</h3>
                    <p className=" text-sm text-center">{summary}</p>
                    <Link
                      href={path}
                      className=" group flex items-center gap-1.5 "
                    >
                      <p className=" text-sm border-b border-b-blue-800">
                        Learn More
                      </p>{" "}
                      <span className=" w-6 rounded-full bg-gray-100 flex items-center justify-center h-6 text-black group-hover:translate-x-0.5 duration-300">
                        <TiArrowRight className=" text-lg" />
                      </span>
                    </Link>
                  </div>
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>

      {/* -----------SCROLL--ANIMATE---SECTION------------- */}
      <div className=" py-12 px-5 lg:px-16 bg-gray-100 ">
        <ScrollAnimate />
      </div>
    </main>
  );
}
