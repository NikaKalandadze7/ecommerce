/* eslint-disable react/prop-types */
const InputForm = ({ label, type, handleChange }) => {
  return (
    <div className="max-w-xs w-full pb-2">
      <input
        className="text-sm px-[5px] h-9 rounded-[8px]"
        type={type}
        placeholder={label}
        onChange={(e) => handleChange(e.target.value)}
      ></input>
    </div>
  );
};

export default InputForm;
