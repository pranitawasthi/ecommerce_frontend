import React from 'react';
import { LogIn } from 'lucide-react'; // Importing Lucide icon
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-blue-900 flex flex-col">
      {/* Navbar */}
      {/* <header className="flex justify-between items-center px-6 py-4 shadow-md bg-white">
        <h1 className="text-2xl font-bold text-blue-700">ShopEase</h1>
        <nav>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            <LogIn size={18} /> Login / Sign Up
          </button>
        </nav>
      </header> */}

      {/* Hero Section */}
      <main className="flex flex-col md:flex-row items-center justify-between flex-1 px-6 py-12 bg-blue-50">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl font-extrabold leading-tight mb-4 text-blue-800">
            Welcome to BizLister
          </h2>
          <p className="text-lg text-blue-700 mb-6">
            Discover amazing deals, fresh styles, and all your favorite brands in one place.
          </p>
          <Link to="/authenticate">
          <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
            <LogIn size={20} /> Login to Explore
          </button>
          </Link>
          
        </div>
        <div className="md:w-1/2">
          <img
            src="https://www.logicinbound.com/wp-content/uploads/2018/01/shutterstock_779835055.webp"
            alt="Shopping"
            className="rounded-lg shadow-lg"
          />
        </div>
      </main>

      {/* Footer */}
      {/* <footer className="text-center py-6 bg-white shadow-inner text-blue-600">
        &copy; {new Date().getFullYear()} ShopEase. All rights reserved.
      </footer> */}
    </div>
  );
}
