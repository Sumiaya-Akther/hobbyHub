import React from 'react';

const About = () => {
    return (
            <section className="min-h-screen rounded-2xl bg-gradient-to-b from-white to-cyan-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-600 dark:text-cyan-300 mb-6">
          About HobbyHub
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10">
          HobbyHub is a vibrant platform where passion meets people.
          Our mission is to connect individuals through shared hobbies—whether it's painting, hiking, cooking, coding, or anything in between. 
          With HobbyHub, you can discover local groups, join exciting activities, or create your own circle to bring others together.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {/* Mission */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-cyan-500 mb-2">🎯 Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-300">
              To inspire connections through hobbies and interests, helping people build meaningful communities offline and online.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-cyan-500 mb-2">👁️ Our Vision</h3>
            <p className="text-gray-600 dark:text-gray-300">
              A world where everyone feels a sense of belonging—sparked by the joy of shared activities and creativity.
            </p>
          </div>

          {/* Values */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-cyan-500 mb-2">💡 Core Values</h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
              <li>Inclusivity</li>
              <li>Creativity</li>
              <li>Community-Driven</li>
              <li>Passion & Fun</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-gray-600 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} HobbyHub — Built with 💙 for hobby lovers worldwide.
        </div>
      </div>
    </section>
    );
};

export default About;