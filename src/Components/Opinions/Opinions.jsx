import React from "react"
import User1 from "../../assets/User1.svg"
import User2 from "../../assets/User2.svg"
import User3 from "../../assets/User3.svg"

const Cards =[
    {
        image : User1 ,
        name : "Sarah Andrews",
        price : "$ 100K"
    },
    {
        image : User2 ,
        name : "Mathew Higgins",
        price : "$ 20K"
    },
    {
        image : User3 ,
        name : "Janice Dave",
        price : "$ 30K"
    },
    
]

const Opinions = ()=>{
    
    return(
        <>
            <div className="w-4/5 mx-auto my-12">
                <div className="grid grid-cols-1 space-y-5 md:space-y-0 md:grid-cols-3 md:space-x-4">
                    {Cards.map((value,index) =>{
                        return <div key={index} className="card border-2 shadow-xl rounded-xl p-8 space-y-6">
                                    <div className="flex space-x-4">
                                        <img src={value.image} alt="Photo" className=""/>
                                        <div><h1 className="text-violet-700 font-semibold">{value.name}</h1><p>{value.price} in revenue</p></div>
                                    </div>
                                    <p className="text-sm leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, labore consequatur libero sequi delectus, cumque ab magni, commodi cupiditate culpa rem!</p>
                                    <button className="bg-white text-violet-700 font-bold px-6 py-4 rounded-lg border-2 border-gray-200 hover:bg-violet-700 hover:text-white transition-all duration-300">Start Free Trial</button>
                                </div>
                    })}
                </div>
            </div>  
        </>
    )
}
export default Opinions;