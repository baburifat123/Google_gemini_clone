import { FaPen } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { GrYoutube } from "react-icons/gr";
import { IoMdSend } from "react-icons/io";
import { MdPlace } from "react-icons/md";
const Main = () => {
  return (
    <div className="flex-1 min-h-[100vh] relative ">
      <div className="flex items-center justify-between p-5">
        <h1 className="text-xl text-[#585858]">Gemini</h1>

        <img
          className="w-16 h-16 bg-cover rounded-full"
          src="src\assets\rifu.jpg"
          alt=""
        />
      </div>
      <div className="max-w-[900px] m-auto ">
        <div className="text-5xl font-semibold">
          <h1 className="text-cyan-300 my-2"> Hello, Rifat</h1>
          <h1 className="text-gray-400">How can I help you today?</h1>
        </div>
        <div className="gap-2 flex mt-20">
          <div className="w-[500px] h-[220px] m-auto bg-gray-400 rounded-xl p-5 flex flex-col gap-3 justify-between cursor-pointer">
            <h1>Help me find YouTube videos to care for a specific plant</h1>
            <GrYoutube className="text-2xl bg-white rounded-full p-1"></GrYoutube>
          </div>
          <div className=" cursor-pointer w-[500px] h-[220px] m-auto bg-gray-400 rounded-xl p-5 flex flex-col gap-3 justify-between">
            <h1>
              Create a personal webpage for me, all in a single file. Ask me 3
              questions first on whatever you need to know
            </h1>
            <FaPen className="text-2xl bg-white rounded-full p-1"></FaPen>
          </div>
          <div className="cursor-pointer w-[500px] h-[220px] m-auto bg-gray-400 rounded-xl p-5 flex flex-col gap-3 justify-between">
            <h1>Suggest beautiful places to see on an upcoming road trip</h1>
            <MdPlace className="text-2xl bg-white rounded-full p-1"></MdPlace>
          </div>
          <div className=" cursor-pointer w-[500px] h-[220px] m-auto bg-gray-400 rounded-xl p-5 flex flex-col gap-3 justify-between ">
            <h1> Tell me about React js and React native</h1>
            <FaCode className="text-2xl bg-white rounded-full p-1"></FaCode>
          </div>
        </div>
        <div className="flex items-center mt-80">
          <input
            className="w-full outline-none placeholder-gray-500 bg-slate-300 p-4  rounded-lg text-lg text-red-600 "
            type="text"
            placeholder="Enter a Prompt here"
            name=""
            id=""
          />
          <IoMdSend className="text-3xl absolute ml-[850px]"></IoMdSend>
        </div>
        <h1 className="text-gray-400 text-center text-[14px]">
          Gemini may display inaccurate info, including about people, so
          double-check its responses. Your privacy and Gemini Apps
        </h1>
      </div>
    </div>
  );
};

export default Main;
