"use client";
// Login.tsx
import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  email: string;
  password: string;
}

export default function Login() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Login data:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white px-4">
      <div className="w-full max-w-md">
        {/* Logo / Brand */}
        <h1 className="text-4xl font-bold text-center mb-8">AHM</h1>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-center mb-2">
          Welcome Back
        </h2>
        <p className="text-gray-400 text-center mb-6">
          Sign in to continue to your account
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Forgot password */}
          <div className="flex justify-end">
            <a href="#" className="text-sm text-blue-400 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-2 rounded-lg font-medium shadow-md"
          >
            Sign In
          </button>
        </form>

        {/* Signup */}
        <p className="text-center text-sm text-gray-400 mt-6">
          Don’t have an account?{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
