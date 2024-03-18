"use client";
import { IoMdClose } from "react-icons/io";

function TestimonialModal({ vid, setOpenModal }) {
  return (
    <div>
      <div className="justify-center items-center flex mx-3 fixed inset-0 z-50">
        <div className="relative w-auto my-6 mx-auto max-w-6xl">
          <div className=" w-[90vw] lg:w-[60vw] h-auto border-0 rounded-lg shadow-lg relative flex flex-col bg-white">
            <IoMdClose
              className="text-2xl cursor-pointer absolute right-2 top-2 z-30"
              title="Close"
              onClick={() => setOpenModal(false)}
            />
            <div className=" w-full">
              <video controls autoPlay src={vid}></video>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
    </div>
  );
}

export default TestimonialModal;
