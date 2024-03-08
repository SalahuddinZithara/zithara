import { useEffect, useRef, useState } from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidUpArrow } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";
import Image from "next/image";

export default function ScrollAnimate() {
  const [height, setHeight] = useState(100);
  const lastScrollY = useRef(0);
  const targetRef = useRef(null);

  const handleScroll = () => {
    if (targetRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
      const isVisible = rect.top <= 0 && rect.bottom >= 0;

      if (isVisible) {
        if (window.scrollY > lastScrollY.current && height < 500) {
          // Scrolling down
          setHeight(height + 10); // Increase height
        } else if (window.scrollY < lastScrollY.current && height > 100) {
          // Scrolling up
          setHeight(height - 10); // Decrease height
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
    <main className=" w-full min-h-screen flex flex-col gap-5 md:p-4">
      <section
        className=" relative w-full h-auto md:h-[500vh] rounded-md md:p-5"
        ref={targetRef}
      >
        <h1 className=" w-full md:w-[800px] mx-auto font-montserrat text-2xl md:leading-[55px] md:text-[45px] mb-8 md:mb-32 font-bold text-center">
          The Clever All-In-One Customer Engagement Platform
        </h1>
        <div className="hidden md:block sticky top-20 left-0 w-[70vw] mx-auto mb-20">
          <div
            style={{ height: height }}
            className={` w-full relative mx-auto border border-dashed rounded-xl border-black min-h-[300px]`}
          >
            <div className=" absolute z-10 -top-[60px] px-10 w-full flex items-center gap-5">
              <div className=" bg-white w-full flex flex-col gap-2 items-center justify-center p-5 border border-gray-400 rounded-lg font-montserrat">
                <h4 className=" text-xl font-semibold text-gray-600">
                  Understand
                </h4>
                <p className=" text-sm text-center">
                  Acquire in-depth Customer Insights
                </p>
              </div>

              <span>
                <BiSolidRightArrow className=" text-2xl" />
              </span>

              <div className=" bg-white w-full flex flex-col gap-2 items-center justify-center p-5 border border-gray-400 rounded-lg font-montserrat">
                <h4 className=" text-xl font-semibold text-gray-600">
                  Optimize
                </h4>
                <p className=" text-sm text-center">
                  Experiment for Superior Customer Engagement
                </p>
              </div>

              <span>
                <BiSolidRightArrow className=" text-2xl" />
              </span>

              <div className=" bg-white w-full flex flex-col gap-2 items-center justify-center p-5 border border-gray-400 rounded-lg font-montserrat">
                <h4 className=" text-xl font-semibold text-gray-600">Engage</h4>
                <p className=" text-sm text-center">
                  Tailor Personalized Customer Experiences
                </p>
              </div>
            </div>

            <div className=" absolute -left-3 top-[50%] border flex flex-col justify-center">
              <span>
                <BiSolidUpArrow className=" text-2xl" />
              </span>
            </div>

            <div className=" absolute -right-3 top-[50%] border flex flex-col justify-center">
              <span>
                <BiSolidDownArrow className=" text-2xl" />
              </span>
            </div>

            <div className=" w-full flex justify-between items-center gap-7 px-10 absolute -bottom-[30px] z-10">
              <span>
                <BiSolidLeftArrow className="text-2xl" />
              </span>

              <div className=" flex items-center gap-7">
                <span className=" w-14 h-14 rounded-full bg-white border border-gray-300"></span>
                <span className=" w-14 h-14 rounded-full bg-white border border-gray-300"></span>
                <span className=" w-14 h-14 rounded-full bg-white border border-gray-300"></span>
                <span className=" w-14 h-14 rounded-full bg-white border border-gray-300"></span>
              </div>

              <span>
                <BiSolidLeftArrow className="text-2xl" />
              </span>
            </div>
          </div>
        </div>
        <div className=" w-full ">
          <Image
            width={320}
            src="/imgphone.webp"
            height={400}
            className=" md:hidden w-80 mx-auto object-cover"
            alt=""
          />
        </div>
      </section>
    </main>
  );
}
