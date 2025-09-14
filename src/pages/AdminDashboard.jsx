import React, { useState, useEffect } from 'react';
import AdminSidebar from '../components/admin/AdminSidebar';
import UserMetrics from '../components/admin/UserMetrics';
import ContentManager from '../components/admin/ContentManager';

export default function AdminDashboard() {
  const [activeSection, setActiveSection] = useState('metrics');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  // Simple authentication (replace with proper auth in production)
  const handleLogin = (e) => {
    e.preventDefault();
    if (credentials.username === 'admin' && credentials.password === 'admin123') {
      setIsAuthenticated(true);
      localStorage.setItem('adminAuth', 'true');
    } else {
      alert('Invalid credentials');
    }
  };

  useEffect(() => {
    const auth = localStorage.getItem('adminAuth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('adminAuth');
    setActiveSection('metrics');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="card w-96 bg-base-100 shadow-2xl border border-base-300">
          <div className="card-body p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-primary mb-2">Admin Portal</h2>
              <p className="text-base-content/70">Enter your credentials to access the dashboard</p>
            </div>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Username</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter username"
                  className="input input-bordered focus:input-primary"
                  value={credentials.username}
                  onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter password"
                  className="input input-bordered focus:input-primary"
                  value={credentials.password}
                  onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-full mt-6">
                Sign In
              </button>
            </form>
            <div className="text-center mt-6 p-4 bg-base-200 rounded-lg">
              <p className="text-sm text-base-content/70 mb-1">Demo Credentials:</p>
              <p className="text-sm font-mono">admin / admin123</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200">
      {/* Fixed Sidebar */}
      <AdminSidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onLogout={handleLogout}
      />

      {/* Main Content Area - Properly centered relative to sidebar */}
      <div className="pl-64 min-h-screen">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-base-content mb-2">
              {activeSection === 'metrics' ? 'User Metrics' : 'Content Manager'}
            </h1>
            <p className="text-base-content/70">
              {activeSection === 'metrics'
                ? 'Monitor your website performance and user engagement'
                : 'Manage your catalog, products, and website content'
              }
            </p>
          </div>

          {/* Content Area */}
          <div>
            {activeSection === 'metrics' && <UserMetrics />}
            {activeSection === 'content' && <ContentManager />}
          </div>
        </div>
      </div>
    </div>
  );
}
