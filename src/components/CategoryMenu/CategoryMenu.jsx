import ButtonTextBasic from "../Buttons/ButtonTextBasic";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CategoryMenu = () => {
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
  }, []);

  return (
    <div className="flex flex-row justify-between items-center h-full">
      <ul className="flex flex-row gap-6 h-full">
        {categoryData.map((data, id) => (
          <Link
            to={`/products?category=${data}`}
            key={id}
            className="py-2 rounded-lg hover:text-secondary group relative inline-block hover:after"
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
