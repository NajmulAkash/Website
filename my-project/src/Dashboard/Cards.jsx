import React from "react";
import { FaHotel, FaEnvelope, FaSuitcase, FaCalendarAlt } from "react-icons/fa";

function AdminCards() {
  return (
    <div className="grid md:grid-cols-2 gap-6 p-6">

      {/* Recent Bookings */}
      <div className="bg-white shadow rounded-xl p-5">

        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-lg flex items-center gap-2">
            <FaCalendarAlt /> Recent Bookings
          </h2>

          <button className="text-blue-500 text-sm">
            View All
          </button>
        </div>

        <table className="w-full text-sm">

          <thead>
            <tr className="text-gray-500 text-left">
              <th>User</th>
              <th>Type</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            <tr className="border-t">
              <td>Ahmed Khan</td>
              <td>Luxury Tour</td>
              <td>2024-05-12</td>
              <td>
                <span className="bg-green-100 text-green-600 px-2 py-1 rounded">
                  Confirmed
                </span>
              </td>
            </tr>

            <tr className="border-t">
              <td>Sarah Ali</td>
              <td>Hotel Room</td>
              <td>2024-05-10</td>
              <td>
                <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded">
                  Pending
                </span>
              </td>
            </tr>

          </tbody>

        </table>

      </div>


      {/* New Hotels */}

      <div className="bg-white shadow rounded-xl p-5">

        <div className="flex justify-between mb-4">

          <h2 className="font-bold text-lg flex items-center gap-2">
            <FaHotel /> New Hotels
          </h2>

          <button className="text-blue-500 text-sm">
            View All
          </button>

        </div>

        <table className="w-full text-sm">

          <thead>
            <tr className="text-gray-500 text-left">
              <th>Hotel</th>
              <th>City</th>
              <th>Rooms</th>
            </tr>
          </thead>

          <tbody>

            <tr className="border-t">
              <td>Mountain Resort</td>
              <td>Skardu</td>
              <td>80</td>
            </tr>

            <tr className="border-t">
              <td>Hunza Hotel</td>
              <td>Hunza</td>
              <td>60</td>
            </tr>

          </tbody>

        </table>

      </div>


      {/* Pending Packages */}

      <div className="bg-white shadow rounded-xl p-5">

        <div className="flex justify-between mb-4">

          <h2 className="font-bold text-lg flex items-center gap-2">
            <FaSuitcase /> Pending Packages
          </h2>

          <button className="text-blue-500 text-sm">
            View All
          </button>

        </div>

        <table className="w-full text-sm">

          <thead>
            <tr className="text-gray-500 text-left">
              <th>User</th>
              <th>Destination</th>
              <th>Price</th>
            </tr>
          </thead>

          <tbody>

            <tr className="border-t">
              <td>Ali Raza</td>
              <td>Skardu</td>
              <td>$950</td>
            </tr>

            <tr className="border-t">
              <td>Hamza</td>
              <td>Hunza</td>
              <td>$1050</td>
            </tr>

          </tbody>

        </table>

      </div>



      {/* Contact Messages */}

      <div className="bg-white shadow rounded-xl p-5">

        <div className="flex justify-between mb-4">

          <h2 className="font-bold text-lg flex items-center gap-2">
            <FaEnvelope /> Contact Messages
          </h2>

          <button className="text-blue-500 text-sm">
            View All
          </button>

        </div>


        <table className="w-full text-sm">

          <thead>
            <tr className="text-gray-500 text-left">
              <th>User</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>


          <tbody>

            <tr className="border-t">
              <td>Abdullah</td>
              <td>abdullah@gmail.com</td>
              <td>

                <span className="bg-red-100 text-red-600 px-2 py-1 rounded">
                  Unread
                </span>

              </td>
            </tr>


            <tr className="border-t">
              <td>Emily</td>
              <td>emily@gmail.com</td>
              <td>

                <span className="bg-green-100 text-green-600 px-2 py-1 rounded">
                  Replied
                </span>

              </td>
            </tr>

          </tbody>

        </table>

      </div>


    </div>
  );
}

export default AdminCards;