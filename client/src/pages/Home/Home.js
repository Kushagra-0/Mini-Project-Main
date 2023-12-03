import React from 'react'
import './Home.css'
import Nav from '../../components/Nav/Nav'
import { Link } from 'react-router-dom'
import img1 from "../../assets/hero.svg"
import img2 from "../../assets/about.svg";

export default function Home() {
  return (
    <>
      {/* SECTION 1 */}
      <Nav />
      <div className=" min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10">
      <div className=" md:w-2/4 text-center">
        <h2 className=" text-5xl font-semibold leading-tight">
          For Your Complete
          <span className="text-green-700"> Wellness</span>
        </h2>
        <p className=" text-lightText mt-5 text-start">
          Our platfrom is best suited to help
          you get started with meditation and focus
          improvement. In modern world people are loosing
          their ability to focus which in turn makes them dull. 
          We help our users to become a better verson of themselves.
        </p>

        <Link to="login" spy={true} smooth={true} duration={500}>
        <button type="button" class=" bg-white py-2 px-5 rounded-full mt-4 outline hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:bg-green-700 hover:text-white transition-all">
          Get Started
        </button> 
        </Link>
      </div>

      <div className=" w-full md:w-2/4">
        <img src={img1} alt="img" />
      </div>
      </div>

      {/* SECTION 2 */}
      <div className=" md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-5 md:mx-32 mx-5 mt-14">
      <div className=" w-full md:w-2/4">
        <img src={img2} alt="img" />
      </div>

      <div className="w-full md:w-2/4 text-center space-y-2">
        <div>
        <h3 className=" text-4xl font-semibold">
        Meditate With<span className="text-green-700"> Us</span>
        </h3>
        </div>
        <p className=" text-lightText">
          Take our guided meditation which allows you to set 
          your own parameters and allows you to use pomodero for
          incresed focus.
        </p>

        <Link to="meditation" spy={true} smooth={true} duration={500}>
          <button type="button" class=" bg-white py-2 px-5 rounded-full mt-4 outline hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:bg-green-700 hover:text-white transition-all">
            Meditation
          </button> 
        </Link>
        </div>
        </div>

        {/* SECTION 3*/}
    </>
  )
}