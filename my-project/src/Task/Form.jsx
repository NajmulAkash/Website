import { RiCloseCircleFill } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosAdd } from "react-icons/io";
import Btn from "./Btn";
function Form (){
    return(
        <>
      <div className="flex p-5 flex-row bg-gray-600">
        <div className="w-40 h-full outline-2 mr-2 bg-amber-50 rounded overflow-hidden ">
            <div className="toolbar flex justify-between bg-amber-100 items-center">
            <Btn click={()=>addnote()} icon={<IoIosAdd />}></Btn>
            <div className="flex">
            <Btn click={()=>addnote()} icon={<IoSettingsOutline />}></Btn>
            <Btn click={()=>addnote()} icon={<RiCloseCircleFill />}></Btn>
            </div>
        </div>
            <h1 className="px-2">Sticky Notes</h1>
            <div className="flex">
                <input type="text" placeholder="Search..." className="w-32 mt-1 ml-2 text-center mb-1 outline-amber-300" />
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