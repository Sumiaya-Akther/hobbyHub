import React, { useState } from 'react';


const faqData = [
  {
    question: "How can I join a hobby group?",
    answer:
      "You can join a group by navigating to the 'Groups' page, selecting a group you're interested in, and clicking the 'Join' button.",
  },
  {
    question: "Can I create my own group?",
    answer:
      "Yes! Go to the 'Create Group' section from your dashboard, fill in the details, and your group will be listed after admin approval.",
  },
  {
    question: "Is HobbyHub free to use?",
    answer:
      "Absolutely. HobbyHub is completely free for all users to join and create groups, attend events, and connect with others.",
  },
  {
    question: "What happens after I report an issue?",
    answer:
      "Our support team will review your report within 24 hours and reach out to you via email if more details are needed.",
  },
  {
    question: "How do I change my profile picture or bio?",
    answer:
      "Go to your dashboard, click on 'Edit Profile', and there you can update your name, photo, and short bio.",
  },
];

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

    return (
    <section className="py-12 rounded-2xl bg-gradient-to-br from-white to-cyan-100 dark:from-gray-900 dark:to-gray-800 transition-all duration-300">
      <div className="max-w-4xl mx-auto px-6 text-gray-800 dark:text-white">
        <h2 className="text-4xl font-bold text-center mb-10 text-cyan-600 dark:text-cyan-300">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 transition"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-left p-5 font-semibold text-lg flex justify-between items-center"
              >
                {item.question}
                <span>{openIndex === index ? '-' : '+'}</span>
              </button>

              {openIndex === index && (
                <div className="p-5 pt-0 text-gray-700 dark:text-gray-300">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
    );
};

export default FaqPage;