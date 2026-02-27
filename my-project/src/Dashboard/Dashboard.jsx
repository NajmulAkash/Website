import React from "react";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Card from "./Card";
import Table from "./Table";

import {
FaUsers,
FaHotel,
FaCar,
FaMoneyBill
}
from "react-icons/fa";

function Dashboard(){

return(

<div className="flex">


<Sidebar/>


<div className="flex-1 bg-gray-100 min-h-screen">


<Navbar/>


<div className="p-6">


<div className="grid md:grid-cols-4 gap-5">


<Card
title="Total Users"
number="5420"
icon={<FaUsers/>}
color="bg-blue-200"
/>



<Card
title="Hotels"
number="120"
icon={<FaHotel/>}
color="bg-green-200"
/>



<Card
title="Cars"
number="75"
icon={<FaCar/>}
color="bg-purple-200"
/>



<Card
title="Revenue"
number="$52000"
icon={<FaMoneyBill/>}
color="bg-yellow-200"
/>


</div>



<div className="mt-10">

<Table/>

</div>



</div>


</div>


</div>

)

}

export default Dashboard