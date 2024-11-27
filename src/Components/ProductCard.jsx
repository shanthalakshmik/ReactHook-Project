import React from "react";

function ProductCard({ product, addToCart }) {
  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <img src={product.image} alt={product.title} className="w-full h-64 object-cover mb-4" />
      <h2 className="font-bold text-xl mb-2">{product.title}</h2>
      <p className="text-gray-700 mb-4">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;

