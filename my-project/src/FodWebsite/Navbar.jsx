import { FaBell } from "react-icons/fa";

function Navbar(){

return(

<div className="bg-gray-200 shadow p-4 flex justify-between">

<h1 className="font-bold text-xl">

Admin Dashboard

</h1>


<div className="flex gap-4">

<input

placeholder="Search..."

className="border px-3 py-1 rounded"

/>


<FaBell size={22}/>

</div>

</div>

)

}

export default Navbar