import ProductCardSmall from "../components/ProductCards/ProductCardSmall";
import { testConst } from "../components/utils/constants";

const ProductsSmall = () => {
  return (
    <div className="flex flex-row flex-wrap gap-6">
      {testConst.map((data) => (
        <ProductCardSmall
          key={data.id}
          title={data.title}
          image={data.image}
          category={data.category}
          price={data.price}
        />
      ))}
    </div>
  );
};

export default ProductsSmall;
