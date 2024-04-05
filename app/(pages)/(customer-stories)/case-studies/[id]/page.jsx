"use client";
import { caseStudyData } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import { CiGlobe } from "react-icons/ci";
import { PiBuildingsLight } from "react-icons/pi";

const CaseStudy = () => {
  const { id } = useParams();
  const pageId = parseInt(id);
  const currentPageData = caseStudyData.filter((data) => data.id === pageId)[0];
  const OtherPageData = caseStudyData.filter((data) => data.id !== pageId);

  return (
    <div className=" w-full min-h-screen">
      {/* --------HERO__SECTION--------- */}
      <section className=" w-full flex flex-col lg:flex-row lg:items-center gap-10 px-5 md:px-8 lg:px-16 py-5 lg:my-5">
        <div className=" w-full lg:w-[55%] flex flex-col gap-5">
          <p className=" text-gray-700 text-lg font-semibold">Case Study</p>
          <Image
            src={currentPageData.img}
            className=" border rounded-sm w-[170px] h-[100px]"
            width={100}
            height={80}
            alt={currentPageData.name}
          />
          <h3 className=" font-medium text-2xl leading-[43px] max-w-lg text-blue-950">
            {currentPageData.summary}
          </h3>
          <div className=" w-full flex flex-col lg:flex-row lg:items-center gap-10 mt-5">
            {currentPageData.result.map((item) => {
              const { id, title, value } = item;
              return (
                <div
                  key={id}
                  className=" flex flex-col items-start gap-2 lg:first:border-r-2 lg:first:mr-4 lg:first:pr-8"
                >
                  <h1 className=" text-blue-900 font-bold text-4xl lg:text-5xl">
                    {value}
                  </h1>
                  <p className=" text-blue-900">{title}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className=" w-full lg:w-[50%]">
          <Image
            src={currentPageData.heroImg}
            alt={currentPageData.name}
            width={500}
            height={400}
            className=" w-[600px] h-auto"
          />
        </div>
      </section>

      {/* -----------COMPANY__DETAIL__BAR------------- */}
      <section className=" w-full flex flex-col lg:flex-row lg:items-center gap-7 lg:gap-20 px-5 md:px-8 lg:px-16 py-8 bg-gray-50">
        <div className=" flex items-center gap-3">
          <span className=" p-3 rounded-full bg-white border">
            <CiGlobe className=" text-4xl text-blue-950" />
          </span>
          <div className=" flex flex-col">
            <p>Company Url</p>
            <a
              href={currentPageData.companyUrl}
              target="_blank"
              className=" font-medium text-blue-900"
            >
              {currentPageData.companyUrl}
            </a>
          </div>
        </div>

        <div className=" flex items-center gap-3">
          <span className=" p-3 rounded-full bg-white border">
            <PiBuildingsLight className=" text-4xl text-blue-950" />
          </span>
          <div className=" flex flex-col">
            <p>Industry</p>
            <h3 className=" font-medium text-blue-900">
              {currentPageData.industry}
            </h3>
          </div>
        </div>
      </section>

      {/* -----------DETAIL__DATA-------------- */}
      <section className=" w-full h-auto flex gap-10 lg:gap-0 flex-col lg:flex-row justify-between px-5 md:px-8 lg:px-16 relative py-16">
        <div className=" lg:sticky top-20 left-0 h-fit w-full lg:w-[40%] flex flex-col gap-7 p-4 rounded-md shadow-sm border">
          <Image
            src={currentPageData.img}
            alt={currentPageData.name}
            width={170}
            height={100}
            className=" border rounded-sm w-[170px] h-[100px]"
          />
          {currentPageData.problem.map((item, index) => {
            return (
              <p key={index} className=" text-sm leading-6">
                {item}
              </p>
            );
          })}
          <div className=" hidden lg:flex w-full items-center justify-between mt-5">
            {currentPageData.result.map((item) => {
              const { id, title, value } = item;
              return (
                <div key={id} className=" flex flex-col items-start gap-2 ">
                  <h1 className=" text-blue-900 font-bold text-2xl">{value}</h1>
                  <p className=" text-blue-900">{title}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className=" w-full lg:w-[57%] flex flex-col gap-10 lg:p-5 items-start">
          <div className=" w-full flex flex-col gap-3">
            <h3 className=" font-bold text-3xl text-gray-700">
              About {currentPageData.name}
            </h3>
            <p>{currentPageData.about}</p>
          </div>

          {currentPageData.objective?.length > 0 && (
            <div className=" w-full flex flex-col gap-3">
              <h3 className=" font-bold text-3xl text-gray-700">Objective</h3>
              {currentPageData.objective?.map((item, index) => {
                return <p key={index}>{item}</p>;
              })}
            </div>
          )}

          {currentPageData.solution?.length > 0 && (
            <div className=" w-full flex flex-col gap-3">
              <h3 className=" font-bold text-3xl text-gray-700">Solution</h3>
              {currentPageData.solution?.map((item, index) => {
                return <p key={index}>{item}</p>;
              })}
            </div>
          )}

          {currentPageData.finalResult?.length > 0 && (
            <div className=" w-full flex flex-col gap-3">
              <h3 className=" font-bold text-3xl text-gray-800">Results</h3>
              {currentPageData.finalResult?.map((item, index) => {
                return <p key={index}>{item}</p>;
              })}
            </div>
          )}
        </div>
      </section>

      {/* -----------OTHER__CASE__STUDIES-------------- */}
      <section className=" w-full flex flex-col gap-7 px-5 md:px-8 lg:px-16 relative py-5 md:py-10 bg-gray-50">
        <h1 className=" text-blue-950 text-2xl lg:text-4xl font-bold">
          Other Case Studies
        </h1>
        <div className=" w-full grid grid-cols-1 gap-5 lg:grid-cols-3">
          {OtherPageData.map((item) => {
            const { id, img, name, summary } = item;
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
      </section>
    </div>
  );
};

export default CaseStudy;
