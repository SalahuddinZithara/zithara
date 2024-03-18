import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { BsTransparency } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { PiHandsPrayingLight } from "react-icons/pi";
import { FaHandBackFist } from "react-icons/fa6";
import { IoBulbOutline } from "react-icons/io5";
import { FaUserCheck } from "react-icons/fa6";
import { GrTechnology } from "react-icons/gr";
import { FaBookReader } from "react-icons/fa";
import { GiTeamIdea } from "react-icons/gi";
import { VscLayersActive } from "react-icons/vsc";
import { RiTeamFill } from "react-icons/ri";
import { VscMilestone } from "react-icons/vsc";

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
const benefits = [
  {
    id: 1,
    name: "Cutting-Edge Technology",
    summary:
      "Work at the forefront of innovation where Technology meets Impact. Harness cutting-edge technology to propel top brands’ revenue and be part of an endeavour to great significance.",
    icon: <GrTechnology />,
  },
  {
    id: 2,
    name: "Learn, Thrive, Progress!",
    summary:
      "Embark on a journey that offers extensive exposure and the freedom to innovate, experiment and take calculated risks, empowering you to spot and solve challenges.",
    icon: <FaBookReader />,
  },
  {
    id: 3,
    name: "Compassionate Workspace",
    summary:
      "Explore a Caring Workplace: Embrace tailored benefits across locations, Career Growth, Flexibility and a supportive community with an empowering work culture.",
    icon: <GiTeamIdea />,
  },
  {
    id: 4,
    name: "Lively Workplace",
    summary:
      "Explore our “Best Place to Work” rewarded workplace, where we champion fun alongside work, celebrating and recognizing individuals for their contributions.",
    icon: <VscLayersActive />,
  },
  {
    id: 5,
    name: "Exceptional Team & Co-Workers",
    summary:
      "Join a vibrant team & experience a collaborative culture, forge lifelong connections, and seize fantastic learning opportunities.",
    icon: <RiTeamFill />,
  },
  {
    id: 6,
    name: "Competitive Reward Structure",
    summary:
      "Drive growth with our competitive, regionally-aligned reward strategy that is compliant with industry standards, emphasising pay-for-performance and fostering a culture of meritocracy.",
    icon: <VscMilestone />,
  },
];
const jobPositions = [
  {
    id: 1,
    name: "Engineering",
    img: "/careers/engg.png",
  },
  {
    id: 2,
    name: "Sales",
    img: "/careers/sales.png",
  },
  {
    id: 3,
    name: "Marketing",
    img: "/careers/marketing.png",
  },
  {
    id: 4,
    name: "Customer Success",
    img: "/careers/cs.png",
  },
];

const Careers = () => {
  return (
    <div className=" w-full flex flex-col">
      {/* ----------HERO__SECTION---------- */}
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

      {/* ----------NUMBERS__SECTION---------- */}
      <section className=" w-full flex flex-col gap-14 px-5 md:px-8 lg:px-16 lg:min-h-[55vh] pt-7 pb-14 lg:py-10 bg-gray-100/65">
        <h1 className=" font-bold text-2xl text-center lg:text-4xl text-blue-950">
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

      {/* ----------VALUES__SECTION---------- */}
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

      {/* ----------BENEFITS__SECTION---------- */}
      <section className=" w-full flex flex-col gap-12 pt-7 pb-14 lg:py-16 px-5 md:px-8 lg:px-16 bg-gray-100/65">
        <h1 className=" font-bold text-2xl lg:text-4xl text-blue-950">
          Why Join Us ?
        </h1>
        <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item) => {
            const { id, name, summary, icon } = item;
            return (
              <div
                key={id}
                className=" w-full flex flex-col lg:flex-row items-start gap-5 shadow-md p-4 lg:py-7  rounded-sm bg-white"
              >
                <span className=" text-3xl text-blue-900 p-2 rounded-md border shadow-md">
                  {icon}
                </span>
                <div className=" w-full flex flex-col gap-3">
                  <h4 className="text-lg font-bold text-blue-950">{name}</h4>
                  <p className=" text-sm">{summary}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ----------JOBS__SECTION---------- */}
      <section className=" w-full flex flex-col items-center gap-14 pt-7 pb-14 lg:py-16 px-5 md:px-8 lg:px-16">
        <h1 className=" font-bold text-2xl lg:text-4xl text-blue-950 ">
          See where you fit in
        </h1>
        <div className=" w-full max-w-screen-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {jobPositions.map((item) => {
            const { id, name, img } = item;
            return (
              <div key={id} className=" flex flex-col items-center gap-3.5">
                <img
                  src={img}
                  alt={name}
                  className=" w-32 md:w-32 md:h-32 lg:h-40 lg:w-40 h-32 rounded-full object-cover border"
                />
                <h3 className=" font-semibold underline">{name}</h3>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Careers;
