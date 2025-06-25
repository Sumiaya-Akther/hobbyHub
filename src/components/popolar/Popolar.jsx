import React from 'react';
import { Typewriter } from "react-simple-typewriter";
import { Slide } from "react-awesome-reveal";
import { Tooltip } from "react-tooltip";
import 'react-tooltip/dist/react-tooltip.css';;

const Popolar = () => {

  const categories = [
    { name: "Drawing", desc: "Express creativity with sketches and colors." },
    { name: "Gaming", desc: "Play and connect with gamers worldwide." },
    { name: "Cooking", desc: "Try new recipes and share your dishes." },
    { name: "Reading", desc: "Dive into books and share reviews." },
    { name: "Photography", desc: "Capture moments and improve skills." },
    { name: "Hiking", desc: "Explore nature and meet adventure lovers." },
  ];

    return (
          <div className="my-20 text-center max-w-4xl mx-auto px-4">
      {/* Typewriter title */}
      <h2 className="text-3xl md:text-4xl font-bold my-16 text-cyan-700 min-h-[3rem]">
        <Typewriter
          words={["🔥 Popular Hobby Categories"]}
          loop={1}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      </h2>

      {/* Categories with Slide animation and tooltip */}
      <div className="flex flex-wrap justify-center gap-4">
        <Slide cascade direction="up" triggerOnce damping={0.3} duration={600}>
          {categories.map(({ name, desc }, i) => (
            <span
              key={i}
              className="px-5 py-2 bg-purple-100 text-purple-700
               rounded-full shadow cursor-pointer hover:bg-purple-200 transition"
              data-tooltip-id={`tooltip-${i}`}
              data-tooltip-content={desc}
            >
              {name}
              <Tooltip id={`tooltip-${i}`} place="top" />
            </span>
          ))}
        </Slide>
      </div>
    </div>
    );
};

export default Popolar;