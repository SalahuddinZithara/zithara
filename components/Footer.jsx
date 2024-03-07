import { Gift, ShoppingBag, UserRoundCog, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const footerItems = [
  {
    id: 1,
    name: "Products",
    items: [
      {
        id: 1,
        name: "Customer Segmentation",
        icon: <Users size={15} strokeWidth={2} />,
        path: "/",
      },
      {
        id: 2,
        name: "Marketing Automation",
        icon: <ShoppingBag size={15} strokeWidth={2} />,
        path: "/",
      },
      {
        id: 3,
        name: "Lead Management",
        icon: <UserRoundCog size={15} strokeWidth={2} />,
        path: "/",
      },
      {
        id: 4,
        name: " WhatsApp for Business API",
        icon: <Users size={15} strokeWidth={2} />,
        path: "/",
      },
      {
        id: 5,
        name: "Rewards and Loyalty",
        icon: <Gift size={15} strokeWidth={2} />,
        path: "/",
      },
      {
        id: 6,
        name: "Referrals and Feedback",
        icon: <Users size={15} strokeWidth={2} />,
        path: "/",
      },
      {
        id: 7,
        name: "Nex-Gen UPI Tech",
        icon: <Users size={15} strokeWidth={2} />,
        path: "/",
      },
    ],
  },
  {
    id: 2,
    name: "Resources",
    items: [
      {
        id: 1,
        name: "Blog",
        icon: <Users size={15} strokeWidth={2} />,
        path: "/",
      },
      {
        id: 2,
        name: "Case Studies",
        icon: <ShoppingBag size={15} strokeWidth={2} />,
        path: "/",
      },
      {
        id: 3,
        name: "E-book",
        icon: <UserRoundCog size={15} strokeWidth={2} />,
        path: "/",
      },
      {
        id: 4,
        name: "Integrations",
        icon: <Users size={15} strokeWidth={2} />,
        path: "/",
      },
    ],
  },
  {
    id: 3,
    name: "Company",
    items: [
      {
        id: 1,
        name: "Investors Relation",
        icon: <Users size={15} strokeWidth={2} />,
        path: "/",
      },
      {
        id: 2,
        name: "News and Media",
        icon: <ShoppingBag size={15} strokeWidth={2} />,
        path: "/",
      },
    ],
  },
  {
    id: 4,
    name: "About Us",
    items: [
      {
        id: 1,
        name: "Corporate Profile",
        icon: <Users size={15} strokeWidth={2} />,
        path: "/",
      },
      {
        id: 2,
        name: "Leadership and Advisory Team",
        icon: <ShoppingBag size={15} strokeWidth={2} />,
        path: "/",
      },
      {
        id: 3,
        name: "Vision and Values",
        icon: <UserRoundCog size={15} strokeWidth={2} />,
        path: "/",
      },
      {
        id: 4,
        name: "Investor Relations",
        icon: <Users size={15} strokeWidth={2} />,
        path: "/",
      },
      {
        id: 5,
        name: "Clientele",
        icon: <Users size={15} strokeWidth={2} />,
        path: "/",
      },
      {
        id: 6,
        name: "Testimonials",
        icon: <Users size={15} strokeWidth={2} />,
        path: "/",
      },
    ],
  },
  {
    id: 4,
    name: "Businesses",
    items: [
      {
        id: 1,
        name: "Jewellery",
        icon: <Users size={15} strokeWidth={2} />,
        path: "/",
      },
      {
        id: 2,
        name: "Electronics",
        icon: <ShoppingBag size={15} strokeWidth={2} />,
        path: "/",
      },
      {
        id: 3,
        name: "Wellness",
        icon: <UserRoundCog size={15} strokeWidth={2} />,
        path: "/",
      },
      {
        id: 4,
        name: "Luxury",
        icon: <Users size={15} strokeWidth={2} />,
        path: "/",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className=" w-full flex flex-col gap-7 px-5 md:px-14 bg-black py-10">
      <div className=" flex flex-col gap-5">
        <Image src={"/logo-white.png"} alt="logo" width={175} height={80} />
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
              <span className=" flex flex-col gap-2 text-gray-400 h-fit text-xs">
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
