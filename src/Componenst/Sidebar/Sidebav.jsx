import { RiMenuFill } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
const Sidebav = () => {
  return (
    <div>
      <div className="top">
        <div>
          <RiMenuFill></RiMenuFill>
        </div>
        <div>
          <FaPlus></FaPlus>
          <h1>New Chats</h1>
        </div>
        <div>
          <FaRegMessage></FaRegMessage>
          <h1>Recent</h1>
        </div>
      </div>
      <div className="buton">
        <div>
          <FaRegCircleQuestion></FaRegCircleQuestion>
          <h1>Help</h1>
        </div>
        <div>
          <FaHistory></FaHistory>
          <h1>Activity</h1>
        </div>
        <div>
          <CiSettings></CiSettings>
          <h1>Settings</h1>
        </div>
      </div>
    </div>
  );
};

export default Sidebav;
