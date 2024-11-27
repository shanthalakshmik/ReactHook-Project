import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Navbar from "./components/Navbar";
import CartModal from "./components/CartModal";

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== productId));
  };

  return (
    <div className="App">
      <Navbar cartCount={cart.length} openCart={() => setIsCartOpen(true)} />
      <ProductList addToCart={addToCart} />
      {isCartOpen && <CartModal cart={cart} removeFromCart={removeFromCart} closeCart={() => setIsCartOpen(false)} />}
    </div>
  );
}

export default App;


      