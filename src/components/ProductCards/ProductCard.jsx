import { useState, useContext } from "react";
import ButtonRightIcon from "../Buttons/ButtonRightIcon";
import FavoriteButton from "../Buttons/FavoriteButton";
import { useNavigate } from "react-router-dom";
import { FavoriteProductsContext } from "../../App";

/* eslint-disable react/prop-types */
const ProductCard = ({ price, category, title, image, id, object }) => {
  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/products/${id}`);
  };
  const { favoriteProducts, setFavoriteProducts } = useContext(
    FavoriteProductsContext
  );

  const isProductFavorited = favoriteProducts.some(
    (product) => product.id === id
  );

  const handleFavorite = () => {
    if (isProductFavorited) {
      setFavoriteProducts((current) =>
        current.filter((product) => product.id !== id)
      );
    } else {
      setFavoriteProducts((current) => [...current, object]);
    }
 
  };

  return (
    <div className="card-large bg-white ">
      <div
        className="bg-cover bg-top max-h-[614px] pt-[90%]"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="absolute md:right-6 md:top-6 xs:right-2 xs:top-2 ">
        <FavoriteButton
          color={isProductFavorited ? "#C41E3A" : "white"}
          buttonAction={() => handleFavorite(object)}
        />
      </div>
      <div className="flex flex-col flex-nowrap">
        <h1 className="max-w-[264px] w-full max-h-16 h-full xl:text-sm md:text-sm sm:text-xs xs:text-[10px] font-normal leading-6 md:mt-[20px] xs:mt-[10px] truncate">
          {title}
        </h1>
        <div className="text-[10px] font-medium leading-4 mt-2 sm:block xs:hidden">
          {category}
        </div>
      </div>
      <div className="flex flex-row justify-between md:m-1 xs:m-3">
        <span className="md:text-sm xs:text-xs font-medium leading-5 md:mt-4 xs:mt-2 absolute md:left-6 md:bottom-8 xs:left-3 xs:bottom-2">
          {price} $
        </span>
        <div className="absolute md:right-6 md:bottom-8 xs:right-3 xs:bottom-2 ">
          <ButtonRightIcon
            label={"More"}
            buttonAction={() => handleNavigate(id)}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
