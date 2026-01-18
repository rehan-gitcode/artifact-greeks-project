"use client"

import React, { useState } from 'react';
import { Clock, TrendingUp, Monitor, Calendar, Briefcase, Award, Users, BookOpen, GraduationCap, Star } from 'lucide-react';

const EntrollmentPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    qualification: '',
    mode: 'Online',
    batch: 'January 15, 2025',
    city: '',
    queries: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Enrollment */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Side - Course Details */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Enroll in Full Stack Development Bootcamp
            </h1>
            <p className="text-gray-600 mb-6">
              Secure your seat and fast-track your learning journey.
            </p>

            {/* Course Info Cards */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 rounded-lg p-4 flex items-center space-x-3">
                <Clock className="w-8 h-8 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-600">Duration</p>
                  <p className="font-semibold text-gray-800">6 Months</p>
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-4 flex items-center space-x-3">
                <TrendingUp className="w-8 h-8 text-purple-600" />
                <div>
                  <p className="text-sm text-gray-600">Level</p>
                  <p className="font-semibold text-gray-800">Beginner</p>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-4 flex items-center space-x-3">
                <Monitor className="w-8 h-8 text-green-600" />
                <div>
                  <p className="text-sm text-gray-600">Mode</p>
                  <p className="font-semibold text-gray-800">Online</p>
                </div>
              </div>

              <div className="bg-orange-50 rounded-lg p-4 flex items-center space-x-3">
                <Calendar className="w-8 h-8 text-orange-600" />
                <div>
                  <p className="text-sm text-gray-600">Batch Start</p>
                  <p className="font-semibold text-gray-800">Jan 20, 2026</p>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-green-50 rounded-lg p-6 mb-6">
              <div className="flex items-baseline space-x-2 mb-2">
                <span className="text-gray-500 line-through text-lg">$799</span>
                <span className="text-5xl font-bold text-gray-800">$499</span>
              </div>
              <p className="text-green-600 text-sm">Limited time offer - Enrollment closes soon!</p>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-colors">
                Proceed to Enrollment
              </button>
              <button className="flex-1 border-2 border-green-500 text-green-600 hover:bg-green-50 py-3 rounded-lg font-semibold transition-colors">
                Talk to Advisor
              </button>
            </div>
          </div>

          {/* Right Side - Enrollment Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Complete Your Enrollment
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@gmail.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="+91********"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Education / Qualification
                </label>
                <select
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none bg-white"
                >
                  <option value="">Select your qualification</option>
                  <option value="high-school">High School</option>
                  <option value="bachelors">Bachelor's Degree</option>
                  <option value="masters">Master's Degree</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Mode
                </label>
                <select
                  name="mode"
                  value={formData.mode}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none bg-white"
                >
                  <option value="Online">Online</option>
                  <option value="Offline">Offline</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Batch
                </label>
                <select
                  name="batch"
                  value={formData.batch}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none bg-white"
                >
                  <option value="January 25, 2026">January 25, 2026</option>
                  <option value="February 15, 2026">February 15, 2026</option>
                  <option value="March 1, 2026">March 1, 2026</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter your city"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Any Queries?
                </label>
                <textarea
                  name="queries"
                  value={formData.queries}
                  onChange={handleChange}
                  placeholder="Let us know if you have any questions..."
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none resize-none"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                Confirm Enrollment
              </button>
            </div>
          </div>
        </div>
      </div>

   
    </div>
  );
};

export default EntrollmentPage;