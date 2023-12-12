/* eslint-disable react/prop-types */
import ArrowRightIcon from "../icons/ArrowRightIcon";

const ButtonRightIcon = ({ label, buttonAction, buttonColor }) => {
  return (
    <button
      className="button-small w-full"
      onClick={buttonAction}
      style={{ backgroundColor: `${buttonColor}` }}
    >
      <span>{label}</span>
      <ArrowRightIcon height={"20px"} width={"18px"} color={"white"} />
    </button>
  );
};

export default ButtonRightIcon;
