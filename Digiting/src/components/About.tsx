import React from 'react';
import { Users, Target, Award, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">
            About Digiting
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            A performance marketing startup dedicated to helping brands grow through smart advertising
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-blue-600 mb-6">Our Story</h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Digiting is a performance marketing startup dedicated to helping brands grow through smart advertising. 
              We specialize in media buying, user analysis, and advanced tracking to deliver real results.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              As a young company, we currently serve a limited number of clients to maintain quality, focus, and performance. 
              This selective approach allows us to provide personalized attention and deliver exceptional results for each brand we work with.
            </p>
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-6">
              <h4 className="font-semibold text-blue-600 mb-3">Our Commitment</h4>
              <p className="text-gray-700">
                We believe in quality over quantity. By working with a select group of clients, 
                we ensure every campaign receives the attention and expertise it deserves.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white border border-blue-100 rounded-xl p-6 text-center hover:border-blue-200 transition-colors">
              <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-blue-600 mb-2">Limited Clients</h4>
              <p className="text-sm text-gray-700">Quality-focused approach</p>
            </div>

            <div className="bg-white border border-blue-100 rounded-xl p-6 text-center hover:border-blue-200 transition-colors">
              <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-blue-600 mb-2">Precision Focus</h4>
              <p className="text-sm text-gray-700">Data-driven strategies</p>
            </div>

            <div className="bg-white border border-blue-100 rounded-xl p-6 text-center hover:border-blue-200 transition-colors">
              <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-blue-600 mb-2">Real Results</h4>
              <p className="text-sm text-gray-700">Measurable performance</p>
            </div>

            <div className="bg-white border border-blue-100 rounded-xl p-6 text-center hover:border-blue-200 transition-colors">
              <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-blue-600 mb-2">Smart Growth</h4>
              <p className="text-sm text-gray-700">Strategic advertising</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4 text-white">Ready to Join Our Select Client Base?</h3>
          <p className="text-lg opacity-90 mb-6">
            We're currently accepting a limited number of new clients who are serious about growth
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Apply for Partnership
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;