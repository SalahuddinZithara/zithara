import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Careers = () => {
  return (
    <div className=" w-full flex flex-col">
      <section className=" w-full flex flex-col lg:flex-row items-center min-h-[90vh] justify-between px-5 md:px-8 lg:px-16">
        <div className=" w-full lg:w-[50%] flex flex-col gap-7">
          <h1 className=" text-6xl font-bold text-blue-950">
            Grow with Zithara
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
          <img src="/about-us/sam.png" className=" w-[500px]" alt="" />
        </div>
      </section>
    </div>
  );
};

export default Careers;
