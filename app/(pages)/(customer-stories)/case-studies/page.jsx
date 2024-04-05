"use client";
import { caseStudyData } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className=" w-full min-h-screen flex flex-col gap-10 px-5 md:px-8 lg:px-16 py-5 lg:py-7 bg-gray-50">
      <h1 className=" font-bold text-2xl lg:text-5xl text-blue-950 text-center">
        Case Studies
      </h1>
      <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {caseStudyData.map((item) => {
          const { id, name, summary, img } = item;
          return (
            <div
              key={id}
              className=" w-full flex flex-col gap-5 hover:shadow-lg duration-200 h-fit items-start p-5 bg-white shadow-md rounded-md"
            >
              <Image
                src={img}
                className=" w-auto h-auto border rounded-sm"
                width={100}
                height={80}
              />
              <h3 className=" font-semibold -mt-2">{name}</h3>
              <p className=" font-[450] text-sm text-gray-800">{summary}.</p>
              <Link href={`/case-studies/${id}`}>
                <span className=" cursor-pointer px-3 py-2 rounded-sm text-xs font-semibold bg-blue-600 hover:bg-blue-700 duration-200  text-white">
                  View More
                </span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
