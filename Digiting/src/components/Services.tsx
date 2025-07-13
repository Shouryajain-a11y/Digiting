import React from 'react';
import { Target, BarChart3, Users, Zap, Shield, TrendingUp } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Target,
      title: "Advanced Media Buying",
      description: "Strategic ad placement across Facebook, Google, TikTok, and emerging platforms with AI-powered optimization.",
      features: ["Multi-platform campaigns", "Real-time bid optimization", "Creative testing at scale", "Audience segmentation"]
    },
    {
      icon: BarChart3,
      title: "Advanced Tracking & Attribution",
      description: "Server-side tracking, UTM management, and multi-touch attribution to capture every conversion accurately.",
      features: ["Server-side tracking", "Cross-device attribution", "Custom conversion events", "Privacy-compliant tracking"]
    },
    {
      icon: Users,
      title: "Deep User Analysis",
      description: "Comprehensive user behavior analysis, cohort studies, and predictive modeling for maximum LTV.",
      features: ["Behavioral analytics", "Cohort analysis", "Predictive modeling", "Customer journey mapping"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">
            Complete Performance Marketing Solutions
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            From strategy to execution, we handle every aspect of your performance marketing 
            to deliver measurable results and sustainable growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white border border-blue-100 rounded-2xl p-8 hover:shadow-lg hover:border-blue-200 transition-all">
              <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-4">{service.title}</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-blue-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center">
          <div className="grid md:grid-cols-3 gap-8 text-white">
            <div>
              <Zap className="h-12 w-12 mx-auto mb-4" />
              <h4 className="text-2xl font-bold mb-2 text-white">Lightning Fast</h4>
              <p className="opacity-90">Campaign setup and optimization in 24-48 hours</p>
            </div>
            <div>
              <Shield className="h-12 w-12 mx-auto mb-4" />
              <h4 className="text-2xl font-bold mb-2 text-white">Privacy First</h4>
              <p className="opacity-90">GDPR & iOS 14.5+ compliant tracking solutions</p>
            </div>
            <div>
              <TrendingUp className="h-12 w-12 mx-auto mb-4" />
              <h4 className="text-2xl font-bold mb-2 text-white">Proven Results</h4>
              <p className="opacity-90">Quality-focused approach with limited client base</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;