"use client";
import Contact from "@/components/Contact";
import TeamModal from "@/components/TeamModal";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";
import { LuMoveRight } from "react-icons/lu";
const team = [
  {
    id: 1,
    name: "Varun Kashyap",
    img: "/about-us/team4.webp",
    position: "Co-Founder",
    info: "Varun is a Co-founder of Zithara and was CEO for eight years. To extend the company’s ambitious strategy and execute on its vision, Sunil has assumed the role of Executive Chairman, focusing on scaling innovation and strategic direction.",
  },
  {
    id: 2,
    name: "Sri Devi Reddy",
    img: "/about-us/team5.webp",
    position: "Co-Founder",
    info: "Sri is a Co-founder of Zithara and was CEO for eight years. To extend the company’s ambitious strategy and execute on its vision, Sunil has assumed the role of Executive Chairman, focusing on scaling innovation and strategic direction.",
  },
  {
    id: 3,
    name: "Varun Kashyap",
    img: "/about-us/team3.webp",
    position: "Co-Founder",
    info: "Sunil is a Co-founder of Zithara and was CEO for eight years. To extend the company’s ambitious strategy and execute on its vision, Sunil has assumed the role of Executive Chairman, focusing on scaling innovation and strategic direction.",
  },
  {
    id: 4,
    name: "Varun Kashyap",
    img: "/about-us/team1.webp",
    position: "Co-Founder",
    info: "Sunil is a Co-founder of Zithara and was CEO for eight years. To extend the company’s ambitious strategy and execute on its vision, Sunil has assumed the role of Executive Chairman, focusing on scaling innovation and strategic direction.",
  },
  {
    id: 5,
    name: "Varun Kashyap",
    img: "/about-us/team5.webp",
    position: "Co-Founder",
    info: "Sunil is a Co-founder of Zithara and was CEO for eight years. To extend the company’s ambitious strategy and execute on its vision, Sunil has assumed the role of Executive Chairman, focusing on scaling innovation and strategic direction.",
  },
  {
    id: 6,
    name: "Varun Kashyap",
    img: "/about-us/team2.webp",
    position: "Co-Founder",
    info: "Sunil is a Co-founder of Zithara and was CEO for eight years. To extend the company’s ambitious strategy and execute on its vision, Sunil has assumed the role of Executive Chairman, focusing on scaling innovation and strategic direction.",
  },
  {
    id: 7,
    name: "Varun Kashyap",
    img: "/about-us/team4.webp",
    position: "Co-Founder",
    info: "Sunil is a Co-founder of Zithara and was CEO for eight years. To extend the company’s ambitious strategy and execute on its vision, Sunil has assumed the role of Executive Chairman, focusing on scaling innovation and strategic direction.",
  },
  {
    id: 8,
    name: "Sri Devi Reddy",
    img: "/about-us/team5.webp",
    position: "Co-Founder",
    info: "Sri is a Co-founder of Zithara and was CEO for eight years. To extend the company’s ambitious strategy and execute on its vision, Sunil has assumed the role of Executive Chairman, focusing on scaling innovation and strategic direction.",
  },
];
const news = [
  {
    id: 1,
    img: "/about-us/news1.png",
    path: "",
    summary:
      "This start-up provides solutions to offline stores to understand customer behavior",
  },
  {
    id: 2,
    img: "/about-us/news2.png",
    path: "https://www.aha.video/webepisode/nenu-super-women-s1-ep2",
    summary: "Nenu Super Women",
  },
  {
    id: 3,
    img: "/about-us/news3.png",
    path: "https://timesofindia.indiatimes.com/zithara-launches-bharat-loyalty-a-upi-based-loyalty-program-even-a-hawker-can-run/articleshow/91462937.cms",
    summary: "Zithara launches Bharat Loyalty: A UPI-Based Loyalty",
  },
];

