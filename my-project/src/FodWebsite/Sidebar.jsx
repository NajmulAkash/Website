import {
FaHome,
FaBox,
FaHotel,
FaCar,
FaUsers,
FaCog
} from "react-icons/fa";

function Sidebar(){

return(

<div className="w-64 bg-blue-900 text-white min-h-screen">

<div className="p-6 text-xl font-bold">

Admin Panel

</div>


<ul className="space-y-2 p-4">

<li className="flex gap-3 p-3 hover:bg-blue-950 rounded">

<FaHome/>

Dashboard

</li>

<li className="flex gap-3 p-3 hover:bg-blue-950 rounded">

<FaBox/>

Packages

</li>


<li className="flex gap-3 p-3 hover:bg-blue-950 rounded">

<FaHotel/>

Hotels

</li>


<li className="flex gap-3 p-3 hover:bg-blue-950 rounded">

<FaCar/>

Cars

</li>


<li className="flex gap-3 p-3 hover:bg-blue-950 rounded">

<FaUsers/>

Users

</li>


<li className="flex gap-3 p-3 hover:bg-blue-950 rounded">

<FaCog/>

Settings

</li>


</ul>


</div>

)

}

export default Sidebar