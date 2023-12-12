/* eslint-disable react/prop-types */
import HeartIcon from "../icons/HeartIcon";

const FavoriteButton = ({ buttonAction, color }) => {
  return (
    <button
      style={{ backgroundColor: `${color}` }}
      className=" rounded-[50%] p-2 h-8 w-8 flex justify-center items-center border-1 border-[#E9E9E9] border-solid hover:border-red-500 ease-in-out duration-300"
      onClick={() => buttonAction()}
    >
      <HeartIcon width={"16px"} height={"16px"} color={"#5F5F5F"} />
    </button>
  );
};

export default FavoriteButton;
