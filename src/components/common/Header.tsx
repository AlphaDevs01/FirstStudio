import React, { useState } from 'react';
import { Menu, X, Home, Users, Mail, Cuboid as Cube, Puzzle } from 'lucide-react';
import { siteConfig } from '../../data/mockData';

interface HeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, onTabChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'equipe', label: 'Equipe', icon: Users },
    { id: 'contato', label: 'Contato', icon: Mail },
    { id: 'modelos', label: 'Modelos', icon: Cube },
    // { id: 'programacoes', label: 'programacoes', icon: Cube },
    { id: 'addons', label: 'Addons', icon: Puzzle }
  ];

  const handleTabClick = (tabId: string) => {
    onTabChange(tabId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-black shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-green-800 flex items-center space-x-3">
                <img 
                  src="/logo-First.png" 
                  alt={`${siteConfig.siteName} Logo`}
                  className="h-8 w-auto"
                />
                <span>{siteConfig.siteName}</span>
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                      activeTab === tab.id
                        ? 'bg-green-800 text-green-400 shadow-sm'
                        : 'text-gray-300 hover:text-green-300 hover:bg-green-700'
                    }`}
                  >
                    <IconComponent size={16} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="bg-black inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-green-300 hover:bg-green-700 transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-green-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-200 flex items-center space-x-3 ${
                    activeTab === tab.id
                      ? 'bg-green-800 text-green-400'
                      : 'text-gray-300 hover:text-green-300 hover:bg-green-700'
                  }`}
                >
                  <IconComponent size={20} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
