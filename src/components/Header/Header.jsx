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
        <div className="flex flex-row md:flex-nowrap sm:flex-wrap xs:flex-nowrap justify-between md:gap-7 md:pt-7 xs:gap-3 xs:pt-3">
          <WebsiteLogo />
          <div className="sm:block xs:hidden w-full lg:max-w-[680px]  md:max-w-[520px]  sm:max-w-[330px] xs:max-w[400px]">
            <SearchBar />
          </div>
          <div className="flex flex-row gap-7">
            <UserArea />
          </div>
        </div>
        <div className="sm:hidden xs:block lg:max-w-[680px]  md:max-w-[520px]  sm:max-w-[330px] xs:max-w[400px]">
          <SearchBar />
        </div>
        <CategoryMenu />
      </div>
    </div>
  );
};

export default Header;
