import StatCards from "./Startcard"
import BookingTable from "./BookingTable"
import HotelTable from "./HotelTable"
import PackageTable from "./PackageTable"
import MessageTable from "./MessageTable"

function Dashboard(){

return(

<div className="space-y-6">

<StatCards/>


<div className="grid md:grid-cols-2 gap-6">

<BookingTable/>

<HotelTable/>

<PackageTable/>

<MessageTable/>

</div>


</div>

)

}

export default Dashboard