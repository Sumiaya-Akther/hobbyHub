import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Typewriter } from 'react-simple-typewriter'
import { Carousel } from 'react-responsive-carousel';
import bannerImg1 from "../../assets/banner8.jpg";
import bannerImg4 from "../../assets/banner7.jpg";
import bannerImg2 from "../../assets/banner-pic-2.jpeg";
import bannerImg6 from "../../assets/banner-6.jpg";
import { Link } from 'react-router';

const Banner = () => {
    return (
        <Carousel
            autoPlay={true}
            infiniteLoop={true}
            interval={3000}
            showThumbs={false}
            showStatus={false}
            stopOnHover={false}
        >
            {/* Slide 1 */}
            <div className='relative'>
                <img className='w-full h-[570px] object-cover rounded-2xl' src={bannerImg1} alt="Banner 1" />
                <div className='absolute rounded-2xl'></div>
                <div className='absolute bottom-40 md:bottom-50 left-1/2 transform -translate-x-1/2 text-center text-black px-4 space-y-4'>
                    <h1 className="text-4xl font-bold">
                        Welcome to HobbyHub
                        <br />
                        <span className="text-indigo-600">
                            <Typewriter
                                words={['Explore Groups', 'Join Communities', 'Find Your Passion']}
                                loop={true}
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </h1>
                    <p className='font-medium max-w-xl mx-auto'>
                        Hobbies are generally not done for profit, but for personal enjoyment and satisfaction.
                    </p>
                    <Link to="/groups">
                    <button className="btn bg-cyan-600 text-white rounded-2xl px-6 py-2">Explore Hobbies</button>
                    </Link>
                </div>
            </div>

            {/* Slide 2 */}
            <div className='relative'>
                <img className='w-full h-[570px] object-cover rounded-2xl' src={bannerImg6} alt="Banner 2" />
                <div className='absolute rounded-2xl'></div>
                <div className='absolute bottom-40 md:bottom-50 left-1/2 transform -translate-x-1/2 text-center text-black px-4 space-y-4'>
                 <h1 className="text-4xl font-bold">
                        Create Your Favourite Hobbies
                        <br />
                        <span className="text-indigo-600">
                            <Typewriter
                                words={['Explore Groups', 'Join Communities', 'Find Your Passion']}
                                loop={true}
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </h1>
                    <p className='font-medium max-w-xl mx-auto'>
                        Personal development: Hobbies can help develop skills, knowledge, and even confidence.
                    </p>
                    <Link to="/groups">
                    <button className="btn bg-cyan-600 text-white rounded-2xl px-6 py-2">Explore Hobbies</button>
                    </Link>
                </div>
            </div>

            {/* Slide 3 */}
            <div className='relative'>
                <img className='w-full h-[570px] object-cover rounded-2xl' src={bannerImg4} alt="Banner 3" />
                <div className='absolute  rounded-2xl'></div>
                <div className='absolute bottom-40 md:bottom-50  left-1/2 transform -translate-x-1/2 text-center text-black px-4 space-y-4'>
                     <h1 className="text-4xl font-bold">
                        Create Your Favourite Hobbies
                        <br />
                        <span className="text-indigo-600">
                            <Typewriter
                                words={['Explore Groups', 'Join Communities', 'Find Your Passion']}
                                loop={true}
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </h1>
                    <p className='font-medium max-w-xl mx-auto'>
                        Hobbies can provide a welcome break from daily routines <br /> and offer a way to relax and destress.
                    </p>
                   <Link to="/groups">
                    <button className="btn bg-purple-500 text-white rounded-2xl px-6 py-2">Explore Group</button>
                   </Link>
                </div>
            </div>

              {/* Slide 4 */}
            <div className='relative'>
                <img className='w-full h-[570px] object-cover rounded-2xl' src={bannerImg2} alt="Banner 3" />
                <div className='absolute  rounded-2xl'></div>
                <div className='absolute bottom-40 md:bottom-50 left-1/2 transform -translate-x-1/2 text-center text-black px-4 space-y-4'>
                     <h1 className="text-4xl font-bold">
                        Create Your Favourite Hobbies
                        <br />
                        <span className="text-indigo-600">
                            <Typewriter
                                words={['Explore Groups', 'Join Communities', 'Find Your Passion']}
                                loop={true}
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </h1>
                    <p className='font-medium max-w-xl mx-auto'>
                        Hobbies can provide a welcome break from daily routines <br /> and offer a way to relax and destress.
                    </p>
                    <Link to="/groups">
                    <button className="btn bg-purple-500 text-white rounded-2xl px-6 py-2">Explore Group</button>
                    </Link>
                </div>
            </div>
        </Carousel>
    );
};

export default Banner;