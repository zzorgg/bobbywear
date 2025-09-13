import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import ProductDetails from "./pages/ProductDetails";
import ThemeSwitcher from "./components/ThemeSwitcher";
import QuoteModal from "./components/QuoteModal";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <div className="navbar bg-base-200 shadow-md">
        <div className="navbar-start gap-2">
          {/* Mobile menu */}
          <details className="dropdown md:hidden">
            <summary className="btn btn-ghost" role="button" aria-label="Open menu">☰</summary>
            <ul className="dropdown-content z-10 menu bg-base-100 rounded-box shadow p-2 w-40 mt-2">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/catalog">Catalog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </details>
          <Link to="/" className="btn btn-ghost text-xl font-bold">BobbyWear</Link>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal gap-2">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/catalog">Catalog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <ThemeSwitcher />
          <QuoteModal />
          <Link to="/catalog" className="btn">Catalog</Link>
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

      {/* Footer */}
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
