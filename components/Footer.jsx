import Image from "next/image";
import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { RiUserSettingsLine } from "react-icons/ri";
import { FaAmazonPay } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { CiGift } from "react-icons/ci";
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
const footerItems = [
  {
    id: 1,
    name: "Platform",
    items: [
      {
        id: 1,
        name: "Customer segments & Insightful Analytics",
        summary: "Understand, interact, and engage with every customer",
        icon: <TbBrandGoogleAnalytics className=" text-lg" />,
        path: "/",
      },
      {
        id: 2,
        name: "Marketing Automation",
        summary: "Understand, interact, and engage with every customer",
        icon: <RiUserSettingsLine className=" text-lg" />,
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

const Footer = () => {
  return (
    <footer className=" w-full flex flex-col gap-7 px-5 md:px-8 lg:px-14 bg-black py-10">
      <div className=" flex flex-col gap-5">
        <Image src={"/logo-white.png"} alt="logo" width={175} height={120} />
        <div className=" flex items-center gap-3 text-white text-3xl">
          <FaFacebookSquare />
          <FaInstagram />
          <FaLinkedin />
          <FaTwitterSquare />
        </div>
      </div>

      <div className=" w-full grid grid-cols-1 mt-3 lg:grid-cols-5 gap-5">
        {footerItems.map((item) => {
          const { id, name, items } = item;
          return (
            <div key={id} className=" w-full flex flex-col gap-3 text-white">
              <h4 className=" font-semibold">{name}</h4>
              <span className=" flex flex-row flex-wrap lg:flex-col gap-3 lg:gap-2 text-gray-300 h-fit text-xs">
                {items.map(({ id, name, icon, path }) => {
                  return (
                    <Link
                      className="hover:text-white duration-150"
                      key={id}
                      href={path}
                    >
                      {name}
                    </Link>
                  );
                })}
              </span>
            </div>
          );
        })}
      </div>

      <hr className=" border border-gray-500" />

      <div className=" w-full flex items-center justify-between">
        <p className=" text-white font-medium text-xs text-center md:text-sm">
          Copyright © 2024 Zithara Technologies Pvt Ltd. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
