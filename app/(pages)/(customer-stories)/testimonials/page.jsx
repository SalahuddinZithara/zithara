import Feedback from "@/components/Feedback";
import React from "react";

const page = () => {
  return (
    <div className=" w-full min-h-screen flex flex-col gap-10 py-7 lg:py-10">
      <div className=" w-full flex flex-col gap-7 px-5 md:px-8 lg:px-16 2xl:px-40">
        <h1 className=" font-bold text-2xl lg:text-5xl text-blue-950 text-center">
          Hear From Our Customers
        </h1>
        <p className=" font-medium text-center max-w-4xl mx-auto">
          Top brands open up about their experience leveraging the power of
          insights-led Customer Engagement strategies - learn why Zithara
          customers are Zithara advocates
        </p>
      </div>
      <Feedback />
    </div>
  );
};

export default page;
