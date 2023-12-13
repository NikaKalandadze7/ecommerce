/* eslint-disable react/prop-types */

const SecondaryBanner = ({ title, text, texture }) => {
  return (
    <div className="w-full md:max-w-[calc((100%/3)-16px)] max-h-40 h-full p-6 bg-secondaryLight rounded-md flex flex-row justify-between items-center">
      <div className="flex flex-col gap-3">
        <h5 className="text-base font-semibold max-w-[176px]">{title}</h5>
        <p className="md:text-xs md:max-w-[176px] xs:max-w-[400px] font-light">
          {text}
        </p>
      </div>
      <div className="rounded-[50%] sm:h-[126px]  sm:w-[126px] xs:h-[76px] xs:w-[76px] sm:block overflow-hidden">
        <div
          className="sm:h-[126px] sm:w-[126px] xs:h-[76px] xs:w-[76px] bg-cover bg-center"
          style={{ backgroundImage: `url(${texture})` }}
        ></div>
      </div>
    </div>
  );
};

export default SecondaryBanner;
