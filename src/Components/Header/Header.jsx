import React,{useState} from "react";
import Button from "../Buttons/Button.jsx"
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faTimes } from '@fortawesome/free-solid-svg-icons';

const navList =[
    {
        link : "Community",
        url : '#'
    },
    {
        link : "Pricing",
        url : '#'
    },
    {
        link : "Features",
        url : '#'
    },
]

const Header = ()=>{

    const [isNavVisible, setNavVisibility] = useState(false);

    const toggleNavVisibility = () => {
        setNavVisibility(!isNavVisible);
    };
      
    return(
        <>
  <header className="w-4/5 mx-auto flex items-center justify-between my-3">
    <div className="font-bold text-3xl">Fiber</div>

    {/* Mobile Menu */}
    <div className={`md:hidden ${isNavVisible ? 'block' : 'hidden'} fixed inset-0 bg-black opacity-30 z-50`} onClick={toggleNavVisibility}></div>
    <div className={`md:hidden ${isNavVisible ? 'translate-x-0' : 'translate-x-full'} transform bg-white fixed inset-y-0 right-0 pr-32 pl-12 py-4 z-50 transition-transform duration-300 ease-in-out`}>
      <ul className="text-left flex flex-col mt-12">
        {navList.map((value, index) => (
          <li key={index} className="py-3">
            <a href={value.url} className=" ">{value.link}</a>
          </li>
        ))}
      </ul>
    </div>

    {/* Desktop Menu */}
    <div className="hidden md:flex items-center space-x-6">
      {navList.map((value, index) => (
        <a key={index} href={value.url} className="hover:text-gray-700">{value.link}</a>
      ))}
    </div>
    <div className="hidden md:block">
      <a href="#" className="mr-7 font-bold">Login</a>
      <Button propstitle="Sign Up" />
    </div>

    {/* Mobile Menu Toggle Button */}
    <div className="md:hidden cursor-pointer" onClick={toggleNavVisibility}>
      <FontAwesomeIcon icon={isNavVisible ? faTimes : faBars} className="relative z-50"/>
    </div>
  </header>
</>

    )
}
export default Header;