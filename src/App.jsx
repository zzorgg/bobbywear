import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import ProductDetails from "./pages/ProductDetails";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Contact from "./pages/Contact";
import AdminDashboard from "./pages/AdminDashboard";

export default function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  // If it's an admin route, render only the admin dashboard without navbar/footer
  if (isAdminRoute) {
    return (
      <div className="min-h-screen">
        {/* Theme switcher for admin - positioned absolutely */}
        <div className="fixed top-4 right-4 z-50">
          <ThemeSwitcher />
        </div>
        <Routes>
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
    );
  }

  // Regular website layout with navbar and footer
  return (
    <div className="min-h-screen flex flex-col">
      {/* Responsive Navbar - only for non-admin pages */}
      <div className="navbar bg-base-200 shadow-md">
        <div className="navbar-start">
          {/* Mobile menu dropdown */}
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle" aria-label="Open menu">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/catalog">Catalog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li>
                <div className="flex items-center justify-between">
                  <span>Theme</span>
                  <ThemeSwitcher />
                </div>
              </li>
            </ul>
          </div>

          {/* Brand logo */}
          <Link to="/" className="btn btn-ghost text-xl font-bold">
            BobbyWear
          </Link>
        </div>

        {/* Desktop navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li><Link to="/" className="btn btn-ghost">Home</Link></li>
            <li><Link to="/catalog" className="btn btn-ghost">Catalog</Link></li>
            <li><Link to="/contact" className="btn btn-ghost">Contact</Link></li>
          </ul>
        </div>

        {/* Desktop theme switcher - only visible on large screens */}
        <div className="navbar-end hidden lg:flex">
          <ThemeSwitcher />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-base-100 text-base-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      {/* Footer - only for non-admin pages */}
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <span className="font-bold text-lg">BobbyWear</span>
            <p className="text-sm text-base-content/60">© {new Date().getFullYear()} BobbyWear Manufacturing. All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            <Link to="/" className="link link-hover">Home</Link>
            <Link to="/catalog" className="link link-hover">Catalog</Link>
            <Link to="/contact" className="link link-hover">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
