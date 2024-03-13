import Link from "next/link";
import React from "react";
const solutions = [
  {
    id: 1,
    name: "E-Commerce",
    img: "/solutions/ecommerce.webp",
    path: "/",
  },
  {
    id: 2,
    name: "Subscriptions",
    img: "/solutions/subscription.webp",
    path: "/",
  },
  {
    id: 3,
    name: "Financial-Services",
    img: "/solutions/fs.webp",
    path: "/",
  },
  {
    id: 4,
    name: "Gaming",
    img: "/solutions/gaming.webp",
    path: "/",
  },
];

const Solutions = () => {
  return (
    <section className=" w-full flex flex-col items-center gap-5 py-14 px-5 lg:px-16 bg-[#f5f5f5]">
      <h1 className="font-bold text-2xl lg:text-4xl text-center max-w-5xl lg:text-center text-slate-800">
        Your Industry. Our Solutions.
      </h1>

      <div className=" relative w-full flex flex-col mt-3 h-[400vh]">
        <div className=" sticky left-0 top-24 w-full flex items-center gap-5 flex-wrap lg:gap-28 my-5 justify-center">
          {solutions.map((item) => {
            const { id, name, path } = item;
            return (
              <Link key={id} href={path} className=" font-semibold text-sm">
                {name}
              </Link>
            );
          })}
        </div>
        {solutions.map((item) => {
          const { id, name, path, img } = item;
          return (
            <div
              key={id}
              className={`w-full sticky rounded-md shadow-sm bg-white ${
                id === 1
                  ? "top-32"
                  : id === 2
                  ? "top-48"
                  : id === 3
                  ? "top-64"
                  : id === 4
                  ? "top-[320px]"
                  : ""
              } left-0 h-[80vh] border flex flex-col gap-5 p-6 overflow-hidden`}
            >
              <h3 className=" font-bold text-xl text-teal-900">{name}</h3>

              <img src={img} alt={name} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Solutions;
