import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import ProductDisplay from "./pages/ProductDisplay";
import Products from "./pages/Products";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";
export const CartProductsContext = createContext([]);
export const FavoriteProductsContext = createContext([]);

function App() {
  const [cartProducts, setCartProducts] = useState([]);
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  return (
    <CartProductsContext.Provider value={{ cartProducts, setCartProducts }}>
      <FavoriteProductsContext.Provider
        value={{ favoriteProducts, setFavoriteProducts }}
      >
        <Router>
          <>
            <Header />
            <Routes>
              <Route path="/" exact component={<Home />} />
              <Route path="/products" component={<Products />} />
              <Route path="/products/:id" component={<ProductDisplay />} />
            </Routes>
            <Footer />
          </>
        </Router>
      </FavoriteProductsContext.Provider>
    </CartProductsContext.Provider>
  );
}

export default App;
