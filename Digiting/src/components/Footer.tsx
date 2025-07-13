import React from 'react';
import { TrendingUp, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <TrendingUp className="h-8 w-8 text-white" />
              <span className="text-2xl font-bold text-white">Digiting</span>
            </div>
            <p className="text-blue-100 mb-6 max-w-md">
              A performance marketing startup dedicated to helping brands grow through smart advertising. 
              We specialize in media buying, user analysis, and advanced tracking.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-800 p-3 rounded-lg hover:bg-blue-700 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-blue-800 p-3 rounded-lg hover:bg-blue-700 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-blue-800 p-3 rounded-lg hover:bg-blue-700 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-blue-800 p-3 rounded-lg hover:bg-blue-700 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
            <ul className="space-y-3 text-blue-100">
              <li><a href="#" className="hover:text-white transition-colors">Media Buying</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Advanced Tracking</a></li>
              <li><a href="#" className="hover:text-white transition-colors">User Analysis</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Campaign Optimization</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Creative Testing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Company</h4>
            <ul className="space-y-3 text-blue-100">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-200 text-sm">
            © 2024 Digiting. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;