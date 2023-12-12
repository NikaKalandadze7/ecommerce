import UserIcon from "../icons/UserIcon";
import ShoppingCartIcon from "../icons/ShoppingCartIcon";
import ButtonTextBasic from "../Buttons/ButtonTextBasic";
import { useContext, useState } from "react";
import LoginForm from "../AuthorisationForms/LoginForm";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { CartProductsContext } from "../../App";

const UserArea = () => {
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleAccountDropdown = () => {
    setIsAccountOpen(!isAccountOpen);
    isCartOpen ? setIsCartOpen(!isCartOpen) : isCartOpen;
  };
  const toggleCartDropdown = () => {
    setIsCartOpen(!isCartOpen);
    isAccountOpen ? setIsAccountOpen(!isAccountOpen) : isAccountOpen;
  };
  const { cartProducts } = useContext(CartProductsContext);
  const getTotalItemCount = (cartProducts) => {
    return cartProducts.reduce((total, product) => total + product.count, 0);
  };

  return (
    <div className="flex flex-row lg:flex-wrap xl:gap-4 lg:gap-2   relative">
      <button
        onClick={toggleAccountDropdown}
        className="flex flex-row items-center gap-2 rounded-lg px-1 hover:text-secondary"
      >
        <UserIcon height={"24px"} width={"24px"} color={"black"} />
        <div className="lg:block md:hidden sm:hidden">
          <ButtonTextBasic content={"Account"} />
        </div>
      </button>
      <div
        className={`absolute top-10 -left-20 bg-[#F5F6F8] z-30 rounded-lg border-[1px] border-solid ${
          isAccountOpen ? "block" : "hidden"
        }  max-w-xs`}
      >
        <LoginForm />
      </div>
      <button
        onClick={toggleCartDropdown}
        className="flex flex-row items-center gap-2 relative rounded-lg px-1 hover:text-secondary"
      >
        <ShoppingCartIcon height={"24px"} width={"24px"} color={"black"} />
        <div className="lg:block md:hidden sm:hidden">
          <ButtonTextBasic content={"Shopping"} />
        </div>
        <div className="absolute xl:left-4 xl:-top-2 lg:left-5 lg:-top-5 md:left-5 md:-top-2 sm:left-4 sm:-top-2 rounded-[50%] h-6 w-6 bg-primary text-white text-center text-xs flex justify-center items-center ">
          <span className="">{getTotalItemCount(cartProducts)}</span>
        </div>
      </button>
      <div
        className={`absolute top-10 right-2 bg-[#F5F6F8] z-10 rounded-lg border-[1px] border-solid ${
          isCartOpen ? "block" : "hidden"
        }  max-w-xs`}
      >
        <ShoppingCart />
      </div>
    </div>
  );
};

export default UserArea;
