function MessageTable(){

return(

<div className="bg-white p-5 shadow rounded">

<h2 className="font-bold mb-4">

Messages

</h2>


<table className="w-full">

<tr>

<th>User</th>

<th>Email</th>

<th>Status</th>

</tr>


<tr>

<td>Najmul Akash</td>

<td>najmulbalghar@gmail.com</td>

<td className="text-red-500 bg-orange-400">

Unread

</td>

</tr>


<tr>

<td>Yaseen</td>

<td>Yaseenmalik22@gmail.com</td>

<td className="text-green-500">

Read

</td>

</tr>


</table>

</div>

)

}

export default MessageTable