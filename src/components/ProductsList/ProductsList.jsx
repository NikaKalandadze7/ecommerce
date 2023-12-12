import ProductCard from "../ProductCards/ProductCard";
import { useEffect, useState } from "react";
import {
  getProducts,
  getProductsByCategory,
} from "../../services/productsService";
import { useSearchParams } from "react-router-dom";

const ProductsList = () => {
  const [productData, setProductData] = useState([]);
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  useEffect(() => {
    const fetchData = async () => {
      if (!category) {
        try {
          const products = await getProducts();
          setProductData(products);
        } catch (error) {
          console.error(`Error: ${error}`);
        }
      } else {
        try {
          const products = await getProductsByCategory(category);
          setProductData(products);
        } catch (error) {
          console.error(`Error: ${error}`);
        }
      }
    };

    fetchData();
  }, [category]);

  return (
    <>
      {productData.map((data) => (
        <ProductCard
          object={data}
          key={data.id}
          title={data.title}
          image={data.image}
          category={data.category}
          price={data.price}
          id={data.id}
        />
      ))}
    </>
  );
};

export default ProductsList;
