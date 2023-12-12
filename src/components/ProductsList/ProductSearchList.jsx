import ProductSearchCard from "../ProductCards/ProductSearchCard";

const ProductSearchList = () => {
  return (
    <div className="w-full pt-1 bg-white border-l-[1px] border-r-[1px] border-b-[1px] border-solid border-[#c7c7c7] ">
      <ProductSearchCard
        price={"1122 USD"}
        title={"Test Product"}
        image={
          "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
        }
        category={"test category"}
      />
    </div>
  );
};

export default ProductSearchList;
