import axios from "axios";
import { useContext, useEffect, useState } from "react";
import ProductCardSmall from "../components/ProductCards/ProductCardSmall";
import ButtonRightIcon from "../components/Buttons/ButtonRightIcon";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import { CartProductsContext } from "../App";

const ProductDisplay = () => {
  const [categoryProductData, setCategoryProductData] = useState([]);
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const { setCartProducts } = useContext(CartProductsContext);

  const getProductById = async () => {
    await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((result) => {
        setProduct(result.data);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  const getProductsByCategory = async () => {
    await axios
      .get(`https://fakestoreapi.com/products/category/${product.category}`)
      .then((productsInCategory) => {
        setCategoryProductData(productsInCategory.data);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  const onAddToCart = (product) => {
    setCartProducts((current) => {
      const updatedProducts = [...current];
      const index = updatedProducts.findIndex((obj) => obj.id === product.id);

      if (index !== -1) {
        updatedProducts[index] = {
          ...updatedProducts[index],
          count: updatedProducts[index].count + 1,
        };
      } else {
        const newProduct = {
          ...product,
          count: 1,
        };

        updatedProducts.push(newProduct);
      }
      localStorage.setItem("cartProducts", JSON.stringify(updatedProducts));

      return updatedProducts;
    });
  };

  useEffect(() => {
    const storedCart = localStorage.getItem("cartProducts");
    if (storedCart) {
      setCartProducts(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      await getProductById();
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    if (product) {
      getProductsByCategory();
    }
  }, [product]);

  if (!product) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return (
    <div className="flex items-center  flex-col">
      <div className="main-container">
        <div className="flex md:flex-row xs:flex-col flex-nowrap w-full gap-12 mt-16 items-center">
          <h1 className="md:text-5xl xs:text-3xl font-bold text-primary md:my-12 md:hidden xs:block">
            {product?.title}
          </h1>
          <div className="md:max-w-[50%] xs:max-w-[85%]  sm:max-w-[85%] md:max-h-[526px] md:h-[500px] xs:h-[263px]  md:m-0 xs:mb-4">
            <img
              src={product?.image}
              alt="Product Image"
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col gap-14 md:max-w-[60%] xs:max-w-[85%]">
            <h1 className="md:text-5xl xs:text-3xl font-bold text-primary my-12 md:block xs:hidden">
              {product?.title}
            </h1>
            <p className="md:text-base xs:text-xs text-center font-medium w-full border-t-[#c7c7c7] border-t-[1px] pt-8">
              {product?.description}
            </p>
            <p className="text-xs">Category: {product?.category}</p>
            <div className="w-full border-t-[#c7c7c7] border-t-[1px] pt-8 flex flex-row justify-between">
              <span className="text-3xl text-green-700 font-medium ">
                ${product?.price}
              </span>
              <div className="max-w-[124px]">
                <ButtonRightIcon
                  label={"Add to Cart"}
                  buttonColor={"#1ea4cc"}
                  buttonAction={() => onAddToCart(product)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-24 bg-[#eee] w-full items-center">
        <div className="main-container border-t-[#cfcfcf] border-t-[1px] pt-8">
          <h4 className="text-sm font-semibold ">
            Check out other products in the category:
          </h4>
          <div className="flex flex-row gap-6 my-12 overflow-x-scroll items-center h-[350px]">
            {categoryProductData.map((data) => (
              <ProductCardSmall
                key={data?.id}
                title={data?.title}
                image={data?.image}
                category={data?.category}
                price={data?.price}
                id={data?.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
