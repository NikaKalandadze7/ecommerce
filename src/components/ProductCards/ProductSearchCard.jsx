/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ProductSearchCard = ({ price, category, title, image, id }) => {
  return (
    <Link className="flex flex-row bg-white justify-between items-center p-1 m-2 border-solid border-[1px] border-[#c7c7c7] rounded-md  hover:text-tretiary hover:border-tretiary ease-in-out duration-200">
      <div className="max-h-[80px] h-full max-w-[80px] w-full">
        <div
          className="bg-cover bg-center max-h-[80px] h-full max-w-[80px] w-full pt-[90%]"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </div>
      <h1 className="max-w-[264px] w-full max-h-16 h-full text-sm font-normal leading-6 truncate">
        {title}
      </h1>
      <div className="text-[10px] font-medium leading-4">
        Category: {category}
      </div>
      <span className="text-sm font-medium leading-5 text-green-500">
        {price} $
      </span>
    </Link>
  );
};

export default ProductSearchCard;
