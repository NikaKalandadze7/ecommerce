import ProductsList from "../components/ProductsList/ProductsList";

const Products = () => {
  return (
    <div className="flex justify-center pt-6">
      <div className="main-container">
        <div className="flex flex-row justify-center flex-wrap gap-6">
          <ProductsList />
        </div>
      </div>
    </div>
  );
};

export default Products;
