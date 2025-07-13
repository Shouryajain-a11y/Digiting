import React from 'react';
import { Search, Settings, Rocket, BarChart } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: Search,
      title: "Deep Dive Analysis",
      description: "We audit your current setup, analyze competitors, and identify growth opportunities.",
      duration: "Week 1"
    },
    {
      icon: Settings,
      title: "Strategy & Setup",
      description: "Custom tracking implementation, campaign architecture, and creative strategy development.",
      duration: "Week 2"
    },
    {
      icon: Rocket,
      title: "Launch & Optimize",
      description: "Campaign launch with real-time monitoring and continuous optimization based on data.",
      duration: "Week 3-4"
    },
    {
      icon: BarChart,
      title: "Scale & Report",
      description: "Scale winning campaigns and provide detailed performance reports with actionable insights.",
      duration: "Ongoing"
    }
  ];

  return (
    <section id="process" className="py-20 bg-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/20 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">
            Our Proven 4-Step Process
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            From initial analysis to scaling success, we follow a systematic approach 
            that delivers consistent results for our clients.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 relative z-10">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white border border-blue-100 rounded-2xl p-8 text-center hover:shadow-lg hover:border-blue-200 transition-all">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                  {step.duration}
                </div>
                <h3 className="text-xl font-bold text-blue-600 mb-4">{step.title}</h3>
                <p className="text-gray-700 leading-relaxed">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-blue-300"></div>
                  <div className="w-0 h-0 border-l-4 border-l-blue-300 border-t-2 border-t-transparent border-b-2 border-b-transparent absolute right-0 top-1/2 transform -translate-y-1/2"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;