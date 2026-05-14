import { RiCloseCircleFill } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosAdd } from "react-icons/io";
function Form (){
    return(
        <>
      <div className="flex p-5 flex-row bg-gray-600">
        <div className="w-32 h-full outline-2 mr-2 bg-amber-50">
            <div className="toolbar flex justify-between">
            <button className="hover:bg-amber-100 cursor-pointer w-6 h-6 flex justify-center items-center"><IoIosAdd /></button>
            <button className="hover:bg-amber-100 cursor-pointer w-6 h-6 flex justify-center items-center"><IoSettingsOutline /></button>
            <button className="hover:bg-amber-100 cursor-pointer w-6 h-6 flex justify-center items-center"><RiCloseCircleFill /></button>
        </div>
            <h1>Sticky Notes</h1>
        </div>
        <div className="w-full outline-2">
            <h1>Notes View</h1>
        </div>
      </div>
        </>
    )
}
export default Form