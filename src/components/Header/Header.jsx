import CategoryMenu from "../CategoryMenu/CategoryMenu";
import SearchBar from "../SearchBar/SearchBar";
import UserArea from "../UserArea/UserArea";
import WebsiteLogo from "../WebsiteLogo/WebsiteLogo";
// import { CartProductsContext } from "../../App";
// import { useContext } from "react";

const Header = () => {
  // const { cartProducts } = useContext(CartProductsContext);

  return (
    <div className="flex justify-center bg-secondaryLight max-h-[252px] h-full ">
      <div className="w-full main-container flex flex-col gap-6 lg:m-0 lg:p-0 md:p-4 md:m-3">
        <div className="flex flex-row md:flex-nowrap xs:flex-wrap justify-between md:gap-7 md:pt-7 xs:gap-3 xs:pt-3">
          <WebsiteLogo />
          <SearchBar />
          <div className="flex flex-row gap-7">
            <UserArea />
          </div>
        </div>
        <CategoryMenu />
      </div>
    </div>
  );
};

export default Header;
