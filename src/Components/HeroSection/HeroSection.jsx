import React from "react";
import HeroImg from '../../assets/HeroImg.png';
import Button from "../Buttons/Button";
import './HeroSection.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faStar } from '@fortawesome/free-solid-svg-icons';


const HeroSection = ()=>{

    return(
        <>
            <div className="bg-stone-50 anim">
                <div className="w-4/5 mx-auto h-[100vh] flex flex-col-reverse  items-center justify-between md:flex-row ">
                    <div className="w-full md:w-3/5 py-7 ">
                        <div className="flex items-center space-x-2">
                            <FontAwesomeIcon icon={faStar}  className="text-orange-400"/>
                            <FontAwesomeIcon icon={faStar}  className="text-orange-400"/>
                            <FontAwesomeIcon icon={faStar}  className="text-orange-400"/>
                            <FontAwesomeIcon icon={faStar}  className="text-orange-400"/>
                            <FontAwesomeIcon icon={faStar}  className="text-orange-400"/>
                            <p className="pl-4">Rated 4.8/5 (243 reviews)</p>
                        </div>
                        <h1 className="font-bold text-[40px] leading-[45px] my-7">Create your portfolio in minutes.</h1>
                        <p>With Fiber, you can setup your own personal portfolio in minutes with dozens of premade, beautiful templates.</p>
                        <div className="my-8 flex items-center">
                            <Button propstitle="Start Free Trail"/>
                            <a href="#" className="text-violet-700 border-b-2 font-semibold border-violet-700 ml-10">View Examples</a>
                        </div>
                        <div className="flex flex-col space-y-5 md:flex-row md:space-x-12 md:space-y-0 md:items-center">
                            <div className="flex items-center">
                                <FontAwesomeIcon icon={faCheck} className="bg-teal-500 mr-2 rounded-full p-0.5 text-lg w-5 text-white"/>
                                <p>No credit Card Required</p>
                            </div>
                            <div className="flex items-center">
                                <FontAwesomeIcon icon={faCheck} className="bg-teal-500 mr-2 rounded-full p-0.5 text-lg w-5 text-white"/>
                                <p>10 Free Templates</p>
                            </div>
                        </div>
                    </div>
                    <div className=" w-full md:w-2/5 ">
                        <img src={HeroImg} alt="image" className="w-full"/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HeroSection;