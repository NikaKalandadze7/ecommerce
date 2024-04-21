import axios from "axios";
import { useEffect, useState } from "react";
import ProductThumbnail from "../ProductCards/ProductThumbnail";

const ThumbnailList = () => {
  const [productData, setProductData] = useState([]);

  const getProducts = async () => {
    await axios
      .get("https://fakestoreapi.com/products?limit=8")
      .then((products) => {
        setProductData(products.data);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  useEffect(() => {
    (async () => {
      await getProducts();
    })();
  }, []);
  return (
    <div className=" flex flex-row  flex-nowrap justify-between">
      {productData.map((data) => (
        <ProductThumbnail
          key={data.id}
          title={data.title}
          image={data.image}
          id={data.id}
        />
      ))}
    </div>
  );
};

export default ThumbnailList;
