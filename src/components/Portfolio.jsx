import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.png";
import installNode from "../assets/portfolio/SIH.png";
import navbar from "../assets/portfolio/youtubeAdvance.png";
import reactParallax from "../assets/portfolio/google drive.jpeg";
import reactSmooth from "../assets/portfolio/Netflix.png";
import reactWeather from "../assets/portfolio/CashSettlement.png";
import { Link } from "react-router-dom";

export const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      description:"A Website for the Customers for the easiness of their choices to select product according to their fashion In this Deep learning Model first customer have to upload the image of their product then our CNN model ( ResNet 50 ) will Process that image and will recommend the best matched similar products to the customer.",
      tech:"streamLit, Tensorflow, keras API, ResNet50 (CNN Model),Python, Dataset from Kaggle",
      title:"FASHION GENIE",
      sourceCode:"https://github.com/Hackvento-2k23/THE-SYNTAX-ERROR",
    },
    {
      id: 2,
      src: reactParallax,
      description:"In this project, users can upload their files and folders securely, and all these files and folders willbe stored in the IPFS network through Pinata, Before uploading user first have to login to their Matamask account and After uploading files they get an hash key through which they can access their data and also share it with others.",
      tech:"React.js , Hardhat , Ether.js , IPFS , Pinata , Metamask",
      title:"DECENTRALIZE GOOGLE DRIVE",
      sourceCode:"https://github.com/Aditya-Raghuvanshi/Decentralise-Google-Drive",
    },
    {
      id: 3,
      src: navbar, //youtube
      description:"In this Advance version of youtube , I have implemented some great features, in this i have build Optimised searching in which i have used debouncing concept to minimise the number of api calls between any two key strokes , i have also implemented nested comment feature in it , thier is also live chat feature where users can do live chat and all the data is managed by the help of redux ",
      tech:"Tailwind CSS , React.js , Redux toolkit , youtube api",
      title:"YOUTUBE ADVANCE",
      sourceCode:"https://github.com/Aditya-Raghuvanshi/Youtube-Advance",
    },
    {
      id: 4,
      src: reactSmooth, //netflix
      description:"",
      tech:"",
      title:"NETFLIX-GPT",
      sourceCode:"https://github.com/Aditya-Raghuvanshi/Netflix-GPT",
    },
    {
      id: 5,
      src: installNode,//sih
      description:"We have created a web application where the executive will upload the recorded call and  the call recording will directly go to the ai model which we have made this is a whisper -ai ->this model which transfers the audio in text then which the use of open-ai we will send a conversation as a prompt and ask for the sentimental analysic this will give the overall output of the conversation between the customer and executive as it will give the overall sentimental analysis of the conversation in this further we will also provide the chatbot and dasboard to the executive side from where he can ask the open ai further questions like 1. is the customer is satisfy 2. what are the potential issue customer facing and lot more .....now this above information is my overall idea to solve the problem  -> to get the sentimental analysis of the customer when he calls the helpdesk",
      tech:"stream lit , React.js , Node.js , PyTorch , Python , Pandas , Twilio , Whisper",
      title:"SMART INDIA HACKATHON PROJECT",
      sourceCode:"https://github.com/Hackvento-2k23/THE-SYNTAX-ERROR",
    },
    {
      id: 6,
      src: reactWeather,//split
      description:"this app minimizes the overall number of transactions between the different peoples. I have built an algorithm using heap data structure and the algorithm works in O(n logn) time complexity. Vis.Js library is used for creating different problems.",
      tech:"HTML ,CSS ,JavaScript ,Vis.Js",
      title:"Splitwise CashFlow Minimisation app",
      sourceCode:"https://github.com/Aditya-Raghuvanshi/SplitWise-cashFlow-minimisation",
    },
  ];

const Portfolio = () => {
  return (
    <div
      name="projects"  
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white h-full pt-20 md:pt-24"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            
                {portfolios.map(({ id, src , title }) => (
                    <Link key={id} to={"/project/"+id} >
                <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                    <img
                        src={src}
                        alt=""
                        className="rounded-md duration-200 hover:scale-105"
                    />
                    <div className="flex-col">
                        <div className="flex items-center justify-center">
                            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                            Demo
                            </button>
                            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                            Code
                            </button>
                        </div>
                        <div className="title ">
                            <p className="text-white font-bold text-center px-8">{title}</p>
                        </div>
                    </div>
                
                </div>
                </Link>
            ))}
            
          
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
