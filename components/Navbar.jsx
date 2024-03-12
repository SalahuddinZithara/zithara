"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import {
  Gift,
  Menu,
  Search,
  ShoppingBag,
  UserRoundCog,
  Users,
  X,
} from "lucide-react";
import { Button } from "./ui/button";
import { SampleSidebar } from "./SampleSidebar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { RiUserSettingsLine } from "react-icons/ri";
import { FaAmazonPay } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { CiBookmarkCheck, CiGift } from "react-icons/ci";
import { LuUsers } from "react-icons/lu";
import { GiHeartNecklace } from "react-icons/gi";
import { BsPlugin } from "react-icons/bs";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { BsHouses } from "react-icons/bs";
import { PiAlignCenterHorizontalLight } from "react-icons/pi";
import { TbCalendarSearch } from "react-icons/tb";
import { FaUsers } from "react-icons/fa";
import { GoInfo } from "react-icons/go";
import { HiOutlineUsers } from "react-icons/hi2";
import { PiGraduationCapLight } from "react-icons/pi";
import { RiContactsLine } from "react-icons/ri";
import { IoVideocamOutline } from "react-icons/io5";
import { FaBold } from "react-icons/fa6";
import { PiNotebookLight } from "react-icons/pi";
import { TbSettingsAutomation } from "react-icons/tb";
import { CgMenuRight } from "react-icons/cg";

