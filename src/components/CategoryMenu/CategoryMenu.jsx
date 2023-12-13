import ButtonTextBasic from "../Buttons/ButtonTextBasic";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Burger from "../icons/Burger";
const CategoryMenu = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const getCategories = async () => {
    await axios
      .get("https://fakestoreapi.com/products/categories")
      .then((categories) => {
        setCategoryData(categories.data);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  useEffect(() => {
    (async () => {
      await getCategories();
    })();
  }, []);

  return (
    <div className="flex flex-row justify-between items-center h-full relative">
      <button
        className="xs:block sm:block md:hidden z-50 relative"
        onClick={toggleDropdown}
      >
        <Burger width={"28px"} height={"28px"} color={"black"} />
      </button>
      <ul
        className={`flex sm:static  sm:flex-row xs:flex-col justify-between sm:gap-6 xs:gap-0  xs:absolute xs:top-10 xs:-left-2 z-20 xs:bg-secondaryLight h-full  ${
          isOpen ? "xs:flex" : "xs:hidden"
        }`}
      >
        {categoryData.map((data, id) => (
          <Link
            to={`/products?category=${data}`}
            key={id}
            className="py-2 sm:px-0 xs:px-3 hover:text-secondary group relative inline-block hover:after xs:bg-secondaryLight xs:rounded-none gap-0"
          >
            <ButtonTextBasic content={data.toUpperCase()} />
          </Link>
        ))}
      </ul>
      <Link
        to={`/products`}
        className="py-2 rounded-lg hover:text-secondary group relative inline-block hover:after h-full"
      >
        <ButtonTextBasic content={"ALL PRODUCTS"} />
      </Link>
    </div>
  );
};

export default CategoryMenu;
