import heroBanner from "../../assets/images/hero-banner.jpeg";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import { useNavigate } from "react-router-dom";

const HeroBanner = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/products`);
  };
  return (
    <div className="main-container overflow-hidden rounded-xl pt-6">
      <div
        className="bg-cover bg-top h-[614px] flex md:flex-row md:justify-between xs:flex-col xs:gap-14  xs:justify-center items-center rounded-xl"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="md:ml-[80px] xs:ml-0 flex flex-col gap-3">
          <h2 className="text-white text-2xl font-bold">Whats New!</h2>
          <p className="text-white text-lg font-light md:max-w-full xs:max-w-[230px]">
            Just millions of people selling the things they love.
          </p>
        </div>
        <div className="mr-[80px]">
          <PrimaryButton
            label={"Explore Our Products"}
            buttonAction={() => handleNavigate()}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
