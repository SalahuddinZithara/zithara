import Image from "next/image";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { RiUserSettingsLine } from "react-icons/ri";
import Link from "next/link";
import { CiGift } from "react-icons/ci";
import { GiHeartNecklace } from "react-icons/gi";
import { BsPlugin } from "react-icons/bs";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { BsHouses } from "react-icons/bs";
import { PiAlignCenterHorizontalLight } from "react-icons/pi";
import { TbCalendarSearch } from "react-icons/tb";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
  FaUsers,
} from "react-icons/fa";
import { GoInfo } from "react-icons/go";
import { HiOutlineUsers } from "react-icons/hi2";
import { PiGraduationCapLight } from "react-icons/pi";
import { RiContactsLine } from "react-icons/ri";
import { IoVideocamOutline } from "react-icons/io5";
import { FaBold } from "react-icons/fa6";
import { PiNotebookLight } from "react-icons/pi";
import { TbSettingsAutomation } from "react-icons/tb";
import { CgMenuRight } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";
import { IoIosGitNetwork } from "react-icons/io";
import { BsDatabaseCheck } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { VscFeedback } from "react-icons/vsc";
const footerItems = [
  {
    id: 1,
    name: "Platform",
    items: [
      {
        id: 1,
        name: "Customer Segmentation",
        summary: "Understand, interact, and engage with every customer",
        icon: <TbBrandGoogleAnalytics className="" />,
        path: "/customer-segments",
      },
      {
        id: 2,
        name: "Customer Journey Automation",
        summary: "Understand, interact, and engage with every customer",
        icon: <TbSettingsAutomation className="" />,
        path: "/journey-automation",
      },
      {
        id: 3,
        name: "Lead Management",
        summary: "Understand, interact, and engage with every customer",
        icon: <RiUserSettingsLine className="" />,
        path: "/lead-management",
      },
      {
        id: 4,
        name: "E-Commerce Website",
        summary: "Understand, interact, and engage with every customer",
        icon: <IoCartOutline className="" />,
        path: "/ecommerce-website",
      },
      {
        id: 5,
        name: "Rewards and Redemption",
        summary: "Understand, interact, and engage with every customer",
        icon: <CiGift className="" />,
        path: "/rewards",
      },
      {
        id: 6,
        name: "Omnichannel Campaigner",
        summary: "Understand, interact, and engage with every customer",
        icon: <IoIosGitNetwork className="" />,
        path: "/omnichannel-campaigner",
      },
      {
        id: 7,
        name: "Customer Data Platform",
        summary: "Understand, interact, and engage with every customer",
        icon: <BsDatabaseCheck className="" />,
        path: "/cdp",
      },
      {
        id: 8,
        name: "Feedback",
        summary: "Understand, interact, and engage with every customer",
        icon: <VscFeedback className="" />,
        path: "/feedback",
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
        icon: <GiHeartNecklace className=" " />,
        path: "/jewellery",
      },
      {
        id: 2,
        name: "Electronics",
        icon: <BsPlugin className=" " />,
        path: "/electronics",
      },
      {
        id: 3,
        name: "Wellness",
        icon: <MdOutlineHealthAndSafety className="" />,
        path: "/wellness",
      },
      {
        id: 4,
        name: "Luxury Retail",
        icon: <BsHouses className="" />,
        path: "/luxury",
      },
    ],
  },
  {
    id: 3,
    name: "Customer Stories",
    items: [
      {
        id: 1,
        name: "Case Studies",
        icon: <TbCalendarSearch className="" />,
        path: "/case-studies",
      },
      {
        id: 2,
        name: "Testimonials",
        icon: <FaUsers className="" />,
        path: "/testimonials",
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
        icon: <GoInfo className="" />,
        path: "/about-us",
      },
      {
        id: 2,
        name: "Media",
        icon: <IoVideocamOutline className="" />,
        path: "/media",
      },
      {
        id: 3,
        name: "Careers",
        icon: <PiGraduationCapLight className="" />,
        path: "/careers",
      },
      {
        id: 4,
        name: "Contact Us",
        icon: <RiContactsLine className="" />,
        path: "/contact",
      },
      {
        id: 5,
        name: "Partners",
        icon: <HiOutlineUsers className="" />,
        path: "/partners",
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
        path: "/blogs",
      },
      {
        id: 2,
        name: "E-Books",
        icon: <PiNotebookLight className="" />,
        path: "/e-books",
      },
      {
        id: 3,
        name: "Videos",
        icon: <IoVideocamOutline className="" />,
        path: "/videos",
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
