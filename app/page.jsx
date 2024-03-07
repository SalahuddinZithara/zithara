"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { equalSplitArray, splitArray } from "@/lib/utils";
const carouselItems = [
  {
    id: 1,
    name: "",
    img: "/vc/vc1.png",
  },
  {
    id: 2,
    name: "",
    img: "/vc/vc2.png",
  },
  {
    id: 3,
    name: "",
    img: "/vc/vc3.png",
  },
  {
    id: 4,
    name: "",
    img: "/vc/vc4.png",
  },
  {
    id: 5,
    name: "",
    img: "/vc/vc5.png",
  },
  {
    id: 6,
    name: "",
    img: "/vc/vc6.png",
  },
  {
    id: 7,
    name: "",
    img: "/vc/vc7.png",
  },
  {
    id: 8,
    name: "",
    img: "/vc/vc8.png",
  },
  {
    id: 9,
    name: "",
    img: "/vc/vc9.png",
  },
  {
    id: 10,
    name: "",
    img: "/vc/vc10.png",
  },
  {
    id: 11,
    name: "",
    img: "/vc/vc11.png",
  },
  {
    id: 12,
    name: "",
    img: "/vc/vc12.png",
  },
  {
    id: 13,
    name: "",
    img: "/vc/vc13.png",
  },
  {
    id: 14,
    name: "",
    img: "/vc/vc14.png",
  },
  {
    id: 15,
    name: "",
    img: "/vc/vc15.png",
  },
  {
    id: 16,
    name: "",
    img: "/vc/vc16.png",
  },
  {
    id: 17,
    name: "",
    img: "/vc/vc17.png",
  },
  {
    id: 18,
    name: "",
    img: "/vc/vc18.png",
  },
  {
    id: 19,
    name: "",
    img: "/vc/vc19.png",
  },
  {
    id: 20,
    name: "",
    img: "/vc/vc20.png",
  },
  {
    id: 21,
    name: "",
    img: "/vc/vc21.png",
  },
  {
    id: 22,
    name: "",
    img: "/vc/vc22.png",
  },
  {
    id: 23,
    name: "",
    img: "/vc/vc23.png",
  },
  {
    id: 24,
    name: "",
    img: "/vc/vc24.png",
  },
  {
    id: 25,
    name: "",
    img: "/vc/vc25.png",
  },
  // {
  //   id: 26,
  //   name: "",
  //   img: "/vc/vc26.png",
  // },
];
import { CiBookmarkCheck } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { TbProgressCheck } from "react-icons/tb";
import hero from "@/public/hero1.svg";
import ScrollAnimate from "@/components/ScrollAnimate";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full">
      {/* -----------HERO---SECTION------------- */}
      <div className=" w-full h-auto py-7 lg:py-0 lg:min-h-[90vh] flex flex-col lg:flex-row items-center justify-between gap-10 px-5 lg:px-16">
        <div className=" flex flex-col gap-5 lg:gap-7 w-full lg:w-[55%]">
          <h2 className=" text-3xl leading-9 lg:text-5xl lg:leading-[52px] font-bold">
            India’s fastest growing AI-driven platform maximizes your retail
            growth
          </h2>
          <p className=" mt-1 lg:mt-0 w-[90%]">
            Create personalized experiences to retain your most valuable
            customers, forever, with Zithara’s All-In-One engagement platform.
          </p>

          <div className=" w-full flex items-center gap-4 mt-3 lg:mt-3">
            <Button className=" bg-blue-800 flex w-[150px] items-center gap-1 text-white rounded-sm ">
              <CiBookmarkCheck className=" text-xl" />
              <p className="font-semibold ">Book A Demo</p>
            </Button>
            <Button className=" bg-black flex w-[150px] items-center gap-1.5 text-white rounded-sm ">
              <IoCallOutline className=" text-xl" />
              <p className="font-semibold ">Talk to Us</p>
            </Button>
          </div>
        </div>
        <div className=" w-full md:w-[40%] mt-3">
          <Image src={hero} width={400} height={400} />
        </div>
      </div>

      {/* -----------VERTICAL---SCROLL---SECTION------------- */}
      <div className=" w-full flex flex-col gap-5 py-8 lg:px-28 bg-gray-100">
        <div className=" w-full flex flex-col items-center gap-5">
          <h2 className=" font-bold text-3xl lg:text-4xl">
            Where Founders and Marketers Unite
          </h2>
          <h4 className=" font-medium text-lg">
            Make your mark today by joining 1000+ industry leaders
          </h4>

          <div className="w-full my-8 overflow-hidden">
            <div className="w-full flex flex-col items-center lg:px-10 gap-1 max-h-24 overflow-hidden ">
              <div className="carousel-content w-full lg:block hidden">
                {equalSplitArray(carouselItems, 6).map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="w-full flex items-center justify-between"
                    >
                      {item.map((i) => {
                        const { id, name, img } = i;
                        return (
                          <Image key={id} src={img} width={100} height={80} />
                        );
                      })}
                    </div>
                  );
                })}
              </div>

              <div className="carousel-content w-full block lg:hidden">
                {equalSplitArray(carouselItems, 9).map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="w-full flex items-center justify-between"
                    >
                      {item.map((i) => {
                        const { id, name, img } = i;
                        return (
                          <Image key={id} src={img} width={100} height={80} />
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* -----------STATISTICS---SECTION------------- */}
      <div className=" w-full my-10 lg:my-10 px-5 lg:px-16 ">
        <div className=" w-full flex flex-col lg:flex-row items-center justify-between gap-5 lg:h-[400px]">
          <div className=" w-full flex flex-col gap-7 items-center px-3 py-7">
            <span className=" py-5">
              <TbProgressCheck className=" text-9xl text-gray-700" />
            </span>
            <h2 className=" text-2xl md:text-3xl font-semibold text-center text-gray-800">
              End-customers engaged each month
            </h2>
          </div>

          <span className=" h-[350px] w-0.5 bg-gray-300 lg:block hidden"></span>
          <span className=" w-full h-[1px] bg-gray-300 lg:hidden"></span>

          <div className=" w-full flex flex-col gap-7 items-center px-3 py-7">
            <span className=" py-5">
              <TbProgressCheck className=" text-9xl text-gray-700" />
            </span>
            <h2 className=" text-2xl md:text-3xl font-semibold text-center text-gray-800">
              Messages sent daily around the globe
            </h2>
          </div>

          <span className=" h-[350px] w-0.5 bg-gray-300 lg:block hidden"></span>
          <span className=" w-full h-[1px] bg-gray-300 lg:hidden"></span>

          <div className=" w-full flex flex-col gap-7 items-center px-3 py-7">
            <span className=" py-5">
              <TbProgressCheck className=" text-9xl text-gray-700" />
            </span>
            <h2 className=" text-2xl md:text-3xl font-semibold text-center text-gray-800">
              Omnichannel experiences delivered monthly
            </h2>
          </div>
        </div>
      </div>

      {/* -----------SCROLL__ANIMATE---SECTION------------- */}
      <div className=" py-16 px-5 lg:px-16 bg-teal-50">
        <ScrollAnimate />
      </div>
    </main>
  );
}
