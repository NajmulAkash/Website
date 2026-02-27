import React from "react";
import { FaBell } from "react-icons/fa";

function Navbar(){

return(

<div className="bg-white shadow-sm p-4 flex justify-between items-center">


<h1 className="text-xl font-bold">

Admin Dashboard

</h1>



<div className="flex gap-5 items-center">


<input

placeholder="Search..."

className="border rounded-lg p-2"

/>



<FaBell className="text-2xl"/>



</div>


</div>

)

}

export default Navbar