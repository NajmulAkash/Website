import React from "react"
const Btn = (prop) =>{
    return(
        <>
        <div>
        <button onClick={()=>prop.click()} className="hover:bg-amber-200 cursor-pointer w-6 h-6 flex justify-center items-center">
            {prop.icon}
        </button>
        </div>
        </>
    )
}
export default Btn