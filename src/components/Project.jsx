import React from 'react'
import { portfolios } from './Portfolio'
import { useParams } from 'react-router-dom'

const Project = () => {
  const {id} = useParams();
  //console.log(id);
  const obj = portfolios[id-1];
  //console.log(obj);
  return (
    <div className='flex flex-col mx-auto pt-4 bg-gradient-to-b from-black via-black to-gray-800 text-white'>
      <img className='w-[50%] mx-auto' src={obj.src} alt="logo" />
      <h1 className='mx-auto text-4xl font-bold mt-6'>{obj.title}</h1>
      <h1 className='px-20 text-4xl mt-6 font-bold'>Description :-</h1>
      <h2 className='mx-auto text-2xl mt-6 px-20'> {obj.description}</h2>
      <h1 className='px-20 text-4xl mt-6 font-bold'>Tech Stack :-</h1>
      <h2 className='mx-auto text-2xl mt-6 px-20'> {obj.tech}</h2>
      <h1 className='px-20 text-4xl mt-6 font-bold'>Project Code :-</h1>
      <a className='mx-auto text-2xl mt-6 px-20 mb-20' href={obj.sourceCode} target='_blank' rel="noreferrer"><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Click</button></a>
    </div>
  )
}

export default Project
