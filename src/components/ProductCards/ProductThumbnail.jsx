/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ProductThumbnail = ({ image, title, id }) => {
  return (
    <Link
      className="flex flex-col justify-center items-center gap-3 hover:text-tretiary ease-in-out duration-200"
      to={`/products/${id}`}
    >
      <div className="rounded-[5px] h-[144px] w-[144px] overflow-hidden p-2 shadow-lg bg-white border-[1px] border-solid hover:border-tretiary ease-in-out duration-200">
        <div
          className="h-[126px] w-[126px] bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </div>
      <p className="text-sm font-medium  truncate w-[126px] ">{title}</p>
    </Link>
  );
};

export default ProductThumbnail;
