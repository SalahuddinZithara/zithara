"use client";
import { IoMdClose } from "react-icons/io";

function TeamModal({ item, setOpenModal }) {
  const { img, name, position, info } = item;

  return (
    <div>
      <div className="justify-center items-center flex mx-3 fixed inset-0 z-50">
        <div className="relative w-auto my-6 mx-auto max-w-6xl">
          <div className=" w-[90vw] lg:w-[60vw] min-h-52 border-0 rounded-lg shadow-lg relative flex flex-col bg-white">
            <div className="flex items-center justify-end px-5 py-3 border-b border-solid border-slate-200 rounded-t">
              <IoMdClose
                className="text-2xl cursor-pointer"
                title="Close"
                onClick={() => setOpenModal(false)}
              />
            </div>
            <div className=" w-full flex flex-col lg:flex-row gap-5 p-5 lg:py-10">
              <div className=" flex flex-col gap-3 w-full lg:w-[25%] items-center">
                <img src={img} alt={name} className=" w-24 lg:w-44" />
                <h3 className=" font-bold ">{name}</h3>
                <h5 className=" font-medium text-sm">{position}</h5>
              </div>
              <div className=" flex-1 lg:p-5">
                <p className=" text-center lg:text-left">{info}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-80 fixed inset-0 z-40 bg-black"></div>
    </div>
  );
}

export default TeamModal;