const AboutUs = () => {
  const [openModal, setOpenModal] = useState(false);
  const [item, setItem] = useState({});

  return (
    <div className=" w-full flex flex-col">
      {/* ----------HERO--SECTION--------- */}
      <section className=" w-full min-h-[90vh] bg-[#f9f9f9] flex flex-col items-center justify-center p-5">
        <h1 className=" text-3xl md:text-5xl lg:text-5xl text-blue-950 font-bold lg:text-center max-w-4xl ">
          We’re on a journey to build customer relationships that last a
          lifetime
        </h1>

        <img src="/about-us/sam.png" className=" lg:w-96" alt="" />
      </section>

      {/* ----------ABOUT--SECTION--------- */}
      <section className=" w-full lg:min-h-screen flex flex-col-reverse gap-9 lg:flex-row items-center justify-between px-5 md:px-8 lg:px-16 py-7">
        <div className=" w-full lg:w-[50%] flex flex-col gap-5">
          <h1 className=" text-5xl font-bold text-blue-950">Our Story</h1>
          <p className=" font-medium">
            CleverTap is an All-In-One customer engagement platform that unifies
            interactions between people, processes and technology. CleverTap is
            built to convert customers into customers for life with in-moment
            experiences designed and optimized for scale, in real-time. We
            enable brands to create truly cross-channel experience, transcending
            boundaries between channels, journeys and outcomes. We’re on a
            mission to be the ultimate growth partner, providing businesses with
            the insights they need to truly understand their customers and
            deliver.
          </p>
          <div className=" flex items-center gap-5 mt-3">
            <span className=" flex flex-col">
              <h1 className=" text-7xl font-bold text-blue-950">2020</h1>
              <p className=" text-gray-700 font-medium">Founded</p>
            </span>
          </div>
        </div>
        <div className=" w-full lg:w-[40%]">
          <img
            src="/about-us/ourstory.webp"
            alt="our-story"
            className=" w-52 lg:w-auto"
          />
        </div>
      </section>

      {/* ----------TEAM--SECTION--------- */}
      <section className=" w-full flex flex-col lg:items-center gap-4 px-5 py-8 lg:py-14 md:p-8 lg:px-16 bg-gray-50">
        <h6 className=" font-medium text-xl">THE TEAM</h6>
        <h2 className=" font-bold text-blue-950 text-2xl lg:text-4xl">
          Led by the best
        </h2>
        <p className=" text-gray-800 max-w-3xl font-medium lg:text-center">
          What started as a vision dreamed up by our founders has grown into a
          global SaaS brand. Discover the team of visionaries leading us into
          the future
        </p>

        <div className=" w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-7">
          {team.map((item) => {
            const { id, name, img, position, info } = item;
            return (
              <div
                key={id}
                className=" w-full flex flex-col items-center gap-2.5"
              >
                <img src={img} alt={name} className=" w-24 lg:w-36" />
                <h3 className=" font-bold ">{name}</h3>
                <h5 className=" font-medium text-sm">{position}</h5>
                <p
                  onClick={() => {
                    setItem(item);
                    setOpenModal(true);
                  }}
                  className=" font-medium text-xs cursor-pointer hover:text-blue-900 duration-200 hover:underline text-blue-700"
                >
                  Read More
                </p>
              </div>
            );
          })}
        </div>
        {openModal && <TeamModal item={item} setOpenModal={setOpenModal} />}
      </section>

      {/* ----------JOB--INVITATION--SECTION--------- */}
      <section className=" px-5 md:px-8 lg:px-16 py-8 lg:py-14">
        <div className=" relative w-full flex flex-col-reverse gap-7 lg:flex-row items-center justify-center lg:justify-between bg-[#ebe7e0] px-5 py-10 lg:py-28 lg:px-12 rounded-md">
          <div className=" w-full lg:w-[70%] flex flex-col items-center lg:items-start gap-7">
            <h2 className=" font-bold text-lg lg:text-3xl text-blue-950 text-center lg:text-left">
              If you’re ready to bring your A-game, we’ve got job openings for
              You!
            </h2>
            <Link href={"/careers"}>
              <Button className=" bg-blue-800 rounded-sm tracking-wide hover:bg-blue-900 duration-200 text-sm py-6">
                Explore Careers
              </Button>
            </Link>
          </div>
          <h1 className=" block lg:hidden font-bold text-2xl text-blue-950">
            Explore Careers
          </h1>

          <div className="hidden lg:block lg:w-[25%]">
            <img
              src="/about-us/careergirl.webp"
              alt="career-img"
              className=" w-48 lg:w-64 lg:absolute bottom-0 right-7"
            />
          </div>
        </div>
      </section>

      {/* ----------IN--NEWS--SECTION--------- */}
      <section className=" w-full flex flex-col lg:items-center gap-5 px-5 md:px-8 lg:px-16 py-7 lg:py-10 bg-gray-50">
        <h1 className=" text-2xl lg:text-4xl font-bold text-blue-950">
          In The News
        </h1>
        <p className=" font-medium">
          You can’t build a revolutionary platform without getting some
          (welcome) attention.
        </p>

        <div className=" w-full flex flex-col gap-5">
          <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
            {news.map((item) => {
              const { id, summary, img, path } = item;
              return (
                <div
                  key={id}
                  className=" w-full flex flex-col gap-5 p-4 rounded-md bg-white shadow-md"
                >
                  <img src={img} alt="news-img" className=" w-40" />
                  <p className=" font-medium">{summary}</p>
                  <Link href={path}>
                    <LuMoveRight className=" text-xl" />
                  </Link>
                </div>
              );
            })}
          </div>

          <Link href="/news" className=" mx-auto">
            <Button className=" bg-blue-800 hover:bg-blue-900 duration-200 text-white rounded-sm flex items-center gap-2 ">
              View All <LuMoveRight className=" text-lg" />
            </Button>
          </Link>
        </div>
      </section>

      {/* ----------CONTACT--SECTION--------- */}
      <Contact />
    </div>
  );
};

export default AboutUs;
