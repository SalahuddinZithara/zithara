import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiCalendarDate } from "react-icons/ci";
import { LuMoveRight } from "react-icons/lu";
import { TiArrowRight } from "react-icons/ti";

const news = [
  {
    id: 1,
    img: "/media/news1.png",
    path: "https://wowhyderabad.com/reaching-out-to-offline-clients/",
    date: "Nov, 2023",
    summary:
      "This start-up provides solutions to offline stores to understand customer behavior",
  },
  {
    id: 2,
    img: "/media/news2.png",
    path: "https://www.aha.video/webepisode/nenu-super-women-s1-ep2",
    date: "Nov, 2023",
    summary: "Nenu Super Women",
  },
  {
    id: 3,
    img: "/media/news3.png",
    path: "https://timesofindia.indiatimes.com/zithara-launches-bharat-loyalty-a-upi-based-loyalty-program-even-a-hawker-can-run/articleshow/91462937.cms",
    date: "May 10, 2022",
    summary: "Zithara launches Bharat Loyalty: A UPI-Based Loyalty",
  },
  {
    id: 4,
    img: "/media/news4.png",
    path: "https://www.aninews.in/news/business/business/zithara-launches-bharat-loyalty-a-upi-based-loyalty-program-even-a-hawker-can-run20220510151002/",
    date: "May 10, 2022",
    summary:
      "Zithara launches Bharat Loyalty: A UPI-based Loyalty Program Even a Hawker Can Run",
  },
  {
    id: 5,
    img: "/media/news5.png",
    path: "https://www.eenadu.net/telugu-news/women/exclusive-business-journey-of-zithara-co-founder-sridevi-reddy-in-telugu/6207/123104187",
    date: "12 Jun, 2023",
    summary:
      "Empowering Small and Medium Traders - Bridging the Gap with Customers for Business Growth",
  },
  {
    id: 6,
    img: "/media/news6.png",
    path: "https://www.youtube.com/watch?v=NcUNGNs39Ng",
    date: "Aug 10, 2022",
    summary:
      "Co-Founder Sridevi Reddy talks about her journey as a female entrepreneur",
  },
  {
    id: 7,
    img: "/media/news7.png",
    path: "https://www.prnewswire.com/in/news-releases/zithara-launches-bharat-loyalty-a-upi-based-loyalty-program-even-a-hawker-can-run-805235888.html",
    date: "10 May, 2022",
    summary:
      "Zithara: India's largest decentralised loyalty app for SMBs, transforming rewards and retail",
  },
  {
    id: 8,
    img: "/media/news8.png",
    path: "https://www.bizzbuzz.news/bizz-talk/zitharas-data-platform-helping-retailers-battle-customer-churn-1246117",
    date: "7 Sep, 2023",
    summary:
      "Zithara's customer engagement platform helps retailers to collect and analyse customer data.",
  },
];

const Media = () => {
  return (
    <div className=" w-full flex flex-col">
      <section className=" relative">
        <video
          src="/media/vid1.mp4"
          autoPlay
          playsInline
          loop
          muted
          className=" absolute top-0 bottom-0 left-0 w-full"
        ></video>
        <div className="w-full flex bg-[rgba(0,0,0,0.7)] flex-col lg:flex-row xl:min-h-[80vh] py-7 lg:py-16 px-5 md:px-8 lg:px-16">
          <div className=" z-10 w-full lg:w-[50%] flex flex-col gap-5 ">
            <h1 className=" font-bold text-2xl md:text-4xl lg:text-5xl text-white">
              In The News
            </h1>
            <p className=" text-white">
              Read the latest press releases from Zithara - from awards,
              recognitions, product updates, partnerships to new business wins.
            </p>
          </div>
        </div>
      </section>

      {/* ----------IN--NEWS--SECTION--------- */}
      <section className=" w-full flex flex-col gap-7 px-5 md:px-8 lg:px-16 py-7 lg:py-10 bg-gray-50 lg:mt-52">
        <h1 className=" text-2xl lg:text-4xl font-bold text-blue-950">
          In The News
        </h1>
        <p className=" font-medium">
          You can’t build a revolutionary platform without getting some
          (welcome) attention.
        </p>

        <div className=" w-full flex flex-col gap-5">
          <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((item) => {
              const { id, summary, img, path, date } = item;
              return (
                <div
                  key={id}
                  className=" w-full flex flex-col gap-5 p-5 rounded-md bg-white shadow-md hover:shadow-lg duration-200"
                >
                  <Image
                    src={img}
                    alt="news-img"
                    width={400}
                    height={100}
                    className=" w-32 h-auto"
                  />
                  <p className=" font-medium">{summary}</p>
                  <div className=" w-full flex items-center justify-between">
                    <div className=" flex items-end gap-2">
                      <CiCalendarDate />
                      <p className=" text-xs">{date}</p>
                    </div>
                    <a
                      className=" flex items-center gap-2 bg-teal-900 px-2.5 py-1.5 rounded-sm"
                      href={path}
                      target="_blank"
                    >
                      <p className=" text-xs text-white font-medium">
                        See More
                      </p>
                      <span className=" p-[1px] rounded-full bg-white">
                        <TiArrowRight className=" text-lg" />
                      </span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Media;
