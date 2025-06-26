import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      Swal.fire({
        icon: 'error',
        title: 'Missing Fields',
        text: 'Name, Email, and Message are required!',
      });
      return;
    }

    Swal.fire({
      icon: 'success',
      title: 'Message Sent!',
      text: 'Thanks for contacting us. We’ll get back to you soon.',
      timer: 2000,
      showConfirmButton: false,
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
  };

    return (
    <section className="min-h-screen bg-white rounded-2xl dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Contact Info */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-cyan-600 dark:text-cyan-400">
            Get in Touch
          </h1>
          <p className="text-gray-700 dark:text-gray-300">
            Fill in the form to start a conversation. We usually respond within 24 hours.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 112.5-2.5A2.5 2.5 0 0112 11.5z" />
              </svg>
              <span>9999 HobbyHub Lane, Dhaka</span>
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.09 15.09 0 006.59 6.59l2.2-2.2a1 1 0 011.05-.24l4.43.74a1 1 0 01.84.99V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c.08 1.22.32 2.39.72 3.5a1 1 0 01-.24 1.05l-2.36 2.24z" />
              </svg>
              <span>+880 1234 567 890</span>
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2 6a2 2 0 012-2h16a2 2 0 012 2v1.18l-10 5.55L2 7.18V6zm0 3.82v8.18a2 2 0 002 2h16a2 2 0 002-2V9.82l-10 5.55L2 9.82z" />
              </svg>
              <span>contact@hobbyhub.com</span>
            </li>
          </ul>
        </div>

        {/* Right: Form */}
        <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl">
          {/* Name */}
          <div>
            <label className="block mb-1 font-semibold">Your Name</label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-semibold">Email Address</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              required
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block mb-1 font-semibold">Subject</label>
            <input
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject of your message"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1 font-semibold">Your Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Write your message here..."
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition resize-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 px-6 rounded-lg font-semibold transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
    );
};

export default Contact;