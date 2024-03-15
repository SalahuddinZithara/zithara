import React from "react";
import { Button } from "./ui/button";
import { CiBookmarkCheck } from "react-icons/ci";
import Link from "next/link";

const BookNow = () => {
  return (
    <div className=" w-full flex items-center justify-between py-3 rounded-md shadow-md border bg-white px-5">
      <Link href="/">
        <img src="/logo.png" alt="logo" width={130} />
      </Link>
      <Link href="/contact">
        <Button className=" bg-blue-800 hover:bg-blue-900 duration-200 flex items-center gap-1 text-white rounded-sm ">
          <CiBookmarkCheck className=" text-xl" />
          <p className="font-semibold ">Book A Demo</p>
        </Button>
      </Link>
    </div>
  );
};

export default BookNow;
