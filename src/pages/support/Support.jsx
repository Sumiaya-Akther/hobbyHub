import React from 'react';
import { Link } from 'react-router';

const Support = () => {
    return (
    <section className="py-12 rounded-2xl bg-gradient-to-br from-white to-cyan-100 dark:from-gray-900 dark:to-gray-800 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 text-gray-800 dark:text-white">
        
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-cyan-600 dark:text-cyan-300 mb-2">Need Help?</h1>
          <p className="text-lg">We’re here to support you in your hobby journey!</p>
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Support Option 1 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Frequently Asked Questions</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Find quick answers to common questions about groups, joining, and profiles.</p>
            <Link to="/faq" className="text-cyan-600 dark:text-cyan-400 hover:underline font-medium">
              Go to FAQ →
            </Link>
          </div>

          {/* Support Option 2 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Report a Problem</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Found a bug or having trouble? Let us know and we’ll fix it as soon as possible.</p>
            <Link to="/report" className="text-cyan-600 dark:text-cyan-400 hover:underline font-medium">
              Report Issue →
            </Link>
          </div>

          {/* Support Option 3 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Contact Support</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Can’t find what you’re looking for? Reach out to our team directly.</p>
            <Link to="/contact" className="text-cyan-600 dark:text-cyan-400 hover:underline font-medium">
              Contact Us →
            </Link>
          </div>
        </div>

        {/* Footer Help Text */}
        <div className="text-center mt-12">
          <p className="text-gray-700 dark:text-gray-400">
            Our support team is available 7 days a week from <span className="font-semibold text-cyan-600 dark:text-cyan-400">9:00 AM - 9:00 PM</span>
          </p>
        </div>
      </div>
    </section>
    );
};

export default Support;