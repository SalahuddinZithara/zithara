import { useEffect, useRef, useState } from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidUpArrow } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";
import Image from "next/image";

const data = [
  {
    id: 1,
    title: "First Party Data Collection",
    img: "/scroll/1.webp",
  },
  {
    id: 2,
    title: "Customer Segmentation",
    img: "/scroll/2.webp",
  },
  {
    id: 3,
    title: "Reward Redemption",
    img: "/scroll/3.webp",
  },
  {
    id: 4,
    title: "Customer CDP",
    img: "/scroll/4.webp",
  },
];

export default function ScrollAnimate() {
  const [height, setHeight] = useState(0);
  const lastScrollY = useRef(0);
  const targetRef = useRef(null);
  const [opacity, setOpacity] = useState(0);

  const handleScroll = () => {
    if (targetRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
      const isVisible = rect.top <= 0 && rect.bottom >= 0;

      if (isVisible) {
        if (window.scrollY > lastScrollY.current && height < 500) {
          // Scrolling down
          setHeight(height + 5); // Increase height
          if (height > 370) {
            setOpacity(100);
          }
        } else if (window.scrollY < lastScrollY.current && height > 100) {
          // Scrolling up
          setHeight(height - 5); // Decrease height
          if (height < 370) {
            setOpacity(0);
          }
        }
      }
    }

    lastScrollY.current = window.scrollY; // Update the last scroll position
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [height]);

  return (
    <main className=" w-full h-auto lg:min-h-screen flex flex-col gap-5 py-5 md:p-4">
      <section
        className=" relative w-full h-auto lg:h-[650vh] rounded-md lg:p-5"
        ref={targetRef}
      >
        <h1 className=" w-full lg:w-full mx-auto font-montserrat text-2xl md:text-3xl lg:text-4xl mb-8 md:mb-20 lg:mb-28 max-w-3xl font-bold text-center">
          The Clever All-In-One Customer Engagement Platform
        </h1>
        <div className="hidden lg:block sticky top-32 left-0 w-full mx-auto mb-5 lg:mb-20">
          <div
            className={` ${
              height > 450 ? "block py-5 px-1 bg-gray-100 rounded-xl" : " p-0"
            } duration-200`}
          >
            <div
              style={{ height: height }}
              className={` w-[97%] relative mx-auto border border-dashed rounded-xl border-black min-h-[280px] 2xl:min-h-[320px] z-20 bg-white`}
            >
              <div
                className={` ${
                  height > 350 ? "-top-[52px]" : "-top-[30px]"
                } duration-200 absolute z-10 px-10 w-full flex items-center gap-5`}
              >
                <div className=" bg-white w-full flex flex-col gap-2 items-center justify-center p-3 border border-gray-400 rounded-lg font-montserrat">
                  <h4 className=" text-xl font-bold text-black">Acquire</h4>
                  <p
                    className={`${
                      height < 350 ? "h-0 opacity-0" : "h-10 opacity-100"
                    } duration-200 text-xs text-center`}
                  >
                    Acquire in-depth Customer Insights
                  </p>
                </div>

                <span>
                  <BiSolidRightArrow className=" text-blue-800 text-2xl" />
                </span>

                <div className=" bg-white w-full flex flex-col gap-2 items-center justify-center p-3 border border-gray-400 rounded-lg font-montserrat">
                  <h4 className=" text-xl font-bold text-gray-800">Engage</h4>
                  <p
                    className={`${
                      height < 350 ? "h-0 opacity-0" : "h-10 opacity-100"
                    } duration-200 text-xs text-center`}
                  >
                    Experiment for Superior Customer Engagement
                  </p>
                </div>

                <span>
                  <BiSolidRightArrow className=" text-blue-800 text-2xl" />
                </span>

                <div className=" bg-white w-full flex flex-col gap-2 items-center justify-center p-3 border border-gray-400 rounded-lg font-montserrat">
                  <h4 className=" text-xl font-bold text-gray-800">Retain</h4>
                  <p
                    className={`${
                      height < 350 ? "h-0 opacity-0" : "h-10 opacity-100"
                    } duration-200 text-xs text-center`}
                  >
                    Tailor Personalized Customer Experiences
                  </p>
                </div>

                <span>
                  <BiSolidRightArrow className=" text-blue-800 text-2xl" />
                </span>

                <div className=" bg-white w-full flex flex-col gap-2 items-center justify-center p-3 border border-gray-400 rounded-lg font-montserrat">
                  <h4 className=" text-xl font-bold text-gray-800">Monetize</h4>
                  <p
                    className={`${
                      height < 350 ? "h-0 opacity-0" : "h-10 opacity-100"
                    } duration-200 text-xs text-center`}
                  >
                    Tailor Personalized Customer Experiences
                  </p>
                </div>
              </div>

              <div className=" relative w-full flex items-center gap-3 p-6 h-full justify-center">
                {height < 365 && (
                  <h1 className=" absolute top-30 left-[40%] font-bold text-4xl text-gray-600 ">
                    ZITHARA.AI
                  </h1>
                )}
                {data.map((item) => {
                  const { id, title, img } = item;
                  return (
                    <div
                      key={id}
                      style={{ opacity: opacity }}
                      className=" w-full flex flex-col duration-200 justify-between border border-gray-300 rounded-md px-3 h-[320px] z-10 py-6"
                    >
                      <h3 className=" font-medium text-center text-lg">
                        {title}
                      </h3>
                      <img src={img} alt={title} className=" w-40 mx-auto" />
                    </div>
                  );
                })}
              </div>

              <div
                className={`absolute -left-3 ${
                  height < 350 ? "top-[50%]" : "top-[20%]"
                } duration-200 flex flex-col justify-center`}
              >
                <span>
                  <BiSolidUpArrow className=" text-2xl" />
                </span>
              </div>

              <div
                className={`absolute -left-12 ${
                  height < 350 ? "top-[60%]" : "top-[40%]"
                }  flex flex-col justify-center duration-200`}
              >
                <span
                  className={` ${
                    height > 450 ? "opacity-100" : "opacity-0"
                  } duration-200 font-bold text-sm -rotate-90 px-1 bg-white`}
                >
                  ZITHARA.AI
                </span>
              </div>

              <div className=" absolute -right-3 top-[40%] flex flex-col justify-center">
                <span>
                  <BiSolidDownArrow className=" text-2xl" />
                </span>
              </div>

              <div className="absolute -right-12 top-[60%] flex flex-col justify-center">
                <span
                  className={` ${
                    height > 470 ? "opacity-100" : "opacity-0"
                  } duration-200 font-bold text-sm rotate-90 px-1 bg-white`}
                >
                  ZITHARA.AI
                </span>
              </div>

              <div className=" w-full flex justify-between items-center gap-7 px-10 absolute -bottom-[30px] z-10">
                <span>
                  <BiSolidLeftArrow className="text-2xl text-blue-800 translate-y-[2.5px]" />
                </span>

                <div className=" flex items-center gap-7">
                  <Image
                    width="90"
                    src="/scroll/ct1.webp"
                    height="90"
                    className=" mx-auto object-cover h-[65px] w-[65px]"
                    alt={"person1"}
                  />
                  <Image
                    width="90"
                    src="/scroll/ct2.webp"
                    height="90"
                    className=" mx-auto object-cover h-[65px] w-[65px]"
                    alt={"person2"}
                  />
                  <Image
                    width="90"
                    src="/scroll/ct3.webp"
                    height="90"
                    className=" mx-auto object-cover h-[65px] w-[65px]"
                    alt={"person3"}
                  />
                  <Image
                    width="90"
                    src="/scroll/ct4.webp"
                    height="90"
                    className=" mx-auto object-cover h-[65px] w-[65px]"
                    alt={"person4"}
                  />
                </div>

                <span>
                  <BiSolidLeftArrow className="text-2xl text-blue-800 translate-y-[2.2px]" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full ">
          <Image
            width={320}
            src="/imgphone.webp"
            height={400}
            className=" lg:hidden w-80 mx-auto object-cover"
            alt=""
          />
        </div>
      </section>
    </main>
  );
}
