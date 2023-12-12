/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { CartProductsContext } from "../../App";
import { useContext } from "react";

const CartProductThumb = ({ image, title, price, id, count }) => {
  const { cartProducts, setCartProducts } = useContext(CartProductsContext);

  const handleAddCount = () => {
    const updatedProducts = cartProducts.map((product) =>
      product.id === id ? { ...product, count: product.count + 1 } : product
    );
    setCartProducts(updatedProducts);
    localStorage.setItem("cartProducts", JSON.stringify(updatedProducts));
  };
  const handleRemoveCount = () => {
    if (count === 1) {
      const updatedProducts = cartProducts.filter(
        (product) => product.id !== id
      );
      setCartProducts(updatedProducts);
      localStorage.setItem("cartProducts", JSON.stringify(updatedProducts));
    } else {
      const updatedProducts = cartProducts.map((product) =>
        product.id === id ? { ...product, count: product.count - 1 } : product
      );
      setCartProducts(updatedProducts);
      localStorage.setItem("cartProducts", JSON.stringify(updatedProducts));
    }
  };

  return (
    <div className="flex flex-row justify-between items-center gap-3  m-[10px]">
      <Link
        className=" p-1 flex flex-row justify-between items-center gap-3 rounded-md  border-[1px] border-solid hover:text-tretiary hover:border-tretiary ease-in-out duration-200 max-w-[177px] w-full"
        to={`/products/${id}`}
      >
        <div className="rounded-[5px] h-9 w-9 overflow-hidden p-2 shadow-lg bg-white">
          <div
            className="h-10 w-10 bg-cover bg-center -ml-2 -mt-2"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        </div>
        <p className="text-xs font-medium max-w-[64px] truncate ">{title}</p>
        <span className="text-xs text-green-500">${price}</span>
      </Link>
      <div className="flex flex-row gap-3">
        <button
          className="rounded-[50%] border-solid border-[1px] border-black w-4 h-4 flex justify-center align-center text-center hover:text-tretiary  hover:border-tretiary ease-in-out duration-200"
          onClick={() => handleRemoveCount()}
        >
          <span className="-mt-[5px]">-</span>
        </button>

        <span className="-mt-1 w-4">{count}</span>
        <button
          className="rounded-[50%] border-solid border-[1px] border-black w-4 h-4 flex justify-center align-center text-center hover:text-tretiary  hover:border-tretiary ease-in-out duration-200"
          onClick={() => handleAddCount()}
        >
          <span className="-mt-[5px]">+</span>
        </button>
      </div>
    </div>
  );
};

export default CartProductThumb;
