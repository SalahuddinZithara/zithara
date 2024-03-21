import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { Button } from "./ui/button";
import { CiBookmarkCheck } from "react-icons/ci";
import { HiCheckBadge } from "react-icons/hi2";
import { GoInfo } from "react-icons/go";

const Engagement = ({ items, category }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section className=" w-full h-auto md:h-auto rounded-md">
      <div className="flex flex-col mt-12 w-full">
        {items.map((item, index) => {
          const { id, name, summary, img, path, list, detail, type } = item;
          return (
            <div
              key={id}
              className=" w-full h-auto lg:h-[130vh] 2xl:h-[100vh] relative scroll-smooth"
            >
              <div
                data-aos="fade-up"
                className={`
                w-full flex items-center sticky top-0 left-0 h-auto lg:h-[100vh] 2xl:h-[70vh] 
                ${id % 2 == 0 ? "lg:flex-row-reverse" : "lg:flex-row"}
                flex-col shadow-sm
                `}
              >
                <div className=" w-full lg:w-[50%]  ">
                  <Image
                    width="auto"
                    src={img}
                    height="auto"
                    className=" mx-auto object-cover h-[50vh] lg:h-[100vh] 2xl:h-[70vh] w-[100%] "
                    alt={name}
                  />
                </div>
                <div className=" flex flex-col gap-6 w-full h-auto lg:h-full lg:w-[50%] bg-white items-start justify-center py-9 lg:py-5 pt-10 px-5 lg:pt-10 lg:px-10 max-w-2xl ">
                  <h3 className=" relative text-2xl md:text-3xl font-bold text-left">
                    {name}
                    {category === "business" && (
                      <p className=" absolute left-0 -top-6 text-xs font-semibold text-gray-400 border px-1 py-0.5 rounded-sm">
                        {type}
                      </p>
                    )}
                  </h3>
                  <p className=" font-[450] text-left max-w-md">{summary}</p>
                  {category === "business" ? (
                    <p className=" text-sm text-gray-700">{detail}</p>
                  ) : (
                    <div className=" flex flex-col gap-2 lg:pl-3 w-full">
                      {list.map((item) => {
                        const { id, listData } = item;
                        return (
                          <div key={id} className=" flex items-center gap-2">
                            <span>
                              <HiCheckBadge className=" text-gray-600 " />
                            </span>
                            <p className=" text-sm break-words">{listData}</p>
                          </div>
                        );
                      })}
                    </div>
                  )}
                  <Link
                    href={path}
                    className=" group flex items-center gap-1.5 mt-3"
                  >
                    <Button className=" bg-blue-800 hover:bg-blue-900 duration-200 flex md:w-[150px] items-center gap-1 text-white rounded-sm ">
                      {category === "business" ? (
                        <GoInfo className=" text-xl" />
                      ) : (
                        <CiBookmarkCheck className=" text-xl" />
                      )}
                      <p className="font-semibold ">
                        {category === "business" ? "Know More" : "Book A Demo"}
                      </p>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Engagement;
