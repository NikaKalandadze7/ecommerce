import axios from "axios";

const getProducts = async () => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/`);
    return response.data;
  } catch (error) {
    console.error(`Error: ${error}`);
    throw error;
  }
};

const getProductsByCategory = async (name) => {
  try {
    const response = await axios.get(
      `https://fakestoreapi.com/products/category/${name}`
    );
    return response.data;
  } catch (error) {
    console.error(`Error: ${error}`);
    throw error;
  }
};

const getProductsById = async (id) => {
  try {
    const result = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return result.data;
  } catch (error) {
    console.error(`Error fetching product by ID: ${error}`);
    throw error;
  }
};

export { getProducts, getProductsByCategory, getProductsById };
