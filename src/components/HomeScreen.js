import React from 'react'
import body from '../assests/body-removebg.png'
import { motion } from "framer-motion"
import '../App.css'
import quo from '../assests/quote.png'
import './body'
import Lottie from 'lottie-react'
import aa from '../assests/swipew.json'
const HomeScreen = () => {
    
  return (
    <div className='flex items-center justify-center text-center h-screen'>
      <div className=' p-3'>
       <h1 
       className=' hidden md:inline font-sans text-4xl font-bold text-red-500'>GTIME Fitness Center</h1>
       <img className='imag' src={quo} alt='hh' />
       <h2 className=' hidden md:block text-lg text-gray-100 my-4'> A Guy who likes to walk will walk Further&#x1F525;
       <br /> than the guy who likes the Destination.</h2>
      <p className=' hidden md:block text-sm italic text-gray-100'>- Sam Sulek </p>
      <motion.button  className='mt-5 px-4 py-2 bg-red-500 text-white rounded-md'>
          <a href='#Body'>Explore Exercises</a>
          
        </motion.button><Lottie className=' h-28' animationData={aa}></Lottie>      </div>
      <div className='imageBlock'><img className=' mt-48 h-screen overflow-y-hidden' src={body} alt='h' /></div>
    </div>
  )
}

export default HomeScreen

