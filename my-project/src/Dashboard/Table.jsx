import React from "react";

function Table(){

return(

<div className="bg-white p-5 rounded-2xl shadow">


<h1 className="font-bold mb-5">

Recent Bookings

</h1>



<table className="w-full text-left">


<tr className="border-b">

<th className="p-2">

User

</th>

<th>

Type

</th>

<th>

Status

</th>

</tr>



<tr className="border-b">


<td className="p-2">

Ahmed

</td>


<td>

Hotel

</td>


<td className="text-green-600">

Confirmed

</td>


</tr>



<tr>


<td className="p-2">

Ali

</td>


<td>

Car

</td>


<td className="text-yellow-600">

Pending

</td>


</tr>


</table>


</div>

)

}

export default Table