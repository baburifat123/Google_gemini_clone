import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import { FaHistory } from "react-icons/fa";
import { FaRegCircleQuestion, FaRegMessage } from "react-icons/fa6";
import { RiMenuFill } from "react-icons/ri";
const Sidebav = () => {
  const [extart, setextart] = useState(!false);
  return (
    <div className="inline-flex flex-col h-[100vh] justify-between p-4 bg-[#f0f4f9] ">
      <div className=" flex flex-col gap-5">
        <div>
          <RiMenuFill
            onClick={() => setextart((pre) => !pre)}
            className="text-2xl cursor-pointer"
          ></RiMenuFill>
        </div>
        <div className="inline-flex items-center ">
          <AiOutlinePlus className="text-3xl text-gray-400 rounded-fullp-1 "></AiOutlinePlus>
          {extart ? <h1 className="text-gray-400 p-1">New Chats</h1> : ""}
        </div>
        <div>
          <h1>Recent</h1>
          <div className="flex items-center gap-2 mt-4 hover:bg-slate-300 p-2 rounded-lg cursor-pointer">
            <FaRegMessage className="text-sm"></FaRegMessage>
            {extart ? <h1>Hello..</h1> : ""}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex gap-2 items-center hover:bg-slate-300 p-2 rounded-lg cursor-pointer">
          <FaRegCircleQuestion className="text-2xl"></FaRegCircleQuestion>
          {extart ? <h1>Help</h1> : ""}
        </div>
        <div className="flex gap-2 items-center hover:bg-slate-300 p-2 rounded-lg cursor-pointer">
          <FaHistory className="text-xl"></FaHistory>
          {extart ? <h1>Activity</h1> : ""}
        </div>
        <div className="flex gap-2 items-center hover:bg-slate-300 p-2 rounded-lg cursor-pointer">
          <CiSettings className="text-xl"></CiSettings>
          {extart ? <h1>Settings</h1> : ""}
        </div>
      </div>
    </div>
  );
};

export default Sidebav;
