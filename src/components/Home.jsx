import React from "react";
import HeroImage from "../assets/heroImage.png"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <div
      name="home"
      className="h-full w-full bg-gradient-to-b from-black via-black to-gray-800 pt-32 md:pt-36"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        <div className="flex flex-col justify-center h-full ">
          <h2 className="text-4xl md:text-9xl font-bold text-white md:mr-4 ">
                <TypeAnimation 
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "I'm a Frontend Developer",
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    "I'm a Software Developer",
                    1000,
                    "I'm a Learner",
                    1000,
                ]}
                wrapper="span"
                speed={40}
                style={{ fontSize: '3rem', display: 'inline-block' }}
                repeat={Infinity}
                /> 
            {/* I'm a Frontend Developer */}
          </h2>
          <p className="text-gray-500 py-4 max-w-md lg:mr-40">
            Hello my name is Aditya Raghuvanshi , I have 1 years of experience building and desgining software.
            Currently, I love to work on web application using technologies like
            React, Tailwind, ExpressJs, NodeJs.
          </p>

          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-6 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-full md:w-full h-96 mt-8"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
