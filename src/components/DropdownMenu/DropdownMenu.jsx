import VectorIcon from "../icons/VectorIcon";
import axios from "axios";
import { useEffect, useState } from "react";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All categories");
  const [chevronPosition, setChevronPosition] = useState(false);

  const [categoryData, setCategoryData] = useState([]);

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
  });

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setIsOpen(false);
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setChevronPosition(!chevronPosition);
  };
  return (
    <div className="relative xl:w-[154px] lg:w-[104px]  h-8 inline-block">
      <button
        onClick={toggleDropdown}
        className="absolute z-[123] bg-[#F5F6F8] border-none  xl:w-[154px] xl:pl-6 lg:pl-3 lg:w-[104px] xl:pr-7 lg:pr-4 py-2 h-8 xl:text-xs lg:text-[10px] md:text-[10px] rounded-[50px]"
      >
        {selectedCategory}
        <div className="block absolute top-[12px] xl:right-[16px] lg:right-[6px]">
          <VectorIcon color={"#5F5F5F"} height={"10px"} width={"10px"} />
        </div>
      </button>

      <div
        className={`absolute top-4 pt-4  bg-[#F5F6F8] z-[122] rounded-b-[20px] overflow-hidden ${
          isOpen ? "block" : "hidden"
        }  max-w-[154px]`}
      >
        {categoryData.map((data, index) => (
          <button
            onClick={() => handleCategoryChange(data)}
            key={index}
            className="bg-[#F5F6F8] border-none max-w-[154px] w-full pl-4 pr-5 py-2 h-8 xl:text-xs lg:text-[10px] md:text-[10px] hover:bg-[#ffffff]"
          >
            {data}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;
