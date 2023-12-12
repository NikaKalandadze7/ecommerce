/* eslint-disable react/prop-types */
const ButtonTextBasic = ({ content }) => {
  return (
    <div className="xl:text-sm lg:text-sm md:text-sm sm:text-xs xs:text-[10px] font-normal leading-6 text-inherit hover:text-inherit ease-in-out duration-200 pb-3 ">
      {content}
    </div>
  );
};

export default ButtonTextBasic;
