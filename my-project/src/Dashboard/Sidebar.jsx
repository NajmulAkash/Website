import React from "react";

import {
FaHome,
FaUsers,
FaHotel,
FaCar,
FaCog
}
from "react-icons/fa";

function Sidebar(){

return(

<div className="w-64 h-screen bg-slate-900 text-white p-6">

<h1 className="text-2xl font-bold mb-10">

Admin Panel

</h1>


<ul className="space-y-3">


<li className="flex gap-3 p-3 rounded-lg hover:bg-slate-700 cursor-pointer">

<FaHome/>

Dashboard

</li>



<li className="flex gap-3 p-3 rounded-lg hover:bg-slate-700 cursor-pointer">

<FaUsers/>

Users

</li>


<li className="flex gap-3 p-3 rounded-lg hover:bg-slate-700 cursor-pointer">

<FaHotel/>

Hotels

</li>


<li className="flex gap-3 p-3 rounded-lg hover:bg-slate-700 cursor-pointer">

<FaCar/>

Cars

</li>


<li className="flex gap-3 p-3 rounded-lg hover:bg-slate-700 cursor-pointer">

<FaCog/>

Settings

</li>


</ul>

</div>

)

}

export default Sidebar