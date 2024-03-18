import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { BsTransparency } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { PiHandsPrayingLight } from "react-icons/pi";
import { FaHandBackFist } from "react-icons/fa6";
import { IoBulbOutline } from "react-icons/io5";
import { FaUserCheck } from "react-icons/fa6";

const numbers = [
  {
    id: 1,
    name: "1 Million+",
    summary: "data points processed per month",
  },
  {
    id: 2,
    name: "3.2 Million+",
    summary: "messages sent each day",
  },
  {
    id: 3,
    name: "1.4 Million+",
    summary: "emails sent per month",
  },
];
const values = [
  {
    id: 1,
    name: "Our Core Values",
    summary:
      "Our values drive us. Transparency, ownership, trust, humility. A diverse, lively, innovative workplace. People-frst mindset, stellar experience. Customer-obsessed dream team!",
    icon: <FaUserCheck />,
  },
  {
    id: 2,
    name: "Transparency",
    summary:
      "We will be open, honest, and straightforward about our business operations with our customers, employees, partners, investors and vendors. We will be open to feedback and embrace diverse perspectives.",
    icon: <BsTransparency />,
  },
  {
    id: 3,
    name: "Customer First",
    summary:
      "The Impact we make for our customers and their user experiences drive us. We make customer-centric decisions, build products, and proactively deliver the right support, with the customer in mind.",
    icon: <CiUser />,
  },
  {
    id: 4,
    name: "Humility",
    summary:
      "We believe that every situation is a learning opportunity. We will set aside our egos, listen actively, pay attention to the little details and be respectful of everyone.",
    icon: <PiHandsPrayingLight />,
  },
  {
    id: 5,
    name: "Ownership",
    summary:
      "We are self-driven and take ownership and initiatives proactively, toward our goals. We work as a team. We respectfully debate to get to the best decision, disagree, and finally commit once the decision is made.",
    icon: <FaHandBackFist />,
  },
  {
    id: 6,
    name: "Innovation",
    summary:
      "We are not just problem solvers but problem spotters. We are not afraid to challenge the status quo and are here to make an impact.",
    icon: <IoBulbOutline />,
  },
];

const Careers = () => {
  return (
    <div className=" w-full flex flex-col">
      <section className=" w-full flex flex-col lg:flex-row items-center lg:min-h-[90vh] py-5 lg:py-0 lg:justify-between px-5 md:px-8 lg:px-16 justify-center">
        <div className=" w-full lg:w-[50%] flex flex-col gap-7">
          <h1 className=" text-3xl lg:text-6xl font-bold text-blue-950">
            Grow with <br className=" hidden lg:block" />{" "}
            <span className=" tracking-wide lg:text-7xl text-transparent bg-clip-text bg-gradient-to-br from-black to-indigo-700">
              Zithara
            </span>
          </h1>
          <p className=" max-w-lg">
            If you’re passionate about growth, customer-obsessed and
            growth-driven, we want you! Be a part of an ever-evolving, high
            growth team working towards creating a world-class product that aims
            at impacting millions across the globe.
          </p>
          <Link href={"/"} className=" mt-5">
            <Button className=" bg-blue-800 hover:bg-blue-900 duration-200 text-sm font-semibold rounded-sm">
              View Available Openings
            </Button>
          </Link>
        </div>

        <div className=" w-full lg:w-[45%]">
          <img src="/about-us/sam.png" className=" lg:w-[500px]" alt="" />
        </div>
      </section>

      <section className=" w-full flex flex-col gap-14 px-5 md:px-8 lg:px-16 lg:min-h-[55vh] pt-7 pb-14 lg:py-10 bg-gray-100/65">
        <h1 className=" font-bold text-2xl text-center lg:text-5xl text-blue-950">
          Built to Handle Massive Scale
        </h1>

        <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {numbers.map((item) => {
            const { id, name, summary } = item;
            return (
              <div
                key={id}
                className=" w-full bg-white flex flex-col gap-5 p-5 items-center justify-center rounded-md shadow-md border border-gray-200/75 py-10"
              >
                <h1 className=" font-bold text-2xl lg:text-4xl text-blue-900">
                  {name}
                </h1>
                <p className=" text-lg font-medium text-center">{summary}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-7 pb-14 lg:py-16 px-5 md:px-8 lg:px-16">
        {values.map((item) => {
          const { id, name, summary, icon } = item;
          return (
            <div
              key={id}
              className=" w-full flex flex-col items-start gap-4 shadow-md p-5 rounded-sm border border-gray-200/75"
            >
              <span className=" text-3xl border p-2 rounded-full border-gray-400 text-blue-900">
                {icon}
              </span>
              <h3 className=" font-bold text-xl text-blue-950">{name}</h3>
              <p className=" text-gray-700 text-sm leading-5">{summary}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Careers;
