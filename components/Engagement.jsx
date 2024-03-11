import React, { useEffect } from "react";
// import img1 from "@/public/ec/e1.png";
// import img2 from "@/public/ec/e2.png";
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

const Engagement = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <section className=" w-full h-auto md:h-auto rounded-md">
      <h1 className=" text-2xl mb-2 md:text-3xl w-full lg:text-4xl font-bold text-center px-5">
        Capture the Insights, Nurture the growth
      </h1>
      <p className=" text-center w-full lg:max-w-4xl my-3 mx-auto leading-7 px-5">
        Zithara is an AI -Driven Customer Engagement platform for offline retail
        brands, that empowers marketers and product owners with future focussed
        insights to create omnichannel experiences that consumers love.
      </p>

      <div className="flex flex-col gap-5 mt-12 w-full">
        {platformItems.map((item, index) => {
          const { id, name, summary, icon, img, path } = item;
          return (
            <div
              key={id}
              className=" w-full h-[100vh] lg:h-[130vh] 2xl:h-[100vh] relative scroll-smooth"
            >
              <div
                data-aos="fade-up"
                className={`
                w-full flex items-center sticky top-0  left-0 h-[90vh] lg:h-[100vh] 2xl:h-[70vh] 
                ${id % 2 == 0 ? "lg:flex-row-reverse" : "lg:flex-row"}
                flex-col 
                `}
              >
                <div className=" w-full lg:w-[50%]  ">
                  <Image
                    width="auto"
                    src={img}
                    height="auto"
                    className=" mx-auto object-cover h-[50vh] lg:h-[100vh] 2xl:h-[70vh] w-[100%] "
                    alt={name}
                  />
                </div>
                <div className=" flex flex-col gap-7 w-full h-auto lg:h-auto lg:w-[50%] items-start px-5 py-5 pt-10 lg:pt-0 lg:px-12 max-w-2xl ">
                  <h3 className=" text-xl md:text-3xl font-bold text-left">
                    {name}
                  </h3>
                  <p className=" text-sm text-left max-w-md">{summary}</p>
                  <Link
                    href={path}
                    className=" group flex items-center gap-1.5 "
                  >
                    <p className=" text-sm text-blue-800 border-b border-b-blue-800">
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
