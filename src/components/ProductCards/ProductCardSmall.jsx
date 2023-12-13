import FavoriteButton from "../Buttons/FavoriteButton";
import MoreOptionsDropdown from "../MoreOptionsDropdown/MoreOptionsDropdown";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ProductCardSmall = ({ price, category, title, image, id }) => {
  return (
    <div className="w-[190px] rounded-[10px] h-[290px] p-4 shadow-md relative ease-in-out duration-300 hover:scale-105 hover:z-20 bg-white">
      <div
        className="bg-cover bg-top pt-[90%]"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="absolute right-4 top-4">
        <FavoriteButton />
      </div>
      <div className="flex flex-col flex-nowrap">
        <Link
          to={`/products/${id}`}
          className="max-w-[264px] w-full text-sm font-normal leading-6 h-8  mt-4 truncate hover:text-tretiary ease-in-out duration-200"
        >
          {title}
        </Link>
        <div className="text-xs font-medium leading-4">{category}</div>
        <span className="text-sm font-medium leading-5 mt-4">${price}</span>
      </div>
      <div className="absolute -right-5 bottom-4 ">
        <MoreOptionsDropdown />
      </div>
    </div>
  );
};

export default ProductCardSmall;
