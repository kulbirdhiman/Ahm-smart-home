"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { Eye, EyeOff } from "lucide-react";

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
}

export default function Signup() {
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState<Partial<FormData>>({});
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const validate = () => {
        let newErrors: Partial<FormData> = {};
        if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
        if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
        if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email address";
        if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "Enter valid 10-digit phone number";
        if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
        if (formData.password !== formData.confirmPassword)
            newErrors.confirmPassword = "Passwords do not match";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const getPasswordStrength = (password: string) => {
        if (password.length < 6) return { label: "Weak", color: "bg-red-500 w-1/3" };
        if (password.match(/[A-Z]/) && password.match(/\d/) && password.length >= 8)
            return { label: "Strong", color: "bg-green-500 w-full" };
        return { label: "Medium", color: "bg-yellow-500 w-2/3" };
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validate()) return;
        setLoading(true);
        setTimeout(() => {
            console.log("Signup data:", formData);
            setLoading(false);
        }, 1500);
    };

    const InputField = ({
        label,
        name,
        type,
        placeholder,
        value,
        error,
    }: {
        label: string;
        name: keyof FormData;
        type: string;
        placeholder: string;
        value: string;
        error?: string;
    }) => (
        <div>
            <label htmlFor={name} className="block mb-1 text-sm font-medium text-gray-300">
                {label}
            </label>
            <input
                id={name}
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg bg-gray-900 border ${error ? "border-red-500" : "border-gray-700"
                    } focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition`}
                required
            />
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>
    );

    const passwordStrength = getPasswordStrength(formData.password);

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-black via-gray-900 to-black px-4 text-white">
            {/* Branding */}
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">
                AHM
            </h1>
            <h2 className="text-2xl font-semibold mb-1">Create Your Account</h2>
            <p className="text-gray-400 mb-8 text-center max-w-sm">
                Join our community and start your journey today
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField
                        label="First Name"
                        name="firstName"
                        type="text"
                        placeholder="Ash"
                        value={formData.firstName}
                        error={errors.firstName}
                    />
                    <InputField
                        label="Last Name"
                        name="lastName"
                        type="text"
                        placeholder="Catchum"
                        value={formData.lastName}
                        error={errors.lastName}
                    />
                </div>

                <InputField
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    error={errors.email}
                />

                <InputField
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    placeholder="9876543210"
                    value={formData.phone}
                    error={errors.phone}
                />

                {/* Password */}
                <div className="relative">
                    <InputField
                        label="Create Password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="********"
                        value={formData.password}
                        error={errors.password}
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-10 text-gray-400 hover:text-white transition"
                    >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                </div>

                {/* Password strength */}
                {formData.password && (
                    <div className="flex items-center gap-2 mt-1">
                        <div className="h-1.5 rounded-full w-full bg-gray-700 overflow-hidden">
                            <div className={`h-full ${passwordStrength.color} transition-all`}></div>
                        </div>
                        <span className="text-xs text-gray-300">{passwordStrength.label}</span>
                    </div>
                )}

                <InputField
                    label="Confirm Password"
                    name="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    placeholder="********"
                    value={formData.confirmPassword}
                    error={errors.confirmPassword}
                />

                {/* Submit */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 rounded-lg font-semibold shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-transform transform hover:-translate-y-0.5 disabled:opacity-50"
                >
                    {loading ? "Signing Up..." : "Sign Up"}
                </button>
            </form>

            {/* Sign in */}
            <p className="text-center text-sm text-gray-400 mt-8">
                Already have an account?{" "}
                <a href="#" className="text-blue-400 hover:underline">
                    Sign In
                </a>
            </p>
        </div>
    );
}
