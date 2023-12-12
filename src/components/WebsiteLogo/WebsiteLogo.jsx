/* eslint-disable react/prop-types */
import MainIcon from "../icons/MainIcon";
import { useNavigate } from "react-router-dom";

const WebsiteLogo = () => {
  const navigateHome = useNavigate();

  const handleNavigate = () => {
    navigateHome(`/`);
  };
  return (
    <button
      className="max-h-10 h-full max-w-[200px] w-full"
      onClick={() => handleNavigate()}
    >
      <MainIcon height={"48px"} width={"200px"} color={"#303C4E"} />
    </button>
  );
};

export default WebsiteLogo;
