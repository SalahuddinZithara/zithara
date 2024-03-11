import React, { useEffect } from "react";
import img1 from "@/public/ec/e1.png";
import img2 from "@/public/ec/e2.png";
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
    img: img1,
  },
  {
    id: 4,
    name: "E-commerce, App Commerce or In-store",
    summary:
      "Zithara.AI Enables you take your retail business to e-commerce store, App-based store and In Store.",
    icon: <BsCart2 className=" text-lg" />,
    path: "/",
    img: img2,
  },
  {
    id: 5,
    name: "Customer Journey Automation",
    summary:
      "Build relevant customer experiences at every stage using Generative AI ",
    icon: <TbSettingsAutomation className=" text-lg" />,
    path: "/",
    img: img1,
  },
  {
    id: 6,
    name: "New-age Reward and Redemption",
    summary:
      "Industry’s Most Configurable Loyalty System to Craft Programs for Ultimate Customer Delight",
    icon: <IoGiftOutline className=" text-lg" />,
    path: "/",
    img: img2,
  },
  {
    id: 7,
    name: "New-age CDP",
    summary: "A retail-focused CDP powerhouse for effortless Personalisation",
    icon: <Layers2 size={20} strokeWidth={2} />,
    path: "/",
    img: img1,
  },
];

const Engagement = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <section className=" w-full h-auto md:h-auto rounded-md">
      <h1 className=" text-3xl w-full lg:text-4xl font-bold text-center px-5">
        Capture the Insights, Nurture the growth
      </h1>
      <p className=" text-center w-full lg:max-w-4xl my-3 mx-auto leading-7 px-5">
        Zithara is an AI -Driven Customer Engagement platform for offline retail
        brands, that empowers marketers and product owners with future focussed
        insights to create omnichannel experiences that consumers love.
      </p>

      <div className="flex flex-col gap-5 mt-5 w-full">
        {platformItems.map((item) => {
          const { id, name, summary, icon, img, path } = item;
          return (
            <div key={id} className=" w-full  h-[130vh] relative scroll-smooth">
              <div
                data-aos="fade-up"
                className={` ${
                  id % 2 === 0 ? "flex-row-reverse" : "flex-row"
                } w-full flex flex-col lg:flex-row items-center sticky top-0 left-0 h-[100vh] `}
              >
                <div className=" w-full lg:w-[50%] ">
                  <Image
                    width={600}
                    src={img}
                    height={400}
                    className=" mx-auto object-cover"
                    alt={name}
                  />
                </div>
                <div className=" flex flex-col gap-7 w-full lg:w-[50%] items-center py-5 px-12 max-w-2xl">
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
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Engagement;
