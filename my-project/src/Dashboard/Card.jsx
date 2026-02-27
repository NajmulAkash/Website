import React from "react";

function Card({title,number,icon,color}){

return(

<div className="bg-white p-5 rounded-2xl shadow flex justify-between items-center">


<div>

<p className="text-gray-500">

{title}

</p>


<h1 className="text-3xl font-bold">

{number}

</h1>


</div>


<div className={`p-4 rounded-xl text-2xl ${color}`}>

{icon}

</div>


</div>

)

}

export default Card