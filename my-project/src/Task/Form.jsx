import { RiCloseCircleFill } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosAdd } from "react-icons/io";
import Btn from "./Btn";
function Form (){
    return(
        <>
      <div className="flex p-5 flex-row bg-gray-600">
        <div className="w-52 h-full outline-2 mr-2 bg-amber-50 rounded overflow-hidden">
            <div className="toolbar flex justify-between bg-amber-100 items-center">
            <Btn click={()=>addnote()} icon={<IoIosAdd />}></Btn>
            <div className="flex">
            <Btn click={()=>addnote()} icon={<IoSettingsOutline />}></Btn>
            <Btn click={()=>addnote()} icon={<RiCloseCircleFill />}></Btn>
            </div>
        </div>
            <h1 className="px-2">Sticky Notes</h1>
            <div className="flex justify-center items-center">
                <input type="text" placeholder="Search..." className="w-32 mb-1 mt-1 outline-gray-500 mx-2 text-center color-black bg-transparent outline-1 rounded-sm" />
                 <Btn click={()=>addnote()} icon={<IoIosSearch/>}></Btn>
            </div>
        </div>
        <div className="w-full outline-2">
            <h1>Notes View</h1>
        </div>
      </div>
        </>
    )
}
export default Form