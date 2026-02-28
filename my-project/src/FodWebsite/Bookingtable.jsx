function BookingTable(){

return(

<div className="bg-white p-5 shadow rounded">

<h2 className="font-bold mb-4">

Recent Booking

</h2>


<table className="w-full">

<tr className="text-left">

<th>User</th>

<th>Date</th>

<th>Status</th>

</tr>


<tr>

<td>Ahmed</td>

<td>12-05-2024</td>

<td className="text-green-500">

Confirm

</td>

</tr>


<tr>

<td>Ali</td>

<td>10-05-2024</td>

<td className="text-yellow-500">

Pending

</td>

</tr>


</table>

</div>

)

}

export default BookingTable