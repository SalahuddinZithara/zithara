"use client";
import React, { useState } from "react";
import ModalWrapper from "./ModalWrapper";
import Link from "next/link";

const BookDemoModal = ({ openModal, closeModal }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [terms, setTerms] = useState("");

  const formData = {
    firstName: firstName,
    lastName: lastName,
    workEmail: workEmail,
    companyName: companyName,
    phone: phone,
    country: country,
    terms: terms,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <ModalWrapper
      className={" w-[90vw] lg:w-[1000px] h-fit"}
      isOpen={openModal}
      onClose={closeModal}
      title={"Book Demo"}
    >
      <div className=" w-full flex justify-between bg-gray-100 h-auto">
        <div className=" w-[100%] h-auto flex flex-col items-center pt-3 pb-5 bg-white rounded-md">
          {/* <h3 className=" font-bold mb-5 text-xl">Book A Demo</h3> */}
          <form
            action=""
            onSubmit={(e) => handleSubmit(e)}
            className=" w-full grid grid-cols-1 lg:grid-cols-2 gap-4"
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
                className=" w-full rounded-sm border text-xs outline-none border-gray-400 px-1.5 py-2"
              />
            </span>
            <span className=" w-full flex flex-col gap-1">
              <label htmlFor="last-name" className=" font-semibold text-sm">
                Last Name<sup>*</sup>
              </label>
              <input
                type="text"
                id="last-name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className=" w-full rounded-sm border text-xs outline-none border-gray-400 px-1.5 py-2"
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
                className=" w-full rounded-sm border text-xs outline-none border-gray-400 px-1.5 py-2"
              />
            </span>
            <span className=" w-full flex flex-col gap-1">
              <label htmlFor="company-name" className=" font-semibold text-sm">
                Company Name<sup>*</sup>
              </label>
              <input
                type="text"
                id="company-name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
                className=" w-full rounded-sm border text-xs outline-none border-gray-400 px-1.5 py-2"
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
                className=" w-full rounded-sm border text-xs outline-none border-gray-400 px-1.5 py-2"
              />
            </span>
            <span className=" w-full flex flex-col gap-1">
              <label htmlFor="country" className=" font-semibold text-sm">
                Country<sup>*</sup>
              </label>
              <input
                type="text"
                id="company-name"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
                className=" w-full rounded-sm border text-xs outline-none border-gray-400 px-1 py-2"
              />
            </span>
            <span className=" flex items-center gap-2.5 lg:col-span-2 mt-5">
              <input
                value={terms}
                onChange={(e) => setTerms(e.target.checked)}
                type="checkbox"
                id="terms"
                className=""
              />
              <p className="text-xs font-semibold break-words">
                I agree to{" "}
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
              onClick={() => closeModal(false)}
              className=" bg-blue-800 text-white font-semibold text-sm lg:col-span-2 px-2 py-2 rounded-md"
            >
              Book Demo
            </button>
          </form>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default BookDemoModal;
