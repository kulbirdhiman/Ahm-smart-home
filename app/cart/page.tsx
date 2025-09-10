"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { RootState } from "@/store/store";
import { updateQuantity, removeFromCart, clearCart } from "@/store/actions/cartSlice";

export default function CartPage() {
  const cart = useSelector((state: any) => state.cart.items);
  const dispatch = useDispatch();

  const subtotal = cart.reduce((acc:any, item:any) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-6 py-10">
      <h1 className="text-5xl font-extrabold mb-10 text-center bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
        Your Cart
      </h1>

      {cart.length === 0 ? (
        <p className="text-gray-400 text-center text-lg">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item:any) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-gray-800/70 backdrop-blur-md rounded-2xl p-5 shadow-lg hover:shadow-2xl hover:scale-[1.01] transition transform"
              >
                <div className="flex items-center space-x-5">
                  <img
                    src={item.image || "https://via.placeholder.com/120x120.png?text=Product"}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-xl border border-gray-700"
                  />
                  <div>
                    <h2 className="text-2xl font-semibold">{item.name}</h2>
                    <p className="text-blue-400 font-bold text-lg">${item.price}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <button
                    className="w-9 h-9 flex items-center justify-center bg-gray-700 hover:bg-gray-600 rounded-lg text-xl font-bold"
                    onClick={() =>
                      dispatch(updateQuantity({ id: item.id, quantity: Math.max(1, item.quantity - 1) }))
                    }
                  >
                    -
                  </button>
                  <span className="px-4 py-2 bg-gray-900 rounded-lg font-semibold">
                    {item.quantity}
                  </span>
                  <button
                    className="w-9 h-9 flex items-center justify-center bg-gray-700 hover:bg-gray-600 rounded-lg text-xl font-bold"
                    onClick={() =>
                      dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))
                    }
                  >
                    +
                  </button>
                  <button
                    className="ml-4 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-sm font-medium shadow-md"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-gray-800/70 backdrop-blur-md rounded-2xl p-8 shadow-xl">
            <h2 className="text-3xl font-semibold mb-6 text-center">Order Summary</h2>
            <div className="space-y-3 text-lg">
              <div className="flex justify-between text-gray-300">
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Shipping</span>
                <span>$20</span>
              </div>
              <div className="flex justify-between font-bold text-2xl pt-3 border-t border-gray-700">
                <span>Total</span>
                <span className="text-blue-400">${subtotal + 20}</span>
              </div>
            </div>

            <button className="w-full mt-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 transition text-lg font-semibold shadow-lg">
              Proceed to Checkout
            </button>
            <button className="w-full mt-4 py-4 rounded-xl border border-gray-600 hover:bg-gray-700 transition text-lg font-medium">
              Continue Shopping
            </button>
            <button
              onClick={() => dispatch(clearCart())}
              className="w-full mt-4 py-4 rounded-xl bg-red-600 hover:bg-red-700 transition text-lg font-semibold shadow-lg"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
