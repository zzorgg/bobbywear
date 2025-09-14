import React from 'react';
import { BarChart3, Settings, LogOut, Globe } from 'lucide-react';

export default function AdminSidebar({ activeSection, setActiveSection, onLogout }) {
  const menuItems = [
    {
      id: 'metrics',
      label: 'User Metrics',
      icon: BarChart3,
      description: 'Analytics & Performance'
    },
    {
      id: 'content',
      label: 'Content Manager',
      icon: Settings,
      description: 'Manage Website Content'
    }
  ];

  return (
    <div className="w-64 bg-base-100 shadow-xl border-r border-base-300 fixed left-0 top-0 h-full z-50">
      {/* Header */}
      <div className="p-6 border-b border-base-300 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <BarChart3 className="w-6 h-6 text-primary-content" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-base-content">BobbyWear</h2>
            <p className="text-xs text-base-content/70">Admin Portal</p>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="p-4 flex-1">
        <div className="space-y-2">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-200 flex items-center gap-3 group ${
                  activeSection === item.id
                    ? 'bg-primary text-primary-content shadow-lg'
                    : 'hover:bg-base-200 text-base-content hover:shadow-md'
                }`}
              >
                <div className={`p-2 rounded-lg transition-colors ${
                  activeSection === item.id 
                    ? 'bg-primary-content/20' 
                    : 'bg-base-300 group-hover:bg-primary/20'
                }`}>
                  <IconComponent className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-sm">{item.label}</div>
                  <div className={`text-xs opacity-70 ${
                    activeSection === item.id ? 'text-primary-content/70' : 'text-base-content/60'
                  }`}>
                    {item.description}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-base-300 bg-base-50">
        <div className="space-y-2">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-left p-3 rounded-lg hover:bg-base-200 transition-colors flex items-center gap-3 text-base-content group"
          >
            <div className="p-2 rounded-lg bg-info/20 group-hover:bg-info/30 transition-colors">
              <Globe className="w-4 h-4 text-info" />
            </div>
            <span className="font-medium text-sm">Visit BobbyWear.com</span>
          </a>

          <button
            onClick={onLogout}
            className="w-full text-left p-3 rounded-lg hover:bg-error/10 hover:text-error transition-colors flex items-center gap-3 text-base-content group"
          >
            <div className="p-2 rounded-lg bg-error/20 group-hover:bg-error/30 transition-colors">
              <LogOut className="w-4 h-4 text-error" />
            </div>
            <span className="font-medium text-sm">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
