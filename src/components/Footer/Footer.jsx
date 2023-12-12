import BackToTop from "../Buttons/BackToTop";
import WebsiteLogo from "../WebsiteLogo/WebsiteLogo";

const Footer = () => {
  return (
    <div className="flex flex-col mt-6 justify-center items-center">
      <div className="bg-secondaryLight w-full h-12 flex justify-center items-center">
        <h6 className="text-center text-sm font-medium">
          Commerce, is powered by 100% renewable electricity.
        </h6>
      </div>
      <div className="main-container flex flex-col mb-10">
        <div className="flex flex-row flex-nowrap max-h-96 h-full my-10 xl:gap-48 lg:gap-32 md:gap-16">
          <div className="flex-col flex  xl:gap-3 lg:gap-2 ">
            <WebsiteLogo />
            <p className="max-h-12 h-full">Cricklewood, London NW26qg,Uk</p>
          </div>
          <div className="flex-col flex gap-3 justify-between">
            <h6 className="text-base font-medium mb-5">Shop</h6>
            <p className="text-xs">Gift cards</p>
            <p className="text-xs">Site Map</p>
            <p className="text-xs">Polka blog</p>
            <p className="text-xs">Login</p>
            <p className="text-xs">Sign Up</p>
          </div>
          <div className="flex-col flex gap-3">
            <h6 className="text-base font-medium mb-5">Sell</h6>
            <p className="text-xs">Sell on Polka</p>
            <p className="text-xs">Teams</p>
            <p className="text-xs">Forums</p>
            <p className="text-xs">Affiliates</p>
          </div>
          <div className="flex-col flex gap-3">
            <h6 className="text-base font-medium mb-5">About</h6>
            <p className="text-xs">Polka inc</p>
            <p className="text-xs">Policies</p>
            <p className="text-xs">Investors</p>
            <p className="text-xs">Careers</p>
            <p className="text-xs">Press</p>
          </div>
          <div className="flex-col flex gap-3">
            <h6 className="text-base font-medium mb-5">Help</h6>
            <p className="text-xs">Help Center</p>
            <p className="text-xs">Trust and Safety</p>
            <p className="text-xs">Privacy Settings</p>
          </div>
        </div>
      </div>

      <div className="w-full bg-secondaryLight">
        <div className="flex main-container m-auto py-6 flex-row flex-nowrap justify-between">
          <p>© 2022 Commerce, Inc.</p>

          <div>
            <BackToTop />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
