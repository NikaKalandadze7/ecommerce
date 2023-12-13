import texture1 from "../assets/images/texture1.jpeg";
import texture2 from "../assets/images/texture2.jpeg";
import texture3 from "../assets/images/texture3.jpeg";
import HeroBanner from "../components/Banners/HeroBanner";
import SecondaryBanner from "../components/Banners/SecondaryBanner";
import ThumbnailList from "../components/ProductsList/ThumbnailList";

const Home = () => {
  return (
    <div className="flex items-center flex-col ">
      <HeroBanner />
      <div className="main-container flex flex-row xs:flex-wrap gap-6 pt-6">
        <SecondaryBanner
          title={"A Community doing good"}
          text={"Commerce is a global online marketplace, where people."}
          texture={texture1}
        />
        <SecondaryBanner
          title={"Support independent creators"}
          text={"Just millions of people selling the things they love."}
          texture={texture2}
        />
        <SecondaryBanner
          title={"Peace of mind"}
          text={"Privacy is the highest priority of our dedicated team."}
          texture={texture3}
        />
      </div>
      <div className="main-container py-16 text overflow-scroll">
        <ThumbnailList />
      </div>
    </div>
  );
};

export default Home;
