"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function CheckoutPage() {
  const cart = useSelector((state: any) => state.cart.items);
  const subtotal = cart.reduce((acc: any, item: any) => acc + item.price * item.quantity, 0);
  const shipping = 20;
  const total = subtotal + shipping;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
    email: "",
  });

  const [orderId, setOrderId] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const createOrderOnBackend = async () => {
    const res = await fetch("http://localhost:5002/api/orders/create-paypal-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({  
        userId: 1, // Replace with actual logged-in user ID
        products: cart.map((item: any) => ({
          productId: item.id,
          quantity: item.quantity,
          price: item.price,
        })),
        totalAmount: total,
        shippingAddress: `${formData.address}, ${formData.city}, ${formData.postalCode}`,
      }),
    });
    const data = await res.json();
    setOrderId(data.orderId);
    return data.paypalOrderId;
  };

  const captureOrderOnBackend = async (paypalOrderId: string) => {
    await fetch("/api/orders/capture-paypal-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ paypalOrderId, orderId }),
    });
  };

  return (
    <PayPalScriptProvider
      options={{
        clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "YOUR_CLIENT_ID_HERE",
        currency: "AUD",
      }}
    >

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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2">First Name</label>
                  <input
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Last Name</label>
                  <input
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Address</label>
                <input
                  name="address"
                  type="text"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="123 Main St"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2">City</label>
                  <input
                    name="city"
                    type="text"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="New York"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Postal Code</label>
                  <input
                    name="postalCode"
                    type="text"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="10001"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Phone Number</label>
                <input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="+1 234 567 890"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
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
              {cart.map((item: any) => (
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

            {/* Only PayPal Button */}
            <div className="pt-6">
              <PayPalButtons
                createOrder={async () => {
                  const paypalOrderId = await createOrderOnBackend();
                  return paypalOrderId;
                }}
                onApprove={async (data) => {
                  await captureOrderOnBackend(data.orderID);
                  alert("Payment successful!");
                }}
                style={{ layout: "vertical", color: "blue", shape: "rect", label: "paypal" }}
              />
            </div>
          </div>
        </div>
      </div>
    </PayPalScriptProvider>
  );
}
