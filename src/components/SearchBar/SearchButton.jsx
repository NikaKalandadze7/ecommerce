import MagnifyingGlassIcon from "../icons/MagnifyingGlassIcon";

const SearchButton = () => {
  return (
    <div>
      <button className="flex justify-center items-centerh-8 w-8 bg-transparent">
        <MagnifyingGlassIcon height={"24px"} width={"24px"} color={"#BABABA"} />
      </button>
    </div>
  );
};

export default SearchButton;
