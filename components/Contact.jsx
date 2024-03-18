"use client";
import Link from "next/link";
import React, { useState } from "react";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");

  const formData = {
    firstName: firstName,
    lastName: lastName,
    workEmail: workEmail,
    companyName: companyName,
    phone: phone,
    country: country,
    message: message,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className=" w-full flex justify-between md:py-7 lg:py-12 px- md:px-8 lg:px-16 bg-gray-100 h-auto">
      <div className=" hidden lg:flex w-full flex-col gap-4 h-full">
        <h5 className=" text-lg font-medium">CONTACT US</h5>
        <h1 className=" font-bold text-5xl max-w-lg text-blue-950">
          We would love to connect with you!
        </h1>
        <img
          src="/about-us/sam.png"
          className=" w-[400px] hidden lg:block"
          alt=""
        />
      </div>
      <div className=" w-full lg:w-[75%] h-auto flex flex-col items-center px-6 py-8 bg-white shadow-md rounded-md">
        <h3 className=" font-bold mb-7 text-xl text-blue-950">
          Connect With Us
        </h3>
        <form
          action=""
          onSubmit={(e) => handleSubmit(e)}
          className=" w-full grid grid-cols-1 lg:grid-cols-2 gap-4 z-20"
        >
          <span className=" w-full flex flex-col gap-1">
            <label htmlFor="first-name" className=" font-semibold text-sm">
              First Name<sup>*</sup>
            </label>
            <input
              type="text"
              id="first-name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className=" w-full rounded-sm border text-xs outline-none border-gray-400 px-1.5 py-2.5 lg:py-2"
            />
          </span>
          <span className=" w-full flex flex-col gap-1">
            <label htmlFor="last-name" className=" font-semibold text-sm">
              Last Name
            </label>
            <input
              type="text"
              id="last-name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className=" w-full rounded-sm border text-xs outline-none border-gray-400 px-1.5 py-2.5 lg:py-2"
            />
          </span>
          <span className=" w-full flex flex-col gap-1">
            <label htmlFor="work-email" className=" font-semibold text-sm">
              Work Email<sup>*</sup>
            </label>
            <input
              type="email"
              id="work-email"
              value={workEmail}
              onChange={(e) => setWorkEmail(e.target.value)}
              required
              className=" w-full rounded-sm border text-xs outline-none border-gray-400 px-1.5 py-2.5 lg:py-2"
            />
          </span>
          <span className=" w-full flex flex-col gap-1">
            <label htmlFor="phone" className=" font-semibold text-sm">
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className=" w-full rounded-sm border text-xs outline-none border-gray-400 px-1.5 py-2.5 lg:py-2"
            />
          </span>
          <span className=" w-full flex flex-col gap-1 lg:col-span-2">
            <label htmlFor="company-name" className=" font-semibold text-sm">
              Company Name<sup>*</sup>
            </label>
            <input
              type="text"
              id="company-name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
              className=" w-full rounded-sm border text-xs outline-none border-gray-400 px-1.5 py-2.5 lg:py-2"
            />
          </span>
          <span className=" w-full flex flex-col gap-1 lg:col-span-2">
            <label htmlFor="message" className=" font-semibold text-sm">
              Message
            </label>
            <textarea
              id="message"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className=" w-full rounded-sm border text-xs outline-none border-gray-400 px-1 py-2.5 lg:py-2"
            ></textarea>
          </span>
          <span className=" flex items-center gap-2.5 lg:col-span-2 mt-3">
            <p className="text-xs font-semibold break-words">
              By Submitting this form you agree to{" "}
              <Link href="/" className=" text-blue-800 underline">
                Zithara&apos;s Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/" className=" text-blue-800 underline">
                Privacy Policy
              </Link>
            </p>
          </span>

          <button
            type="submit"
            className=" bg-blue-800 text-white font-semibold text-sm lg:col-span-2 px-2 py-2 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
