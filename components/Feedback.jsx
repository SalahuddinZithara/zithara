"use client";
import React, { useState } from "react";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import TestimonialModal from "./TestimonialModal";
import { FaRegCirclePlay } from "react-icons/fa6";
const testimonials = [
  {
    id: 1,
    brandLogo: "/vc/4.png",
    name: "Pankaj Solanki",
    role: "Marketing Head",
    story: "Men deserve increses 28% in Retention Growth",
    img: "/testimonials/Anish-Shah.webp",
    video: "/testimonials/qmart.mp4",
  },
  {
    id: 2,
    brandLogo: "/vc/5.png",
    name: "Mudit",
    role: "Managing Director",
    story:
      "PMJ Jewels modernized with Zithara CRM for 100% lead capture and satisfaction",
    img: "",
    video: "",
  },
  {
    id: 3,
    brandLogo: "/vc/9.png",
    name: "Rohil Remani",
    role: "Director",
    story:
      "Zithara improved customer experience through timely messaging on WhatsApp",
    img: "/testimonials/2.webp",
    video: "",
  },
  {
    id: 4,
    brandLogo: "/vc/4.png",
    name: "Harsha Sharma",
    role: "Operations Mangager",
    story: "Sooper Salon improves customer acquisition by 5x",
    img: "",
    video: "",
  },
  {
    id: 5,
    brandLogo: "/vc/6.png",
    name: "Uday Gajangi",
    role: "Marketing Operations Mangager",
    story:
      "Zithara helped Jabita's choice to acheive over 38% abandoned cart recovery rate",
    img: "/testimonials/3.webp",
    video: "",
  },
  {
    id: 6,
    brandLogo: "/vc/2.png",
    name: "Sravan Kumar",
    role: "Head of Marketing and Operations",
    story: "Q-Mart acheive 20% ROI on a branded rewards program",
    img: "",
    video: "/testimonials/qmart.mp4",
  },
];

const Feedback = () => {
  const [openModal, setOpenModal] = useState(false);
  const [vid, setVid] = useState();

  return (
    <div className=" w-full flex flex-col gap-4 items-center py-12 px-5 lg:px-12 bg-[#f5f5f58d]">
      <h1 className="font-bold text-2xl lg:text-4xl text-center max-w-5xl lg:text-center text-slate-800">
        Success Stories That Speak for Themselves
      </h1>

      <Link
        href={"/"}
        className=" group hover:border-b hover:border-b-blue-800 duration-200 flex items-center gap-2"
      >
        <h5 className="font-semibold text-lg text-blue-800">
          More Customer Stories
        </h5>{" "}
        <HiArrowNarrowRight className=" text-lg group-hover:translate-x-0.5 duration-300 text-blue-900 " />
      </Link>

      <div
        className={` w-full grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 lg:grid-rows-3 gap-5 lg:gap-3 mt-7`}
      >
        {testimonials.map((item) => {
          const { id, brandLogo, name, role, story, img, video } = item;
          return (
            <div
              key={id}
              className={` ${
                id === 1
                  ? " lg:row-start-1 lg:row-end-3"
                  : id === 2
                  ? "lg:row-start-1 lg:row-end-2"
                  : id === 3
                  ? "lg:row-start-1 lg:row-end-3"
                  : id === 4
                  ? "lg:row-start-3 lg:row-end-4"
                  : id === 5
                  ? "lg:row-start-2 lg:row-end-4"
                  : ""
              } w-full flex flex-col items-start gap-5 px-3.5 md:px-5 rounded-sm shadow-md bg-white py-5 lg:py-10 relative`}
            >
              <img className="w-36 border" src={brandLogo} alt={name} />
              <p className=" font-semibold">{story}</p>
              <p className="text-sm font-medium text-teal-800 ">
                <span className=" font-semibold text-blue-900">{name}</span>,{" "}
                {role}
              </p>
              {img !== "" && (
                <img
                  src={img}
                  alt={name}
                  className=" hidden lg:block h-[300px]"
                />
              )}
              {video && (
                <p
                  onClick={() => {
                    setVid(video);
                    setOpenModal(true);
                  }}
                  className=" font-semibold flex items-center gap-1 text-blue-900 text-sm absolute lg:bottom-3 top-3 sm:top-auto right-3 cursor-pointer"
                >
                  Watch Video <FaRegCirclePlay className=" text-xl" />
                </p>
              )}
              {openModal && (
                <TestimonialModal vid={vid} setOpenModal={setOpenModal} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Feedback;
