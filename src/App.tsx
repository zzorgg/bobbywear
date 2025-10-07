import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import Home from '@/pages/Home';
import Catalog from '@/pages/Catalog';
import ProductDetails from '@/pages/ProductDetails';
import Contact from '@/pages/Contact';
import AdminDashboard from '@/pages/AdminDashboard';
import ThemeSwitcher from '@/components/ThemeSwitcher';

export default function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Admin layout
  if (isAdminRoute) {
    return (
      <div className="min-h-screen bg-base-100">
        <div className="fixed top-4 right-4 z-50">
          <ThemeSwitcher />
        </div>
        <Routes>
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
    );
  }

  // Main website layout
  return (
    <div className="min-h-screen flex flex-col bg-base-100">
      {/* Navbar */}
      <nav className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-base-100/80 backdrop-blur-xl shadow-lg border-b-2 border-base-300/50' 
          : 'bg-base-100 border-b-2 border-base-300 shadow-md'
      }`}>
        <div className="container mx-auto px-4">
          <div className="navbar py-4">
            <div className="navbar-start">
              {/* Mobile menu */}
              <div className="dropdown lg:hidden">
                <button 
                  tabIndex={0} 
                  className="btn btn-ghost btn-circle hover:bg-base-200"
                  aria-label="Open menu"
                >
                  <Menu className="h-6 w-6" />
                </button>
                <ul 
                  tabIndex={0} 
                  className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow-xl bg-base-100 rounded-box w-52 border-2 border-base-300"
                >
                  <li><Link to="/" className="font-semibold">Home</Link></li>
                  <li><Link to="/catalog" className="font-semibold">Catalog</Link></li>
                  <li><Link to="/contact" className="font-semibold">Contact</Link></li>
                  <li className="menu-title mt-2">
                    <span>Theme</span>
                  </li>
                  <li>
                    <ThemeSwitcher />
                  </li>
                </ul>
              </div>

              {/* Brand */}
              <Link 
                to="/" 
                className="btn btn-ghost text-xl md:text-2xl font-extrabold hover:bg-transparent normal-case px-2"
              >
                <span className="text-primary">
                  BobbyWear
                </span>
              </Link>
            </div>

            {/* Desktop navigation */}
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 gap-1">
                <li>
                  <Link 
                    to="/" 
                    className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                      location.pathname === '/' 
                        ? 'bg-primary text-primary-content' 
                        : 'hover:bg-base-200'
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/catalog" 
                    className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                      location.pathname === '/catalog' 
                        ? 'bg-primary text-primary-content' 
                        : 'hover:bg-base-200'
                    }`}
                  >
                    Catalog
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/contact" 
                    className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                      location.pathname === '/contact' 
                        ? 'bg-primary text-primary-content' 
                        : 'hover:bg-base-200'
                    }`}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Desktop theme switcher */}
            <div className="navbar-end hidden lg:flex">
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-base-200 text-base-content border-t-2 border-base-300">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
            <div className="space-y-4">
              <span className="text-3xl heading-font text-gradient block">
                BobbyWear
              </span>
              <p className="text-base-content/70 leading-relaxed">
                Quality girls' wear manufacturing since 2015. Trusted by brands worldwide for exceptional craftsmanship.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <div className="flex flex-col gap-3">
                <Link to="/" className="link link-hover text-base-content/70 hover:text-primary transition-colors font-medium">
                  Home
                </Link>
                <Link to="/catalog" className="link link-hover text-base-content/70 hover:text-primary transition-colors font-medium">
                  Catalog
                </Link>
                <Link to="/contact" className="link link-hover text-base-content/70 hover:text-primary transition-colors font-medium">
                  Contact
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg mb-4">Contact Info</h3>
              <div className="space-y-2 text-base-content/70">
                <p className="font-medium">Email: hello@bobbywear.example</p>
                <p className="font-medium">Phone: +91 00000 00000</p>
              </div>
            </div>
          </div>

          <div className="divider" />

          <div className="text-center text-base-content/60">
            <p className="font-medium">
              © {new Date().getFullYear()} BobbyWear Manufacturing. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}