import React from 'react';

const Review = () => {
    return (
<section className="py-1 dark:bg-gray-800 transition">
  <div className="my-20 px-4 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-cyan-700">🌟 What Users Say</h2>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
        <p className="text-gray-700 dark:text-gray-300">“HobbyHub helped me connect with a local painting group. Now we meet weekly!”</p>
        <h4 className="font-semibold text-cyan-600 mt-4">— Ayesha, Painter</h4>
      </div>
      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
        <p className="text-gray-700 dark:text-gray-300">“Great way to meet new people and share passions. I joined a hiking club!”</p>
        <h4 className="font-semibold text-cyan-600 mt-4">— Rafiq, Hiker</h4>
      </div>
      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
        <p className="text-gray-700 dark:text-gray-300">“Creating my own coding group was so easy. Love the community feel!”</p>
        <h4 className="font-semibold text-cyan-600 mt-4">— Sara, Developer</h4>
      </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
        <p className="text-gray-700 dark:text-gray-300">“Creating my own coding group was so easy. Love the community feel!”</p>
        <h4 className="font-semibold text-cyan-600 mt-4">— Sara, Developer</h4>
      </div>
    </div>
  </div>
</section>

    );
};

export default Review;