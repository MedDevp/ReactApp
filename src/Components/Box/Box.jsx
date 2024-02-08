import React from "react"
import BoxImg from '../../assets/BoxImg.png';


const Box = ()=>{
    return(
        <>
            <div className="my-32">
                <div className="w-4/5 mx-auto bg-violet-700 text-white flex flex-col md:flex-row md:items-center justify-between p-8 rounded-lg">
                    <div>
                        <h1 className="font-bold text-4xl">Diversify your portfolio.</h1>
                        <p className="my-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, voluptatum perferendis sequi fugiat alias distinctio dicta dolor modi.</p>
                        <button className="bg-white text-violet-700 font-bold px-6 py-4 rounded-lg">Start Free Trial</button>
                    </div>
                    <div className="w-[95%] mt-6">
                        <img src={BoxImg} alt="" className="w-full"/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Box;