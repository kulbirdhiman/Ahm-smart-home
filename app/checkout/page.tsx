"use client";
import React from "react";
import { useSelector } from "react-redux";
// import { RootState } from "@/store/store";

export default function CheckoutPage() {
  const cart = useSelector((state: any) => state.cart.items);
  const subtotal = cart.reduce((acc:any, item:any) => acc + item.price * item.quantity, 0);
  const shipping = 20;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-6 py-10">
      <h1 className="text-5xl font-extrabold mb-10 text-center bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
        Checkout
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {/* Billing & Shipping Form */}
        <div className="lg:col-span-2 bg-gray-800/70 backdrop-blur-md rounded-2xl p-8 shadow-xl space-y-8">
          <h2 className="text-3xl font-semibold border-b border-gray-700 pb-4">
            Billing & Shipping Info
          </h2>
          <form className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 mb-2">First Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Last Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Doe"
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-gray-300 mb-2">Address</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="123 Main St"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 mb-2">City</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="New York"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Postal Code</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="10001"
                />
              </div>
            </div>

            {/* Contact */}
            <div>
              <label className="block text-gray-300 mb-2">Phone Number</label>
              <input
                type="tel"
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="+1 234 567 890"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="john@example.com"
              />
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-gray-800/70 backdrop-blur-md rounded-2xl p-8 shadow-xl space-y-6">
          <h2 className="text-3xl font-semibold border-b border-gray-700 pb-4">
            Order Summary
          </h2>

          <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
            {cart.map((item:any) => (
              <div key={item.id} className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image || "https://via.placeholder.com/60"}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg border border-gray-700 object-cover"
                  />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-gray-400 text-sm">x{item.quantity}</p>
                  </div>
                </div>
                <p className="font-semibold">${item.price * item.quantity}</p>
              </div>
            ))}
          </div>

          <div className="space-y-3 text-lg pt-4 border-t border-gray-700">
            <div className="flex justify-between text-gray-300">
              <span>Subtotal</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between text-gray-300">
              <span>Shipping</span>
              <span>${shipping}</span>
            </div>
            <div className="flex justify-between font-bold text-2xl pt-3">
              <span>Total</span>
              <span className="text-blue-400">${total}</span>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="pt-6 space-y-3">
            <h3 className="text-xl font-semibold">Payment Method</h3>
            <div className="flex flex-col space-y-3">
              <label className="flex items-center space-x-3">
                <input type="radio" name="payment" className="w-5 h-5" defaultChecked />
                <span>Credit / Debit Card</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="radio" name="payment" className="w-5 h-5" />
                <span>PayPal</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="radio" name="payment" className="w-5 h-5" />
                <span>Cash on Delivery</span>
              </label>
            </div>
          </div>

          {/* Place Order */}
          <button className="w-full mt-6 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 transition text-lg font-semibold shadow-lg">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
