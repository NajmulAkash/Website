import {
FaUsers,
FaHotel,
FaCar,
FaDollarSign
} from "react-icons/fa";

function StatCards(){

return(

<div className="grid md:grid-cols-4 gap-6">


<div className="bg-blue-200 shadow p-5 rounded">

<FaUsers size={30} className="text-blue-500"/>

<h2 className="text-xl font-bold">

5420

</h2>

Users

</div>



<div className="bg-orange-200 shadow p-5 rounded">

<FaHotel size={30} className="text-orange-500"/>

<h2 className="text-xl font-bold">

120

</h2>

Hotels

</div>



<div className="bg-green-200 shadow p-5 rounded">

<FaCar size={30} className="text-green-500"/>

<h2 className="text-xl font-bold">

75

</h2>

Cars

</div>


<div className="bg-pink-200 shadow p-5 rounded">

<FaDollarSign size={30} className="text-pink-500"/>

<h2 className="text-xl font-bold">

$52000

</h2>

Revenue

</div>



</div>

)

}

export default StatCards