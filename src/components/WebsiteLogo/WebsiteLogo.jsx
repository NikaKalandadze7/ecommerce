/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

const WebsiteLogo = () => {
  const navigateHome = useNavigate();

  const handleNavigate = () => {
    navigateHome(`/`);
  };
  return (
    <button
      className="max-h-10 h-full w-full md:max-w-[200px] xl:text-2xl md:text-xl sm:max-w-[150px] xs:max-w-[100px] xs:text-base sm:text-lg font-extrabold text-left text-primary"
      onClick={() => handleNavigate()}
    >
      E-Store
    </button>
  );
};

export default WebsiteLogo;
