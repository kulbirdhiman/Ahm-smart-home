import React from "react";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function FooterDark() {
    return (
        <footer className="w-full bg-[#000000a3] text-gray-300">
        <div className="mx-auto max-w-7xl grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 px-6 py-12 text-center md:text-left">
            
            {/* Logo + Socials */}
            <div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-2">
                <img
                src="/Ahm_logo.png"
                alt="AHM Logo"
                className="h-10 w-auto"
                />
                <span className="text-lg font-bold text-gray-100">AHM</span>
            </div>
            <p className="mt-3 text-sm">Follow us for latest offers</p>
            <div className="mt-3 flex justify-center md:justify-start gap-4">
                <a href="#" className="hover:text-pink-500">
                    <Instagram size={20} />
                    <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="hover:text-blue-400">
                    <Twitter size={20} />
                    <span className="sr-only">Twitter</span>
                </a>
                <a href="#" className="hover:text-red-500">
                    <Youtube size={20} />
                    <span className="sr-only">Youtube</span>
                </a>
                <a href="#" className="hover:text-blue-600">
                    <Facebook size={20} />
                    <span className="sr-only">Facebook</span>
                </a>
            </div>
            </div>

            {/* Information */}
            <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-100">INFORMATION</h3>
            <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Shop</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
            </div>

            {/* Policies */}
            <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-100">POLICIES</h3>
            <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
                <li><a href="#" className="hover:underline">Privacy Policies</a></li>
                <li><a href="#" className="hover:underline">Return Policy</a></li>
                <li><a href="#" className="hover:underline">Shipping & Delivery</a></li>
                <li><a href="#" className="hover:underline">Cancellation & Refund</a></li>
                <li><a href="#" className="hover:underline">Report an issue </a></li>
                <li><a href="#" className="hover:underline">Request a problem</a></li>
            </ul>
            </div>

            {/* Buy From Us */}
            <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-100">BUY FROM US</h3>
            <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Flexible Payments & Trusted Platforms</a></li>
                <li><a href="#" className="hover:underline">Return Policy Warranty</a></li>
                <li><a href="#" className="hover:underline">Meet Our Team</a></li>
                <li><a href="mailto:info@ahmsmarthomes.com.au" className="hover:underline">info@ahmsmarthomes.com.au</a></li>
            </ul>
            </div>

            {/* Working Hours */}
            <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-100">Working Hours</h3>
            <ul className="space-y-2 text-sm">
                <li>Mon-Fri: 9 AM – 6 PM</li>
                <li>Saturday: 9 AM – 4 PM</li>
                <li>Sunday: Closed</li>
            </ul>
            </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 py-4 text-center text-xs text-gray-400">
            <p>
            <a href="#" className="hover:underline">AHM Smart Homes</a> © 2025. All Rights Reserved.
            </p>
        </div>
        </footer>
    );
}
