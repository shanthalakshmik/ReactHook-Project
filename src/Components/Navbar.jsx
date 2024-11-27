import React from "react";

function Navbar({ cartCount, openCart }) {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <h1 className="text-lg font-bold">React Store API</h1>
      <button onClick={openCart} className="relative">
        <span>Cart</span>
        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {cartCount}
        </span>
      </button>
    </nav>
  );
}

export default Navbar;
