import React from "react";

const Media = () => {
  return (
    <div className=" w-full">
      <section className=" w-full flex flex-col lg:flex-row min-h-screen py-7 lg:py-16 px-5 md:px-8 lg:px-16">
        <div className=" w-full lg:w-[50%] flex flex-col gap-5">
          <h1 className=" font-bold text-5xl text-blue-950">In The News</h1>
          <p className="">
            Read the latest press releases from Zithara - from awards,
            recognitions, product updates, partnerships to new business wins.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Media;
