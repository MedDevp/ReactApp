import React from "react";

const Button = ({propstitle})=>{

    return(
        <>
            <button className="bg-violet-700 font-semibold text-white px-6 py-3 rounded-lg hover:bg-violet-950 transition-all duration-300">{propstitle}</button>
        </>
    )
}
export default Button;