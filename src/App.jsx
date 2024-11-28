import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Navbar from './components/Navbar';
import CartModal from './components/CartModal';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Add product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Remove product from the cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <div className="App">
      {/* Navbar to show cart count */}
      <Navbar cartCount={cart.length} openCart={() => setIsCartOpen(true)} />
      
      {/* ProductList */}
      <ProductList addToCart={addToCart} />

      {/* Cart Modal - Conditional rendering */}
      {isCartOpen && (
        <CartModal
          cart={cart}
          removeFromCart={removeFromCart}
          closeCart={() => setIsCartOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
