import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Hello, my name is Aditya Raghuvanshi. I was born and brought up in Indore, and I am an undergraduate student in Information Technology at IET DAVV. I completed my schooling at Mar Thome Higher Secondary School. In my first year, I embarked on my coding journey, developing a deep interest in web development and creating various projects. Additionally, I am passionate about solving data structures and algorithms, having practiced over 450+ problems on platforms like LeetCode and CodeChef. I am eager to join a team where I can apply my knowledge to work on impactful projects that reach a large audience.
        </p>

        <br />

        {/* <p className="text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
          pariatur, vel similique sint, nobis aspernatur ut praesentium
          explicabo ipsam aliquid quasi laboriosam et culpa possimus repudiandae
        </p> */}
      </div>
    </div>
  );
};

export default About;
