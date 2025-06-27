import React from "react";
import { Fade } from "react-awesome-reveal";

const ChooseUs = () => {

    const features = [
        {
            icon: "🎨",
            title: "Diverse Groups",
            desc: "Join groups of various hobbies from art to adventure.",
        },
        {
            icon: "🔒",
            title: "Safe & Private",
            desc: "Only authenticated users can create or join groups.",
        },
        {
            icon: "📅",
            title: "Stay Engaged",
            desc: "Meet new people, attend events, and keep your hobby alive.",
        },
    ];

    return (
        <section
            aria-labelledby="why-choose-us-heading"
            className="my-20 px-4 text-center mx-auto"
        >
            {/* Fade wrapper with cascade to animate children one by one */}
            <Fade triggerOnce cascade damping={0.2} direction="up" duration={900}>
                <h2
                    id="why-choose-us-heading"
                    className="text-3xl md:text-4xl font-bold mb-12 text-cyan-700"
                >
                    🌟 Why Choose HobbyHub?
                </h2>

                <p className="max-w-2xl mx-auto mb-10">
                    HobbyHub connects people with shared passions. Whether you're into painting or hiking, find your community here!
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map(({ icon, title, desc }) => (
                        <div
                            key={title}
                            className="p-8 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                        >
                            <h4 className="font-semibold text-xl mb-2">
                                {icon} {title}
                            </h4>
                            <p className="text-sm">{desc}</p>
                        </div>
                    ))}
                </div>
            </Fade>
        </section>
    );
};

export default ChooseUs;