"use client";
// SignUp.tsx
import React, { useState, ChangeEvent, FormEvent } from "react";
import { useSignUpMutation } from "@/store/api/userAPi";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

export default function SignUp() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const router = useRouter();
  const [signUp] = useSignUpMutation();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      const response = await signUp(formData).unwrap();
      toast.success("Sign up successful!");
      router.push("/user");
    } catch (error: any) {
      const msg = error?.data?.message || "Sign up failed!";
      toast.error(msg);
      console.error("Sign up error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 px-4">
      <div className="w-full max-w-2xl bg-gray-900 rounded-2xl shadow-2xl p-8">
        {/* Logo / Brand */}
        <h1 className="text-4xl font-bold text-center text-white mb-6">AHM</h1>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-center text-white mb-2">
          Create Your Account
        </h2>
        <p className="text-gray-400 text-center mb-6">
          Sign up to get started
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block mb-1 text-sm font-medium text-gray-300">First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="John"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-white placeholder-gray-400"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block mb-1 text-sm font-medium text-gray-300">Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-white placeholder-gray-400"
                required
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-white placeholder-gray-400"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-300">Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="+91 9876543210"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-white placeholder-gray-400"
            />
          </div>

          <div className="relative">
            <label className="block mb-1 text-sm font-medium text-gray-300">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-white placeholder-gray-400"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <div className="relative">
            <label className="block mb-1 text-sm font-medium text-gray-300">Confirm Password</label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-white placeholder-gray-400"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 transition text-white font-semibold rounded-xl shadow-lg mt-2"
          >
            Sign Up
          </button>
        </form>

        {/* Login link */}
        <p className="text-center text-gray-400 mt-6 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-blue-400 hover:underline font-medium">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}
