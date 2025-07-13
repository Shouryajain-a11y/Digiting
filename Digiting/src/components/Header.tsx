import React, { useState } from 'react';
import { Menu, X, TrendingUp } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-blue-600">Digiting</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-blue-600 hover:text-blue-700 transition-colors font-medium">Services</a>
            <a href="#process" className="text-blue-600 hover:text-blue-700 transition-colors font-medium">Process</a>
            <a href="#results" className="text-blue-600 hover:text-blue-700 transition-colors font-medium">Results</a>
            <a href="#about" className="text-blue-600 hover:text-blue-700 transition-colors font-medium">About</a>
            <a href="#contact" className="text-blue-600 hover:text-blue-700 transition-colors font-medium">Contact</a>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6 text-blue-600" /> : <Menu className="h-6 w-6 text-blue-600" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#services" className="text-blue-600 hover:text-blue-700 transition-colors font-medium">Services</a>
              <a href="#process" className="text-blue-600 hover:text-blue-700 transition-colors font-medium">Process</a>
              <a href="#results" className="text-blue-600 hover:text-blue-700 transition-colors font-medium">Results</a>
              <a href="#about" className="text-blue-600 hover:text-blue-700 transition-colors font-medium">About</a>
              <a href="#contact" className="text-blue-600 hover:text-blue-700 transition-colors font-medium">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;