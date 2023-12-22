import React from 'react'
// import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import Lottie from "lottie-react";
import LOGO from './assests/LOGO.png'
import hello from './assests/LOTTIE.json'
import './index.css';
const NavBar = () => {
  return (
    <div className=' fixed top-0 w-full shadow-lg z-10 rounded-lg'>
        <nav className="mx-auto flex max-w-7xl items-center justify-between lg:px-8" aria-label="Global">
        <img src={LOGO} alt="logo" className=' h-24'/>
        <Lottie className=' h-12 w-60' animationData={hello}></Lottie>
        <h1 className=' pr-4'>GTIME</h1>
        </nav>
    </div>
  )   
}

export default NavBar
