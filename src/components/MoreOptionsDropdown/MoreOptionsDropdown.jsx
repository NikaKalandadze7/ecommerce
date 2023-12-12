import { useState } from "react";
import VerticalMoreIcon from "../icons/VerticalMoreIcon";
const MoreOptionsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelection = () => {
    setIsOpen(false);
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative h-8 ">
      <button
        onClick={toggleDropdown}
        className="z-20 pl-6 pr-7 py-2 h-8 text-xs"
      >
        <VerticalMoreIcon height={"18px"} width={"18px"} color={"black"} />
      </button>

      <div
        className={`absolute top-4 left-[50%] bg-[#F5F6F8] z-10 rounded-sm ${
          isOpen ? "block" : "hidden"
        }  max-w-[154px]`}
      >
        <button
          onClick={() => handleSelection()}
          className="bg-[#F5F6F8] w-24 h-8 text-xs hover:bg-[#ffffff] z-50"
        >
          Option 1
        </button>
        <button
          onClick={() => handleSelection()}
          className="bg-[#F5F6F8]  w-24   h-8 text-xs hover:bg-[#ffffff]"
        >
          Option 2
        </button>
        <button
          onClick={() => handleSelection()}
          className="bg-[#F5F6F8]  w-24   h-8 text-xs hover:bg-[#ffffff]"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default MoreOptionsDropdown;
