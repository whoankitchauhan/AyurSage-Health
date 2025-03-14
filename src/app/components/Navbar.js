"use client"; // Required for client-side components

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 fixed w-full top-0 z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">AyurSage</h1>
        <div className="space-x-6">
          <Link href="/" className="text-gray-600 hover:text-blue-600">
            Home
          </Link>
          <Link
            href="/consultation"
            className="text-gray-600 hover:text-blue-600"
          >
            Consultation
          </Link>
          <Link href="/shop" className="text-gray-600 hover:text-blue-600">
            Shop
          </Link>
          <Link href="/dashboard" className="text-gray-600 hover:text-blue-600">
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
