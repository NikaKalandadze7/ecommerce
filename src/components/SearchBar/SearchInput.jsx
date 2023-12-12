/* eslint-disable react/prop-types */
const SearchInput = ({ onKeyUp, onFocus, onBlur }) => {
  return (
    <input
      type="text"
      placeholder="Search anything"
      className="text-xs  w-full h-8 pl-1"
      onKeyUp={onKeyUp}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

export default SearchInput;
