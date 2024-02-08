import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock,faCode,faMobile } from '@fortawesome/free-solid-svg-icons';


const cards =[
    {
        title : "Build in minutes",
        paragraph : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates aliquam laboriosam laudantium.',
        iconC : faClock
    },
    {
        title : "Add custom CSS",
        paragraph : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates aliquam laboriosam laudantium.',
        iconC : faCode
    },
    {
        title : "Responsive",
        paragraph : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates aliquam laboriosam laudantium.',
        iconC : faMobile
    },
    
]

const Fiber = ()=>{
    return(
        <>
            <div className="my-16">
                <div className="w-4/5 mx-auto ">
                    <div>
                        <h3 className="text-violet-700 font-semibold">Why Fiber?</h3>
                        <h2 className="font-semibold text-[35px] leading-[45px] my-12 md:w-2/3">A good portfolio means good employability.</h2>
                    </div>
                    <div className="grid grid-cols-1 space-y-12 md:space-y-0 md:grid-cols-3 md:space-x-5 ">
                        {cards.map((value, index) => {
                            return <div key={index} className=" bg-white">
                                        <FontAwesomeIcon icon={value.iconC} className="text-violet-700 text-4xl"/>
                                        <h1 className="font-bold py-4">{value.title}</h1>
                                        <p className="text-sm leading-6">{value.paragraph}</p>
                                    </div>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Fiber;