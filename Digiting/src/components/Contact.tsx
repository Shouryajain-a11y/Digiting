import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-50/30 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">
            Ready to Scale Your Business?
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Get a free performance audit and discover how we can help you achieve 
            breakthrough results with your digital marketing campaigns.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 relative z-10">
          <div>
            <h3 className="text-2xl font-bold text-blue-600 mb-8">Get Your Free Audit</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-blue-600 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-600 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-600 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Tell us about your project or questions..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center group"
              >
                Send Message
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          <div className="lg:pl-8">
            <h3 className="text-2xl font-bold text-blue-600 mb-8">Get in Touch</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-600">Email Us</h4>
                  <p className="text-gray-700">info@digiting.ink</p>
                  <p className="text-sm text-gray-600">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-600">Call Us</h4>
                  <p className="text-gray-700">+91 8178084417</p>
                  <p className="text-sm text-gray-600">Mon-Fri 10AM-7PM IST</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-600">Visit Us</h4>
                  <p className="text-gray-700">Shahdara<br />Delhi–32, India</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
              <h4 className="font-semibold text-blue-600 mb-3">What to Expect</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Quick response within 24 hours
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Personalized consultation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Tailored marketing solutions
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  No pressure, just honest advice
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;