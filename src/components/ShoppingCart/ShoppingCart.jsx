/* eslint-disable react/prop-types */

import { useContext } from "react";
import ButtonRightIcon from "../Buttons/ButtonRightIcon";
import CartProductThumb from "../ProductCards/CartProductThumb";
import { CartProductsContext } from "../../App";

const ShoppingCart = () => {
  const { cartProducts } = useContext(CartProductsContext);
  const calculateTotalPrice = () => {
    return cartProducts.reduce((total, product) => {
      return total + product.price * product.count;
    }, 0);
  };
  return (
    <div className="max-w-[275px] w-full pb-2 flex flex-col items-center z-50">
      <h1 className="text-primary font-semibold my-2">Shopping Cart</h1>
      <div>
        {cartProducts.map((data) => (
          <CartProductThumb
            key={data.id}
            title={data.title}
            image={data.image}
            price={data.price}
            id={data.id}
            count={data.count}
          />
        ))}
      </div>
      <p className="text-sm">
        Total Price:
        <span className="text-green-600 font-semibold">
          ${calculateTotalPrice()}
        </span>
      </p>
      <div className="m-[10px]">
        <ButtonRightIcon label="Proceed to Checkout" />
      </div>
    </div>
  );
};

export default ShoppingCart;
