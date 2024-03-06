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
const sidebarItems = [
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

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div
      className={` ${
        openMenu ? "h-screen" : "h-[10vh]"
      } duration-200 w-full flex flex-col shadow-md`}
    >
      <div className=" w-full flex items-center justify-between px-5 md:px-12 py-3">
        <span className=" cursor-pointer">
          <Image src="/logo.png" alt="logo" width={170} height={35} priority />
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
                      <div className="grid gap-4 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2 text-sm">
                        {items.map((i) => {
                          const { id, name, icon, path } = i;
                          return (
                            <NavigationMenuLink
                              key={id}
                              className=" flex items-center
                         gap-1.5"
                            >
                              {icon}
                              <span>{name}</span>
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
          <Button>Book A Demo</Button>
        </div>

        <span
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
          className=" block lg:hidden"
        >
          {!openMenu ? (
            <Menu strokeWidth={2} size={30} />
          ) : (
            <X strokeWidth={2} size={30} />
          )}
        </span>
      </div>

      <div
        className={`${
          openMenu ? "h-[90vh]" : "h-0 opacity-0"
        } bg-white duration-200 lg:hidden w-full flex flex-col justify-between px-5 pb-5`}
      >
        <Accordion type="single" collapsible className="w-full">
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

      {/* <div>
        <SampleSidebar />
      </div> */}
    </div>
  );
};

export default Sidebar;
