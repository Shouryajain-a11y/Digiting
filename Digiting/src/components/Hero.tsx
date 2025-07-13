import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-blue-100/20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-blue-600 leading-tight mb-6">
              Smart Advertising for
              <span className="text-blue-700 block">Growing Brands</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Digiting specializes in performance marketing that delivers real results. Through strategic media buying, 
              advanced tracking, and deep user analysis, we help brands grow smarter, not harder.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center group">
                Get Free Audit
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-blue-300 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:border-blue-600 hover:bg-blue-50 transition-colors flex items-center justify-center">
                <Play className="mr-2 h-5 w-5" />
                Watch Case Study
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl border border-blue-100 p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-blue-600">Campaign Performance</span>
                  <span className="text-blue-700 text-sm font-semibold">+247% ROAS</span>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600">Ad Spend</span>
                    <span className="font-semibold text-blue-700">$50,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600">Revenue Generated</span>
                    <span className="font-semibold text-blue-700">$173,500</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600">Cost Per Acquisition</span>
                    <span className="font-semibold text-blue-700">$23.50</span>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-blue-600">Conversion Rate</span>
                    <span className="text-sm font-semibold text-blue-600">8.4%</span>
                  </div>
                  <div className="w-full bg-blue-200/50 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '84%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;