const sidebarItems = [
  {
    id: 1,
    name: "Platform",
    items: [
      {
        id: 1,
        name: "Customer segments & Insightful Analytics",
        summary: "Understand, interact, and engage with every customer",
        icon: <TbBrandGoogleAnalytics className=" text-lg" />,
        path: "/customer-segments",
      },
      {
        id: 2,
        name: "Marketing Automation",
        summary: "Understand, interact, and engage with every customer",
        icon: <TbSettingsAutomation className=" text-lg" />,
        path: "/",
      },
      {
        id: 3,
        name: "Lead Management",
        summary: "Understand, interact, and engage with every customer",
        icon: <RiUserSettingsLine className=" text-lg" />,
        path: "/",
      },
      {
        id: 4,
        name: " WhatsApp for Business API",
        summary: "Understand, interact, and engage with every customer",
        icon: <FaWhatsapp className=" text-lg" />,
        path: "/",
      },
      {
        id: 5,
        name: "Rewards and Loyalty",
        summary: "Understand, interact, and engage with every customer",
        icon: <CiGift className=" text-lg" />,
        path: "/",
      },
      {
        id: 6,
        name: "Referrals and Feedback",
        summary: "Understand, interact, and engage with every customer",
        icon: <LuUsers className=" text-lg" />,
        path: "/",
      },
      {
        id: 7,
        name: "Nex-Gen UPI Tech",
        summary: "Understand, interact, and engage with every customer",
        icon: <FaAmazonPay className=" text-lg" />,
        path: "/",
      },
    ],
  },
  {
    id: 2,
    name: "Businesses",
    items: [
      {
        id: 1,
        name: "Jewellery",
        icon: <GiHeartNecklace className=" text-lg" />,
        path: "/",
      },
      {
        id: 2,
        name: "Electronics",
        icon: <BsPlugin className=" text-lg" />,
        path: "/",
      },
      {
        id: 3,
        name: "Wellness",
        icon: <MdOutlineHealthAndSafety className="text-lg" />,
        path: "/",
      },
      {
        id: 4,
        name: "Luxury",
        icon: <BsHouses className="text-lg" />,
        path: "/",
      },
    ],
  },
  {
    id: 3,
    name: "Customer Stories",
    items: [
      {
        id: 1,
        name: "Overall Landing Page",
        icon: <PiAlignCenterHorizontalLight className="text-lg" />,
        path: "/",
      },
      {
        id: 2,
        name: "Case Studies",
        icon: <TbCalendarSearch className="text-lg" />,
        path: "/",
      },
      {
        id: 3,
        name: "Testimonials",
        icon: <FaUsers className="text-lg" />,
        path: "/",
      },
    ],
  },
  {
    id: 4,
    name: "Company",
    items: [
      {
        id: 1,
        name: "About Us",
        icon: <GoInfo className="text-lg" />,
        path: "/",
      },
      {
        id: 2,
        name: "Media",
        icon: <IoVideocamOutline className="text-lg" />,
        path: "/",
      },
      {
        id: 3,
        name: "Careers",
        icon: <PiGraduationCapLight className="text-lg" />,
        path: "/",
      },
      {
        id: 4,
        name: "Contact Us",
        icon: <RiContactsLine className="text-lg" />,
        path: "/",
      },
      {
        id: 5,
        name: "Partners",
        icon: <HiOutlineUsers className="text-lg" />,
        path: "/",
      },
    ],
  },
  {
    id: 5,
    name: "Resources",
    items: [
      {
        id: 1,
        name: "Blogs",
        icon: <FaBold className="" />,
        path: "/",
      },
      {
        id: 2,
        name: "E-Books",
        icon: <PiNotebookLight className=" text-lg" />,
        path: "/",
      },
      {
        id: 3,
        name: "Videos",
        icon: <IoVideocamOutline className=" text-lg" />,
        path: "/",
      },
    ],
  },
];

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div
      className={` ${
        openMenu ? "h-screen" : " h-auto"
      } duration-200 w-full flex flex-col shadow-md lg:justify-center py-2.5`}
    >
      <div className=" w-full flex items-center justify-between px-5 md:px-8 lg:px-12 2xl:px-28">
        <span className=" cursor-pointer">
          <Image
            src="/logo.png"
            alt="logo"
            width={150}
            height={35}
            className=" w-[150px] lg:w-[150px] lg:h-[35px] object-cover"
            priority
          />
        </span>

        <div className="hidden lg:flex items-center">
          <NavigationMenu>
            <NavigationMenuList>
              {sidebarItems.map((item) => {
                const { id, name, items } = item;
                return (
                  <NavigationMenuItem key={id}>
                    <NavigationMenuTrigger>{name}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-4 p-4 md:w-[400px] lg:w-[700px] lg:grid-cols-2 text-sm">
                        {items.map((i) => {
                          const { id, name, icon, path } = i;
                          return (
                            <NavigationMenuLink
                              key={id}
                              className=" flex items-center
                         gap-1.5"
                            >
                              <span className=" w-8 h-8 rounded-full flex items-center justify-center bg-blue-800 text-white">
                                {icon}
                              </span>
                              <Link className=" " href={path}>
                                {name}
                              </Link>
                            </NavigationMenuLink>
                          );
                        })}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className=" hidden lg:flex items-center gap-5">
          <Search className=" cursor-pointer" strokeWidth={1} />
          <Button className=" bg-blue-800 hover:bg-blue-900 duration-200 flex w-[50%] md:w-[150px] items-center gap-1 text-white rounded-sm ">
            <p className="font-semibold ">Book A Demo</p>
          </Button>
        </div>

        <span
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
          className=" block lg:hidden"
        >
          {!openMenu ? (
            <CgMenuRight className="text-3xl" />
          ) : (
            <X strokeWidth={2} size={30} />
          )}
        </span>
      </div>

      <div
        className={`${
          openMenu ? "h-[90vh]" : "h-0 opacity-0"
        } bg-white duration-200 lg:hidden w-full flex flex-col justify-between px-5 md:px-8`}
      >
        <Accordion type="single" collapsible className="w-full mt-3">
          {sidebarItems.map((item) => {
            const { id, name, items } = item;
            return (
              <AccordionItem key={id} value={id}>
                <AccordionTrigger>{name}</AccordionTrigger>
                <AccordionContent className="w-full flex flex-col gap-2">
                  {items.map((i) => {
                    const { id, name, icon, path } = i;
                    return (
                      <span key={id} className=" flex items-center gap-2">
                        {name}
                      </span>
                    );
                  })}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>

        <div className="w-full">
          <Button className="w-full">Book A Demo</Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
