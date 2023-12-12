/* eslint-disable react/prop-types */
const ButtonHelp = ({ label }) => {
  return (
    <div>
      <button className="bg-primary rounded-[50px] max-h-12 h-full px-8 py-4 text-white text-xs uppercase font-medium leading-4  hover:bg-tretiary ease-in-out duration-200">
        {label}
      </button>
    </div>
  );
};

export default ButtonHelp;
