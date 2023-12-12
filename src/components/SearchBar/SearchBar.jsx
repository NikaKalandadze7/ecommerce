import ProductSearchCard from "../ProductCards/ProductSearchCard";
import SearchButton from "./SearchButton";
import SearchInput from "./SearchInput";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/productsService";

const SearchBar = () => {
  const [focused, setFocused] = useState(false);

  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  const [searchText, setSearchText] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleFilter = async (event) => {
    if (!event) return;

    setSearchText(event.target.value);
    try {
      const products = await getProducts();
      filterProducts(products);
    } catch (error) {
      console.error(`Error fetching products: ${error}`);
    }
  };

  const filterProducts = (products) => {
    const search = searchText.toLowerCase();
    if (search === "") {
      setFilteredProducts([]);
    } else {
      const searchedProducts = products?.filter((product) =>
        product.title.toLowerCase().includes(search)
      );
      setFilteredProducts(searchedProducts);
    }
  };
  useEffect(() => {
    handleFilter();
  }, [searchText]);

  return (
    <div className="flex justify-between xl:max-w-[760px] w-full lg:max-w-[540px]  md:max-w-[330px] sm:max-w-[220px] h-12 items-center gap-4 flex-shrink-0 rounded-full bg-white pl-2 border-[1px] border-solid border-[#c7c7c7] relative z-20">
      <SearchInput
        onKeyUp={(e) => handleFilter(e)}
        onFocus={() => onFocus()}
        onBlur={() => onBlur()}
      />
      <SearchButton />
      <div
        className={`absolute -bottom-[75px] w-[calc(100%-15px)] z-[99] h-20
         flex justify-center ${focused ? "block" : "hidden"} `}
      >
        <div
          className={`${
            !searchText?.length ? "h-0" : "h-96"
          } w-full max-h-screen  pt-1 bg-white border-l-[1px] border-r-[1px] border-b-[1px] border-solid border-[#c7c7c7] overflow-auto `}
        >
          {filteredProducts.map((product) => (
            <ProductSearchCard
              key={product.id}
              price={product.price}
              title={product.title}
              image={product.image}
              category={product.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
