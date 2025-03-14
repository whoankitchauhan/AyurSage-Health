import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">AyurSage</h2>
        <p className="text-gray-400 mb-6">
          Your AI-powered Ayurveda health companion.
        </p>

        {/* Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <Link href="/about" className="text-gray-300 hover:text-white">
            About
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white">
            Contact
          </Link>
          <Link href="/privacy" className="text-gray-300 hover:text-white">
            Privacy Policy
          </Link>
        </div>

        {/* Social Icons (Optional) */}
        <div className="flex justify-center space-x-4 mb-6">
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-facebook text-xl"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-twitter text-xl"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-instagram text-xl"></i>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} AyurSage. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
