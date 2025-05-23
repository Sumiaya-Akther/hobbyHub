import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import bannerImg1 from "../../assets/banner-pic-1.jpeg";
import bannerImg3 from "../../assets/banner-pic-3.jpeg";
import bannerImg4 from "../../assets/banner-pic-4.jpeg";

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
                <div className='absolute bottom-50 left-1/2 transform -translate-x-1/2 text-center text-black px-4 space-y-4'>
                    <h1 className='text-4xl md:text-5xl font-bold'>Create Your Favourite Hobbies</h1>
                    <p className='font-medium max-w-xl mx-auto'>
                        Hobbies are generally not done for profit, but for personal enjoyment and satisfaction.
                    </p>
                    <button className="btn bg-cyan-600 text-white rounded-2xl px-6 py-2">Create Hobbies</button>
                </div>
            </div>

            {/* Slide 2 */}
            <div className='relative'>
                <img className='w-full h-[570px] object-cover rounded-2xl' src={bannerImg3} alt="Banner 2" />
                <div className='absolute rounded-2xl'></div>
                <div className='absolute bottom-50 left-1/2 transform -translate-x-1/2 text-center text-black px-4 space-y-4'>
                    <h1 className='text-4xl md:text-5xl font-bold'>Create Your Favourite Hobbies</h1>
                    <p className='font-medium max-w-xl mx-auto'>
                        Personal development: Hobbies can help develop skills, knowledge, and even confidence.
                    </p>
                    <button className="btn bg-cyan-600 text-white rounded-2xl px-6 py-2">Create Hobbies</button>
                </div>
            </div>

            {/* Slide 3 */}
            <div className='relative'>
                <img className='w-full h-[570px] object-cover rounded-2xl' src={bannerImg4} alt="Banner 3" />
                <div className='absolute  rounded-2xl'></div>
                <div className='absolute bottom-50 left-1/2 transform -translate-x-1/2 text-center text-black px-4 space-y-4'>
                    <h1 className='text-4xl md:text-5xl font-bold'>Create Your Favourite Hobbies</h1>
                    <p className='font-medium max-w-xl mx-auto'>
                        Hobbies can provide a welcome break from daily routines <br /> and offer a way to relax and destress.
                    </p>
                    <button className="btn bg-purple-500 text-white rounded-2xl px-6 py-2">Create Group</button>
                </div>
            </div>
        </Carousel>
    );
};

export default Banner;