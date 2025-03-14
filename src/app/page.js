"use client"; // Ensures client-side rendering

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <div className="mt-20 text-center">
        {/* AyurSage Logo */}
        <img
          src="/logo.png" // Ensure your logo path is correct
          alt="AyurSage Logo"
          className="w-32 mx-auto mb-4"
        />

        {/* Title */}
        <h1 className="text-4xl font-bold">Welcome to AyurSage 🌿</h1>

        {/* Subtitle */}
        <p className="mt-2 text-lg text-gray-300">
          Your AI-powered Ayurveda wellness companion. Get personalized health
          insights, herbal remedies, and live consultations.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center space-x-4">
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg">
            Get Started
          </button>
          <button className="border border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-semibold py-2 px-6 rounded-lg">
            Explore Shop
          </button>
        </div>
      </div>
    </div>
  );
}
