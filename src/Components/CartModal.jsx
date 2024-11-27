import React from "react";

function CartModal({ cart, removeFromCart, closeCart }) {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        <div className="max-h-64 overflow-y-auto">
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map(item => (
              <div key={item.id} className="flex justify-between items-center mb-4">
                <span>{item.title}</span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded-full"
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
        <div className="mt-4 flex justify-between items-center">
          <button onClick={closeCart} className="bg-gray-500 text-white px-4 py-2 rounded-full">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
