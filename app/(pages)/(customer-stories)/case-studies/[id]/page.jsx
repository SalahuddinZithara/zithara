"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
import { CiGlobe } from "react-icons/ci";
import { PiBuildingsLight } from "react-icons/pi";

const caseStudyData = [
  {
    id: 1,

    name: "Brown Bear Bakers",

    heroImg: "/case-study/cs-brown-bear.png",

    industry: "Bakers",

    result: [
      {
        id: 1,
        title: "Increase in customer retention",
        value: "48%",
      },
      {
        id: 2,
        title: "Increase in sales",
        value: "36%",
      },
    ],

    companyUrl: "https://brownbearbakers.com/",

    summary:
      "How Zithara Helped Brown Bear To Improve Customer Experience Some Text By Using Just In The Time Messaging Platform On WhatsApp",

    img: "/vc/7.png",

    about:
      "Brown Bear is a trademark owned by BAKEMAX FOODS PRIVATE LIMITED. It is a 8 year old company founded by a group of young entrepreneurs with a strong passion and desire to bring innovation and uniqueness to the bakery industry. Their business model is focused on catering to the contemporary generation’s interest in trendy food that offers genuine value and affordability.",

    objective: [
      "Brown Bear was searching for a technology partner to improve their digital customer journey and enhance their customer experience, as they are committed to provide exceptional customer service.",

      "Having only an offline business presence Brown Bear limited the bakery’s reach, customer experience and potential customer base. Without an online presence, the bakery was not  able to reach customers who prefer to order online or who live outside the local area. This resulted in missed opportunities for growth and revenue. And also affected the customer experience at large.They aimed to find a technology  partner who could help them retain existing customers and attract potential ones by offering an outstanding customer experience.",
    ],

    solution: [
      "Now every time a customer makes a purchase with the bakery. Brown Bear knew what the customer purchase behavior and spending patterns were, the new system immediately recognised the valuable customers versus first timers and an automated message was instantly sent on whatsapp appreciating them and providing various Just-In-Time offers without manual intervention.",

      "Imagine the customer getting notifications when they had their birthdays ,marriage anniversaries, and other occasions.Brown bear was able to monetize these opportunities by sending them personalized messages through whatsapp, mail ,sms and showing them that they cared for their customers.",

      "This marketing technology which is integrated with zithara allowed Brown bear not only with online presence but now they were able to communicate with their customers to know them better this also helped to increase purchases and helped in potential customer referrals and also increased brand awareness which resulted in greater customer base .All of this helped in accelerating customer experience which resulted in 48% increase in customer retention and 36% increase in sales`",
    ],

    problem: [
      "Brown Bear was searching for a technology partner to improve their digital customer journey and enhance their customer experience, as they are committed to provide exceptional customer service.",

      "Having only an offline business presence Brown Bear limited the bakery’s reach, customer experience and potential customer base. Without an online presence, the bakery was not  able to reach customers who prefer to order online or who live outside the local area. This resulted in missed opportunities for growth and revenue. And also affected the customer experience at large.They aimed to find a technology  partner who could help them retain existing customers and attract potential ones by offering an outstanding customer experience.",
    ],

    finalResult: [],
  },
  {
    id: 2,

    name: "Meghavi Wellness",

    industry: "Spa",

    heroImg: "/case-study/cs-meghavi.jpg",

    result: [
      {
        id: 1,
        title: "ATV increase",
        value: "25%",
      },
      {
        id: 2,
        title: "Increase in sales",
        value: "60%",
      },
    ],

    companyUrl: "https://meghaviwellness.com/",

    summary:
      "Meghavi Grew Incremental Revenue from (loyalty) by 48% with zithara new age loyalty",

    img: "/vc/1.png",

    about:
      "Largest Luxury Spa Chain Brands in India  is a popular wellness brand that offers a range of services and products designed to help customers lead a healthy and balanced life.  Meghavi Wellness Chain pioneered and removed the taboo around body massages by adding an unbeatable value proposition to their customer base which created loyal customer base for them",

    solution: [
      "Zithara Helped the brand understand that Singular ways to increase LTV yet have the customer repeat at regular intervals, they had to do away with steep discounts and reward their customers at each visit so the customers could convert the reward point for Future visits to the store.",

      "Zithara is an All-in-one AI-powered CRM built to maximize revenue for any Omni Channel retail. Zithara offers Rewards/loyalty, Referrals, Feedback, Whatsapp Business API with green tick verification to connect communication channels with customers,  Customer segmentation, an Automated Campaign engine, and Integration into Social media Ads and campaigns.",
    ],

    finalResult: [
      "The partnership with Zithara helped Meghavi Wellness Chain achieve its goals of increasing its customer LTV and attracting new customers. By using personalized discounts and a referral program, Meghavi was able to incentivize customers to spend more and refer their friends and family to the spa.",

      "This resulted in a significant increase in customer LTV and helped them attract new customers.",

      "Overall, the partnership with Zithara was a success and helped Largest Luxury Spa Chain Brands in India achieve their business objectives.",
    ],

    problem: [
      "Meghavi sold many Memberships to create repetitive behavior in their customers. However , it also created stagnation of Ticket size. They needed to increase the ticket size, yet make them feel that they got the best deal. Introduced Customized reward program that guaranteed better purchasability next visit while increasing the spend each visit.  Megahvi quickly  saw a 17% ATV increase.",
    ],
  },
  {
    id: 3,

    name: "Q Mart",

    industry: "Spa",

    heroImg: "/case-study/cs-qmart.png",

    result: [
      {
        id: 1,
        title: "Increase in customer retention",
        value: "37%",
      },
      {
        id: 2,
        title: "Increase in ROI",
        value: "20%",
      },
    ],

    companyUrl: "https://www.qmart.in/",

    summary:
      "How Q-Mart increased customer retention by 37% using Zithara’s new age  loyalty  program",

    img: "/vc/2.png",

    about:
      "Q-mart Believe in creating great experiences by bringing the world’s finest products under one roof. They were the first to introduce speciality and gourmet foods such as hydroponic vegetables, international cheese and deli meats among others. It started in 1997 in banjara hills (Hyderabad), Today the brand is loved for its core values of honesty, integrity and trust that customer experience throughout the shopping journey.",

    objective: [
      "Q-mart wanted to introduce the New Age Loyalty program for their customers during their shopping journey that would allow them to be rewarded for any action they would take with the brand, They wanted to reward them on purchases, Referrals, Feedback, Repeat purchase, Buying more than last time and like the social campaigns.",
    ],

    solution: [
      "“Zithara’s New Age loyalty program was designed for offline retailers intending to Create their branded rewards, reward customers at every touch point, Allow redemption at the counter and online and effectively communicate with customers”",

      "This process of personalized engagement with a customer increases customer satisfaction, retains customers, and drives repeat purchases. The system’s automation ensures that customers receive personalized offers and recommendations, ultimately improving their overall experience with the brand.",
    ],

    finalResult: [
      "Boosted customer retention improved by 37% through the implementation of the New Age  Loyalty program.",
    ],

    problem: [
      "One of the biggest challenges Q-Mart faced is how to incentivize customers to remain loyal to a brand. Wanted to introduce the New Age Loyalty program for their customers during their shopping journey.",
    ],
  },
  //   {
  //     id: 4,
  //     name: "PMJ Jewels",
  //     summary: "Some Data",
  //     img: "/vc/3.png",
  //   },
];

const CaseStudy = () => {
  const { id } = useParams();
  const currentPageData = caseStudyData[id - 1];

  console.log(currentPageData[0]);

  return (
    <div className=" w-full min-h-screen">
      {/* --------HERO__SECTION--------- */}
      <div className=" w-full flex flex-col lg:flex-row lg:items-center gap-10 px-5 md:px-8 lg:px-16 py-5 lg:my-5">
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
      </div>

      {/* -----------COMPANY__DETAIL__BAR------------- */}
      <div className=" w-full flex flex-col lg:flex-row lg:items-center gap-7 lg:gap-20 px-5 md:px-8 lg:px-16 py-8 bg-gray-50">
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
      </div>

      {/* -----------DETAIL__DATA-------------- */}
      <div className=" w-full h-auto flex gap-10 lg:gap-0 flex-col lg:flex-row justify-between px-5 md:px-8 lg:px-16 relative py-16">
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
      </div>
    </div>
  );
};

export default CaseStudy;
