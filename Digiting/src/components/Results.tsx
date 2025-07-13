import React from 'react';
import { TrendingUp, DollarSign, Users, Target } from 'lucide-react';

const Results = () => {
  const stats = [
    { icon: DollarSign, value: "$50M+", label: "Revenue Generated" },
    { icon: TrendingUp, value: "347%", label: "Average ROAS" },
    { icon: Users, value: "500K+", label: "Users Acquired" },
    { icon: Target, value: "89%", label: "Client Retention" }
  ];

  const caseStudies = [
    {
      company: "E-commerce Fashion Brand",
      challenge: "High CAC and low ROAS on Facebook Ads",
      solution: "Implemented server-side tracking, optimized audiences, and creative testing",
      results: [
        "247% increase in ROAS",
        "43% reduction in CAC",
        "$2.1M additional revenue in 6 months"
      ]
    },
    {
      company: "SaaS Startup",
      challenge: "Difficulty tracking conversions across multiple touchpoints",
      solution: "Custom attribution model and cross-platform campaign optimization",
      results: [
        "156% improvement in conversion tracking",
        "89% increase in qualified leads",
        "$850K ARR growth in Q1"
      ]
    },
    {
      company: "Health & Wellness Brand",
      challenge: "iOS 14.5 update destroyed campaign performance",
      solution: "Privacy-compliant tracking setup and audience rebuilding strategy",
      results: [
        "Recovered 95% of pre-iOS performance",
        "312% increase in email subscribers",
        "$1.8M revenue recovery"
      ]
    }
  ];

  return (
    <section id="results" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">
            Results That Speak for Themselves
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We've helped hundreds of businesses achieve breakthrough performance 
            with our data-driven approach to digital marketing.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-gray-700">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-blue-600 text-center mb-12">Client Success Stories</h3>
          
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white border border-blue-100 rounded-2xl p-8">
              <div className="grid lg:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-blue-600 mb-4">{study.company}</h4>
                  <div className="mb-4">
                    <h5 className="font-semibold text-blue-600 mb-2">Challenge:</h5>
                    <p className="text-gray-700">{study.challenge}</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-600 mb-2">Solution:</h5>
                    <p className="text-gray-700">{study.solution}</p>
                  </div>
                </div>
                
                <div className="lg:col-span-2">
                  <h5 className="font-semibold text-blue-600 mb-4">Results:</h5>
                  <div className="grid md:grid-cols-3 gap-4">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-blue-600 mb-2">
                          {result.split(' ')[0]}
                        </div>
                        <div className="text-sm text-gray-700">
                          {result.split(' ').slice(1).join(' ')}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;