import React, { useState } from 'react';
import Swal from 'sweetalert2';

const ReportIssuePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    issue: '',
    details: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.issue || !formData.details) {
      Swal.fire({
        icon: 'error',
        title: 'All fields are required!',
      });
      return;
    }

    Swal.fire({
      icon: 'success',
      title: 'Issue Reported',
      text: 'Thank you for reporting. We will look into it!',
      timer: 2000,
      showConfirmButton: false,
    });

    setFormData({ name: '', email: '', issue: '', details: '' });
  };

    return (
    <section className="py-12 rounded-2xl bg-gradient-to-br from-white to-cyan-100 dark:from-gray-900 dark:to-gray-800 transition-all duration-300">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-cyan-600 dark:text-cyan-300 mb-8 text-center">Report an Issue</h2>

        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl space-y-6">
          {/* Name */}
          <div>
            <label className="block mb-1 font-medium text-gray-800 dark:text-gray-200">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white 
                         placeholder-gray-400 dark:placeholder-gray-500 
                         focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium text-gray-800 dark:text-gray-200">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white 
                         placeholder-gray-400 dark:placeholder-gray-500 
                         focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              required
            />
          </div>

          {/* Issue Type */}
          <div>
            <label className="block mb-1 font-medium text-gray-800 dark:text-gray-200">Issue Type</label>
            <select
              name="issue"
              value={formData.issue}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white 
                         focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              required
            >
              <option value="">Select issue</option>
              <option value="bug">Bug / Error</option>
              <option value="group">Group Issue</option>
              <option value="login">Login Problem</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Details */}
          <div>
            <label className="block mb-1 font-medium text-gray-800 dark:text-gray-200">Issue Details</label>
            <textarea
              name="details"
              value={formData.details}
              onChange={handleChange}
              rows="5"
              placeholder="Describe your issue in detail..."
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white 
                         placeholder-gray-400 dark:placeholder-gray-500 
                         focus:outline-none focus:ring-2 focus:ring-cyan-400 transition resize-none"
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 px-6 rounded-lg font-semibold transition"
            >
              Submit Report
            </button>
          </div>
        </form>
      </div>
    </section>
    );
};

export default ReportIssuePage;