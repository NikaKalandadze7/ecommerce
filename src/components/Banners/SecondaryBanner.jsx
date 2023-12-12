/* eslint-disable react/prop-types */

const SecondaryBanner = ({ title, text, texture }) => {
  return (
    <div className="max-w-[424px] w-[calc((100%/3)-16px)] max-h-40 h-full p-6 bg-secondaryLight rounded-md flex flex-row justify-between items-center">
      <div className="flex flex-col gap-3">
        <h5 className="text-base font-semibold max-w-[176px]">{title}</h5>
        <p className="text-xs max-w-[176px] font-light">{text}</p>
      </div>
      <div className="rounded-[50%] h-[126px] w-[126px] overflow-hidden">
        <div
          className="h-[126px] w-[126px] bg-cover bg-center"
          style={{ backgroundImage: `url(${texture})` }}
        ></div>
      </div>
    </div>
  );
};

export default SecondaryBanner;
